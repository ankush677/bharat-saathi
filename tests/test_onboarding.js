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

console.log('--- STARTING ONBOARDING TEST SUITE ---');

// TEST 1: Journey 1 — English Onboarding
console.log('\nTesting Journey 1: English onboarding -> complete all steps -> dashboard');
global.localStorage.clear();
S = blank();
ui.ob = defaultObDraft();
render();

// Check step 1 (Welcome)
assert.strictEqual(ui.ob.step, 1, 'Should start at step 1');
let html = onb();
assert.ok(html.includes('Welcome to BharatSaathi'), 'Step 1 should include welcome title');
assert.ok(html.includes('Get Started'), 'Step 1 should include Get Started button');

// Advance to step 2 (Name)
obNext();
assert.strictEqual(ui.ob.step, 2, 'Should advance to step 2');
html = onb();
assert.ok(html.includes('What should we call you?'), 'Step 2 should ask for name');

// Test validation: empty name
ui.ob.name = '   ';
obNext();
assert.strictEqual(ui.ob.step, 2, 'Should reject whitespace-only name and stay on step 2');
assert.ok(ui.ob.error.length > 0, 'Should set validation error for empty name');

// Enter valid name
onNameInput('Rahul Kumar');
assert.strictEqual(ui.ob.name, 'Rahul Kumar', 'Should update name');
assert.strictEqual(ui.ob.error, '', 'Should clear error on input');

// Advance to step 3 (Language)
obNext();
assert.strictEqual(ui.ob.step, 3, 'Should advance to step 3');
html = onb();
assert.ok(html.includes('Which language do you prefer?'), 'Step 3 should ask for language');

// Keep English, advance to step 4 (Work & Income)
obNext();
assert.strictEqual(ui.ob.step, 4, 'Should advance to step 4');
html = onb();
assert.ok(html.includes('Tell us a little about your work.'), 'Step 4 should ask for work');
assert.ok(html.includes('Daily-wage worker'), 'Step 4 should list occupations');
assert.ok(html.includes('Fixed income'), 'Step 4 should list income types');

// Select occupation and income type
obSetOcc('small_business_owner');
obSetIncType('irregular');
assert.strictEqual(ui.ob.occupation, 'small_business_owner');
assert.strictEqual(ui.ob.incomeType, 'irregular');

// Advance to step 5 (Income Range)
obNext();
assert.strictEqual(ui.ob.step, 5, 'Should advance to step 5');
html = onb();
assert.ok(html.includes('Approximately how much do you earn?'), 'Step 5 should ask for income range');

// Select income range
obSetRange('20000_40000');
assert.strictEqual(ui.ob.incomeRange, '20000_40000');

// Advance to step 6 (Completion Screen)
obNext();
assert.strictEqual(ui.ob.step, 6, 'Should advance to step 6 (Completion Screen)');
html = onb();
assert.ok(html.includes("You're all set, Rahul Kumar!"), 'Step 6 should display personalized completion greeting');
assert.ok(html.includes('Explore BharatSaathi'), 'Step 6 should have explore button');

// Finish onboarding
finishOnboarding();
assert.ok(S.user, 'S.user should be populated');
assert.strictEqual(S.user.name, 'Rahul Kumar');
assert.strictEqual(S.user.preferredLanguage, 'en');
assert.strictEqual(S.user.occupation, 'small_business_owner');
assert.strictEqual(S.user.incomeType, 'irregular');
assert.strictEqual(S.user.incomeRange, '20000_40000');
assert.strictEqual(S.user.onboardingCompleted, true);
assert.strictEqual(global.localStorage.getItem('bs1_ob_draft'), null, 'Draft should be cleared on finish');

// Check home dashboard
html = home();
assert.ok(html.includes('Namaste, Rahul Kumar!'), 'Dashboard should greet with actual user name');
console.log('✓ Journey 1 passed successfully');

// TEST 2: Journey 2 — Hindi Onboarding
console.log('\nTesting Journey 2: Hindi onboarding -> complete all steps -> Hindi dashboard');
global.localStorage.clear();
S = blank();
ui.ob = defaultObDraft();

// Start -> step 2
obNext();
onNameInput('अमित शर्मा');
// Step 2 -> step 3
obNext();
assert.strictEqual(ui.ob.step, 3);

// Select Hindi in Step 3
obSetLang('hi');
assert.strictEqual(S.lang, 'hi', 'S.lang should switch to Hindi immediately');
html = onb();
assert.ok(html.includes('आप कौन सी भाषा पसंद करते हैं?'), 'Step 3 headline should update to Hindi');
assert.ok(html.includes('आगे बढ़ें'), 'Step 3 button should update to Hindi');

// Step 3 -> step 4
obNext();
assert.strictEqual(ui.ob.step, 4);
html = onb();
assert.ok(html.includes('हमें अपने काम के बारे में थोड़ा बताएँ।'), 'Step 4 should be completely in Hindi');
assert.ok(html.includes('किसान'), 'Step 4 occupations should be in Hindi');
assert.ok(html.includes('अनियमित कमाई'), 'Step 4 income types should be in Hindi');

obSetOcc('farmer');
obSetIncType('irregular');
obNext();

// Step 5 (Income Range)
assert.strictEqual(ui.ob.step, 5);
html = onb();
assert.ok(html.includes('आपकी लगभग कितनी कमाई होती है?'), 'Step 5 should be in Hindi');
assert.ok(html.includes('सेटअप पूरा करें'), 'Step 5 button should be in Hindi');

obSetRange('10000_20000');
obNext();

// Step 6 (Completion)
assert.strictEqual(ui.ob.step, 6);
html = onb();
assert.ok(html.includes('तैयार हैं, अमित शर्मा!'), 'Step 6 title should be personalized in Hindi');
assert.ok(html.includes('भारतसाथी शुरू करें'), 'Step 6 button should be in Hindi');

