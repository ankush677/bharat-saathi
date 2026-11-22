const TODAY = '2026-11-21', CATS = ['Food', 'Groceries', 'Transport', 'Bills', 'Shopping', 'Healthcare', 'Education', 'Rent', 'Transfers', 'Other'];
const CH = { Food: ['Food', 'खाना', '🍛'], Groceries: ['Groceries', 'राशन', '🛒'], Transport: ['Transport', 'यात्रा', '🚌'], Bills: ['Bills', 'बिल', '💡'], Shopping: ['Shopping', 'खरीदारी', '🛍️'], Healthcare: ['Healthcare', 'इलाज', '💊'], Education: ['Education', 'पढ़ाई', '🎓'], Rent: ['Rent', 'किराया', '🏠'], Transfers: ['Transfers', 'भेजे पैसे', '🔁'], Other: ['Other', 'अन्य', '📦'], Income: ['Income', 'आमदनी', '💰'] };
const ICO = { search: 'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3', home: 'M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z', list: 'M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6', chat: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z', chart: 'M5 20V11M12 20V4M19 20v-6', user: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0', mic: 'M12 15a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3zM19 11a7 7 0 01-14 0M12 18v3', spk: 'M11 5L6 9H3v6h3l5 4zM16 9a4 4 0 010 6', stop: 'M6 6h12v12H6z', send: 'M22 2L11 13M22 2l-7 20-4-9-9-4z', del: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13', back: 'M19 12H5M12 19l-7-7 7-7', check: 'M20 6L9 17l-5-5', detective: 'M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM21 21l-5.2-5.2M7.5 10.5l2 2 3.5-4', bell: 'M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9zM13.7 21a2 2 0 01-3.4 0', eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12zM12 15a3 3 0 100-6 3 3 0 000 6z', eyeoff: 'M17.9 17.9A10.9 10.9 0 0112 20C5 20 1 12 1 12a18.5 18.5 0 015.1-5.9M9.9 4.2A9.1 9.1 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.2 3.2M1 1l22 22', shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4', plus: 'M12 5v14M5 12h14', sms: 'M4 5h16v11H8l-4 4zM8 9h8M8 12h5', lock: 'M6 11V8a6 6 0 0112 0v3M5 11h14v10H5z', up: 'M12 19V5M5 12l7-7 7 7', down: 'M12 5v14M19 12l-7 7-7-7', wallet: 'M3 7a2 2 0 012-2h13v4M3 7v11a2 2 0 002 2h15V9H5a2 2 0 01-2-2zM16 14.5h.01', alert: 'M12 9v4M12 17h.01M10.3 3.9L2.4 18a2 2 0 001.7 3h15.8a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z', info: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 8h.01M11 12h1v5h1', cal: 'M5 5h14a1 1 0 011 1v14H4V6a1 1 0 011-1zM4 10h16M8 3v4M16 3v4', play: 'M7 4l13 8-13 8z', file: 'M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5' };
const ico = n => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICO[n]}"/></svg>`;

/* ---------- Centralized I18N Translation System (Extensible for all Indian languages) ---------- */
const I18N = {
  en: {
    appName: 'BharatSaathi AI',
    tagline: 'Your money. Your language. Your understanding.',
    taglineHi: 'आपका पैसा। आपकी भाषा। आपकी समझ।',
    stepOf: 'Step {current} of {total}',
    getStarted: 'Get Started',
    continue: 'Continue',
    back: 'Back',
    completeSetup: 'Complete Setup',
    exploreApp: 'Explore BharatSaathi',

    // Step 1 Welcome
    welcomeTitle: 'Welcome to BharatSaathi',
    welcomeSubtitle: 'Your money. Your language. Your understanding.',
    welcomeSupporting: "Let's make understanding your money simple.",
    welcomeFeature1: 'Understand bank messages & UPI alerts without financial jargon',
    welcomeFeature2: 'Designed specifically for daily, weekly, or irregular income',
    welcomeFeature3: '100% private: your financial data never leaves this device',
    tryDemoBtn: 'Try demo with Rahul (synthetic data)',
    privacyAssurance: 'We never ask for UPI PIN, OTP or bank passwords. Your data stays on this device.',

    // Step 2 Name
    nameTitle: 'What should we call you?',
    nameHindiSubtitle: 'हम आपको किस नाम से बुलाएँ?',
    nameSubtitle: 'We will use this to personalize your dashboard and financial updates.',
    nameLabel: 'Your Name',
    namePlaceholder: 'Enter your name',
    nameExample: 'e.g. Rahul, Priya, Amit',
    nameGreetingPreview: 'Namaste, {name}!',
    nameGreetingSub: "Great to meet you. Let's make managing your money effortless.",
    nameValidationEmpty: 'Please enter your name to continue.',
    nameValidationWhitespace: 'Name cannot be only spaces. Please enter a valid name.',

    // Step 3 Language
    langTitle: 'Which language do you prefer?',
    langHindiSubtitle: 'आप कौन सी भाषा पसंद करते हैं?',
    langSubtitle: 'Choose your preferred language. All subsequent screens, labels and messages will switch to this language.',
    langEnglish: 'English',
    langEnglishNative: 'English',
    langEnglishDesc: 'Read, write & speak in English',
    langHindi: 'Hindi',
    langHindiNative: 'हिंदी',
    langHindiDesc: 'अपनी भाषा में समझें और बात करें',
    langNotice: 'You can change your language anytime in Profile settings.',

    // Step 4 Work & Income
    workTitle: 'Tell us a little about your work.',
    workHindiSubtitle: 'हमें अपने काम के बारे में थोड़ा बताएँ।',
    workSubtitle: 'This helps BharatSaathi adapt to how your money flows.',
    qOccupation: 'What do you do?',
    occ_daily_wage_worker: 'Daily-wage worker',
    occ_daily_wage_worker_sub: 'Construction, labor, loading, domestic',
    occ_small_business_owner: 'Small business owner',
    occ_small_business_owner_sub: 'Kirana, retail, stall, vendor',
    occ_farmer: 'Farmer',
    occ_farmer_sub: 'Agriculture, dairy, livestock',
    occ_student: 'Student',
    occ_student_sub: 'School, college, vocational',
    occ_salaried_employee: 'Salaried employee',
    occ_salaried_employee_sub: 'Monthly paycheck, corporate, office',
    occ_delivery_partner: 'Delivery partner',
    occ_delivery_partner_sub: 'Food delivery, courier, gig transport',
    occ_self_employed: 'Self-employed',
    occ_self_employed_sub: 'Driver, mechanic, electrician, freelance',
    occ_other: 'Other',
    occ_other_sub: 'Other occupation or profession',

    qIncomeType: 'How do you usually earn money?',
    inc_fixed: 'Fixed income — I receive a regular salary.',
    inc_fixed_desc: 'My earnings arrive as a regular fixed monthly paycheck.',
    inc_irregular: 'Irregular income — My earnings change every day or week.',
    inc_irregular_desc: 'My earnings vary based on work availability and seasons.',
    inc_mixed: 'Mixed income — I have both fixed and variable earnings.',
    inc_mixed_desc: 'I receive a base salary plus incentives, bonuses, or side earnings.',

    // Step 5 Income Range
    rangeTitle: 'Approximately how much do you earn?',
    rangeHindiSubtitle: 'आपकी लगभग कितनी कमाई होती है?',
    rangeSubtitle: 'This helps us suggest a budget that matches your income. You can change it anytime.',
    rangeOptionalNotice: 'This is optional and helps customize suggestions. No exact numbers or bank linking required.',
    range_below_5000: 'Below ₹5,000',
    range_5000_10000: '₹5,000 – ₹10,000',
    range_10000_20000: '₹10,000 – ₹20,000',
    range_20000_40000: '₹20,000 – ₹40,000',
    range_40000_60000: '₹40,000 – ₹60,000',
    range_above_60000: 'Above ₹60,000',
    range_prefer_not_to_say: 'Prefer not to say',

    // Step 6 Completion Screen
    successTitle: "You're all set, {name}!",
    successSubtitle: 'Your personal finance companion is ready.',
    successSummaryTitle: 'Your Profile Summary',
    summaryName: 'Name',
    summaryLanguage: 'Language',
    summaryWork: 'Work',
    summaryIncomeType: 'Income Pattern',
    summaryIncomeRange: 'Estimated Earnings',

    // General & Profile
    namasteGreeting: 'Namaste, {name}!',
    welcomeGreetingToast: 'Welcome, {name}! Your personal finance companion is ready.',
    profileSettingsTitle: 'Profile & Preferences',
    editPreferences: 'Edit Preferences',
    redoOnboardingBtn: 'Restart Onboarding Flow',
    saveProfileBtn: 'Save Preferences',
    cancel: 'Cancel',
    profileSavedToast: 'Profile preferences updated successfully.'
  },
  hi: {
    appName: 'भारतसाथी AI',
    tagline: 'आपका पैसा। आपकी भाषा। आपकी समझ।',
    taglineHi: 'आपका पैसा। आपकी भाषा। आपकी समझ।',
    stepOf: 'चरण {current} / {total}',
    getStarted: 'शुरू करें',
    continue: 'आगे बढ़ें',
    back: 'पीछे',
    completeSetup: 'सेटअप पूरा करें',
    exploreApp: 'भारतसाथी शुरू करें',

    // Step 1 Welcome
    welcomeTitle: 'भारतसाथी में आपका स्वागत है',
    welcomeSubtitle: 'आपका पैसा। आपकी भाषा। आपकी समझ।',
    welcomeSupporting: 'आइए आपके पैसों को समझना आसान बनाएँ।',
    welcomeFeature1: 'बैंक संदेश और UPI सूचनाओं को बिना किसी उलझन समझें',
    welcomeFeature2: 'दैनिक, साप्ताहिक या अनियमित कमाई के लिए विशेष रूप से तैयार',
    welcomeFeature3: '100% निजी और सुरक्षित: आपका डेटा आपके फ़ोन से बाहर नहीं जाता',
    tryDemoBtn: 'राहुल के साथ डेमो देखें (नकली डेटा)',
    privacyAssurance: 'हम UPI PIN, OTP या बैंक पासवर्ड कभी नहीं माँगते। आपका डेटा इसी डिवाइस पर रहता है।',

    // Step 2 Name
    nameTitle: 'हम आपको किस नाम से बुलाएँ?',
    nameHindiSubtitle: 'What should we call you?',
    nameSubtitle: 'हम इस नाम का उपयोग आपके डैशबोर्ड और वित्तीय जानकारियों के लिए करेंगे।',
    nameLabel: 'आपका नाम',
    namePlaceholder: 'अपना नाम लिखें',
    nameExample: 'जैसे राहुल, प्रिया, अमित',
    nameGreetingPreview: 'नमस्ते, {name}!',
    nameGreetingSub: 'आपसे मिलकर खुशी हुई। आइए आपके पैसों का हिसाब आसान बनाएँ।',
    nameValidationEmpty: 'आगे बढ़ने के लिए कृपया अपना नाम लिखें।',
    nameValidationWhitespace: 'नाम में केवल खाली जगह (स्पेस) नहीं हो सकती।',

    // Step 3 Language
    langTitle: 'आप कौन सी भाषा पसंद करते हैं?',
    langHindiSubtitle: 'Which language do you prefer?',
    langSubtitle: 'अपनी पसंदीदा भाषा चुनें। आगे के सभी विकल्प, बटन और संदेश इसी भाषा में दिखाई देंगे।',
    langEnglish: 'अंग्रेज़ी',
    langEnglishNative: 'English',
    langEnglishDesc: 'Read, write & speak in English',
    langHindi: 'हिंदी',
    langHindiNative: 'हिंदी',
    langHindiDesc: 'अपनी भाषा में समझें और बात करें',
    langNotice: 'आप इसे कभी भी प्रोफ़ाइल सेटिंग्स से बदल सकते हैं।',

    // Step 4 Work & Income
    workTitle: 'हमें अपने काम के बारे में थोड़ा बताएँ।',
    workHindiSubtitle: 'Tell us a little about your work.',
    workSubtitle: 'इससे भारतसाथी आपके पैसे की आवक और खर्च के तरीके को समझ सकेगा।',
    qOccupation: 'आप क्या काम करते हैं?',
    occ_daily_wage_worker: 'दिहाड़ी मज़दूर',
    occ_daily_wage_worker_sub: 'निर्माण कार्य, दैनिक मजदूरी, हम्माली, घरेलू काम',
    occ_small_business_owner: 'छोटा व्यापारी / दुकानदार',
    occ_small_business_owner_sub: 'किराना दुकान, खुदरा व्यापार, स्टॉल, खोखा',
    occ_farmer: 'किसान',
    occ_farmer_sub: 'खेती, पशुपालन, डेयरी, बागवानी',
    occ_student: 'विद्यार्थी / छात्र',
    occ_student_sub: 'स्कूल, कॉलेज, कोचिंग या प्रशिक्षण',
    occ_salaried_employee: 'नौकरीपेशा कर्मचारी',
    occ_salaried_employee_sub: 'महीने का पक्का वेतन, प्राइवेट या सरकारी नौकरी',
    occ_delivery_partner: 'डिलीवरी पार्टनर',
    occ_delivery_partner_sub: 'खाना, पार्सल या राइड डिलीवरी',
    occ_self_employed: 'स्वरोज़गार',
    occ_self_employed_sub: 'ड्राइवर, मिस्त्री, इलेक्ट्रीशियन, टेलर, स्वतंत्र काम',
    occ_other: 'अन्य',
    occ_other_sub: 'कोई अन्य पेशा या व्यवसाय',

    qIncomeType: 'आप आमतौर पर पैसे कैसे कमाते हैं?',
    inc_fixed: 'तय कमाई — मुझे नियमित वेतन मिलता है।',
    inc_fixed_desc: 'मुझे हर महीने नियमित और पक्की तनख्वाह मिलती है।',
    inc_irregular: 'अनियमित कमाई — मेरी कमाई रोज़ या हफ़्ते बदलती है।',
    inc_irregular_desc: 'मेरी आमदनी काम और सीज़न के अनुसार कम-ज़्यादा होती है।',
    inc_mixed: 'मिली-जुली कमाई — मुझे नियमित और बदलती दोनों तरह की कमाई होती है।',
    inc_mixed_desc: 'मुझे पक्की तनख्वाह के साथ इंसेंटिव या साइड काम से भी पैसे मिलते हैं।',

    // Step 5 Income Range
    rangeTitle: 'आपकी लगभग कितनी कमाई होती है?',
    rangeHindiSubtitle: 'Approximately how much do you earn?',
    rangeSubtitle: 'इससे हम आपकी कमाई के अनुसार बजट बनाने में मदद कर सकेंगे। आप इसे कभी भी बदल सकते हैं।',
    rangeOptionalNotice: 'यह पूरी तरह वैकल्पिक है और इसके लिए बैंक खाता जोड़ने या सटीक आंकड़ा बताने की ज़रूरत नहीं है।',
    range_below_5000: '₹5,000 से कम',
    range_5000_10000: '₹5,000 – ₹10,000',
    range_10000_20000: '₹10,000 – ₹20,000',
    range_20000_40000: '₹20,000 – ₹40,000',
    range_40000_60000: '₹40,000 – ₹60,000',
    range_above_60000: '₹60,000 से अधिक',
    range_prefer_not_to_say: 'बताना नहीं चाहते',

    // Step 6 Completion Screen
    successTitle: 'तैयार हैं, {name}!',
    successSubtitle: 'आपका अपना वित्तीय साथी अब तैयार है।',
    successSummaryTitle: 'आपकी प्रोफ़ाइल का सारांश',
    summaryName: 'नाम',
    summaryLanguage: 'भाषा',
    summaryWork: 'काम',
    summaryIncomeType: 'कमाई का तरीका',
    summaryIncomeRange: 'अनुमानित दायरा',

    // General & Profile
    namasteGreeting: 'नमस्ते, {name}!',
    welcomeGreetingToast: 'नमस्ते, {name}! आपका अपना वित्तीय साथी अब तैयार है।',
    profileSettingsTitle: 'प्रोफ़ाइल और प्राथमिकताएँ',
    editPreferences: 'प्राथमिकताएँ बदलें',
    redoOnboardingBtn: 'शुरुआती सेटअप दोबारा करें',
    saveProfileBtn: 'प्राथमिकताएँ सेव करें',
    cancel: 'रद्द करें',
    profileSavedToast: 'प्रोफ़ाइल प्राथमिकताएँ सफलतापूर्वक अपडेट हो गईं।'
  },
  pa: { appName: 'ਭਾਰਤਸਾਥੀ AI', getStarted: 'ਸ਼ੁਰੂ ਕਰੋ', continue: 'ਅੱਗੇ ਵਧੋ' },
  bn: { appName: 'ভারতসাথী AI', getStarted: 'শুরু করুন', continue: 'এগিয়ে যান' },
  mr: { appName: 'भारतसाथी AI', getStarted: 'सुरू करा', continue: 'पुढे चला' },
  ta: { appName: 'பாரத்சாதி AI', getStarted: 'தொடங்குங்கள்', continue: 'தொடரவும்' }
};

const OCCUPATIONS = [
  { id: 'daily_wage_worker', icon: '🔨', key: 'occ_daily_wage_worker', subKey: 'occ_daily_wage_worker_sub' },
  { id: 'small_business_owner', icon: '🏪', key: 'occ_small_business_owner', subKey: 'occ_small_business_owner_sub' },
  { id: 'farmer', icon: '🌾', key: 'occ_farmer', subKey: 'occ_farmer_sub' },
  { id: 'student', icon: '🎓', key: 'occ_student', subKey: 'occ_student_sub' },
  { id: 'salaried_employee', icon: '💼', key: 'occ_salaried_employee', subKey: 'occ_salaried_employee_sub' },
  { id: 'delivery_partner', icon: '🛵', key: 'occ_delivery_partner', subKey: 'occ_delivery_partner_sub' },
  { id: 'self_employed', icon: '🛠️', key: 'occ_self_employed', subKey: 'occ_self_employed_sub' },
  { id: 'other', icon: '📦', key: 'occ_other', subKey: 'occ_other_sub' }
];

const INCOME_TYPES = [
  { id: 'fixed', icon: '💵', key: 'inc_fixed', descKey: 'inc_fixed_desc' },
  { id: 'irregular', icon: '📈', key: 'inc_irregular', descKey: 'inc_irregular_desc' },
  { id: 'mixed', icon: '⚖️', key: 'inc_mixed', descKey: 'inc_mixed_desc' }
];

const INCOME_RANGES = [
  { id: 'below_5000', key: 'range_below_5000' },
  { id: '5000_10000', key: 'range_5000_10000' },
  { id: '10000_20000', key: 'range_10000_20000' },
  { id: '20000_40000', key: 'range_20000_40000' },
  { id: '40000_60000', key: 'range_40000_60000' },
  { id: 'above_60000', key: 'range_above_60000' },
  { id: 'prefer_not_to_say', key: 'range_prefer_not_to_say' }
];

function t(key, params = {}) {
  const lang = (S && S.lang) || (ui && ui.ob && ui.ob.preferredLanguage) || 'en';
  let str = (I18N[lang] && I18N[lang][key]) || (I18N['en'] && I18N['en'][key]) || key;
  for (const [k, v] of Object.entries(params)) {
    str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  }
  return str;
}

const getOccLabel = (id, lang) => {
  const o = OCCUPATIONS.find(item => item.id === id);
  if (!o) return id || '';
  const l = lang || (S && S.lang) || 'en';
  const dict = I18N[l] || I18N['en'];
  return dict[o.key] || I18N['en'][o.key] || id;
};

const getIncTypeLabel = (id, lang) => {
  const item = INCOME_TYPES.find(i => i.id === id);
  if (!item) return id || '';
  const l = lang || (S && S.lang) || 'en';
  const dict = I18N[l] || I18N['en'];
  return dict[item.key] || I18N['en'][item.key] || id;
};

const getRangeLabel = (id, lang) => {
  const item = INCOME_RANGES.find(i => i.id === id);
  if (!item) return id || '';
  const l = lang || (S && S.lang) || 'en';
  const dict = I18N[l] || I18N['en'];
  return dict[item.key] || I18N['en'][item.key] || id;
};

const DEFAULT_OB = {
  step: 1,
  name: '',
  preferredLanguage: 'en',
  occupation: 'daily_wage_worker',
  incomeType: 'irregular',
  incomeRange: '10000_20000',
  error: ''
};
const defaultObDraft = () => ({ ...DEFAULT_OB });

