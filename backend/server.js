/**
 * BharatSaathi AI
 * Node.js + Express Backend
 * AI Provider: Groq
 */

const path = require('path');

// Load backend/.env regardless of the folder the server is started from
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const cors = require('cors');

const {
  getModel,
  generateAssistantResponse,
  analyzeDetectiveSMS
} = require('./services/openaiService');

const app = express();
const PORT = process.env.PORT || 3000;

// Check Groq API configuration safely
function isGroqConfigured() {
  const key = process.env.GROQ_API_KEY;

  return Boolean(
    key &&
    key.trim().length > 0 &&
    key !== 'your_groq_api_key_here'
  );
}

// Middleware
app.use(cors());

app.use(express.json({ limit: '100kb' }));

app.use(express.urlencoded({
  extended: true,
  limit: '100kb'
}));

// Basic in-memory rate limiter
const rateLimitMap = new Map();

function rateLimiter(req, res, next) {
  const ip = req.ip || req.socket.remoteAddress || 'unknown-client';

  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 40;

  let clientRecord = rateLimitMap.get(ip);

  if (
    !clientRecord ||
    now - clientRecord.startTime >= windowMs
  ) {
    clientRecord = {
      count: 1,
      startTime: now
    };

    rateLimitMap.set(ip, clientRecord);
  } else {
    clientRecord.count++;
  }

  if (clientRecord.count > maxRequests) {
    return res.status(429).json({
      ok: false,
      error: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many requests. Please wait a moment and try again.'
    });
  }

  // Clean old records
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now - value.startTime >= windowMs) {
        rateLimitMap.delete(key);
      }
    }
  }

  next();
}

app.use('/api/', rateLimiter);

// Serve frontend files (../frontend relative to backend/)
app.use(express.static(path.join(__dirname, '../frontend')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    status: 'online',
    provider: 'Groq',
    model: getModel(),
    aiConfigured: isGroqConfigured()
  });
});

// Shared Groq error handler
function handleGroqError(error, res, feature) {
  const status = error.status || error.statusCode;
  const code = String(error.code || error.type || '');

  // Log diagnostic information without exposing credentials
  console.error(`${feature} error:`, {
    status: status || null,
    code: code || null,
    message: error.message || 'Unknown error'
  });

  if (
    error.code === 'GROQ_API_KEY_MISSING' ||
    !isGroqConfigured()
  ) {
    return res.status(503).json({
      ok: false,
      error: 'GROQ_API_KEY_MISSING',
      message: 'Groq API key is missing. Please configure GROQ_API_KEY in your .env file.'
    });
  }

  if (status === 401) {
    return res.status(401).json({
      ok: false,
      error: 'AUTHENTICATION_FAILED',
      message: 'Your Groq API key is invalid or unauthorized.'
    });
  }

  if (status === 429) {
    const insufficientQuota =
      code.includes('insufficient_quota') ||
      code.includes('quota') ||
      error.message?.toLowerCase().includes('quota');

    return res.status(429).json({
      ok: false,
      error: insufficientQuota
        ? 'GROQ_QUOTA_EXCEEDED'
        : 'GROQ_RATE_LIMITED',
      message: insufficientQuota
        ? 'Groq usage quota exceeded. Please check your account limits.'
        : 'Groq rate limit reached. Please wait and try again.'
    });
  }

  if (
    status === 400 &&
    (
      code.includes('model') ||
      error.message?.toLowerCase().includes('model')
    )
  ) {
    return res.status(400).json({
      ok: false,
      error: 'GROQ_MODEL_ERROR',
      message: 'The configured Groq model may be unavailable. Check GROQ_MODEL.'
    });
  }

  return res.status(500).json({
    ok: false,
    error: 'AI_REQUEST_FAILED',
    message: 'Unable to get an AI response. Please try again.'
  });
}

// POST /api/assistant
// BharatSaathi AI Assistant
app.post('/api/assistant', async (req, res) => {
  try {
    const {
      message,
      user,
      financialContext,
      conversationHistory
    } = req.body || {};

    if (
      typeof message !== 'string' ||
      message.trim() === ''
    ) {
      return res.status(400).json({
        ok: false,
        error: 'INVALID_INPUT',
        message: 'Message cannot be empty.'
      });
    }

    if (!isGroqConfigured()) {
      return res.status(503).json({
        ok: false,
        error: 'GROQ_API_KEY_MISSING',
        message: 'Please configure GROQ_API_KEY in your .env file.'
      });
    }

    const { reply, model } = await generateAssistantResponse({
      message: message.trim(),
      user: user || {},
      financialContext: financialContext || {},
      conversationHistory: Array.isArray(conversationHistory)
        ? conversationHistory
        : []
    });

    return res.json({
      ok: true,
      provider: 'Groq',
      reply,
      model
    });

  } catch (error) {
    return handleGroqError(error, res, 'AI Assistant');
  }
});

// POST /api/detective
// AI Money Detective
app.post('/api/detective', async (req, res) => {
  try {
    const {
      text,
      language = 'en',
      user,
      existingTransactionsSummary
    } = req.body || {};

    if (
      typeof text !== 'string' ||
      text.trim() === ''
    ) {
      return res.status(400).json({
        ok: false,
        error: 'INVALID_INPUT',
        message: 'SMS text cannot be empty.'
      });
    }

    if (!isGroqConfigured()) {
      return res.status(503).json({
        ok: false,
        error: 'GROQ_API_KEY_MISSING',
        message: 'Please configure GROQ_API_KEY in your .env file.'
      });
    }

    const { result, model } = await analyzeDetectiveSMS({
      text: text.trim(),
      language: language === 'hi' ? 'hi' : 'en',
      user: user || {},
      existingTransactionsSummary:
        Array.isArray(existingTransactionsSummary)
          ? existingTransactionsSummary
          : []
    });

    return res.json({
      ok: true,
      provider: 'Groq',
      result,
      model
    });

  } catch (error) {
    return handleGroqError(error, res, 'AI Money Detective');
  }
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('====================================');
    console.log('BharatSaathi AI Backend Started');
    console.log('====================================');
    console.log(`Server: http://localhost:${PORT}`);
    console.log('Provider: Groq');
    console.log(`Model: ${getModel()}`);
    console.log(
      `Groq API Key: ${isGroqConfigured() ? 'Configured' : 'Missing'}`
    );
    console.log('====================================');
  });
}

module.exports = app;