finishOnboarding();
assert.strictEqual(S.user.name, 'अमित शर्मा');
assert.strictEqual(S.user.preferredLanguage, 'hi');
assert.strictEqual(S.user.occupation, 'farmer');
assert.strictEqual(S.lang, 'hi');

html = home();
assert.ok(html.includes('नमस्ते, अमित शर्मा!'), 'Dashboard should greet in Hindi with actual name');
console.log('✓ Journey 2 passed successfully');

// TEST 3: Journey 3 — Enter Name -> Refresh Browser -> Continue without losing progress
console.log('\nTesting Journey 3: Enter name -> refresh browser -> continue without losing progress');
global.localStorage.clear();
S = blank();
ui.ob = defaultObDraft();

obNext(); // step 2
onNameInput('Priya Singh');
assert.strictEqual(ui.ob.step, 2);
assert.strictEqual(ui.ob.name, 'Priya Singh');

// Simulate page refresh: new execution context restoring from localStorage
const savedDraft = JSON.parse(global.localStorage.getItem('bs1_ob_draft'));
assert.ok(savedDraft, 'Draft should be in localStorage');
assert.strictEqual(savedDraft.step, 2, 'Draft should remember step 2');
assert.strictEqual(savedDraft.name, 'Priya Singh', 'Draft should remember name');

const restoredOb = loadObDraft();
assert.strictEqual(restoredOb.step, 2);
assert.strictEqual(restoredOb.name, 'Priya Singh');
ui.ob = restoredOb;

html = onb();
assert.ok(html.includes('value="Priya Singh"'), 'Restored screen should have Priya Singh in input');
console.log('✓ Journey 3 passed successfully');

// TEST 4: Journey 4 — Go Back -> Change Language -> Translations update correctly
console.log('\nTesting Journey 4: Go back -> change language -> ensure translations update');
obNext(); // advance from step 2 to step 3
assert.strictEqual(ui.ob.step, 3);
obNext(); // advance to step 4
assert.strictEqual(ui.ob.step, 4);

// Now go back to step 3
obBack();
assert.strictEqual(ui.ob.step, 3);
// Switch to Hindi
obSetLang('hi');
assert.strictEqual(S.lang, 'hi');
html = onb();
assert.ok(html.includes('आप कौन सी भाषा पसंद करते हैं?'));

// Go back to step 2 while in Hindi
obBack();
assert.strictEqual(ui.ob.step, 2);
html = onb();
assert.ok(html.includes('हम आपको किस नाम से बुलाएँ?'), 'Step 2 should now display in Hindi');

// Go forward to step 3 and back to English
obNext();
obSetLang('en');
assert.strictEqual(S.lang, 'en');
html = onb();
assert.ok(html.includes('Which language do you prefer?'), 'Step 3 should switch back to English');
console.log('✓ Journey 4 passed successfully');

// TEST 5: Journey 5 — Returning User -> Skip onboarding -> Open Dashboard
console.log('\nTesting Journey 5: Returning user -> skip onboarding -> open dashboard');
global.localStorage.clear();
S = blank();
S.user = {
  name: 'Sunita',
  preferredLanguage: 'en',
  occupation: 'salaried_employee',
  incomeType: 'fixed',
  incomeRange: '40000_60000',
  onboardingCompleted: true
};
save();

// Simulate returning to the app
const loadedS = JSON.parse(global.localStorage.getItem('bs1'));
assert.ok(loadedS.user.onboardingCompleted, 'User should be marked completed');
assert.ok(loadedS.user && loadedS.user.onboardingCompleted, 'Should recognize returning user');
render();
assert.strictEqual(elementMap['app'].innerHTML.includes('Welcome to BharatSaathi'), false, 'Should NOT show onboarding to returning user');
assert.ok(elementMap['app'].innerHTML.includes('Namaste, Sunita!'), 'Should show dashboard for returning user');
console.log('✓ Journey 5 passed successfully');

// TEST 6: Journey 6 — Edit Language and Preferences from Profile Settings
console.log('\nTesting Journey 6: Edit language and preferences from profile settings');
go('me');
html = me();
assert.ok(html.includes('Sunita'), 'Profile should show user name');
assert.ok(html.includes('Salaried employee'), 'Profile should show occupation');

// Test editing
ui.editProfile = true;
html = me();
assert.ok(html.includes('id="edit_nm"'), 'Should show edit name input');
assert.ok(html.includes('id="edit_occ"'), 'Should show edit occupation select');

// Mock inputs for saveProfileEdit
elementMap['edit_nm'] = { value: 'Sunita Sharma' };
elementMap['edit_occ'] = { value: 'delivery_partner' };
elementMap['edit_inc'] = { value: 'mixed' };
elementMap['edit_rng'] = { value: '20000_40000' };

saveProfileEdit();
assert.strictEqual(S.user.name, 'Sunita Sharma', 'Should update user name');
assert.strictEqual(S.user.occupation, 'delivery_partner', 'Should update occupation');
assert.strictEqual(S.user.incomeType, 'mixed', 'Should update income type');
assert.strictEqual(S.user.incomeRange, '20000_40000', 'Should update income range');

// Test restart onboarding
restartOnboarding();
assert.strictEqual(ui.ob.step, 1, 'Should reset to step 1');
assert.strictEqual(S.user.onboardingCompleted, false, 'Should reopen onboarding flow');
html = onb();
assert.ok(html.includes('Welcome to BharatSaathi'), 'Should render welcome screen on restart');
console.log('✓ Journey 6 passed successfully');

console.log('\n========================================');
console.log('ALL 6 USER JOURNEYS PASSED WITH ZERO ERRORS!');
console.log('========================================');
process.exit(0);