function loadObDraft() {
  try {
    const raw = localStorage.getItem('bs1_ob_draft');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return { ...DEFAULT_OB, ...parsed, error: '' };
      }
    }
  } catch (e) { }
  return { ...DEFAULT_OB };
}

function saveObDraft() {
  try {
    if (!ui || !ui.ob) return;
    localStorage.setItem('bs1_ob_draft', JSON.stringify({
      step: ui.ob.step || 1,
      name: ui.ob.name || '',
      preferredLanguage: ui.ob.preferredLanguage || 'en',
      occupation: ui.ob.occupation || 'daily_wage_worker',
      incomeType: ui.ob.incomeType || 'irregular',
      incomeRange: ui.ob.incomeRange || '10000_20000'
    }));
  } catch (e) { }
}

function clearObDraft() {
  try {
    localStorage.removeItem('bs1_ob_draft');
  } catch (e) { }
}

let S, V = {}, ui = { sheet: null, rev: null, f: 'all', listen: false, speak: false, think: false, editProfile: false, ob: loadObDraft() };
const blank = () => ({ user: null, tx: [], goals: [], opening: 0, lang: 'en', tab: 'home', chat: [], consent: false });
try { S = JSON.parse(localStorage.getItem('bs1')) } catch (e) { } S = S || blank();
if (S && S.user && S.user.preferredLanguage && !S.lang) S.lang = S.user.preferredLanguage;
const save = () => { try { localStorage.setItem('bs1', JSON.stringify(S)) } catch (e) { } };
const x = (a, b) => S.lang === 'hi' ? b : a, cn = c => CH[c] ? CH[c][S.lang === 'hi' ? 1 : 0] : c;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const inr = n => '₹' + Math.round(n).toLocaleString('en-IN'), uid = () => Math.random().toString(36).slice(2, 9);
const D = s => new Date(s + 'T00:00:00'), ds = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const add = (s, n) => { const d = D(s); d.setDate(d.getDate() + n); return ds(d) };
const fd = s => D(s).toLocaleDateString(S.lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'short' });
const sum = a => a.reduce((t, o) => t + o.amount, 0), inc = a => a.filter(o => o.type === 'income'), exp = a => a.filter(o => o.type === 'expense');
const rng = (a, b) => S.tx.filter(o => o.date >= a && o.date <= b), mon = () => S.tx.filter(o => o.date.startsWith(TODAY.slice(0, 7)));
const bal = () => S.opening + sum(inc(S.tx)) - sum(exp(S.tx));
const cats = l => { const m = {}; exp(l).forEach(o => m[o.category] = (m[o.category] || 0) + o.amount); return Object.entries(m).sort((a, b) => b[1] - a[1]) };
const wk = n => rng(add(TODAY, -6 - 7 * n), add(TODAY, -7 * n));
function plan() {
  const up = S.goals.filter(g => g.due && g.due >= TODAY && g.due <= add(TODAY, 30) && g.target > g.saved).sort((a, b) => a.due < b.due ? -1 : 1);
  const ess = up.reduce((t, g) => t + g.target - g.saved, 0), free = bal() - ess; let days = 7;
  if (up.length) days = Math.min(30, Math.max(7, Math.round((D(up[up.length - 1].due) - D(TODAY)) / 864e5)));
  return { up, ess, free, days, daily: Math.max(0, free) / days }
}
function planText() {
  const p = plan(), n = p.up.map(g => esc(g.name)).join(', ');
  if (!S.tx.length) return x('Add some transactions first so I can plan with your real numbers.', 'पहले कुछ लेन-देन जोड़िए ताकि मैं आपके असली आँकड़ों से योजना बना सकूँ।');
  const incAdvice = (S.user && S.user.incomeType === 'irregular') ? x(' As someone with irregular earnings, keeping a reserve buffer for lean days is strongly advised.', ' अनियमित कमाई के कारण कम काम वाले दिनों के लिए रिज़र्व बफ़र रखना बहुत ज़रूरी है।') : (S.user && S.user.incomeType === 'fixed') ? x(' With a fixed salary, allocating essentials first makes the rest easy to manage.', ' तय वेतन के साथ, पहले ज़रूरी खर्च अलग रख लेने से बाकी हिसाब आसान रहता है।') : '';
  if (p.free < 0) return x(`You have about ${inr(bal())} recorded, but upcoming essentials (${n}) need ${inr(p.ess)}. You are short by ${inr(-p.free)}. Think about which spending can wait and keep essentials first.${incAdvice} This is a suggestion, not guaranteed financial advice.`, `आपके रिकॉर्ड में लगभग ${inr(bal())} हैं, लेकिन आने वाले ज़रूरी खर्च (${n}) के लिए ${inr(p.ess)} चाहिए। ${inr(-p.free)} कम पड़ रहे हैं। सोचिए कौन-सा खर्च रुक सकता है और ज़रूरी खर्च पहले रखिए।${incAdvice} यह सिर्फ़ सुझाव है, पक्की वित्तीय सलाह नहीं।`);
  return x(`You have about ${inr(bal())} recorded as available${p.ess ? ` and ${inr(p.ess)} in upcoming essentials (${n}). Consider keeping ${inr(p.ess)} aside first` : ''}. After that, about ${inr(p.free)} is free: roughly ${inr(p.daily)} a day or ${inr(p.daily * 7)} a week for the next ${p.days} days.${incAdvice} This is a suggestion from your recorded transactions, not guaranteed financial advice.`, `आपके रिकॉर्ड के अनुसार लगभग ${inr(bal())} उपलब्ध हैं${p.ess ? ` और आने वाले ज़रूरी खर्च (${n}) के ${inr(p.ess)} हैं। पहले ${inr(p.ess)} अलग रख लीजिए` : ''}। उसके बाद लगभग ${inr(p.free)} बचते हैं: अगले ${p.days} दिन के लिए करीब ${inr(p.daily)} रोज़ या ${inr(p.daily * 7)} हफ़्ते के।${incAdvice} यह आपके दर्ज लेन-देन पर आधारित सुझाव है, पक्की वित्तीय सलाह नहीं।`)
}
/* ---------- SMS parser (pure code, never sends text anywhere) ---------- */
const GUESS = [['Food', /zomato|swiggy|dhaba|restaurant|hotel|cafe|chai|bakery/i], ['Groceries', /kirana|mart|grocer|bigbasket|dmart|sabzi|store/i], ['Transport', /uber|ola|rapido|irctc|metro|bus|fuel|petrol|auto|redbus/i], ['Bills', /electric|bijli|recharge|jio|airtel|vodafone|gas|water|dth|bill/i], ['Healthcare', /pharma|medical|hospital|clinic|apollo|medplus|dr\./i], ['Education', /school|fees|college|tuition/i], ['Rent', /rent|landlord/i], ['Shopping', /amazon|flipkart|myntra|meesho|mall|market/i]];
function parseSMS(t) {
  const s = t.trim(), l = s.toLowerCase(), r = { kind: 'unknown', flags: [] }; if (!s) return r;
  if (/\botp\b|one[- ]time password|verification code/.test(l)) return { ...r, kind: 'otp' };
  const am = s.match(/(?:rs\.?|inr|₹)\s*([\d,]+(?:\.\d{1,2})?)/i), amount = am ? parseFloat(am[1].replace(/,/g, '')) : null;
  const rev = /revers|refund/.test(l), dr = /debited|spent|paid|sent|withdrawn|purchase/.test(l), cr = /credited|received|deposited/.test(l) || rev;
  if (/fail|declined|unsuccessful|not processed/.test(l) && !rev) return { ...r, kind: 'failed', amount };
  if (!dr && !cr) return /avl\.? ?bal|available bal|balance/.test(l) ? { ...r, kind: 'balance', amount } : /offer|cashback|win |loan|apply|click|http|www\.|congratulations|limited/.test(l) ? { ...r, kind: 'promo' } : r;
  if (/offer|cashback|http|click|congratulations/.test(l) && !/a\/c|upi|ref/.test(l)) return { ...r, kind: 'promo' };
  if (!amount) return { ...r, kind: 'unclear' };
  let type = rev || (cr && !dr) ? 'income' : dr && !cr ? 'expense' : null; const f = [];
  if (!type) f.push(x('Could not tell if money came in or went out.', 'पता नहीं चला कि पैसे आए या गए।'));
  if (rev) f.push(x('This looks like a reversal or refund, so it is saved as money received.', 'यह रिवर्सल या रिफ़ंड लगता है, इसलिए पैसे मिले के रूप में सेव होगा।'));
  let dt = null, m = s.match(/\b(\d{1,2})[- \/]([A-Za-z]{3})[a-z]*[- \/,]*(\d{2,4})\b/), MN = 'jan feb mar apr may jun jul aug sep oct nov dec'.split(' ');
  if (m && MN.includes(m[2].toLowerCase())) dt = (m[3].length == 2 ? '20' + m[3] : m[3]) + '-' + String(MN.indexOf(m[2].toLowerCase()) + 1).padStart(2, '0') + '-' + m[1].padStart(2, '0');
  else if ((m = s.match(/\b(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})\b/)) && +m[2] < 13) dt = (m[3].length == 2 ? '20' + m[3] : m[3]) + '-' + m[2].padStart(2, '0') + '-' + m[1].padStart(2, '0');
  if (!dt) f.push(x('No date found. Please pick the date.', 'तारीख़ नहीं मिली। कृपया तारीख़ चुनिए।'));
  const rf = s.match(/\b(?:ref(?:erence)?(?:\s*(?:no|id))?|utr|rrn|txn\s*id)[\s.:#-]+(\w*\d\w*)/i), mm = s.match(/\b(?:to|at|from|vpa)\s+([A-Za-z][A-Za-z0-9 &._@-]{1,28}?)(?=\s+on\b|\s+ref|\s+upi|\s+via|\s+using|\s+-|[.,;]|$)/i);
  let mer = mm && !/^(your|a\/c|account|you|the|rs|inr|xx|bank)/i.test(mm[1]) ? mm[1].trim() : null;
  const g = GUESS.find(([c, re]) => re.test(mer || '')); let cat = type === 'income' ? 'Income' : g ? g[0] : 'Other';
  if (!mer) f.push(x('Merchant or sender not in the message. We did not guess.', 'संदेश में दुकान/भेजने वाले का नाम नहीं है। हमने अंदाज़ा नहीं लगाया।'));
  const method = /upi|vpa/.test(l) ? 'UPI' : /imps/.test(l) ? 'IMPS' : /neft/.test(l) ? 'NEFT' : /atm/.test(l) ? 'ATM' : /card|pos/.test(l) ? 'Card' : null;
  const conf = .4 + (type ? .25 : 0) + (dt ? .15 : 0) + (rf ? .1 : 0) + (mer ? .1 : 0);
  return { kind: 'txn', amount, type, date: dt, ref: rf ? rf[1] : '', merchant: mer || '', category: cat, method, flags: f, conf }
}
function explain(p) {
  const a = p.amount ? inr(p.amount) : '';
  const E = {
    otp: ['This looks like an OTP message, not a transaction. Never share an OTP or UPI PIN with anyone, even if they say they are from your bank. Nothing was saved.', 'यह OTP का संदेश है, लेन-देन नहीं। OTP या UPI PIN किसी को न बताइए, चाहे वह खुद को बैंक वाला कहे। कुछ सेव नहीं हुआ।'],
    promo: ['This looks like an offer or promotional message, not a transaction. Do not click unknown links. Nothing was saved.', 'यह ऑफ़र या प्रचार का संदेश लगता है, लेन-देन नहीं। अनजान लिंक पर क्लिक न कीजिए। कुछ सेव नहीं हुआ।'],
    balance: [`This is a balance alert${a ? ' showing ' + a : ''}, not a payment. We do not change your records from it.`, `यह बैलेंस की सूचना है${a ? ' (' + a + ')' : ''}, भुगतान नहीं। इससे आपके रिकॉर्ड नहीं बदलेंगे।`],
    failed: [`This message says a payment${a ? ' of ' + a : ''} did not go through. No money should have left your account, so we do not save it. If money was cut, contact your bank through its official channels.`, `इस संदेश के अनुसार${a ? ' ' + a + ' का' : ''} भुगतान पूरा नहीं हुआ। आपके खाते से पैसे नहीं कटने चाहिए, इसलिए इसे सेव नहीं किया। अगर पैसे कटे हैं तो बैंक के आधिकारिक माध्यम से संपर्क कीजिए।`],
    unclear: ['We found a transaction-style message but no amount, so we cannot save it. Please add it manually.', 'यह लेन-देन जैसा संदेश है लेकिन रकम नहीं मिली, इसलिए सेव नहीं हो सकता। कृपया हाथ से जोड़िए।'],
    unknown: ['We could not recognise a transaction in this text. Paste the full bank message or add the transaction manually.', 'इस टेक्स्ट में लेन-देन नहीं मिला। पूरा बैंक संदेश पेस्ट कीजिए या हाथ से जोड़िए।']
  };
  if (p.kind !== 'txn') return x(...E[p.kind]);
  const out = p.type === 'expense', inn = p.type === 'income', via = p.method ? x(' using ' + p.method, ' ' + p.method + ' से') : '';
  return x(`Your bank message says ${a} ${out ? 'was sent from' : inn ? 'came into' : 'moved in'} your account${via}.${out ? ' This means money went out.' : inn ? ' This means money came in.' : ''}${p.merchant ? ` The message names “${p.merchant}”.` : ''}\n\nIf you recognise this, confirm it. If you do not recognise it, contact your bank through its official channels. The message alone cannot tell us whether anything is wrong.`,
    `आपके बैंक संदेश के अनुसार${via} ${a} आपके खाते ${out ? 'से गए' : inn ? 'में आए' : 'में हलचल हुई'}।${out ? ' यानी पैसे बाहर गए।' : inn ? ' यानी पैसे आए।' : ''}${p.merchant ? ` संदेश में “${p.merchant}” का नाम है।` : ''}\n\nअगर आप इसे पहचानते हैं तो कन्फ़र्म कीजिए। न पहचानें तो बैंक के आधिकारिक माध्यम से संपर्क कीजिए। सिर्फ़ संदेश से यह नहीं कहा जा सकता कि कुछ गड़बड़ है।`)
}
/* ---------- Assistant engine: exact calculations in code; wording templated (demo engine, no live AI key) ---------- */
function answer(q) {
  const s = q.toLowerCase(), has = (...w) => w.some(k => s.includes(k)), p = parseSMS(q);
  if (detectIntent(q)) return detectReply(q);
  if (p.kind === 'otp' || p.kind === 'txn' || p.kind === 'failed' || p.kind === 'balance') return explain(p);
  if (!S.tx.length) return x('I have no recorded transactions yet. Add one or load the demo data, then ask again.', 'अभी कोई लेन-देन दर्ज नहीं है। लेन-देन जोड़िए या डेमो डेटा लोड कीजिए, फिर पूछिए।');
  const num = (q.replace(/,/g, '').match(/\d+/) || [])[0], pl = plan(), mo = mon(), top = cats(mo);
  if (has('afford', 'can i buy', 'kharid', 'खरीद', 'le sakta', 'ले सकता')) {
    if (!num) return x('Tell me the amount, for example “Can I afford ₹2000?”', 'रकम बताइए, जैसे “क्या मैं ₹2000 खर्च कर सकता हूँ?”');
    const a = +num; return a <= pl.free ? x(`You have about ${inr(bal())} recorded and ${inr(pl.ess)} set aside for upcoming essentials. That leaves ${inr(pl.free)} free, so ${inr(a)} fits and would leave ${inr(pl.free - a)}. This is a suggestion, not guaranteed advice.`, `आपके रिकॉर्ड में लगभग ${inr(bal())} हैं और ${inr(pl.ess)} आने वाले ज़रूरी खर्च के लिए अलग हैं। बचे ${inr(pl.free)}, तो ${inr(a)} का खर्च हो सकता है और ${inr(pl.free - a)} बचेंगे। यह सुझाव है, पक्की सलाह नहीं।`) :
      x(`${inr(a)} is more than the ${inr(Math.max(0, pl.free))} that is free after upcoming essentials (${inr(pl.ess)}). Buying it could leave essentials short by ${inr(a - Math.max(0, pl.free))}. It may be better to wait. Please avoid borrowing for this.`, `${inr(a)} उस रकम से ज़्यादा है जो ज़रूरी खर्च (${inr(pl.ess)}) के बाद खाली है (${inr(Math.max(0, pl.free))})। ख़रीदने पर ज़रूरी खर्च में ${inr(a - Math.max(0, pl.free))} कम पड़ सकते हैं। रुकना बेहतर हो सकता है। इसके लिए उधार न लीजिए।`)
  }
  if (has('rent', 'kiraya', 'किराया')) {
    const g = S.goals.find(g => /rent|किराया/i.test(g.name));
    if (g) { const r = Math.max(0, g.target - g.saved), d = Math.max(1, Math.round((D(g.due) - D(TODAY)) / 864e5)); return x(`Your rent goal is ${inr(g.target)} due ${fd(g.due)}. You have kept ${inr(g.saved)} aside, so ${inr(r)} is left. That is about ${inr(Math.ceil(r / d))} a day for ${d} days.`, `आपका किराया लक्ष्य ${inr(g.target)} है, ${fd(g.due)} तक। आपने ${inr(g.saved)} अलग रखे हैं, ${inr(r)} बाकी हैं। यानी ${d} दिन में करीब ${inr(Math.ceil(r / d))} रोज़।`) }
    const l = exp(S.tx).filter(o => o.category === 'Rent').sort((a, b) => a.date < b.date ? 1 : -1)[0];
    return l ? x(`Your last recorded rent was ${inr(l.amount)} on ${fd(l.date)}. Add a Rent goal in Insights to plan for the next one.`, `आपका आखिरी दर्ज किराया ${fd(l.date)} को ${inr(l.amount)} था। अगले के लिए जानकारी टैब में किराया लक्ष्य जोड़िए।`) : x('I do not see a rent payment or goal. Add a Rent goal in Insights.', 'मुझे किराये का भुगतान या लक्ष्य नहीं दिखा। जानकारी टैब में किराया लक्ष्य जोड़िए।')
  }
  if (has('save', 'bachat', 'बचत')) {
    const t = num ? +num : 500, left = Math.max(1, new Date(+TODAY.slice(0, 4), +TODAY.slice(5, 7), 0).getDate() - +TODAY.slice(8)), fx = top.filter(([c]) => ['Food', 'Shopping', 'Transfers', 'Other'].includes(c))[0];
    return x(`To save ${inr(t)} by month end, put aside about ${inr(Math.ceil(t / left))} a day for the ${left} days left.${fx ? ` Your most flexible spending is ${cn(fx[0])} at ${inr(fx[1])} this month, so ${inr(t)} is about ${Math.round(t / fx[1] * 100)}% of it.` : ''}`, `महीने के अंत तक ${inr(t)} बचाने के लिए बचे ${left} दिन में रोज़ करीब ${inr(Math.ceil(t / left))} अलग रखिए।${fx ? ` आपका सबसे लचीला खर्च ${cn(fx[0])} है, इस महीने ${inr(fx[1])}; ${inr(t)} उसका लगभग ${Math.round(t / fx[1] * 100)}% है।` : ''}`)
  }
  if (has('yesterday', 'kal', 'कल')) {
    const y = add(TODAY, -1), l = S.tx.filter(o => o.date === y); if (!l.length) return x(`No transactions are recorded for yesterday (${fd(y)}).`, `कल (${fd(y)}) का कोई लेन-देन दर्ज नहीं है।`);
    return x(`On ${fd(y)} you received ${inr(sum(inc(l)))} and spent ${inr(sum(exp(l)))}:\n`, `${fd(y)} को आपको ${inr(sum(inc(l)))} मिले और ${inr(sum(exp(l)))} खर्च हुए:\n`) + l.map(o => `• ${o.merchant || cn(o.category)}: ${o.type === 'income' ? '+' : '-'}${inr(o.amount)}`).join('\n')
  }
  if (has('why', 'kyun', 'kyon', 'क्यों')) {
    const a = wk(0), b = wk(1); if (!exp(b).length) return x('I need at least two weeks of records to compare. There is not enough data yet.', 'तुलना के लिए कम से कम दो हफ़्ते का रिकॉर्ड चाहिए। अभी डेटा काफ़ी नहीं है।');
    const ca = Object.fromEntries(cats(a)), cb = Object.fromEntries(cats(b)), d = CATS.map(c => [c, (ca[c] || 0) - (cb[c] || 0)]).sort((m, n) => n[1] - m[1])[0], t = sum(exp(a)) - sum(exp(b));
    return t <= 0 ? x(`Your spending in the last 7 days (${inr(sum(exp(a)))}) is not higher than the 7 days before (${inr(sum(exp(b)))}).`, `पिछले 7 दिन का खर्च (${inr(sum(exp(a)))}) उससे पहले के 7 दिन (${inr(sum(exp(b)))}) से ज़्यादा नहीं है।`) :
      x(`In the last 7 days you spent ${inr(sum(exp(a)))}, which is ${inr(t)} more than the 7 days before. The biggest rise is ${cn(d[0])}: ${inr(cb[d[0]] || 0)} before, ${inr(ca[d[0]] || 0)} now.`, `पिछले 7 दिन में ${inr(sum(exp(a)))} खर्च हुए, जो उससे पहले के 7 दिन से ${inr(t)} ज़्यादा है। सबसे ज़्यादा बढ़त ${cn(d[0])} में है: पहले ${inr(cb[d[0]] || 0)}, अब ${inr(ca[d[0]] || 0)}।`)
  }
  if (has('earn', 'income', 'kamai', 'कमाई', 'received', 'mile', 'मिले')) { const w = new Set(inc(mo).map(o => o.date)).size; return x(`This month you received ${inr(sum(inc(mo)))} over ${w} days with income${w ? `, about ${inr(sum(inc(mo)) / w)} per earning day` : ''}. Income changes week to week, so check the weekly view in Insights.`, `इस महीने ${w} दिन की कमाई से आपको ${inr(sum(inc(mo)))} मिले${w ? `, यानी कमाई वाले दिन औसत ${inr(sum(inc(mo)) / w)}` : ''}। कमाई हर हफ़्ते बदलती है, इसलिए जानकारी टैब में हफ़्ते का हिसाब देखिए।`) }
  if (has('where', 'most', 'kahan', 'kaha', 'कहाँ', 'कहां', 'zyada', 'ज्यादा', 'ज़्यादा', 'category')) { const T = sum(exp(mo)); return T ? x('This month you spent ' + inr(T) + '. Most went to:\n', 'इस महीने आपने ' + inr(T) + ' खर्च किए। सबसे ज़्यादा यहाँ गए:\n') + top.slice(0, 3).map(([c, v]) => `• ${cn(c)}: ${inr(v)} (${Math.round(v / T * 100)}%)`).join('\n') : x('No spending recorded this month.', 'इस महीने कोई खर्च दर्ज नहीं है।') }
  if (has('week', 'hafte', 'हफ्ते', 'हफ़्ते', 'saptah')) { const a = wk(0), b = wk(1), c = cats(a)[0], t = sum(exp(a)) - sum(exp(b)); return x(`In the last 7 days you spent ${inr(sum(exp(a)))}. The 7 days before that: ${inr(sum(exp(b)))}${exp(b).length ? ` (${inr(Math.abs(t))} ${t >= 0 ? 'more' : 'less'} now)` : ''}.${c ? ` Most went to ${cn(c[0])}: ${inr(c[1])}.` : ''}`, `पिछले 7 दिन में आपने ${inr(sum(exp(a)))} खर्च किए। उससे पहले के 7 दिन में ${inr(sum(exp(b)))}${exp(b).length ? ` (अब ${inr(Math.abs(t))} ${t >= 0 ? 'ज़्यादा' : 'कम'})` : ''}।${c ? ` सबसे ज़्यादा ${cn(c[0])} में: ${inr(c[1])}।` : ''}`) }
  if (has('plan', 'budget', 'daily', 'roz', 'रोज़', 'रोज', 'योजना', 'बजट', 'कितना')) return planText();
  return x('I can answer from your records: weekly spending, where money went, income, whether you can afford something, rent, saving, yesterday, and a spending plan. You can also paste a bank message to get it explained.', 'मैं आपके रिकॉर्ड से बता सकता हूँ: हफ़्ते का खर्च, पैसा कहाँ गया, कमाई, कोई चीज़ ले सकते हैं या नहीं, किराया, बचत, कल का हिसाब और खर्च की योजना। बैंक संदेश पेस्ट करेंगे तो उसे समझा दूँगा।')
}
/* ---------- Live OpenAI Assistant Integration ---------- */
let lastAssistantPayload = null;

async function fetchAssistantAPI(q, voice) {
  const financialContext = {
    balance: bal(),
    monthlySpending: sum(exp(mon())),
    monthlyIncome: sum(inc(mon())),
    weeklySpending: sum(exp(wk(0))),
    topCategories: cats(mon()).slice(0, 4),
    upcomingGoals: (S.goals || []).map(g => ({ name: g.name, target: g.target, saved: g.saved, due: g.due })),
    recentTransactions: (S.tx || []).slice().sort((a, b) => a.date < b.date ? 1 : -1).slice(0, 8).map(o => ({
      date: o.date,
      amount: o.amount,
      type: o.type,
      category: o.category,
      merchant: o.merchant
    }))
  };

  const payload = {
    message: q,
    user: S.user,
    financialContext,
    conversationHistory: S.chat.slice(-6)
  };
  lastAssistantPayload = { q, voice, payload };

  try {
    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      throw new Error(data.message || x('Unable to get response from AI. Please try again.', 'AI से जवाब नहीं मिल सका। कृपया पुनः प्रयास करें।'));
    }

    const reply = data.reply || '';
    S.chat.push({ r: 'ai', t: reply, model: data.model });
    S.chat = S.chat.slice(-30);
    ui.think = false;
    ui.chatErr = null;
    save();
    render();
    window.scrollTo(0, document.body.scrollHeight);
    if (voice) speak(reply);
  } catch (err) {
    ui.think = false;
    ui.chatErr = err.message || x('Connection issue. Please retry.', 'कनेक्शन की समस्या। कृपया पुनः प्रयास करें।');
    render();
    window.scrollTo(0, document.body.scrollHeight);
  }
}

