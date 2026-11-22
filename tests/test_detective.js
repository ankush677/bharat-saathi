// Automated verification test suite for BharatSaathi AI onboarding flow
const fs = require('fs');
const assert = require('assert');

// Mock localStorage
const storage = {};
global.localStorage = {
  getItem: (k) => storage[k] || null,
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: (k) => { delete storage[k]; },
  clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};

// Mock DOM
const elementMap = {};
function createMockElement(id, tag = 'div') {
  const el = {
    id,
    tagName: tag.toUpperCase(),
    value: '',
    style: {},
    innerHTML: '',
    textContent: '',
    className: '',
    focus: () => { },
    setAttribute: () => { },
    remove: () => { },
    dataset: {}
  };
  elementMap[id] = el;
  return el;
}

global.document = {
  getElementById: (id) => elementMap[id] || createMockElement(id),
  documentElement: { lang: 'en' },
  body: {
    classList: {
      add: (c) => { },
      remove: (c) => { }
    },
    appendChild: () => { }
  },
  createElement: (tag) => createMockElement('dynamic_' + Math.random(), tag)
};
createMockElement('app');

global.window = {
  scrollTo: () => { },
  speechSynthesis: null,
  SpeechRecognition: null
};

// Load app.js
const vm = require('vm');
const appCode = fs.readFileSync('app.js', 'utf8');
vm.runInThisContext(appCode);


const A = assert; const reset = () => { localStorage.clear(); S = blank(); S.user = { name: 'T', preferredLanguage: 'en', onboardingCompleted: true }; S.lang = 'en'; ui.md = { text: '', res: null, edit: false, saved: null, chat: [], err: '' } };
let p;
reset(); p = dParse('Rs. 450 debited from your account through UPI at XYZ Store.');
A.strictEqual(p.kind, 'txn'); A.strictEqual(p.amount, 450); A.strictEqual(p.type, 'expense'); A.strictEqual(p.method, 'UPI'); A.strictEqual(p.merchant, 'XYZ Store'); A.strictEqual(S.tx.length, 0, 'no auto-save'); console.log('✓ T1 UPI debit');
p = dParse('Your account has been credited with Rs. 25000 towards salary.'); A.strictEqual(p.amount, 25000); A.strictEqual(p.type, 'income'); A.strictEqual(p.category, 'Salary'); console.log('✓ T2 salary');
p = dParse('Rs. 2000 withdrawn from ATM.'); A.strictEqual(p.sub, 'atm'); A.strictEqual(p.category, 'Cash'); A.notStrictEqual(p.category, 'Shopping'); A.strictEqual(p.amount, 2000); console.log('✓ T3 ATM');
p = dParse('Your UPI transaction of Rs. 500 has failed.'); A.strictEqual(p.kind, 'failed'); ui.md.res = p; dSave(); A.strictEqual(S.tx.length, 0, 'failed not saved'); console.log('✓ T4 failed');
reset(); S.tx.push({ id: 'o1', amount: 350, type: 'expense', category: 'Shopping', merchant: 'XYZ Store', date: '2026-11-10', ref: '', status: 'confirmed' });
p = dParse('Rs. 350 refunded to your account.'); A.strictEqual(p.sub, 'refund'); A.strictEqual(p.category, 'Refund'); A.notStrictEqual(p.category, 'Salary'); A.ok(dLink(p) && dLink(p).id === 'o1'); console.log('✓ T5 refund + link');
p = dParse('Your transaction was processed.'); A.ok(['unclear', 'noamount'].includes(p.kind)); A.ok(!p.amount); console.log('✓ T6 ambiguous');
reset(); S.lang = 'hi'; ui.md.text = 'Rs. 450 debited from A/c XX1234 on 21-Nov-2026 through UPI at XYZ Store. Ref: 123456789.'; dAnalyze(); A.strictEqual(ui.md.res.amount, 450);
let h = detect(); A.ok(h.includes('क्या यह सही लगता है?') && h.includes('कन्फ़र्म करें और सेव करें')); A.ok(dExplain(ui.md.res).includes('कटे हैं')); console.log('✓ T7 Hindi explanation of English SMS');
reset(); ui.md.text = DEX_SAMPLE; dAnalyze(); dSave(); A.strictEqual(S.tx.length, 1); A.strictEqual(S.tx[0].acct, 'XX1234'); A.ok(!JSON.stringify(S).includes('debited from'), 'raw SMS not stored');
ui.md.res = dParse(DEX_SAMPLE); dSave(); A.strictEqual(S.tx.length, 1, 'duplicate blocked'); console.log('✓ save + duplicate + no raw SMS stored');
ui.md.text = ''; dAnalyze(); A.ok(ui.md.err.length > 0); ui.md.text = '123456 is your OTP. Do not share.'; dAnalyze(); A.ok(!ui.md.res && ui.md.err.includes('OTP'));
ui.md.text = '<img src=x onerror=alert(1)> Rs 10 debited at <b>X</b>'; dAnalyze(); A.ok(!detect().includes('<img'), 'pasted HTML escaped'); console.log('✓ empty / OTP / injection');
ui.md.saved = { ...dParse(DEX_SAMPLE), saved: true }; A.ok(dAnswer('How much did I spend this week?').includes('₹')); A.ok(detectIntent('Ye transaction samjhao') && detectIntent('Why was ₹450 deducted?')); console.log('✓ follow-up + voice intents');
console.log('ALL DETECTIVE TESTS PASSED'); process.exit(0);
