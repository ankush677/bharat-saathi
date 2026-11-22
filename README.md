# BharatSaathi AI (MVP)

Multilingual (English/Hindi) personal finance assistant for Bharat. No build step.

## Run
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Onboarding Flow
BharatSaathi AI features a mobile-first, multi-step onboarding experience inspired by Indian fintech apps (Google Pay, PhonePe):
1. **Welcome Screen**: Brand emblem, bilingual taglines, privacy highlights, and quick demo option.
2. **Your Name**: Name capture with real-time greeting preview ("Namaste, [Name]!") and validation.
3. **Language Selection**: Large cards for English and हिंदी (Hindi). Selecting a language instantly converts all subsequent labels, questions, and helper messages.
4. **Work & Income Type**: Selection for occupation (8 categories) and income pattern (Fixed, Irregular, Mixed).
5. **Income Range**: Non-intrusive, optional income estimation bands in INR.
6. **Completion Screen**: Celebratory success animation, personalized summary review, and direct launch into the customized home dashboard.

## User Data Structure
Stored locally in browser `localStorage`:
```json
{
  "name": "Rahul",
  "preferredLanguage": "hi",
  "occupation": "daily_wage_worker",
  "incomeType": "irregular",
  "incomeRange": "10000_20000",
  "onboardingCompleted": true
}
```

## Testing
Run the automated test suite verifying all 6 user journeys:
```bash
node test_onboarding.js
```

## AI Money Detective
Paste a bank/UPI SMS (Detective tab, dashboard card, Transactions chip, or Assistant) and get a plain-language English/Hindi explanation.
- **Flow:** paste → analyze → review (category chips, Edit Details) → *Does this look correct?* → Confirm and Save → spending impact + follow-up chat (text and voice).
- **Handles:** UPI debit/credit, ATM withdrawal, salary, refund (linked to a matching earlier payment when found), failed (never saved), OTP/promo/link messages (never saved), ambiguous or missing-amount messages (asks, never guesses).
- **Storage:** confirmed items go into the existing `S.tx` list in `localStorage`. Only amount, date, merchant, category, reference and last 4 account digits are kept, never the raw SMS.
- **Duplicates:** same reference or same amount/date/type/merchant is blocked; same amount and date is warned.
- **Voice:** "Ye transaction samjhao", "Why was ₹450 deducted?", "Mere paise kahan gaye?" work in the Assistant and in the Detective follow-up mic.
- **Demo mode:** parsing and wording run on-device with rules. No live AI service is called.
- **Tests:** `node test_detective.js`

## Files
- `index.html` - Page shell with Inter and Noto Sans Devanagari typography
- `styles.css` - Design tokens, spacing scale, floating glass shell, sidebar/topbar, one card system, charts, responsive layouts (sidebar → icon rail → bottom nav), motion with reduced-motion support
- `app.js` - Extensible centralized i18n system, draft state persistence, multi-step onboarding flow, SMS parser, budget engine, voice synthesis, and dashboard integration
- `test_onboarding.js` - Automated test suite covering all 6 user journeys
- `test_detective.js` - Tests for the 7 Money Detective scenarios, duplicates, Hindi output, escaping

## Notes
- Data is stored in browser localStorage only; nothing is sent anywhere.
- The assistant is a demo engine: exact calculations in code, templated wording, not a live AI model.
- Voice input needs a browser with SpeechRecognition (Chrome/Edge); Hindi speech needs an installed Hindi voice.