function retryLastAsk() {
  if (!lastAssistantPayload) return;
  ui.chatErr = null;
  ui.think = true;
  render();
  fetchAssistantAPI(lastAssistantPayload.q, lastAssistantPayload.voice);
}

function fallbackLastAsk() {
  if (!lastAssistantPayload) return;
  const q = lastAssistantPayload.q;
  const voice = lastAssistantPayload.voice;
  ui.chatErr = null;
  ui.think = false;
  const a = answer(q);
  S.chat.push({ r: 'ai', t: a, offline: true });
  S.chat = S.chat.slice(-30);
  save();
  render();
  if (voice) speak(a);
}

function ask(q, voice, options = {}) {
  q = (q || V.q || '').trim();
  if (!q) return;
  V.q = '';
  S.chat.push({ r: 'me', t: q });
  ui.think = true;
  ui.chatErr = null;
  render();
  window.scrollTo(0, document.body.scrollHeight);

  if (typeof fetch === 'undefined' || options.sync) {
    setTimeout(() => {
      const a = answer(q);
      S.chat.push({ r: 'ai', t: a });
      S.chat = S.chat.slice(-30);
      ui.think = false;
      save();
      render();
      window.scrollTo(0, document.body.scrollHeight);
      if (voice) speak(a);
    }, 50);
    return;
  }

  fetchAssistantAPI(q, voice);
}
/* ---------- Speech ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition; let rec;
function mic() {
  if (!SR) return toast(x('Voice input is not supported in this browser. Please type your question.', 'इस ब्राउज़र में आवाज़ से पूछना उपलब्ध नहीं है। कृपया टाइप कीजिए।'));
  if (ui.listen) { rec && rec.stop(); return }
  rec = new SR(); rec.lang = S.lang === 'hi' ? 'hi-IN' : 'en-IN'; rec.interimResults = false;
  rec.onresult = e => { ui.listen = false; ask(e.results[0][0].transcript, true) };
  rec.onerror = e => { ui.listen = false; toast(/not-allowed|service/.test(e.error) ? x('Microphone permission was denied. You can type instead.', 'माइक्रोफ़ोन की अनुमति नहीं मिली। आप टाइप कर सकते हैं।') : x('Could not hear you. Please try again.', 'आवाज़ सुनाई नहीं दी। फिर कोशिश कीजिए।')); render() };
  rec.onend = () => { ui.listen = false; render() };
  try { rec.start(); ui.listen = true } catch (e) { } render()
}
function speak(t) {
  const ss = window.speechSynthesis; if (!ss) return toast(x('Speech output is not supported here.', 'इस ब्राउज़र में बोलकर सुनाना उपलब्ध नहीं है।'));
  ss.cancel(); const u = new SpeechSynthesisUtterance(t), l = S.lang === 'hi' ? 'hi-IN' : 'en-IN'; u.lang = l; const v = ss.getVoices().find(v => v.lang.replace('_', '-').startsWith(l.slice(0, 2)));
  if (v) u.voice = v; else if (S.lang === 'hi') toast(x('No Hindi voice found on this device; it may sound odd.', 'इस डिवाइस पर हिंदी आवाज़ नहीं मिली; उच्चारण अजीब हो सकता है।'));
  u.onend = u.onerror = () => { ui.speak = false; render() }; ui.speak = true; ss.speak(u); render()
}
const stopSpeak = () => { window.speechSynthesis && speechSynthesis.cancel(); ui.speak = false; render() };
/* ---------- Data actions ---------- */
function toast(m) { const e = document.createElement('div'); e.className = 'toast'; e.setAttribute('role', 'status'); e.textContent = m; document.body.appendChild(e); setTimeout(() => e.remove(), 3600) }
const dup = t => S.tx.some(o => (t.ref && o.ref === t.ref) || (o.amount === t.amount && o.date === t.date && o.type === t.type && (o.merchant || '') === (t.merchant || '')));
function addTx(t) { if (dup(t)) return false; S.tx.push({ id: uid(), desc: '', ref: '', merchant: '', status: 'confirmed', conf: 1, ...t }); save(); return true }
const INC = [[1, 650], [2, 500], [4, 700], [5, 800], [6, 450], [8, 700], [9, 600], [11, 750], [12, 500], [13, 700], [15, 900], [16, 600], [18, 650], [19, 500], [20, 700]];
const EXD = [[1, 180, 'Groceries', 'Gupta Kirana'], [2, 60, 'Transport', 'Auto fare'], [3, 250, 'Food', 'Sita Dhaba'], [5, 3000, 'Rent', 'Landlord Mr Khan'], [6, 260, 'Groceries', 'Gupta Kirana'], [7, 100, 'Transport', 'Bus pass'], [8, 90, 'Food', 'Chai Stall'], [9, 350, 'Healthcare', 'Shri Medical'], [10, 220, 'Food', 'Sita Dhaba'], [11, 1200, 'Education', 'Govt School Fees'], [12, 410, 'Groceries', 'Gupta Kirana'], [13, 640, 'Bills', 'Electricity Board'], [14, 450, 'Shopping', 'Local Market'], [15, 80, 'Transport', 'Auto fare'], [16, 900, 'Food', 'Hotel Rajdhani'], [17, 120, 'Transport', 'Auto fare'], [18, 500, 'Transfers', 'Brother Suresh'], [19, 140, 'Food', 'Chai Stall'], [20, 160, 'Food', 'Sita Dhaba']];
function loadDemo() {
  const d = n => '2026-11-' + String(n).padStart(2, '0'), B = { source: 'demo', status: 'confirmed', conf: 1, ref: '' };
  S.tx = S.tx.filter(o => o.source !== 'demo');
  INC.forEach(([n, a]) => S.tx.push({ ...B, id: uid(), amount: a, type: 'income', category: 'Income', merchant: 'Sharma Contractor', desc: 'Daily wages', date: d(n) }));
  EXD.forEach(([n, a, c, m]) => S.tx.push({ ...B, id: uid(), amount: a, type: 'expense', category: c, merchant: m, desc: '', date: d(n) }));
  S.user = {
    name: 'Rahul',
    preferredLanguage: 'hi',
    occupation: 'daily_wage_worker',
    incomeType: 'irregular',
    incomeRange: '10000_20000',
    onboardingCompleted: true,
    job: 'Daily-wage worker',
    inc: 'Irregular',
    rng: '₹10,000–20,000'
  };
  S.lang = 'hi'; S.opening = 3500; clearObDraft();
  S.goals = [{ id: uid(), name: 'Rent (December)', target: 3000, saved: 1500, due: '2026-12-05' }, { id: uid(), name: 'Mobile recharge', target: 299, saved: 0, due: '2026-11-25' }, { id: uid(), name: 'School fees', target: 1200, saved: 0, due: '2027-01-10' }, { id: uid(), name: 'Emergency savings', target: 5000, saved: 800, due: '' }];
  S.tab = 'home'; save(); render()
}
function saveManual() {
  const g = i => (document.getElementById(i) || {}).value, a = parseFloat(g('m_amt')), dt = g('m_date');
  if (!(a > 0) || !/^\d{4}-\d{2}-\d{2}$/.test(dt)) return toast(x('Enter an amount above 0 and a valid date.', '0 से ज़्यादा रकम और सही तारीख़ डालिए।'));
  const t = g('m_type'); if (!addTx({ amount: a, type: t, category: t === 'income' ? 'Income' : g('m_cat'), merchant: g('m_mer').trim(), desc: g('m_note').trim(), date: dt, source: 'manual' })) return toast(x('This transaction is already saved.', 'यह लेन-देन पहले से सेव है।'));
  V = {}; ui.sheet = null; toast(x('Transaction saved.', 'लेन-देन सेव हुआ।')); render()
}
function checkSMS() { if (!S.consent) return toast(x('Please tick the consent box first.', 'पहले सहमति वाले बॉक्स पर टिक कीजिए।')); ui.rev = parseSMS(V.sms || ''); render() }
function saveRev() {
  const g = i => document.getElementById(i).value, a = parseFloat(g('r_amt')), t = g('r_type'), dt = g('r_date');
  if (!(a > 0) || !t || !/^\d{4}-\d{2}-\d{2}$/.test(dt)) return toast(x('Please check amount, type and date.', 'रकम, प्रकार और तारीख़ जाँचिए।'));
  if (!addTx({ amount: a, type: t, category: t === 'income' ? 'Income' : g('r_cat'), merchant: g('r_mer').trim(), ref: g('r_ref').trim(), date: dt, source: 'sms', conf: ui.rev.conf, desc: ui.rev.method || '' })) return toast(x('Already saved. We skipped the duplicate.', 'पहले से सेव है। डुप्लिकेट छोड़ दिया।'));
  ui.rev = null; V.sms = ''; ui.sheet = null; toast(x('Saved and confirmed.', 'सेव और कन्फ़र्म हो गया।')); render()
}
function importCSV() {
  if (!S.consent) return toast(x('Please tick the consent box first.', 'पहले सहमति वाले बॉक्स पर टिक कीजिए।')); let n = 0, k = 0;
  (V.csv || '').split(/\r?\n/).forEach(l => {
    const c = l.split(',').map(z => z.trim()); if (!/^\d{4}-\d{2}-\d{2}$/.test(c[0])) return; const a = parseFloat(c[1]), ty = /^(income|credit)$/i.test(c[2]) ? 'income' : /^(expense|debit)$/i.test(c[2]) ? 'expense' : null;
    if (!(a > 0) || !ty || !addTx({ amount: a, type: ty, category: ty === 'income' ? 'Income' : CATS.includes(c[3]) ? c[3] : 'Other', merchant: c[4] || '', date: c[0], source: 'csv', status: 'needs_check', conf: .7 })) k++; else n++
  });
  toast(x(`Imported ${n}, skipped ${k} (invalid or duplicate).`, `${n} जोड़े, ${k} छोड़े (गलत या डुप्लिकेट)।`)); render()
}
const delTx = id => { S.tx = S.tx.filter(o => o.id !== id); save(); render() }, okTx = id => { S.tx.find(o => o.id === id).status = 'confirmed'; save(); render() };
function addGoal() {
  const g = i => document.getElementById(i).value, t = parseFloat(g('g_t')); if (!g('g_n').trim() || !(t > 0)) return toast(x('Enter a goal name and amount.', 'लक्ष्य का नाम और रकम डालिए।'));
  S.goals.push({ id: uid(), name: g('g_n').trim(), target: t, saved: Math.max(0, parseFloat(g('g_s')) || 0), due: g('g_d') }); save(); render()
}
const bump = id => { const g = S.goals.find(o => o.id === id); g.saved = Math.min(g.target, g.saved + 100); save(); render() }, delGoal = id => { S.goals = S.goals.filter(o => o.id !== id); save(); render() };
const go = (t, sh) => { S.tab = t; ui.sheet = sh || null; ui.notif = false; save(); render(); window.scrollTo(0, 0) }, setLang = l => { S.lang = l; save(); render() }, set = (o, k, v) => { o[k] = v; render() };
function brandLogo(sz = 44) {
  return `<svg viewBox="0 0 40 40" width="${sz}" height="${sz}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="BharatSaathi Logo">
    <defs>
      <linearGradient id="bs_g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3867F5"/>
        <stop offset="1" stop-color="#6544E8"/>
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="12" fill="url(#bs_g)"/>
    <path d="M12 14H28M12 19H25M14.5 14V26M21 19C24 19 25.5 21 24 25.5" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function onbTopBar(step, total = 5) {
  const pct = Math.round((step / total) * 100);
  return `
    <div class="onb-topbar">
      ${step > 1 ? `<button class="onb-back-btn" aria-label="${t('back')}" onclick="obBack()">${ico('back')}</button>` : `<div style="width:42px"></div>`}
      <div class="onb-stepper">
        <div class="onb-step-tag">${t('stepOf', { current: step, total })}</div>
        <div class="onb-segs" role="progressbar" aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${step}">${Array.from({ length: total }, (_, i) => `<i class="${i < step ? 'on' : ''}"></i>`).join('')}</div>
      </div>
      <div style="width:42px;display:flex;justify-content:flex-end">
        <span class="tag" style="background:var(--mint);color:var(--pri);font-weight:700">${S.lang.toUpperCase()}</span>
      </div>
    </div>
  `;
}

function onbStep1() {
  return `
    <main class="onb-wrap">
      <div class="onb-brand-row">
        <div class="onb-logo-mark">${brandLogo(46)}</div>
        <div>
          <div class="onb-logo-text">${t('appName')}</div>
          <div class="mut" style="font-size:12px;font-weight:600">FINANCIAL COMPANION</div>
        </div>
      </div>

      <div class="onb-hero-card">
        <h1 class="onb-title">${t('welcomeTitle')}</h1>
        <div class="onb-subtitle" style="font-weight:600;color:var(--pri)">${t('welcomeSubtitle')}</div>
        <div class="onb-subtitle" style="margin-top:-10px;font-size:14px;color:var(--mut)">${t('taglineHi')}</div>
        <p class="onb-supporting">${t('welcomeSupporting')}</p>

        <div style="margin:20px 0 10px">
          <div class="onb-feature-pill">
            <span class="onb-feature-icon">🗣️</span>
            <span>${t('welcomeFeature1')}</span>
          </div>
          <div class="onb-feature-pill">
            <span class="onb-feature-icon">📊</span>
            <span>${t('welcomeFeature2')}</span>
          </div>
          <div class="onb-feature-pill">
            <span class="onb-feature-icon">🔒</span>
            <span>${t('welcomeFeature3')}</span>
          </div>
        </div>
      </div>

      <div style="margin-top:auto">
        <button class="btn full" style="font-size:17px;min-height:54px" onclick="obNext()">${t('getStarted')}</button>
        <button class="btn sec full" style="margin-top:10px" onclick="loadDemo()">${t('tryDemoBtn')}</button>
        <p class="mut" style="font-size:12px;text-align:center;margin:14px 0 0;line-height:1.4">${t('privacyAssurance')}</p>
      </div>
    </main>
  `;
}

function onbStep2() {
  const o = ui.ob;
  const nameVal = esc(o.name || '');
  const previewName = esc((o.name || '').trim() || (S.lang === 'hi' ? 'दोस्त' : 'Friend'));
  return `
    <main class="onb-wrap">
      ${onbTopBar(2, 5)}
      <div style="margin-bottom:18px">
        <h1 class="onb-title">${t('nameTitle')}</h1>
        ${S.lang === 'en' ? `<div class="mut" style="margin:-4px 0 12px;font-size:14px">${t('nameHindiSubtitle')}</div>` : ''}
        <div class="onb-subtitle">${t('nameSubtitle')}</div>
      </div>

      ${o.error ? `<div class="validation-msg" id="ob_err"><span>⚠️</span><span>${esc(o.error)}</span></div>` : ''}

      <div class="card" style="margin-bottom:14px">
        <label for="ob_nm" class="q-label" style="display:block;margin-top:0">${t('nameLabel')}</label>
        <input id="ob_nm" value="${nameVal}" placeholder="${t('namePlaceholder')}" maxlength="40" autocomplete="name" oninput="onNameInput(this.value)" onkeydown="if(event.key==='Enter')obNext()" style="font-size:17px;font-weight:600">
        <div class="q-sub">${t('nameExample')}</div>
      </div>

      <div class="greeting-box" id="greeting_card">
        <div class="greeting-avatar">👋</div>
        <div class="sp">
          <div style="font-weight:700;font-size:16px;color:var(--pri)" id="greeting_preview_line">
            ${t('nameGreetingPreview', { name: `<span id="greeting_name">${previewName}</span>` })}
          </div>
          <div class="mut" style="font-size:13px">${t('nameGreetingSub')}</div>
        </div>
      </div>

      <div class="onb-bottom-dock">
        <button class="btn full" style="font-size:17px;min-height:52px" onclick="obNext()">${t('continue')}</button>
      </div>
    </main>
  `;
}

function onbStep3() {
  const curLang = ui.ob.preferredLanguage || S.lang || 'en';
  return `
    <main class="onb-wrap">
      ${onbTopBar(3, 5)}
      <div style="margin-bottom:18px">
        <h1 class="onb-title">${t('langTitle')}</h1>
        ${S.lang === 'en' ? `<div class="mut" style="margin:-4px 0 12px;font-size:14px">${t('langHindiSubtitle')}</div>` : ''}
        <div class="onb-subtitle">${t('langSubtitle')}</div>
      </div>

      <button class="onb-card-option${curLang === 'en' ? ' selected' : ''}" onclick="obSetLang('en')">
        <div class="onb-indicator">${curLang === 'en' ? ico('check') : ''}</div>
        <div class="sp">
          <div class="onb-card-title">${t('langEnglishNative')}</div>
          <div class="onb-card-sub">${t('langEnglishDesc')}</div>
        </div>
        <span class="tag" style="background:#fff;border:1px solid var(--line);font-weight:700">EN</span>
      </button>

      <button class="onb-card-option${curLang === 'hi' ? ' selected' : ''}" onclick="obSetLang('hi')">
        <div class="onb-indicator">${curLang === 'hi' ? ico('check') : ''}</div>
        <div class="sp">
          <div class="onb-card-title">${t('langHindiNative')}</div>
          <div class="onb-card-sub">${t('langHindiDesc')}</div>
        </div>
        <span class="tag" style="background:#fff;border:1px solid var(--line);font-weight:700">हिं</span>
      </button>

      <div class="info-callout" style="margin-top:16px">
        <span>💡</span>
        <div>${t('langNotice')}</div>
      </div>

      <div class="onb-bottom-dock">
        <button class="btn full" style="font-size:17px;min-height:52px" onclick="obNext()">${t('continue')}</button>
      </div>
    </main>
  `;
}

function onbStep4() {
  const o = ui.ob;
  const curOcc = o.occupation || 'daily_wage_worker';
  const curInc = o.incomeType || 'irregular';

  return `
    <main class="onb-wrap">
      ${onbTopBar(4, 5)}
      <div style="margin-bottom:16px">
        <h1 class="onb-title">${t('workTitle')}</h1>
        ${S.lang === 'en' ? `<div class="mut" style="margin:-4px 0 12px;font-size:14px">${t('workHindiSubtitle')}</div>` : ''}
        <div class="onb-subtitle">${t('workSubtitle')}</div>
      </div>

      <div class="q-label" style="margin-top:0">${t('qOccupation')}</div>
      <div class="onb-grid-2">
        ${OCCUPATIONS.map(occ => `
          <button class="onb-occ-card${curOcc === occ.id ? ' selected' : ''}" onclick="obSetOcc('${occ.id}')">
            <span class="onb-occ-icon">${occ.icon}</span>
            <div class="onb-occ-label">${esc(getOccLabel(occ.id, S.lang))}</div>
            <div class="mut" style="font-size:11px;line-height:1.25">${esc(t(occ.subKey))}</div>
            ${curOcc === occ.id ? `<span style="position:absolute;top:8px;right:8px;color:var(--acc);font-size:12px;font-weight:800">${ico('check')}</span>` : ''}
          </button>
        `).join('')}
      </div>

      <div class="q-label">${t('qIncomeType')}</div>
      <div>
        ${INCOME_TYPES.map(it => `
          <button class="onb-card-option${curInc === it.id ? ' selected' : ''}" onclick="obSetIncType('${it.id}')">
            <div class="onb-indicator">${curInc === it.id ? ico('check') : ''}</div>
            <div class="sp">
              <div class="onb-card-title">${it.icon} ${esc(t(it.key))}</div>
              <div class="onb-card-sub">${esc(t(it.descKey))}</div>
            </div>
          </button>
        `).join('')}
      </div>

      <div class="onb-bottom-dock">
        <button class="btn full" style="font-size:17px;min-height:52px" onclick="obNext()">${t('continue')}</button>
      </div>
    </main>
  `;
}

function onbStep5() {
  const o = ui.ob;
  const curRng = o.incomeRange || '10000_20000';

  return `
    <main class="onb-wrap">
      ${onbTopBar(5, 5)}
      <div style="margin-bottom:16px">
        <h1 class="onb-title">${t('rangeTitle')}</h1>
        ${S.lang === 'en' ? `<div class="mut" style="margin:-4px 0 12px;font-size:14px">${t('rangeHindiSubtitle')}</div>` : ''}
        <div class="onb-subtitle">${t('rangeSubtitle')}</div>
      </div>

      <div class="info-callout">
        <span>💡</span>
        <div>${t('rangeOptionalNotice')}</div>
      </div>

      <div>
        ${INCOME_RANGES.map(rng => `
          <button class="onb-card-option${curRng === rng.id ? ' selected' : ''}" onclick="obSetRange('${rng.id}')">
            <div class="onb-indicator">${curRng === rng.id ? ico('check') : ''}</div>
            <div class="sp">
              <div class="onb-card-title" style="font-size:15.5px">${esc(getRangeLabel(rng.id, S.lang))}</div>
            </div>
          </button>
        `).join('')}
      </div>

      <div class="onb-bottom-dock">
        <button class="btn full" style="font-size:17px;min-height:52px" onclick="obNext()">${t('completeSetup')}</button>
      </div>
    </main>
  `;
}

function onbStep6() {
  const o = ui.ob;
  const displayName = esc((o.name || '').trim() || (S.lang === 'hi' ? 'दोस्त' : 'Friend'));
  const occLabel = esc(getOccLabel(o.occupation, S.lang));
  const incLabel = esc(getIncTypeLabel(o.incomeType, S.lang));
  const rngLabel = esc(getRangeLabel(o.incomeRange, S.lang));
  const langLabel = o.preferredLanguage === 'hi' ? 'हिंदी (Hindi)' : 'English';

  return `
    <main class="onb-wrap">
      <div class="onb-topbar">
        <button class="onb-back-btn" aria-label="${t('back')}" onclick="obBack()">${ico('back')}</button>
        <div style="flex:1;text-align:center;font-weight:700;color:var(--acc);font-size:14px">✨ ${t('completeSetup')}</div>
        <div style="width:42px"></div>
      </div>

      <div class="success-hero">
        <div class="success-ring">${ico('check')}</div>
        <h1 class="onb-title">${t('successTitle', { name: displayName })}</h1>
        <div class="onb-subtitle" style="font-size:16px;color:var(--mut)">${t('successSubtitle')}</div>
      </div>

      <div class="success-summary">
        <div style="font-weight:700;font-size:15px;color:var(--pri);margin-bottom:8px">📋 ${t('successSummaryTitle')}</div>
        <div class="summary-row">
          <span class="summary-label">${t('summaryName')}</span>
          <span class="summary-val">${displayName}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">${t('summaryLanguage')}</span>
          <span class="summary-val">${langLabel}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">${t('summaryWork')}</span>
          <span class="summary-val">${occLabel}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">${t('summaryIncomeType')}</span>
          <span class="summary-val">${incLabel}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">${t('summaryIncomeRange')}</span>
          <span class="summary-val">${rngLabel}</span>
        </div>
      </div>

      <div class="info-callout" style="margin-bottom:20px">
        <span>🔒</span>
        <div>${t('welcomeFeature3')}</div>
      </div>

      <div class="onb-bottom-dock">
        <button class="btn full" style="font-size:17px;min-height:54px" onclick="finishOnboarding()">${t('exploreApp')}</button>
      </div>
    </main>
  `;
}

function onNameInput(val) {
  ui.ob.name = val;
  if (ui.ob.error) {
    ui.ob.error = '';
    const err = document.getElementById('ob_err');
    if (err) err.style.display = 'none';
  }
  saveObDraft();
  const nameEl = document.getElementById('greeting_name');
  if (nameEl) {
    nameEl.textContent = val.trim() || (S.lang === 'hi' ? 'दोस्त' : 'Friend');
  }
}

function obNext() {
  const step = ui.ob.step || 1;
  if (step === 1) {
    ui.ob.step = 2;
    saveObDraft();
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (step === 2) {
    const nm = (ui.ob.name || '').trim();
    if (!nm) {
      ui.ob.error = t('nameValidationEmpty');
      render();
      const inp = document.getElementById('ob_nm');
      if (inp) inp.focus();
      return;
    }
    ui.ob.name = nm;
    ui.ob.error = '';
    ui.ob.step = 3;
    saveObDraft();
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (step === 3) {
    S.lang = ui.ob.preferredLanguage || S.lang || 'en';
    ui.ob.step = 4;
    saveObDraft();
    save();
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (step === 4) {
    ui.ob.step = 5;
    saveObDraft();
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (step === 5) {
    ui.ob.step = 6;
    saveObDraft();
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (step === 6) {
    finishOnboarding();
  }
}

function obBack() {
  if (ui.ob.step > 1) {
    ui.ob.step--;
    ui.ob.error = '';
    saveObDraft();
    render();
    window.scrollTo(0, 0);
  }
}

function obSetLang(l) {
  ui.ob.preferredLanguage = l;
  S.lang = l;
  saveObDraft();
  save();
  render();
}

function obSetOcc(occ) {
  ui.ob.occupation = occ;
  saveObDraft();
  render();
}

function obSetIncType(t) {
  ui.ob.incomeType = t;
  saveObDraft();
  render();
}

function obSetRange(rng) {
  ui.ob.incomeRange = rng;
  saveObDraft();
  render();
}

function finishOnboarding() {
  const nm = (ui.ob.name || '').trim() || (S.lang === 'hi' ? 'दोस्त' : 'Friend');
  const lang = ui.ob.preferredLanguage || S.lang || 'en';
  const occ = ui.ob.occupation || 'daily_wage_worker';
  const incType = ui.ob.incomeType || 'irregular';
  const rng = ui.ob.incomeRange || '10000_20000';

  S.user = {
    name: nm,
    preferredLanguage: lang,
    occupation: occ,
    incomeType: incType,
    incomeRange: rng,
    onboardingCompleted: true,
    job: getOccLabel(occ, 'en'),
    inc: getIncTypeLabel(incType, 'en'),
    rng: getRangeLabel(rng, 'en')
  };
  S.lang = lang;
  clearObDraft();
  S.tab = 'home';
  save();
  render();
  toast(t('welcomeGreetingToast', { name: S.user.name }));
}

function restartOnboarding() {
  ui.ob = defaultObDraft();
  if (S.user) {
    ui.ob.name = S.user.name || '';
    ui.ob.preferredLanguage = S.user.preferredLanguage || S.lang || 'en';
    ui.ob.occupation = S.user.occupation || 'daily_wage_worker';
    ui.ob.incomeType = S.user.incomeType || 'irregular';
    ui.ob.incomeRange = S.user.incomeRange || '10000_20000';
    S.user.onboardingCompleted = false;
    save();
  }
  ui.ob.step = 1;
  saveObDraft();
  render();
  window.scrollTo(0, 0);
}

function onb() {
  const s = ui.ob.step || 1;
  if (s === 1) return onbStep1();
  if (s === 2) return onbStep2();
  if (s === 3) return onbStep3();
  if (s === 4) return onbStep4();
  if (s === 5) return onbStep5();
  if (s === 6) return onbStep6();
  return onbStep1();
}

/* ---------- Shell helpers (navigation, charts, dialogs) ---------- */
const NAV = () => [['home', x('Home', 'होम'), 'home'], ['txns', x('Transactions', 'लेन-देन'), 'list'], ['detect', x('Detective', 'जासूस'), 'detective'], ['ask', x('Assistant', 'सहायक'), 'chat'], ['ins', x('Insights', 'जानकारी'), 'chart'], ['me', x('Profile', 'प्रोफ़ाइल'), 'user']];
const PAGE_NAME = () => ({ home: x('Dashboard', 'डैशबोर्ड'), txns: x('Transactions', 'लेन-देन'), detect: x('Money Detective', 'मनी डिटेक्टिव'), ask: x('Assistant', 'सहायक'), ins: x('Insights', 'जानकारी'), me: x('Profile', 'प्रोफ़ाइल') });
const kfmt = n => n >= 100000 ? (n / 100000).toFixed(1).replace('.0', '') + 'L' : n >= 1000 ? (n / 1000).toFixed(1).replace('.0', '') + 'k' : String(Math.round(n));
const niceMax = v => { const p = Math.pow(10, Math.floor(Math.log10(Math.max(v, 1)))), n = v / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 4 ? 4 : n <= 8 ? 8 : 10) * p };
const weeks = () => [3, 2, 1, 0].map(n => ({ l: fd(add(TODAY, -6 - 7 * n)), e: sum(exp(wk(n))), i: sum(inc(wk(n))) }));
const lng = () => S.lang === 'hi' ? 'hi-IN' : 'en-IN';
const emptyMini = m => `<div class="empty-mini">${m}</div>`;
const chipI = (ic, l, on, fn) => `<button class="chip${on ? ' on' : ''}" aria-pressed="${!!on}" onclick="${fn}">${ico(ic)}${esc(l)}</button>`;

/* Grouped bars: received vs spent (two series, legend always shown) */
function barChart(W) {
  const raw = Math.max(0, ...W.flatMap(w => [w.e, w.i]));
  if (!raw) return emptyMini(x('No income or spending recorded in these weeks yet.', 'इन हफ़्तों में अभी कोई कमाई या खर्च दर्ज नहीं।'));
  const mx = niceMax(raw), tk = [1, .75, .5, .25, 0].map(f => mx * f);
  return `<div class="bc" role="img" aria-label="${x('Weekly income and spending bars', 'हफ़्तेवार कमाई और खर्च')}"><div class="bc-y">${tk.map(v => `<span>₹${kfmt(v)}</span>`).join('')}</div><div class="bc-plot"><div class="bc-grid">${tk.map(() => '<i></i>').join('')}</div>${W.map(w => `<div class="bc-col" title="${esc(w.l)} · ${x('Received', 'मिले')} ${inr(w.i)} · ${x('Spent', 'खर्च')} ${inr(w.e)}"><i class="b i" style="height:${w.i / mx * 100}%"></i><i class="b e" style="height:${w.e / mx * 100}%"></i><span class="l">${esc(w.l)}</span></div>`).join('')}</div></div>
 <div class="legend" style="margin-top:var(--s3)"><span><i style="background:var(--chart-inc)"></i>${x('Received', 'मिले')}</span><span><i style="background:var(--chart-exp)"></i>${x('Spent', 'खर्च')}</span></div>`
}

/* Smooth line: daily spending, last 7 days */
function lineChart(v) {
  const mx = Math.max(0, ...v);
  if (!mx) return emptyMini(x('No spending in the last 7 days.', 'पिछले 7 दिन में कोई खर्च नहीं।'));
  const W = 300, H = 100, pad = 10, n = v.length, px = i => i / (n - 1) * W, py = a => H - pad - (a / mx) * (H - pad * 2), P = v.map((a, i) => [px(i), py(a)]);
  let d = `M${P[0][0]},${P[0][1]}`; for (let i = 0; i < n - 1; i++) { const p0 = P[i - 1] || P[i], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2] || p2; d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}` }
  const last = P[n - 1], lab = [6, 5, 4, 3, 2, 1, 0].map(k => D(add(TODAY, -k)).toLocaleDateString(lng(), { weekday: 'short' }));
  return `<div class="lc" role="img" aria-label="${x('Daily spending, last 7 days', 'पिछले 7 दिन का रोज़ का खर्च')}"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><defs><linearGradient id="lcg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4654E8" stop-opacity=".22"/><stop offset="1" stop-color="#4654E8" stop-opacity="0"/></linearGradient></defs><path d="${d} L${W},${H} L0,${H} Z" fill="url(#lcg)"/><path d="${d}" fill="none" stroke="#4654E8" stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg><i class="pt" style="left:${last[0] / W * 100}%;top:${last[1] / H * 100}%"></i></div><div class="lc-x">${lab.map(l => `<span>${l}</span>`).join('')}</div>`
}

/* Ring: share of this month's income that was kept */
function donut(I, E) {
  if (I <= 0) return emptyMini(x('Add income to see how much you keep each month.', 'हर महीने आप कितना बचाते हैं, यह देखने के लिए कमाई जोड़िए।'));
  const kept = I - E, pct = Math.max(0, Math.min(100, Math.round(kept / I * 100))), C = 2 * Math.PI * 52;
  return `<div class="donut" role="img" aria-label="${x('Kept this month', 'इस महीने बचे')}: ${inr(kept)}"><svg viewBox="0 0 120 120"><defs><linearGradient id="dg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3867F5"/><stop offset="1" stop-color="#6544E8"/></linearGradient></defs><circle cx="60" cy="60" r="52" fill="none" stroke="#E7EEFF" stroke-width="10"/><circle cx="60" cy="60" r="52" fill="none" stroke="url(#dg)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - pct / 100)).toFixed(1)}"/></svg><div class="donut-c"><b class="amt" style="color:${kept < 0 ? 'var(--neg)' : 'var(--tx)'}">${kept < 0 ? '−' : ''}${inr(Math.abs(kept))}</b><span class="pill">${kept < 0 ? x('Over income', 'कमाई से ज़्यादा') : pct + '% ' + x('of income', 'कमाई का')}</span></div></div>
 <div class="legend" style="justify-content:center"><span><i style="background:var(--chart-inc)"></i>${x('Received', 'मिले')} ${inr(I)}</span><span><i style="background:var(--chart-exp)"></i>${x('Spent', 'खर्च')} ${inr(E)}</span></div>`
}

/* Notifications: derived only from the user's own records */
function notifs() {
  const L = [], nc = S.tx.filter(o => o.status === 'needs_check').length;
  if (nc) L.push(['alert', x(`${nc} transaction${nc > 1 ? 's' : ''} need a quick check`, `${nc} लेन-देन जाँचने हैं`), x('Open Transactions', 'लेन-देन खोलिए'), "go('txns')"]);
  plan().up.filter(g => g.due <= add(TODAY, 7)).forEach(g => L.push(['cal', `${esc(g.name)} · ${inr(g.target - g.saved)}`, x('Due ', 'आखिरी तारीख़ ') + fd(g.due), "go('ins')"]));
  if (S.tx.some(o => o.source === 'demo')) L.push(['info', x('Showing demo data', 'डेमो डेटा दिख रहा है'), x('Synthetic transactions for a fictional user', 'काल्पनिक उपयोगकर्ता का नकली डेटा'), "go('me')"]);
  return L
}
function topbar() {
  const n = notifs(), nm = (S.user.name || 'U').trim(), first = nm.split(/\s+/)[0], date = D(TODAY).toLocaleDateString(lng(), { weekday: 'long', day: 'numeric', month: 'long' });
  return `<header class="topbar"><div class="tb-brand">${brandLogo(34)}<b>${t('appName')}</b></div><div class="tb-ctx"><span class="tb-page">${PAGE_NAME()[S.tab] || ''}</span><span class="tb-sub">${S.tab === 'home' ? date : x('Namaste', 'नमस्ते') + ', ' + esc(first) + ' · ' + date}</span></div>
 <div class="tb-actions"><div class="lang-pill" role="group" aria-label="${x('Language', 'भाषा')}"><button class="${S.lang === 'en' ? 'on' : ''}" aria-pressed="${S.lang === 'en'}" onclick="setLang('en')">EN</button><button class="${S.lang === 'hi' ? 'on' : ''}" aria-pressed="${S.lang === 'hi'}" onclick="setLang('hi')">हिं</button></div>
 <button class="icon-btn" aria-label="${x('Notifications', 'सूचनाएँ')}" aria-expanded="${!!ui.notif}" onclick="ui.notif=!ui.notif;render()">${ico('bell')}${n.length ? '<span class="dot"></span>' : ''}</button>
 <button class="avatar" aria-label="${x('Profile', 'प्रोफ़ाइल')}" onclick="go('me')">${esc(nm[0].toUpperCase())}</button></div>
 ${ui.notif ? `<div class="scrim" onclick="ui.notif=false;render()"></div><div class="notif" role="dialog" aria-label="${x('Notifications', 'सूचनाएँ')}"><h4>${x('Notifications', 'सूचनाएँ')}</h4>${n.length ? n.map(([i, a, b, f]) => `<button onclick="ui.notif=false;${f}"><span class="n-ic">${ico(i)}</span><span><div class="n-t">${a}</div><div class="n-s">${b}</div></span></button>`).join('') : `<div class="n-empty">${x('You are all caught up.', 'सब कुछ ठीक है, कोई नई सूचना नहीं।')}</div>`}</div>` : ''}</header>`
}
function sidebar() {
  return `<aside class="sb"><div class="sb-brand">${brandLogo(42)}<div><b>BharatSaathi</b><small>${x('Finance companion', 'वित्तीय साथी')}</small></div></div><nav class="sb-nav" aria-label="Main">${NAV().map(([k, l, i]) => `<button class="${S.tab === k ? 'on' : ''}" aria-current="${S.tab === k ? 'page' : 'false'}" onclick="go('${k}')" title="${esc(l)}">${ico(i)}<span>${l}</span></button>`).join('')}</nav>
 <div class="sb-foot"><div class="trust"><div class="trust-ic">${ico('shield')}</div><b>${x('Private by design', 'निजता पहले')}</b><p>${x('Your records stay on this device. We never ask for your UPI PIN or OTP.', 'आपके रिकॉर्ड इसी डिवाइस पर रहते हैं। हम UPI PIN या OTP कभी नहीं माँगते।')}</p></div><div class="ver">v1.0 · ${x('Demo engine', 'डेमो इंजन')}</div></div></aside>`
}
const bottomNav = () => `<nav class="bnav" aria-label="Main">${NAV().map(([k, l, i]) => `<button class="${S.tab === k ? 'on' : ''}" aria-current="${S.tab === k ? 'page' : 'false'}" onclick="go('${k}')">${ico(i)}<span>${l}</span></button>`).join('')}</nav>`;

/* Consistent confirmation dialog (replaces native confirm) */
let dlgCb = null;
function confirmDlg(title, msg, ok, cb, safe) { ui.dlg = { title, msg, ok, safe: !!safe }; dlgCb = cb; render(); setTimeout(() => { const b = document.getElementById('dlg_cancel'); b && b.focus && b.focus() }, 30) }
function dlgClose(yes) {
  const fin = () => { const cb = dlgCb; ui.dlg = null; dlgCb = null; render(); if (yes && cb) cb() }, el = document.getElementById('dlg_ov');
  if (el && el.classList) { el.classList.add('out'); setTimeout(fin, 140) } else fin()
}
const dialogHtml = () => ui.dlg ? `<div class="dlg-ov" id="dlg_ov" onclick="if(event.target===this)dlgClose(false)"><div class="dlg" role="alertdialog" aria-modal="true" aria-labelledby="dlg_t"><div class="d-ic" ${ui.dlg.safe ? 'style="background:var(--soft-blue);color:var(--pri-blue)"' : ''}>${ico(ui.dlg.safe ? 'info' : 'alert')}</div><h3 id="dlg_t">${esc(ui.dlg.title)}</h3><p>${esc(ui.dlg.msg)}</p><div class="row"><button class="btn sec sp" id="dlg_cancel" onclick="dlgClose(false)">${t('cancel')}</button><button class="btn ${ui.dlg.safe ? '' : 'danger '}sp" onclick="dlgClose(true)">${esc(ui.dlg.ok)}</button></div></div></div>` : '';
function tryDemo() { if (S.tx.some(o => o.source !== 'demo')) confirmDlg(x('Load demo data?', 'डेमो डेटा लोड करें?'), x('This switches your profile to a fictional demo user (Rahul). Your own transactions are kept, but your name and language change.', 'इससे आपकी प्रोफ़ाइल काल्पनिक डेमो उपयोगकर्ता (राहुल) में बदल जाएगी। आपके अपने लेन-देन रहेंगे, पर नाम और भाषा बदल जाएँगे।'), x('Load demo', 'डेमो लोड करें'), loadDemo, true); else loadDemo() }

/* ---------- Views ---------- */
const chip = (l, on, fn) => `<button class="chip${on ? ' on' : ''}" aria-pressed="${!!on}" onclick="${fn}">${esc(l)}</button>`;
const txRow = (o, act) => `<div class="tx row"><div class="ic" aria-hidden="true">${CH[o.category] ? CH[o.category][2] : '📦'}</div><div class="sp"><div>${esc(o.merchant || cn(o.category))}</div><div class="mut"><span>${fd(o.date)} · ${esc(cn(o.category))}</span>${o.source === 'demo' ? `<span class="tag">${x('Demo', 'डेमो')}</span>` : o.status === 'needs_check' ? `<span class="tag w">${x('Please check', 'जाँचिए')}</span>` : ''}</div></div><div class="amt ${o.type === 'income' ? 'pos' : 'neg'}">${o.type === 'income' ? '+' : '−'}${inr(o.amount)}</div>${act || ''}</div>`;
const qaHtml = () => `<div class="qa">${[['send', x('Ask AI', 'AI पूछें'), "go('ask')"], ['sms', x('Read SMS', 'SMS पढ़ें'), "go('txns','sms')"], ['plus', x('Add', 'जोड़ें'), "go('txns','manual')"], ['play', x('Demo data', 'डेमो डेटा'), 'tryDemo()']].map(([i, l, f]) => `<button class="qa-btn" onclick="${f}"><span class="qa-ic">${ico(i)}</span><span class="qa-l">${l}</span></button>`).join('')}</div>`;
function recentHtml(n) {
  const l = S.tx.slice().sort((a, b) => a.date < b.date ? 1 : -1).slice(0, n || 5);
  if (!l.length) return emptyMini(x('No transactions yet. Add one or load demo data.', 'अभी कोई लेन-देन नहीं। एक जोड़िए या डेमो डेटा लोड कीजिए।'));
  let g = '', out = ''; l.forEach(o => { const k = o.date === TODAY ? x('Today', 'आज') : o.date === add(TODAY, -1) ? x('Yesterday', 'कल') : x('Earlier', 'पहले'); if (k !== g) { g = k; out += `<div class="grp">${k}</div>` } out += txRow(o) }); return out
}
const recentCard = cls => `<section class="card ${cls}"><div class="card-h"><span class="card-t">${x('Recent transactions', 'हाल के लेन-देन')}</span><button class="link-btn" onclick="go('txns')">${x('See all', 'सभी देखें')}</button></div>${recentHtml()}</section>`;

function home() {
  const m = mon(), I = sum(inc(m)), E = sum(exp(m)), a = wk(0), b = wk(1), p = plan(), c = cats(a)[0], demo = S.tx.some(o => o.source === 'demo');
  const sm = !S.tx.length ? x('Add your first transaction to see a summary here.', 'यहाँ सारांश देखने के लिए पहला लेन-देन जोड़िए।') : x(`In the last 7 days you spent ${inr(sum(exp(a)))}${exp(b).length ? ` (${inr(Math.abs(sum(exp(a)) - sum(exp(b))))} ${sum(exp(a)) >= sum(exp(b)) ? 'more' : 'less'} than the week before)` : ''}.${c ? ` Most went to ${cn(c[0])}.` : ''}`, `पिछले 7 दिन में आपने ${inr(sum(exp(a)))} खर्च किए${exp(b).length ? ` (पिछले हफ़्ते से ${inr(Math.abs(sum(exp(a)) - sum(exp(b))))} ${sum(exp(a)) >= sum(exp(b)) ? 'ज़्यादा' : 'कम'})` : ''}।${c ? ` सबसे ज़्यादा ${cn(c[0])} में।` : ''}`);
  const tip = S.user.incomeType === 'irregular'
    ? x('You have irregular income. Keep a reserve buffer on good earning days.', 'आपकी कमाई अनियमित है। अच्छे दिनों में आगे के लिए रिज़र्व बफ़र रखें।')
    : S.user.incomeType === 'fixed'
      ? x('Fixed salary detected. Setting essentials aside first keeps you on budget.', 'तय वेतन है। सैलरी क्रेडिट होते ही ज़रूरी खर्च पहले अलग रखें।')
      : x('Mixed income pattern. Use fixed salary for essentials and variable pay for savings.', 'मिली-जुली कमाई है। तय वेतन से घर चलाएँ और अतिरिक्त कमाई से बचत बढ़ाएँ।');
  const mask = v => ui.hide ? '₹ ••••••' : inr(v), dv = [6, 5, 4, 3, 2, 1, 0].map(n => sum(exp(S.tx.filter(o => o.date === add(TODAY, -n))))), wt = dv.reduce((s, v) => s + v, 0), occ = getOccLabel(S.user.occupation, S.lang);
  return `<div class="home-grid"><div class="home-main">
  <div class="h-title"><h1>${x('Namaste', 'नमस्ते')}, ${esc(S.user.name)}!</h1><p class="pg-sub" style="margin:0">${sm}</p></div>
  ${demo ? `<div class="warn h-demo">${ico('info')}<span>${x('Showing synthetic demo data for a fictional user.', 'यह एक काल्पनिक उपयोगकर्ता का नकली डेमो डेटा है।')}</span></div>` : ''}
  <section class="hero h-hero">
   <svg class="hero-wave-svg" viewBox="0 0 200 100" fill="none" aria-hidden="true"><path d="M0 60C50 20 80 80 130 40C160 20 180 70 200 50V100H0Z" fill="white"/></svg>
   <div class="hero-top-row"><div class="hero-bal-label"><span>${x('Balance, from your records', 'बैलेंस, आपके रिकॉर्ड से')}</span><button class="eye" aria-label="${ui.hide ? x('Show balance', 'बैलेंस दिखाएँ') : x('Hide balance', 'बैलेंस छिपाएँ')}" aria-pressed="${!!ui.hide}" onclick="ui.hide=!ui.hide;render()">${ico(ui.hide ? 'eyeoff' : 'eye')}</button></div><div class="hero-status-pill">${ico('lock')}${demo ? x('Demo data', 'डेमो डेटा') : x('On this device', 'इसी डिवाइस पर')}</div></div>
   <div class="big amt">${mask(bal())}</div>
   <div class="hero-split"><div><small>${x('Received this month', 'इस महीने मिले')}</small><b class="amt">${mask(I)}</b></div><div><small>${x('Spent this month', 'इस महीने खर्च')}</small><b class="amt">${mask(E)}</b></div></div>
  </section>
  <section class="card in-main h-actions">${qaHtml()}</section>
  <div class="stats h-overview">
   <div class="stat inc"><div class="stat-h"><i style="color:var(--pos)">${ico('up')}</i>${x('Income', 'कमाई')}</div><div class="stat-v amt">${inr(I)}</div><div class="stat-n mut">${x('This month', 'इस महीने')}</div></div>
   <div class="stat exp"><div class="stat-h"><i style="color:var(--neg)">${ico('down')}</i>${x('Expenses', 'खर्च')}</div><div class="stat-v amt">${inr(E)}</div><div class="stat-n mut">${x('This month', 'इस महीने')}</div></div>
   <div class="stat sav"><div class="stat-h"><i style="color:var(--royal-blue)">${ico('wallet')}</i>${x('Savings', 'बचत')}</div><div class="stat-v amt">${inr(Math.max(0, bal()))}</div><div class="stat-n" style="color:${p.free >= 0 ? 'var(--pos)' : 'var(--neg)'}">${p.free >= 0 ? x('On track', 'सही राह पर') : x('Short', 'कम')}</div></div>
  </div>
  <div class="dt-entry h-detective"><div class="dt-badge">${ico('detective')}</div><div class="sp"><div class="t">${x('AI Money Detective', 'AI मनी डिटेक्टिव')}</div><div class="d">${x('Confused by a bank message? Paste it and I will explain it in simple words.', 'बैंक का संदेश समझ नहीं आया? पेस्ट कीजिए, मैं आसान भाषा में समझा दूँगा।')}</div><button class="btn sm" onclick="openDetective()">${x('Understand a transaction', 'लेन-देन समझिए')}</button></div></div>
  <div class="ai-insights-banner h-insight" role="button" tabindex="0" onclick="go('ask')" onkeydown="if(event.key==='Enter')go('ask')"><div class="ai-insights-icon">${ico('chat')}</div><div class="sp"><div class="ai-eyebrow">${x('AI financial insight', 'AI वित्तीय समझ')}</div><div style="font-weight:700;font-size:14.5px;line-height:1.4;margin:2px 0">${tip}</div><div class="mut" style="font-size:12.5px">${x('Ask the assistant for a spending plan', 'खर्च की योजना के लिए सहायक से पूछिए')} ›</div></div></div>
  ${recentCard('in-main h-recent')}
  <section class="card h-trend lift"><div class="card-h"><span class="card-t">${x('Spending, last 7 days', 'खर्च, पिछले 7 दिन')}</span></div><div class="lc-head"><b class="amt">${inr(wt)}</b><span class="mut">${x('in total', 'कुल')}</span></div>${lineChart(dv)}</section>
  <section class="card h-history lift"><div class="card-h"><span class="card-t">${x('Income vs spending', 'कमाई बनाम खर्च')}</span><button class="link-btn" onclick="go('ins')">${x('Details', 'विवरण')}</button></div>${barChart(weeks())}</section>
  <section class="card h-eff lift"><div class="card-h"><span class="card-t">${x('Kept this month', 'इस महीने बचे')}</span></div>${donut(I, E)}</section>
  <section class="card h-up"><div class="card-h"><span class="card-t">${x('Coming up', 'आने वाले खर्च')}</span><button class="link-btn" onclick="go('ins')">${x('Add goal', 'लक्ष्य जोड़ें')}</button></div>${p.up.length ? p.up.map(g => `<div class="row tx"><div class="ic">${ico('cal')}</div><div class="sp"><div>${esc(g.name)}</div><div class="mut">${fd(g.due)}</div></div><b class="amt">${inr(g.target - g.saved)}</b></div>`).join('') + `<p class="mut" style="margin:var(--s3) 0 0">${x('About', 'करीब')} ${inr(p.daily)} ${x('a day is free after setting these aside.', 'रोज़ खाली हैं, इन्हें अलग रखने के बाद।')}</p>` : emptyMini(x('No upcoming expenses. Add goals in Insights.', 'कोई आने वाला खर्च नहीं। जानकारी टैब में लक्ष्य जोड़िए।'))}</section>
 </div>
 <aside class="home-rail"><section class="card r-profile"><button class="avatar lg" style="margin:0 auto" aria-label="${x('Profile', 'प्रोफ़ाइल')}" onclick="go('me')">${esc((S.user.name || 'U').trim()[0].toUpperCase())}</button><div class="nm">${esc(S.user.name)}</div><div class="rl">${esc(occ)}</div><div style="margin-top:var(--s5)">${qaHtml()}</div></section>${recentCard('')}</aside></div>`
}

function txns() {
  const sh = ui.sheet, r = ui.rev, l = S.tx.filter(o => ui.f === 'all' || o.type === ui.f).sort((a, b) => a.date < b.date ? 1 : -1), V_ = i => esc(V[i] || '');
  const cons = `<label style="display:flex;gap:10px;align-items:flex-start"><input type="checkbox" style="width:22px;min-height:22px;margin:2px 0" ${S.consent ? 'checked' : ''} onchange="S.consent=this.checked;save()"><span>${x('I agree to let this app read the messages or files I paste, on this device only. I will never paste my UPI PIN, OTP or passwords.', 'मैं सहमत हूँ कि यह ऐप मेरे पेस्ट किए संदेश या फ़ाइल सिर्फ़ इसी डिवाइस पर पढ़े। मैं UPI PIN, OTP या पासवर्ड कभी पेस्ट नहीं करूँगा।')}</span></label>`;
  let panel = '';
  if (sh === 'manual') panel = `<div class="card"><label>${x('Amount (₹)', 'रकम (₹)')}</label><input id="m_amt" type="number" inputmode="decimal" min="0"><label>${x('Type', 'प्रकार')}</label><select id="m_type"><option value="expense">${x('Expense (money out)', 'खर्च (पैसे गए)')}</option><option value="income">${x('Income (money in)', 'कमाई (पैसे आए)')}</option></select><label>${x('Category (for expenses)', 'श्रेणी (खर्च के लिए)')}</label><select id="m_cat">${CATS.map(c => `<option value="${c}">${cn(c)}</option>`).join('')}</select><label>${x('Shop or person', 'दुकान या व्यक्ति')}</label><input id="m_mer" maxlength="40"><label>${x('Date', 'तारीख़')}</label><input id="m_date" type="date" value="${TODAY}"><label>${x('Note', 'नोट')}</label><input id="m_note" maxlength="60"><button class="btn full" onclick="saveManual()">${x('Save transaction', 'लेन-देन सेव करें')}</button></div>`;
  if (sh === 'sms') panel = `<div class="card">${cons}<label for="sms">${x('Paste a bank SMS', 'बैंक SMS पेस्ट कीजिए')}</label><textarea id="sms" rows="4" oninput="V.sms=this.value">${V_('sms')}</textarea><div>${[['Debit', 'Your A/c XX1234 is debited by Rs.250.00 on 20-Nov-2026 to GUPTA KIRANA. UPI Ref: 412345678901.'], ['Credit', 'Rs 700.00 credited to your A/c XX1234 on 21/11/2026 from SHARMA CONTRACTOR via UPI. Ref No 998877665544'], ['OTP', '123456 is your OTP for login. Do not share it with anyone.'], ['Offer', 'Win cashback! Apply for a loan now: http://x.example']].map(([a, b]) => `<button class="chip" onclick="V.sms=this.dataset.s;render()" data-s="${esc(b)}">${a}</button>`).join('')}</div><button class="btn full" onclick="checkSMS()">${x('Read this message', 'संदेश पढ़ें')}</button>
 ${r ? `<div class="card" style="margin-top:12px;background:var(--mint)"><p style="margin:0 0 8px;white-space:pre-wrap">${esc(r.kind === 'txn' ? x(`We found a payment of ${inr(r.amount)}. Is this correct?`, `हमें ${inr(r.amount)} का भुगतान मिला। क्या यह सही है?`) : '')}${r.kind === 'txn' ? '' : esc(explain(r))}</p>${r.kind === 'txn' ? `<div class="mut">${x('Confidence', 'भरोसा')}: ${Math.round(r.conf * 100)}%${r.method ? ' · ' + r.method : ''}</div>${r.flags.map(f => `<div class="warn">${esc(f)}</div>`).join('')}
 <label>${x('Amount (₹)', 'रकम (₹)')}</label><input id="r_amt" type="number" value="${r.amount}"><label>${x('Type', 'प्रकार')}</label><select id="r_type"><option value="" ${r.type ? '' : 'selected'}>${x('Choose…', 'चुनिए…')}</option><option value="expense" ${r.type === 'expense' ? 'selected' : ''}>${x('Expense', 'खर्च')}</option><option value="income" ${r.type === 'income' ? 'selected' : ''}>${x('Income', 'कमाई')}</option></select><label>${x('Date', 'तारीख़')}</label><input id="r_date" type="date" value="${r.date || TODAY}"><label>${x('Shop or person', 'दुकान या व्यक्ति')}</label><input id="r_mer" value="${esc(r.merchant)}"><label>${x('Category', 'श्रेणी')}</label><select id="r_cat">${CATS.map(c => `<option value="${c}" ${r.category === c ? 'selected' : ''}>${cn(c)}</option>`).join('')}</select><label>${x('Reference', 'रेफ़रेंस')}</label><input id="r_ref" value="${esc(r.ref)}"><button class="btn full" onclick="saveRev()">${x('Yes, save it', 'हाँ, सेव करें')}</button>` : ''}</div>` : ''}</div>`;
  if (sh === 'csv') panel = `<div class="card">${cons}<label for="csv">${x('CSV: date,amount,type,category,merchant', 'CSV: date,amount,type,category,merchant')}</label><textarea id="csv" rows="5" oninput="V.csv=this.value">${V_('csv')}</textarea><button class="chip" onclick="V.csv='date,amount,type,category,merchant\\n2026-11-21,650,income,Income,Sharma Contractor\\n2026-11-21,70,expense,Food,Chai Stall\\n2026-11-21,300,expense,Groceries,Gupta Kirana';render()">${x('Use sample CSV', 'नमूना CSV लें')}</button><input type="file" accept=".csv,text/csv" aria-label="CSV file" onchange="const f=this.files[0];f&&f.text().then(t=>{V.csv=t;render()})"><button class="btn full" onclick="importCSV()">${x('Import', 'इम्पोर्ट करें')}</button></div>`;
  const demoOn = S.tx.some(o => o.source === 'demo');
  return `<div class="row" style="align-items:flex-end;flex-wrap:wrap;margin-bottom:var(--s5)"><div class="sp" style="min-width:220px"><h1>${x('Transactions', 'लेन-देन')}</h1><p class="pg-sub" style="margin:0">${x('Everything you have recorded, in one place.', 'आपके दर्ज सभी लेन-देन, एक जगह।')}</p></div><button class="btn sm" onclick="ui.sheet=ui.sheet==='manual'?null:'manual';ui.rev=null;render()">${ico('plus')}${x('Add transaction', 'लेन-देन जोड़ें')}</button></div>
 ${demoOn ? `<div class="warn" style="margin-bottom:var(--s4)">${ico('info')}<span>${x('Rows tagged “Demo” are synthetic data for a fictional user, not your real money.', '“डेमो” टैग वाली पंक्तियाँ काल्पनिक उपयोगकर्ता का नकली डेटा हैं, आपका असली पैसा नहीं।')}</span></div>` : ''}
 <div class="tools">${[['manual', 'plus', 'Add manually', 'हाथ से जोड़ें'], ['sms', 'sms', 'Paste SMS', 'SMS पेस्ट करें'], ['csv', 'file', 'Import CSV', 'CSV इम्पोर्ट'], ['demo', 'play', 'Load demo data', 'डेमो डेटा'], ['detect', 'detective', 'Money Detective', 'मनी डिटेक्टिव']].map(([k, ic, a, b]) => chipI(ic, x(a, b), sh === k, k === 'demo' ? 'tryDemo()' : k === 'detect' ? 'openDetective()' : `ui.sheet=ui.sheet==='${k}'?null:'${k}';ui.rev=null;render()`)).join('')}</div>${panel}
 <div class="row" style="justify-content:space-between;margin:var(--s2) 0 var(--s3);flex-wrap:wrap"><div class="seg">${[['all', 'All', 'सभी'], ['income', 'Income', 'कमाई'], ['expense', 'Spent', 'खर्च']].map(([k, a, b]) => chip(x(a, b), ui.f === k, `ui.f='${k}';render()`)).join('')}</div><span class="mut">${l.length} ${x('records', 'रिकॉर्ड')}</span></div>
 <div class="card flush">${l.length ? l.map(o => txRow(o, `${o.status === 'needs_check' ? `<button class="ib" style="color:var(--pos)" aria-label="${x('Confirm', 'कन्फ़र्म')}" onclick="okTx('${o.id}')">${ico('check')}</button>` : ''}<button class="ib del" aria-label="${x('Delete', 'हटाएँ')}" onclick="delTx('${o.id}')">${ico('del')}</button>`)).join('') : `<div class="empty"><div class="e-ic">${ico('list')}</div><b>${x('No transactions yet', 'अभी कोई लेन-देन नहीं')}</b><p>${x('Add your first transaction, paste a bank SMS, or load demo data to explore.', 'पहला लेन-देन जोड़िए, बैंक SMS पेस्ट कीजिए या डेमो डेटा से देखिए।')}</p><div class="row"><button class="btn sm" onclick="ui.sheet='manual';render()">${ico('plus')}${x('Add transaction', 'लेन-देन जोड़ें')}</button><button class="btn sm sec" onclick="tryDemo()">${x('Load demo data', 'डेमो डेटा लोड करें')}</button></div></div>`}</div>`
}


function ask_() {
  const sg = [['Explain this transaction', 'ये ट्रांज़ैक्शन समझाओ'], ['How much did I spend this week?', 'इस हफ़्ते मैंने कितना खर्च किया?'], ['Where did most of my money go?', 'मेरा ज़्यादातर पैसा कहाँ गया?'], ['Can I afford ₹2000?', 'क्या मैं ₹2000 खर्च कर सकता हूँ?'], ['Help me plan my spending', 'खर्च की योजना बनाने में मदद कीजिए'], ['Why am I spending more?', 'मेरा खर्च क्यों बढ़ा?']];
  const st = ui.listen ? 'listening' : ui.speak ? 'speaking' : ui.think ? 'thinking' : '', stTxt = ui.listen ? x('Listening… speak now', 'सुन रहा हूँ… बोलिए') : ui.speak ? x('Speaking…', 'बोल रहा हूँ…') : ui.think ? x('Thinking…', 'सोच रहा हूँ…') : x('Tap the mic to speak, or type below', 'बोलने के लिए माइक दबाइए, या नीचे लिखिए');
  return `
  <div class="ai-voice-hero${S.chat.length ? ' compact' : ''}">
    <div class="ai-orb-container ${st}"><div class="ai-orb"></div></div>
    <div class="ai-assistant-pill ai-pill">${ico('chat')} ${x('Your Assistant', 'आपका साथी')}</div>
    <h1 class="ai-greeting-title">${x('Hey, what can I do for you today?', 'नमस्ते, आज मैं आपकी क्या मदद करूँ?')}</h1>
    <div class="ai-state${st ? ' live' : ''}" aria-live="polite">${stTxt}</div>
  </div>

  ${!S.chat.length ? `
    <div style="text-align:center;margin:var(--s4) 0">
      <div class="mut" style="margin-bottom:var(--s3)">${x('Try asking, by voice or text:', 'आवाज़ या लिख कर पूछिए:')}</div>
      <div class="sug">${sg.map(([a, b]) => `<button class="chip" onclick="ask(this.dataset.q)" data-q="${esc(x(a, b))}">${x(a, b)}</button>`).join('')}</div>
    </div>
  ` : `
    <div class="chat">
      ${S.chat.map(m => `<div class="msg ${m.r}">${esc(m.t)}${m.r === 'ai' ? `<div><button class="ib" style="padding:4px 0" aria-label="${x('Read aloud', 'सुनिए')}" onclick="speak(S.chat[${S.chat.indexOf(m)}].t)">${ico('spk')}</button></div>` : ''}</div>`).join('')}
      ${ui.think ? `<div class="msg ai" aria-label="${x('Thinking…', 'सोच रहा हूँ…')}"><span class="typing"><i></i><i></i><i></i></span></div>` : ''}
      ${ui.chatErr ? `<div class="card" style="background:#FFF1F2;border:1px solid #FFE4E6;padding:12px 14px;border-radius:18px;margin:8px 0;animation:fadeUp 0.2s ease-out"><div style="color:var(--neg);font-weight:700;font-size:13.5px">⚠️ ${esc(ui.chatErr)}</div><div class="row" style="gap:8px;margin-top:10px"><button class="btn sec sm" onclick="retryLastAsk()">${x('Retry AI', 'दोबारा कोशिश करें')}</button><button class="btn sec sm" onclick="fallbackLastAsk()">${x('Use offline answer', 'ऑफ़लाइन जवाब लें')}</button></div></div>` : ''}
    </div>
  `}

  <div class="dock">
    <div class="row" style="gap:var(--s2)">
      <input id="q" ${ui.think ? 'disabled' : ''} placeholder="${x('Type your question or paste a message', 'सवाल लिखिए या संदेश पेस्ट कीजिए')}" aria-label="${x('Your question', 'आपका सवाल')}" value="${esc(V.q || '')}" oninput="V.q=this.value" onkeydown="event.key==='Enter'&&ask()">
      <button class="mic${ui.listen ? ' on' : ''}" ${ui.think ? 'disabled' : ''} aria-label="${x('Speak', 'बोलिए')}" onclick="mic()">${ico('mic')}</button>
      <button class="btn round" ${ui.think ? 'disabled style="opacity:0.6;cursor:not-allowed"' : ''} aria-label="${x('Send', 'भेजें')}" onclick="ask()">${ico('send')}</button>
      ${ui.speak ? `<button class="btn sec round" aria-label="${x('Stop speaking', 'बोलना रोकें')}" onclick="stopSpeak()">${ico('stop')}</button>` : ''}
    </div>
  </div>
 `;
}
function ins() {
  const m = mon(), T = sum(exp(m)), top = cats(m), W = weeks(), big = exp(S.tx).sort((a, b) => b.amount - a.amount).slice(0, 3);
  const odd = exp(S.tx).filter(o => { const o2 = exp(S.tx).filter(z => z.category === o.category && z.id !== o.id); return o2.length >= 3 && o.amount > 2 * sum(o2) / o2.length }).slice(0, 3);
  return `<h1>${x('Insights', 'जानकारी')}</h1><p class="pg-sub">${x('Plan ahead and see where your money goes.', 'आगे की योजना बनाइए और देखिए पैसा कहाँ जाता है।')}</p>
 <div class="card"><div class="card-h"><span class="card-t">${x('Plan ahead', 'आगे की योजना')}</span></div><p style="margin:0 0 var(--s3);font-size:14.5px">${planText()}</p>
 ${S.goals.map(g => `<div class="goal"><div class="row"><div class="sp"><b>${esc(g.name)}</b><div class="mut amt">${inr(g.saved)} / ${inr(g.target)}${g.due ? ' · ' + fd(g.due) : ''}</div></div><button class="btn sec sm" onclick="bump('${g.id}')">+₹100</button><button class="ib del" aria-label="${x('Delete', 'हटाएँ')}" onclick="delGoal('${g.id}')">${ico('del')}</button></div><div class="bar"><i style="width:${Math.min(100, g.saved / g.target * 100)}%"></i></div></div>`).join('')}
 <details><summary>+ ${x('Add a goal (rent, food, school fees…)', 'लक्ष्य जोड़ें (किराया, राशन, फ़ीस…)')}</summary><label>${x('Name', 'नाम')}</label><input id="g_n" maxlength="40"><label>${x('Target (₹)', 'लक्ष्य (₹)')}</label><input id="g_t" type="number" inputmode="decimal"><label>${x('Already saved (₹)', 'अब तक जमा (₹)')}</label><input id="g_s" type="number" inputmode="decimal"><label>${x('Due date (optional)', 'आखिरी तारीख़ (वैकल्पिक)')}</label><input id="g_d" type="date"><button class="btn full" onclick="addGoal()">${x('Save goal', 'लक्ष्य सेव करें')}</button></details></div>
 <div class="g2"><div class="card"><div class="card-h"><span class="card-t">${x('Where money went this month', 'इस महीने पैसा कहाँ गया')}</span></div>${top.length ? top.map(([c, v]) => `<div class="cat-row"><div class="row"><span class="sp">${CH[c] ? CH[c][2] : '📦'} ${cn(c)}</span><b class="amt">${inr(v)}</b></div><div class="bar" style="margin-top:6px"><i style="width:${v / T * 100}%"></i></div></div>`).join('') : emptyMini(x('No spending yet.', 'अभी कोई खर्च नहीं।'))}</div>
 <div class="card"><div class="card-h"><span class="card-t">${x('Last 4 weeks', 'पिछले 4 हफ़्ते')}</span></div>${barChart(W)}</div></div>
 <div class="g2"><div class="card"><div class="card-h"><span class="card-t">${x('Largest payments', 'सबसे बड़े खर्च')}</span></div>${big.length ? big.map(o => txRow(o)).join('') : emptyMini('—')}</div>
 <div class="card"><div class="card-h"><span class="card-t">${x('Worth a look', 'एक नज़र डालिए')}</span></div>${odd.length ? odd.map(o => txRow(o)).join('') + `<p class="mut" style="margin:var(--s3) 0 0">${x('These are much higher than your usual spending in the same category. This is not a sign of fraud, just something to check.', 'ये इसी श्रेणी के आपके आम खर्च से काफ़ी ज़्यादा हैं। यह धोखाधड़ी का संकेत नहीं, बस जाँचने लायक है।')}</p>` : emptyMini(x('Nothing unusual found.', 'कुछ असामान्य नहीं मिला।'))}</div></div>
 <p class="mut">${x('How we calculate: totals add up your recorded transactions; balance = opening balance + income − spending. Suggestions are not professional financial advice.', 'हम कैसे गिनते हैं: कुल रकम आपके दर्ज लेन-देन का जोड़ है; बैलेंस = शुरुआती बैलेंस + कमाई − खर्च। सुझाव पेशेवर वित्तीय सलाह नहीं हैं।')}</p>`
}

function saveProfileEdit() {
  const g = i => (document.getElementById(i) || {}).value;
  const newName = (g('edit_nm') || '').trim();
  if (!newName) {
    return toast(t('nameValidationEmpty'));
  }
  const occ = g('edit_occ');
  const incType = g('edit_inc');
  const rng = g('edit_rng');
  S.user.name = newName;
  S.user.occupation = occ;
  S.user.incomeType = incType;
  S.user.incomeRange = rng;
  S.user.job = getOccLabel(occ, 'en');
  S.user.inc = getIncTypeLabel(incType, 'en');
  S.user.rng = getRangeLabel(rng, 'en');
  ui.editProfile = false;
  save();
  render();
  toast(t('profileSavedToast'));
}

function me() {
  const occLabel = getOccLabel(S.user.occupation, S.lang);
  const incLabel = getIncTypeLabel(S.user.incomeType, S.lang);
  const rngLabel = getRangeLabel(S.user.incomeRange, S.lang);

  let editBox = '';
  if (ui.editProfile) {
    editBox = `
      <div class="edit-modal-card">
        <h3 style="margin:0 0 14px;font-size:17px;font-weight:700">${t('editPreferences')}</h3>
        <label for="edit_nm" class="q-label" style="display:block;margin-top:0">${t('nameLabel')}</label>
        <input id="edit_nm" value="${esc(S.user.name)}" maxlength="40">

        <label class="q-label" style="display:block;margin-top:8px">${t('langTitle')}</label>
        <div class="seg" style="margin-bottom:12px">
          ${chip('English', S.lang === 'en', "setLang('en')")}
          ${chip('हिन्दी', S.lang === 'hi', "setLang('hi')")}
        </div>

        <label for="edit_occ" class="q-label" style="display:block;margin-top:8px">${t('qOccupation')}</label>
        <select id="edit_occ">
          ${OCCUPATIONS.map(o => `<option value="${o.id}" ${S.user.occupation === o.id ? 'selected' : ''}>${esc(getOccLabel(o.id, S.lang))}</option>`).join('')}
        </select>

        <label for="edit_inc" class="q-label" style="display:block;margin-top:8px">${t('qIncomeType')}</label>
        <select id="edit_inc">
          ${INCOME_TYPES.map(it => `<option value="${it.id}" ${S.user.incomeType === it.id ? 'selected' : ''}>${esc(getIncTypeLabel(it.id, S.lang))}</option>`).join('')}
        </select>

        <label for="edit_rng" class="q-label" style="display:block;margin-top:8px">${t('rangeTitle')}</label>
        <select id="edit_rng">
          ${INCOME_RANGES.map(r => `<option value="${r.id}" ${S.user.incomeRange === r.id ? 'selected' : ''}>${esc(getRangeLabel(r.id, S.lang))}</option>`).join('')}
        </select>

        <div class="row" style="margin-top:16px;gap:8px">
          <button class="btn full" onclick="saveProfileEdit()">${t('saveProfileBtn')}</button>
          <button class="btn sec" style="min-width:90px" onclick="ui.editProfile=false;render()">${t('cancel')}</button>
        </div>
      </div>
    `;
  }
  const li = (i, a) => `<div class="priv-li"><span class="p-ic">${ico(i)}</span><span>${a}</span></div>`;
  return `<h1>${t('profileSettingsTitle')}</h1><p class="pg-sub">${x('Your details, language and privacy.', 'आपकी जानकारी, भाषा और निजता।')}</p>
<div class="card"><div class="pf-head">
  <div class="avatar lg" aria-hidden="true">${esc((S.user.name || 'U').trim()[0].toUpperCase())}</div>
  <div class="sp" style="min-width:180px">
    <div style="font-size:21px;font-weight:800;letter-spacing:-.02em">${esc(S.user.name)}</div>
    <div class="pf-chips"><span class="tag">${esc(occLabel)}</span><span class="tag">${esc(incLabel)}</span><span class="tag">${esc(rngLabel)}</span></div>
  </div>
  <button class="btn sec sm" onclick="ui.editProfile=!ui.editProfile;render()">${ui.editProfile ? t('cancel') : t('editPreferences')}</button>
</div></div>
${editBox}
<div class="pf-grid">
<div class="card"><div class="card-h"><span class="card-t">${x('Language', 'भाषा')}</span></div><div class="seg">${chip('English', S.lang === 'en', "setLang('en')")}${chip('हिन्दी', S.lang === 'hi', "setLang('hi')")}</div></div>
<div class="card"><div class="card-h"><span class="card-t">${x('Starting balance', 'शुरुआती बैलेंस')}</span></div><label for="ob">${x('Opening balance (₹), before your first record', 'शुरुआती बैलेंस (₹), पहले रिकॉर्ड से पहले')}</label><input id="ob" type="number" value="${S.opening}" style="margin-bottom:0" onchange="S.opening=Math.max(0,parseFloat(this.value)||0);save();toast(x('Saved.','सेव हुआ।'))"></div>
<div class="card"><div class="card-h"><span class="card-t">${x('Your privacy', 'आपकी निजता')}</span></div>
 ${li('lock', x('Your records stay in this browser. Nothing is sent anywhere.', 'आपके रिकॉर्ड इसी ब्राउज़र में रहते हैं। कहीं कुछ नहीं भेजा जाता।'))}
 ${li('shield', x('We never ask for your UPI PIN, OTP or bank password.', 'हम आपका UPI PIN, OTP या बैंक पासवर्ड कभी नहीं माँगते।'))}
 ${li('sms', x('Pasted messages are read by code on your device and never treated as instructions.', 'पेस्ट किए संदेश आपके डिवाइस पर कोड से पढ़े जाते हैं और कभी निर्देश नहीं माने जाते।'))}
 ${li('wallet', x('This app cannot move money.', 'यह ऐप पैसे नहीं भेज सकता।'))}</div>
<div class="card"><div class="card-h"><span class="card-t">${x('Your data', 'आपका डेटा')}</span></div>
 <button class="btn sec full" onclick="restartOnboarding()">${t('redoOnboardingBtn')}</button>
 <button class="btn danger full" style="margin-top:var(--s3)" onclick="askDelImported()">${x('Delete imported and demo transactions', 'इम्पोर्ट और डेमो लेन-देन हटाएँ')}</button>
 <button class="btn danger full" style="margin-top:var(--s3)" onclick="askDelAll()">${x('Delete all my data and start over', 'मेरा सारा डेटा हटाएँ और दोबारा शुरू करें')}</button></div>
</div>`}
const delImported = () => { S.tx = S.tx.filter(o => o.source === 'manual' || o.source === 'detective'); save(); render(); toast(x('Imported and demo transactions deleted.', 'इम्पोर्ट और डेमो लेन-देन हटा दिए।')) };
const delAll = () => { clearObDraft(); S = blank(); save(); render() };
const askDelImported = () => confirmDlg(x('Delete imported and demo transactions?', 'इम्पोर्ट और डेमो लेन-देन हटाएँ?'), x('Demo, SMS and CSV transactions will be removed. Transactions you added manually or confirmed in Money Detective stay.', 'डेमो, SMS और CSV लेन-देन हट जाएँगे। हाथ से जोड़े या मनी डिटेक्टिव में कन्फ़र्म किए लेन-देन रहेंगे।'), x('Delete', 'हटाएँ'), delImported);
const askDelAll = () => confirmDlg(x('Delete everything and start over?', 'सब कुछ हटाकर दोबारा शुरू करें?'), x('Your profile, transactions and goals on this device will be erased. This cannot be undone.', 'इस डिवाइस से आपकी प्रोफ़ाइल, लेन-देन और लक्ष्य मिट जाएँगे। इसे वापस नहीं लाया जा सकता।'), x('Delete all', 'सब हटाएँ'), delAll);

function render() {
  const A = document.getElementById('app');
  if (!A) return;
  document.documentElement.lang = S.lang;
  if (!S.user || !S.user.onboardingCompleted) {
    document.body.classList.add('in-onb');
    ui.lastTab = null;
    const stp = ui.ob.step || 1, ent = ui.lastStep !== stp; ui.lastStep = stp;
    A.innerHTML = ent ? onb().replace('class="onb-wrap"', 'class="onb-wrap enter"') : onb();
    return;
  }
  document.body.classList.remove('in-onb');
  const view = ({ home, txns, ask: ask_, ins, me, detect })[S.tab] || home, enter = ui.lastTab !== S.tab;
  ui.lastTab = S.tab;
  A.innerHTML = `<div class="shell">${sidebar()}<div class="stage">${topbar()}<main class="wrap pg-${S.tab}${enter ? ' enter' : ''}" id="main">${view()}</main></div></div>${bottomNav()}${dialogHtml()}`
}

/* ================= AI MONEY DETECTIVE (on-device, demo mode) ================= */
const DX = { Salary: ['Salary', 'वेतन', '💼'], Business: ['Business income', 'कारोबार की कमाई', '🏪'], Refund: ['Refund', 'रिफ़ंड', '↩️'], Entertainment: ['Entertainment', 'मनोरंजन', '🎬'], Cash: ['Cash withdrawal', 'नकद निकासी', '🏧'] };
Object.assign(CH, DX);
['Entertainment', 'Cash'].forEach(c => { if (!CATS.includes(c)) CATS.splice(CATS.length - 1, 0, c) });
const D_INC = ['Salary', 'Business', 'Refund', 'Income'];
ui.md = { text: '', res: null, edit: false, saved: null, chat: [], err: '' };
const DEX_SAMPLE = 'Rs. 450 debited from A/c XX1234 on 21-Nov-2026 through UPI at XYZ Store. Ref: 123456789.';
const D_STRONG = [['Food', /zomato|swiggy|dhaba|restaurant|hotel|cafe|chai|bakery|canteen/i], ['Groceries', /kirana|grocer|bigbasket|dmart|sabzi|blinkit|zepto/i], ['Transport', /uber|ola\b|rapido|irctc|metro|bus|fuel|petrol|redbus|fastag/i], ['Bills', /electric|bijli|recharge|jio|airtel|vodafone|gas|water|dth|bill|broadband/i], ['Healthcare', /pharma|medical|hospital|clinic|apollo|medplus/i], ['Education', /school|fees|college|tuition|byju/i], ['Rent', /rent|landlord/i], ['Entertainment', /netflix|hotstar|bookmyshow|spotify|cinema|pvr|gaming/i], ['Shopping', /amazon|flipkart|myntra|meesho|mall|ajio/i]];
function dParse(raw) {
  const s = String(raw || '').replace(/\s+/g, ' ').trim().slice(0, 600), l = s.toLowerCase(), r = { kind: 'empty', flags: [], raw: false };
  if (!s) return r;
  if (/\botp\b|one[- ]time password|verification code|\bpin\b|cvv/.test(l) && !/debited|credited/.test(l)) return { ...r, kind: 'otp' };
  const link = /https?:|www\.|bit\.ly/.test(l), am = s.match(/(?:rs\.?|inr|₹)\s*([\d,]+(?:\.\d{1,2})?)/i), amount = am ? parseFloat(am[1].replace(/,/g, '')) : null;
  const refund = /refund|revers/.test(l), failed = /fail|declined|unsuccessful|not processed|could not be processed/.test(l),
    atm = /\batm\b|cash withdraw|withdrawn|withdrawal/.test(l), dr = /debited|deducted|spent|paid|sent|purchase|transferred to|withdrawn|withdrawal/.test(l),
    cr = /credited|received|deposited/.test(l) || refund, sal = /salary|payroll|\bsal\b/.test(l);
  if (failed && !refund) return { ...r, kind: 'failed', amount, link, method: /upi/.test(l) ? 'UPI' : /atm/.test(l) ? 'ATM' : /card/.test(l) ? 'Card' : null };
  if (!dr && !cr) return /offer|cashback|loan|click|win |congratulations|kyc|blocked|suspend/.test(l) || link ? { ...r, kind: 'promo', link } : { ...r, kind: 'unclear' };
  if (!amount) return { ...r, kind: 'noamount' };
  const f = []; let type = refund || (cr && !dr) ? 'income' : (dr && !cr) ? 'expense' : null;
  if (!type) f.push('dir');
  const MN = 'jan feb mar apr may jun jul aug sep oct nov dec'.split(' '); let dt = null, m = s.match(/\b(\d{1,2})[- \/]([A-Za-z]{3})[a-z]*[- \/,]*(\d{2,4})\b/);
  if (m && MN.includes(m[2].toLowerCase())) dt = (m[3].length == 2 ? '20' + m[3] : m[3]) + '-' + String(MN.indexOf(m[2].toLowerCase()) + 1).padStart(2, '0') + '-' + m[1].padStart(2, '0');
  else if ((m = s.match(/\b(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})\b/)) && +m[2] < 13) dt = (m[3].length == 2 ? '20' + m[3] : m[3]) + '-' + m[2].padStart(2, '0') + '-' + m[1].padStart(2, '0');
  if (dt && (isNaN(D(dt)) || dt !== ds(D(dt)))) dt = null;
  if (!dt) f.push('date');
  const tm = s.match(/\b(\d{1,2}:\d{2}(?::\d{2})?\s?(?:am|pm)?)/i), rf = s.match(/\b(?:ref(?:erence)?(?:\s*(?:no|id))?|utr|rrn|txn\s*id)[\s.:#-]+(\w*\d\w*)/i), ac = s.match(/(?:a\/c|acct?|account)\s*(?:no\.?)?\s*[xX*]*\s*(\d{3,4})\b/i);
  let mer = null; for (const q of s.matchAll(/\b(?:to|at|from|vpa|towards)\s+([A-Za-z][A-Za-z0-9 &._@-]{1,28}?)(?=\s+on\b|\s+ref|\s+upi|\s+via|\s+using|\s+-|\s+through|[.,;]|$)/gi)) { if (!/^(your|a\/c|account|you|the|rs|inr|xx|bank|atm|salary|upi|my)/i.test(q[1])) { mer = q[1].trim(); break } }
  if (atm) mer = null;
  const method = atm ? 'ATM' : /upi|vpa/.test(l) ? 'UPI' : /imps/.test(l) ? 'IMPS' : /neft/.test(l) ? 'NEFT' : /rtgs/.test(l) ? 'RTGS' : /card|pos/.test(l) ? 'Card' : null;
  let cat = 'Other', sure = false, sub = refund ? 'refund' : atm ? 'atm' : sal ? 'salary' : null;
  if (sub === 'refund') { cat = 'Refund'; sure = true } else if (sub === 'atm') { cat = 'Cash'; sure = true } else if (sub === 'salary') { cat = 'Salary'; sure = true }
  else if (type === 'income') { cat = 'Income' }
  else { const g = D_STRONG.find(([c, re]) => re.test(mer || '')); if (g) { cat = g[0]; sure = true } else if (/store|mart|shop|market/i.test(mer || '')) { cat = 'Shopping' } }
  if (!mer && !atm) f.push('mer');
  const conf = Math.min(.97, .35 + (type ? .25 : 0) + (dt ? .12 : 0) + (rf ? .08 : 0) + (mer || atm ? .1 : 0) + (sure ? .07 : 0) + (method ? .03 : 0));
  return { kind: 'txn', amount, currency: 'INR', type, date: dt, time: tm ? tm[1] : '', ref: rf ? rf[1] : '', acct: ac ? 'XX' + ac[1].slice(-4) : '', merchant: mer || '', category: cat, sure, sub, method, status: 'success', flags: f, conf, link }
}
function dLink(r) { if (r.sub !== 'refund') return null; return S.tx.filter(o => o.type === 'expense' && o.amount >= r.amount && (o.amount === r.amount || o.merchant && r.merchant && o.merchant.toLowerCase() === r.merchant.toLowerCase()) && (!r.date || o.date <= r.date)).sort((a, b) => a.date < b.date ? 1 : -1)[0] || null }
function dDup(r) {
  const a = r.amount, t = r.type; const strong = S.tx.find(o => r.ref && o.ref === r.ref || (o.amount === a && o.date === r.date && o.type === t && (o.merchant || '') === (r.merchant || '')));
  return strong ? { strong: true } : S.tx.some(o => o.amount === a && o.date === r.date && o.type === t) ? { strong: false } : null
}
function dExplain(r) {
  if (r && r.explanation) return r.explanation; const a = inr(r.amount), m = r.merchant, c = cn(r.category), acc = r.acct ? x(` (account ${r.acct})`, ` (खाता ${r.acct})`) : '';
  if (r.sub === 'atm') return x(`${a} was withdrawn as cash from an ATM${acc}. This is cash in your hand, not yet spent on anything. Saving it reduces your recorded balance. When you spend this cash, you can add those expenses separately.`, `${a} ATM से नकद निकाले गए${acc}। यह आपके हाथ में नकद है, अभी किसी चीज़ पर खर्च नहीं हुआ। सेव करने पर आपका दर्ज बैलेंस घटेगा। इस नकद को खर्च करें तो वह खर्च अलग से जोड़ सकते हैं।`);
  if (r.sub === 'refund') return x(`${a} came back to your account${acc} as a refund. A refund is your own money returned, not salary or new earnings.`, `${a} रिफ़ंड के रूप में आपके खाते${acc} में वापस आए। रिफ़ंड आपका अपना पैसा लौटना है, वेतन या नई कमाई नहीं।`);
  if (r.type === 'income') return x(`${a} was added to your account${acc}${m ? ` from ${m}` : ''}. ${r.sub === 'salary' ? 'It looks like a salary payment.' : 'The message does not say what it was for.'} It will be counted in your monthly income.`, `आपके खाते${acc} में ${a} आए${m ? ` (${m} से)` : ''}। ${r.sub === 'salary' ? 'यह वेतन का भुगतान लगता है।' : 'संदेश में नहीं लिखा कि यह किस लिए था।'} यह आपकी महीने की कमाई में गिना जाएगा।`);
  if (r.type === 'expense') return x(`${a} was deducted from your account${acc}${r.method ? ` through ${r.method}` : ''}${m ? ` and paid to ${m}` : ''}. ${r.sure ? `This looks like a ${c} payment.` : r.category !== 'Other' ? `It might be a ${c} payment, but please check.` : 'The message does not say what it was for.'} It ${r.saved ? 'has been' : 'will be'} added to your monthly expenses${r.saved ? '' : ' once you confirm'}.`, `आपके खाते${acc} से ${a} कटे हैं${r.method ? ` (${r.method} से)` : ''}${m ? `, ${m} को भुगतान` : ''}। ${r.sure ? `यह ${c} का भुगतान लगता है।` : r.category !== 'Other' ? `यह ${c} का भुगतान हो सकता है, कृपया जाँच लीजिए।` : 'संदेश में नहीं लिखा कि यह किस लिए था।'} ${r.saved ? 'यह आपके महीने के खर्च में जुड़ गया है।' : 'कन्फ़र्म करने पर यह आपके महीने के खर्च में जुड़ जाएगा।'}`);
  return x('I could not tell whether money came in or went out. Please choose below.', 'मैं समझ नहीं पाया कि पैसे आए या गए। कृपया नीचे चुनिए।')
}
const DFLAG = { dir: ['Could not tell if money came in or went out.', 'पता नहीं चला कि पैसे आए या गए।'], date: ['No date in the message. Please check the date.', 'संदेश में तारीख़ नहीं है। कृपया तारीख़ जाँचिए।'], mer: ['No shop or person named. I did not guess.', 'दुकान या व्यक्ति का नाम नहीं है। मैंने अंदाज़ा नहीं लगाया।'] };
const DERR = { empty: ['Please paste a message first.', 'पहले कोई संदेश पेस्ट कीजिए।'], otp: ['This is an OTP or PIN message, not a transaction. Never share an OTP, PIN or password with anyone. Nothing was saved.', 'यह OTP या PIN का संदेश है, लेन-देन नहीं। OTP, PIN या पासवर्ड किसी को न बताइए। कुछ सेव नहीं हुआ।'], promo: ['This looks like an offer or a warning message with a link, not a transaction. Do not tap links in messages. Nothing was saved.', 'यह ऑफ़र या लिंक वाला संदेश लगता है, लेन-देन नहीं। संदेशों के लिंक पर टैप न कीजिए। कुछ सेव नहीं हुआ।'], unclear: ['I could not find a payment in this message. Please paste the full bank SMS, including the amount and whether money was debited or credited.', 'इस संदेश में मुझे कोई भुगतान नहीं मिला। कृपया पूरा बैंक SMS पेस्ट कीजिए, जिसमें रकम और डेबिट/क्रेडिट लिखा हो।'], noamount: ['I found a debit or credit but no amount. I will not guess it. Please paste the full message or enter the amount yourself.', 'डेबिट या क्रेडिट मिला पर रकम नहीं मिली। मैं अंदाज़ा नहीं लगाऊँगा। कृपया पूरा संदेश पेस्ट कीजिए या रकम खुद डालिए।'] };
function dFailText(r) { const a = r.amount ? inr(r.amount) : ''; return x(`This ${a} ${r.method || ''} transaction failed. No money should have left your account, so it is not saved as spending. If money was deducted, it usually comes back in a few days; check with your bank.`, `यह ${a} का ${r.method || ''} लेन-देन असफल रहा। आपके खाते से पैसे नहीं कटने चाहिए, इसलिए इसे खर्च में नहीं जोड़ा गया। अगर पैसे कटे हैं तो आमतौर पर कुछ दिनों में लौट आते हैं; अपने बैंक से पूछिए।`) }
let lastDetectiveText = null;

async function fetchDetectiveAPI(text, localFallback) {
  lastDetectiveText = text;
  ui.md.loading = true;
  ui.md.err = '';
  ui.md.fallbackAvailable = false;
  render();

  try {
    const res = await fetch('/api/detective', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        language: S.lang,
        user: S.user,
        existingTransactionsSummary: (S.tx || []).slice(0, 10).map(t => ({
          amount: t.amount,
          date: t.date,
          merchant: t.merchant,
          ref: t.ref
        }))
      })
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok || !data.result) {
      throw new Error(data.message || x('Unable to analyze message with AI.', 'AI से संदेश की जाँच नहीं हो सकी।'));
    }

    const result = data.result;
    ui.md.loading = false;
    ui.md.err = '';

    if (result.kind === 'otp' || result.kind === 'promo' || result.kind === 'empty' || result.kind === 'unclear') {
      ui.md.res = null;
      ui.md.err = result.explanation || x(...(DERR[result.kind] || DERR.unclear));
      render();
      return;
    }

    ui.md.res = {
      ...result,
      kind: result.kind,
      amount: result.amount,
      type: result.type,
      category: result.category || 'Other',
      merchant: result.merchant || '',
      date: result.date || TODAY,
      ref: result.ref || '',
      acct: result.acct || '',
      method: result.method || '',
      sub: result.sub || null,
      flags: result.flags || [],
      conf: result.confidence || 0.95,
      explanation: result.explanation
    };
    ui.md.chat = [];
    render();
  } catch (err) {
    ui.md.loading = false;
    ui.md.err = err.message || x('Could not connect to AI Detective.', 'AI डिटेक्टिव से कनेक्ट नहीं हो सका।');
    ui.md.fallbackAvailable = Boolean(localFallback && (localFallback.kind === 'txn' || localFallback.kind === 'failed'));
    ui.md.localFallback = localFallback;
    render();
  }
}

function retryDetective() {
  if (!lastDetectiveText) return;
  dAnalyze();
}

function useLocalDetectiveFallback() {
  if (ui.md.localFallback) {
    ui.md.res = ui.md.localFallback;
    ui.md.err = '';
    ui.md.chat = [];
    ui.md.fallbackAvailable = false;
    render();
  }
}

function dAnalyze(options = {}) {
  const t = ui.md.text || '';
  ui.md.err = '';
  ui.md.saved = null;
  ui.md.edit = false;
  ui.md.fallbackAvailable = false;
  const r = dParse(t);
  if (r.kind === 'empty') {
    ui.md.res = null;
    ui.md.err = x(...DERR.empty);
    return render();
  }
  if (r.kind === 'otp') {
    ui.md.res = null;
    ui.md.err = x(...DERR.otp);
    return render();
  }

  // If in non-browser/test environment without fetch, run synchronous local parse:
  if (typeof fetch === 'undefined' || options.sync) {
    if (r.kind === 'txn' || r.kind === 'failed') {
      ui.md.res = r;
      ui.md.chat = [];
    } else {
      ui.md.res = null;
      ui.md.err = x(...(DERR[r.kind] || DERR.unclear));
    }
    return render();
  }

  // Browser live OpenAI call:
  fetchDetectiveAPI(t, r);
}

const dSet = (k, v) => { const r = ui.md.res; if (!r) return; r[k] = v; if (k === 'type') { r.flags = r.flags.filter(f => f !== 'dir'); if (v === 'income' && !D_INC.includes(r.category)) r.category = 'Income'; if (v === 'expense' && D_INC.includes(r.category)) r.category = 'Other' } if (k === 'category') r.sure = true; render() };
function dEditApply() {
  const g = i => document.getElementById(i).value, r = ui.md.res, a = parseFloat(g('d_amt')), dt = g('d_date');
  if (!(a > 0) || !/^\d{4}-\d{2}-\d{2}$/.test(dt)) return toast(x('Please check the amount and date.', 'कृपया रकम और तारीख़ जाँचिए।'));
  r.amount = a; r.date = dt; r.merchant = g('d_mer').trim().slice(0, 40); r.type = g('d_type') || r.type; r.flags = r.flags.filter(f => f !== 'date' && !(f === 'dir' && r.type) && !(f === 'mer' && r.merchant)); ui.md.edit = false; render()
}
function dSave() {
  const r = ui.md.res; if (!r || r.kind !== 'txn') return;
  if (!r.type) return toast(x('Please choose whether this was money in or out.', 'कृपया चुनिए कि पैसे आए या गए।'));
  if (!r.date) { r.date = TODAY; r.flags = r.flags.filter(f => f !== 'date') }
  const t = { amount: r.amount, type: r.type, category: r.category, merchant: r.merchant, ref: r.ref, date: r.date, source: 'detective', conf: r.conf, desc: r.method || '', sub: r.sub || '', acct: r.acct };
  if (!addTx(t)) return toast(x('This transaction is already saved. I skipped the duplicate.', 'यह लेन-देन पहले से सेव है। डुप्लिकेट छोड़ दिया।'));
  ui.md.saved = { ...r, saved: true }; ui.md.chat = []; toast(x('Saved to your transactions.', 'आपके लेन-देन में सेव हो गया।')); render()
}
function dCancel() { ui.md.res = null; ui.md.saved = null; ui.md.edit = false; ui.md.err = ''; ui.md.text = ''; ui.md.fallbackAvailable = false; render() }
function dImpact(r) {
  const m = mon(), E = sum(exp(m)), I = sum(inc(m)), cs = cats(m), prev = S.tx.filter(o => o.type === 'expense' && o.date.startsWith(add(TODAY.slice(0, 7) + '-01', -1).slice(0, 7))), cat = cs.find(c => c[0] === r.category);
  return { E, I, cs, cat: cat ? cat[1] : 0, prev: prev.length ? sum(prev) : null }
}
function dImpactHtml(r) {
  const im = dImpact(r), mx = Math.max(1, ...im.cs.map(c => c[1]));
  const line = r.type === 'expense' ? (r.sub === 'atm' ? x(`Your recorded cash withdrawals this month are ${inr(im.cat)}.`, `इस महीने दर्ज नकद निकासी ${inr(im.cat)} है।`) : x(`After this ${inr(r.amount)} payment, your recorded ${cn(r.category)} expenses this month are ${inr(im.cat)}.`, `इस ${inr(r.amount)} के भुगतान के बाद, इस महीने आपके दर्ज ${cn(r.category)} खर्च ${inr(im.cat)} हैं।`)) : x(`This adds ${inr(r.amount)} to your recorded income. This month's income is now ${inr(im.I)}.`, `इससे आपकी दर्ज कमाई में ${inr(r.amount)} जुड़े। इस महीने की कमाई अब ${inr(im.I)} है।`);
  const cmp = im.prev == null ? x('Not enough earlier data to compare with last month yet.', 'पिछले महीने से तुलना के लिए अभी पर्याप्त डेटा नहीं है।') : x(`Last month's recorded expenses: ${inr(im.prev)}.`, `पिछले महीने के दर्ज खर्च: ${inr(im.prev)}।`);
  return `<div class="card dt-impact"><h2 style="margin-top:0">${x('Your spending impact', 'आपके खर्च पर असर')}</h2><p>${line}</p><div class="row" style="gap:10px"><div class="dt-stat sp"><span class="mut">${x('Month expenses', 'महीने का खर्च')}</span><b>${inr(im.E)}</b></div><div class="dt-stat sp"><span class="mut">${x('Month income', 'महीने की कमाई')}</span><b>${inr(im.I)}</b></div></div>
  <div style="margin-top:12px">${im.cs.slice(0, 5).map(([c, v]) => `<div class="dt-bar"><span>${CH[c] ? CH[c][2] : ''} ${cn(c)}</span><div class="bar"><i style="width:${Math.round(v / mx * 100)}%;${c === r.category ? 'background:var(--indigo)' : ''}"></i></div><b>${inr(v)}</b></div>`).join('')}</div>
  <p class="mut" style="margin:10px 0 0;font-size:13px">${cmp} ${x('No budget is set, so remaining budget is not shown.', 'कोई बजट सेट नहीं है, इसलिए बचा हुआ बजट नहीं दिखाया गया।')}</p></div>`
}
function dAnswer(q) {
  const s = q.toLowerCase(), has = (...w) => w.some(k => s.includes(k)), sv = ui.md.saved, m = mon(), E = exp(m);
  if (!S.tx.length) return x('There are no recorded transactions yet, so I cannot answer from your data.', 'अभी कोई लेन-देन दर्ज नहीं है, इसलिए मैं आपके डेटा से जवाब नहीं दे सकता।');
  if (has('why', 'deduct', 'kyu', 'kyon', 'क्यों', 'कटे') && sv) return dExplain(sv);
  if (has('week', 'hafte', 'हफ़्ते', 'हफ्ते')) return x(`In the last 7 days your recorded spending is ${inr(sum(exp(wk(0))))}.`, `पिछले 7 दिन में आपका दर्ज खर्च ${inr(sum(exp(wk(0))))} है।`);
  if (has('biggest', 'largest', 'sabse', 'सबसे')) { const b = E.slice().sort((a, c) => c.amount - a.amount)[0]; if (!b) return x('No expenses recorded this month.', 'इस महीने कोई खर्च दर्ज नहीं।'); const me = sv && b.amount <= sv.amount && sv.type === 'expense'; return x(`${me ? 'Yes, ' : ''}your biggest recorded payment this month is ${inr(b.amount)}${b.merchant ? ` to ${esc(b.merchant)}` : ''} on ${fd(b.date)}.`, `${me ? 'हाँ, ' : ''}इस महीने आपका सबसे बड़ा दर्ज भुगतान ${inr(b.amount)} है${b.merchant ? ` (${esc(b.merchant)})` : ''}, ${fd(b.date)} को।`) }
  const c = Object.keys(CH).find(k => s.includes(CH[k][0].toLowerCase()) || s.includes(CH[k][1]));
  if (c) return x(`Your recorded ${cn(c)} spending this month is ${inr(sum(E.filter(o => o.category === c)))}.`, `इस महीने आपका दर्ज ${cn(c)} खर्च ${inr(sum(E.filter(o => o.category === c)))} है।`);
  if (has('budget', 'बजट', 'month', 'महीने')) return x(`This month you recorded ${inr(sum(E))} in expenses against ${inr(sum(inc(m)))} income. No budget is set, so I cannot show what is left.`, `इस महीने आपके दर्ज खर्च ${inr(sum(E))} और कमाई ${inr(sum(inc(m)))} है। बजट सेट नहीं है, इसलिए बचा हुआ नहीं बता सकता।`);
  if (has('kahan', 'कहाँ', 'where')) { const t = cats(m)[0]; return t ? x(`Most of your recorded spending this month went to ${cn(t[0])} (${inr(t[1])}).`, `इस महीने सबसे ज़्यादा दर्ज खर्च ${cn(t[0])} पर हुआ (${inr(t[1])})।`) : x('No expenses recorded this month.', 'इस महीने कोई खर्च दर्ज नहीं।') }
  return answer(q)
}
async function dAsk(q, voice) {
  q = (q || V.dq || '').trim(); if (!q) return; V.dq = ''; ui.md.chat.push({ r: 'me', t: q }); ui.think = true; render();
  const currentTxn = ui.md.saved || ui.md.res;
  if (typeof fetch !== 'undefined') {
    try {
      const payload = {
        message: q,
        user: S.user,
        financialContext: {
          balance: bal(),
          monthlySpending: sum(exp(mon())),
          monthlyIncome: sum(inc(mon())),
          weeklySpending: sum(exp(wk(0))),
          currentDetectiveTransaction: currentTxn,
          recentTransactions: (S.tx || []).slice(0, 5)
        },
        conversationHistory: ui.md.chat.slice(-4)
      };
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok && data.reply) {
        ui.md.chat.push({ r: 'ai', t: data.reply });
        ui.think = false;
        save();
        render();
        if (voice) speak(data.reply);
        return;
      }
    } catch (e) { }
  }
  const a = dAnswer(q); ui.md.chat.push({ r: 'ai', t: a }); ui.think = false; save(); render(); if (voice) speak(a);
}
function dMic() {
  if (!SR) return toast(x('Voice input is not supported in this browser. Please type.', 'इस ब्राउज़र में आवाज़ उपलब्ध नहीं है। कृपया टाइप कीजिए।')); if (ui.listen) { rec && rec.stop(); return }
  rec = new SR(); rec.lang = S.lang === 'hi' ? 'hi-IN' : 'en-IN'; rec.onresult = e => { ui.listen = false; dAsk(e.results[0][0].transcript, true) }; rec.onerror = () => { ui.listen = false; toast(x('Could not hear you. Please try again.', 'आवाज़ सुनाई नहीं दी। फिर कोशिश कीजिए।')); render() }; rec.onend = () => { ui.listen = false; render() }; try { rec.start(); ui.listen = true } catch (e) { } render()
}
async function dPaste() { try { const t = await navigator.clipboard.readText(); ui.md.text = t || ''; render() } catch (e) { toast(x('Could not read the clipboard. Long-press in the box and paste.', 'क्लिपबोर्ड नहीं पढ़ सका। बॉक्स में दबाकर पेस्ट कीजिए।')) } }
function openDetective(sms) { ui.md.err = ''; if (sms != null) { ui.md.text = sms } go('detect') }
function detectIntent(q) { return /samjh|समझा|explain (this|the|my)? ?(transaction|message|sms)|why was .*(deduct|debit)|mere paise kahan|मेरे पैसे कहाँ/i.test(q) }
function detectReply(q) {
  const sv = ui.md.saved || (ui.md.res && ui.md.res.kind === 'txn' ? ui.md.res : null);
  if (sv) return dExplain(sv);
  if (/kahan|कहाँ|where/i.test(q)) return dAnswer(q);
  return x('Paste the bank message in AI Money Detective and I will explain it. Open the Detective tab to start.', 'AI मनी डिटेक्टिव में बैंक का संदेश पेस्ट कीजिए, मैं समझा दूँगा। शुरू करने के लिए डिटेक्टिव टैब खोलिए।')
}
function detect() {
  const m = ui.md, r = m.res, sv = m.saved;
  const head = `<div class="dt-head"><div class="dt-badge">${ico('detective')}</div><div><h1 style="margin:0">${x('AI Money Detective', 'AI मनी डिटेक्टिव')}</h1><div class="mut">${x('Understand every rupee. Know where your money goes.', 'हर रुपये को समझिए। जानिए पैसा कहाँ जाता है।')}</div></div></div>`;
  const priv = `<div class="info-callout" style="margin:12px 0">${x('Privacy: your message is read on this device only. Only the amount, date, shop, category and last 4 digits of the account are saved, never the full message. Never paste your UPI PIN, OTP or password. This explains what you paste; it does not check with your bank.', 'निजता: आपका संदेश सिर्फ़ इसी डिवाइस पर पढ़ा जाता है। सिर्फ़ रकम, तारीख़, दुकान, श्रेणी और खाते के आख़िरी 4 अंक सेव होते हैं, पूरा संदेश कभी नहीं। UPI PIN, OTP या पासवर्ड कभी पेस्ट न करें। यह आपके पेस्ट किए संदेश को समझाता है; बैंक से जाँच नहीं करता।')}</div>`;
  const lang = `<div class="seg" style="margin-bottom:12px">${chip('EN', S.lang === 'en', "S.lang='en';save();render()")}${chip('हिंदी', S.lang === 'hi', "S.lang='hi';save();render()")}</div>`;
  if (sv) return `${head}<div class="dt-hero"><div class="dt-hero-top">${ico('check')} ${x('Saved', 'सेव हो गया')}</div><div class="dt-amt">${sv.type === 'income' ? '+' : '−'}${inr(sv.amount)}</div><div>${esc(sv.merchant || cn(sv.category))}</div></div>
  <div class="card dt-expl"><p style="margin:0">${esc(dExplain(sv))}</p></div>${dImpactHtml(sv)}
  <div class="card"><h2 style="margin-top:0">${x('Ask about your money', 'अपने पैसों के बारे में पूछिए')}</h2><div>${[['Why was this money deducted?', 'यह पैसा क्यों कटा?'], ['How much did I spend this week?', 'इस हफ़्ते कितना खर्च किया?'], ['Is this my biggest payment this month?', 'क्या यह इस महीने का सबसे बड़ा भुगतान है?'], ['How does this affect my monthly budget?', 'इसका महीने के बजट पर क्या असर है?']].map(([a, b]) => chip(x(a, b), false, `dAsk(this.dataset.q)" data-q="${esc(x(a, b))}`)).join('')}</div>
  ${m.chat.map(c => `<div class="msg ${c.r === 'me' ? 'me' : 'ai'}">${esc(c.t)}</div>`).join('')}
  <div class="row" style="gap:8px;margin-top:10px"><input class="sp" id="dq" placeholder="${x('Ask a question…', 'सवाल पूछिए…')}" oninput="V.dq=this.value" onkeydown="if(event.key==='Enter')dAsk()" value="${esc(V.dq || '')}"><button class="mic${ui.listen ? ' on' : ''}" style="width:48px;height:48px" aria-label="${x('Speak', 'बोलिए')}" onclick="dMic()">${ico('mic')}</button><button class="btn" onclick="dAsk()">${x('Ask', 'पूछें')}</button></div>
  ${m.chat.length ? `<button class="chip" onclick="speak(ui.md.chat[ui.md.chat.length-1].t)">${ico('spk')} ${x('Listen to answer', 'जवाब सुनिए')}</button>` : ''}</div>
  <div class="row" style="gap:8px"><button class="btn full" onclick="dCancel()">${x('Understand another message', 'एक और संदेश समझिए')}</button><button class="btn sec" onclick="go('txns')">${x('See transactions', 'लेन-देन देखें')}</button></div>`;
  let out = '';
  if (m.loading) {
    out = `<div class="card dt-loading" style="text-align:center;padding:24px 16px"><div class="row" style="gap:12px;justify-content:center"><div class="ai-orb" style="width:36px;height:36px"></div><div style="font-weight:700;font-size:15px;color:var(--pri)">${x('AI Money Detective is analyzing your message…', 'AI मनी डिटेक्टिव संदेश को समझ रहा है…')}</div></div></div>`;
  } else if (r) {
    const d = r.kind === 'failed', dp = !d && dDup(r), lk = dLink(r), cl = D_INC.includes(r.category) || r.type === 'income' ? D_INC : CATS;
    out = d ? `<div class="dt-hero dt-fail"><div class="dt-hero-top">${ico('alert')} ${x('Transaction failed', 'लेन-देन असफल')}</div>${r.amount ? `<div class="dt-amt">${inr(r.amount)}</div>` : ''}</div><div class="card dt-expl"><p style="margin:0">${esc(dFailText(r))}</p></div><button class="btn full" onclick="dCancel()">${x('OK, clear this', 'ठीक है, हटाइए')}</button>`
      : `<div class="dt-hero"><div class="dt-hero-top">${ico('detective')} ${x('Transaction understood!', 'लेन-देन समझ आया!')}</div><div class="dt-amt">${r.type === 'income' ? '+' : '−'}${inr(r.amount)}</div><div>${r.type === 'income' ? x('Money received', 'पैसे मिले') : r.sub === 'atm' ? x('Cash withdrawn', 'नकद निकाले') : x('Money deducted', 'पैसे कटे')}</div><div class="dt-sub">${esc(r.merchant || x('Name not in message', 'नाम संदेश में नहीं'))}${r.method ? ' · ' + r.method : ''}${r.date ? ' · ' + fd(r.date) + ', ' + r.date.slice(0, 4) : ''}</div></div>
   <div class="card dt-expl"><div class="mut" style="margin-bottom:4px">${ico('chat')} ${x('In simple words', 'आसान भाषा में')}</div><p style="margin:0">${esc(dExplain(r))}</p><button class="chip" style="margin-top:10px" onclick="speak(dExplain(ui.md.res))">${ico('spk')} ${x('Listen', 'सुनिए')}</button></div>
   ${r.flags.map(f => `<div class="warn">${esc(x(...DFLAG[f]))}</div>`).join('')}${r.link ? `<div class="warn">${x('This message has a link. I did not open it. Do not tap links in bank messages.', 'इस संदेश में लिंक है। मैंने उसे नहीं खोला। बैंक संदेशों के लिंक पर टैप न कीजिए।')}</div>` : ''}
   ${dp ? `<div class="warn">${dp.strong ? x('This looks the same as a transaction you already saved. Saving will be skipped.', 'यह पहले से सेव लेन-देन जैसा ही है। सेव नहीं होगा।') : x('A similar amount on the same date is already saved. Check it is not the same payment.', 'इसी तारीख़ पर इतनी ही रकम पहले से सेव है। देख लीजिए कि यह वही भुगतान तो नहीं।')}</div>` : ''}
   ${r.sub === 'refund' ? `<div class="card" style="background:var(--soft-lavender)">${lk ? x(`Possibly linked to your ${inr(lk.amount)} payment${lk.merchant ? ` to ${esc(lk.merchant)}` : ''} on ${fd(lk.date)}.`, `शायद आपके ${fd(lk.date)} के ${inr(lk.amount)} के भुगतान${lk.merchant ? ` (${esc(lk.merchant)})` : ''} से जुड़ा है।`) : x('I could not find the original payment in your records.', 'आपके रिकॉर्ड में मूल भुगतान नहीं मिला।')}</div>` : ''}
   <div class="card"><h2 style="margin-top:0">${x('Breakdown', 'विवरण')}</h2>${[[x('Amount', 'रकम'), inr(r.amount)], [x('Type', 'प्रकार'), r.type === 'income' ? x('Income', 'कमाई') : r.type === 'expense' ? (r.sub === 'atm' ? x('Cash withdrawal', 'नकद निकासी') : x('Expense', 'खर्च')) : x('Not sure', 'पक्का नहीं')], [x('Category', 'श्रेणी'), cn(r.category)], [x('Payment method', 'भुगतान का तरीका'), r.method || x('Not in message', 'संदेश में नहीं')], [x('Account', 'खाता'), r.acct || x('Not in message', 'संदेश में नहीं')], [x('Reference', 'रेफ़रेंस'), r.ref || x('Not in message', 'संदेश में नहीं')], [x('Status', 'स्थिति'), x('Appears successful (as per message)', 'संदेश के अनुसार सफल')], [x('Confidence', 'भरोसा'), Math.round(r.conf * 100) + '%']].map(([a, b]) => `<div class="summary-row"><span class="summary-label">${a}</span><span class="summary-val">${esc(b)}</span></div>`).join('')}
   <div style="margin-top:12px"><div class="q-label">${r.sure ? x('Suggested category', 'सुझाई गई श्रेणी') : x('What was this payment for?', 'यह भुगतान किस लिए था?')}</div><div>${cl.map(c => chip(`${CH[c] ? CH[c][2] : ''} ${cn(c)}`, r.category === c && (r.sure || c !== 'Other'), `dSet('category','${c}')`)).join('')}</div>${!r.type ? `<div style="margin-top:8px">${chip(x('Money went out', 'पैसे गए'), false, "dSet('type','expense')")}${chip(x('Money came in', 'पैसे आए'), false, "dSet('type','income')")}</div>` : ''}</div></div>
   ${m.edit ? `<div class="card"><label>${x('Amount (₹)', 'रकम (₹)')}</label><input id="d_amt" type="number" value="${r.amount}"><label>${x('Type', 'प्रकार')}</label><select id="d_type"><option value="expense" ${r.type === 'expense' ? 'selected' : ''}>${x('Expense', 'खर्च')}</option><option value="income" ${r.type === 'income' ? 'selected' : ''}>${x('Income', 'कमाई')}</option></select><label>${x('Date', 'तारीख़')}</label><input id="d_date" type="date" value="${r.date || TODAY}"><label>${x('Shop or person', 'दुकान या व्यक्ति')}</label><input id="d_mer" maxlength="40" value="${esc(r.merchant)}"><button class="btn full" onclick="dEditApply()">${x('Apply changes', 'बदलाव लागू करें')}</button></div>` : ''}
   <div class="card dt-confirm"><div style="font-weight:700;margin-bottom:10px">${x('Does this look correct?', 'क्या यह सही लगता है?')}</div><button class="btn full" onclick="dSave()">${x('Confirm and Save', 'कन्फ़र्म करें और सेव करें')}</button><div class="row" style="gap:8px;margin-top:8px"><button class="btn sec sp" onclick="ui.md.edit=!ui.md.edit;render()">${x('Edit Details', 'विवरण बदलें')}</button><button class="btn sec sp" onclick="dCancel()">${x('Cancel', 'रद्द करें')}</button></div></div>`;
  }
  return `${head}${lang}${priv}<div class="card dt-input"><div class="q-label" style="font-size:20px;font-weight:800">${x("Let's understand your transaction.", 'चलिए आपका लेन-देन समझते हैं।')}</div><p class="mut" style="margin:4px 0 12px">${x("Paste your bank or UPI message below. I'll explain everything in simple language.", 'अपना बैंक या UPI संदेश नीचे पेस्ट कीजिए। मैं सब कुछ आसान भाषा में समझाऊँगा।')}</p>
  <textarea id="dtext" rows="5" maxlength="600" aria-label="${x('Bank SMS', 'बैंक SMS')}" ${m.loading ? 'disabled' : ''} oninput="ui.md.text=this.value" placeholder="${x('Paste SMS here…', 'SMS यहाँ पेस्ट कीजिए…')}">${esc(m.text)}</textarea>
  ${m.err ? `<div class="warn" role="alert" style="margin-bottom:10px">${esc(m.err)}${m.fallbackAvailable ? `<div class="row" style="gap:8px;margin-top:8px"><button class="btn sec sm" onclick="retryDetective()">${x('Retry AI', 'दोबारा कोशिश करें')}</button><button class="btn sec sm" onclick="useLocalDetectiveFallback()">${x('Use local rule', 'लोकल नियम से समझें')}</button></div>` : ''}</div>` : ''}
  <div class="row" style="gap:8px;margin:10px 0;flex-wrap:wrap"><button class="chip" onclick="dPaste()">${ico('file')} ${x('Paste message', 'मैसेज पेस्ट')}</button><button class="chip" onclick="ui.md.text=DEX_SAMPLE;ui.md.res=null;ui.md.err='';render()">${x('Example SMS', 'उदाहरण SMS')}</button><button class="chip" onclick="dCancel()">${x('Clear', 'साफ़ करें')}</button></div>
  <button class="btn full" ${m.loading ? 'disabled style="opacity:0.65;cursor:not-allowed"' : ''} onclick="dAnalyze()">${m.loading ? x('Analyzing…', 'जाँच हो रही है…') : x('Analyze transaction', 'लेन-देन समझें')}</button><div class="mut" style="font-size:12px;margin-top:8px">${x('Powered by OpenAI. Banking message analyzed securely. Never shares passwords or PIN.', 'OpenAI द्वारा संचालित। बैंक संदेश सुरक्षित रूप से विश्लेषित। पासवर्ड या PIN कभी साझा नहीं होता।')}</div></div>${out}`
}

render();