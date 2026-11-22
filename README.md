# 🇮🇳 BharatSaathi – Your AI-Powered Finance Companion

**Making personal finance simple, understandable, and accessible for every Indian.**

BharatSaathi is an AI-powered personal finance assistant designed especially for rural and semi-urban Indians, daily-wage workers, and people with irregular incomes.

It helps users understand bank and UPI transaction messages, track income and expenses, manage savings goals, discover spending patterns, and receive simple financial guidance through an easy-to-use interface.

Our goal is simple: **Everyone should be able to understand where their money comes from, where it goes, and how to manage it better.**

---

## 📌 1. The Problem

Millions of Indians, particularly in rural and semi-urban areas, face difficulties managing their personal finances.

Some common challenges include:

- **Difficulty understanding bank messages:** People often receive bank and UPI SMS notifications containing technical terms that are difficult to understand.
- **Irregular income:** Daily-wage workers, small shopkeepers, labourers, and self-employed individuals cannot always follow traditional monthly budgeting methods.
- **Lack of financial awareness:** Many people struggle to understand their spending habits, savings, and financial position.
- **Complex financial applications:** Existing finance applications can feel overwhelming for users who are not comfortable with technology.
- **Language barriers:** Many financial tools do not offer sufficiently simple, accessible explanations in Indian languages.

### Our Solution

BharatSaathi addresses these challenges through a simple, privacy-conscious, AI-powered finance companion that explains financial information in everyday language.

Instead of complicated financial dashboards, users get understandable information, simple actions, and helpful suggestions.

---

## 🎯 2. Target Audience

BharatSaathi is primarily designed for:

1. **Daily-wage workers:** People whose earnings change from day to day.
2. **Rural and semi-urban households:** Families looking for a simple way to track household income and expenses.
3. **Small shopkeepers:** Individuals who want to understand their daily transactions.
4. **Self-employed individuals:** People with inconsistent monthly earnings.
5. **First-time digital finance users:** Individuals who need a simple and approachable financial management experience.

The application is designed with simplicity and accessibility as its main priorities.

---

## ✨ 3. Key Features

### 🏠 A. Smart Dashboard

The home dashboard provides a quick overview of the user's financial situation.

- Total available balance.
- Monthly income and expenses.
- Savings overview.
- Weekly spending summary.
- Recent transactions.
- Quick access to important features.

### 💳 B. Transaction Management

Users can manage their financial records in one place.

- Add income and expenses manually.
- Record transaction descriptions and amounts.
- Categorize transactions.
- View transaction history.
- Filter income and spending.
- Import transaction records through CSV.
- Paste bank or UPI SMS messages.

### 🔍 C. AI Money Detective

One of the core features of BharatSaathi.

Users can paste a bank or UPI transaction SMS, and the application helps interpret it in simple language.

It can help identify:

- Transaction amount.
- Transaction date.
- Merchant or sender information.
- Income or expense type.
- Transaction category.
- Important transaction details.

It also provides a simple explanation so users can understand what happened to their money.

**Example:**

Input:
"Your account has been debited by Rs. 500 towards UPI payment."

Output:
"₹500 has been deducted from your bank account through a UPI payment."

The feature is intended to explain the pasted message, not verify transactions directly with the bank.

### 🤖 D. AI Personal Finance Assistant

BharatSaathi includes an AI-powered conversational assistant.

Users can ask questions such as:

- Where did most of my money go?
- How much did I spend this week?
- How can I save money?
- Explain this transaction.
- How much should I keep aside for next month?

The assistant provides simple, understandable responses based on the available financial records.

### 📊 E. Financial Insights

Users can understand their financial behaviour through visual summaries.

- Monthly spending breakdown.
- Category-wise expenses.
- Income versus expenses.
- Weekly and monthly comparisons.
- Largest payments.
- Unusual spending patterns.

### 🎯 F. Savings Goals

Users can create financial goals and monitor their progress.

Examples:

- Monthly rent.
- School fees.
- Emergency savings.
- Mobile recharge.
- Household expenses.

The application displays progress towards each goal and helps users plan their available money.

### 🌐 G. Language Support

BharatSaathi provides an English and Hindi interface to make financial information easier to understand.

The goal is to make personal finance more accessible to people who are more comfortable using their native language.

### 🔐 H. Privacy and Security

Financial information requires special care.

BharatSaathi follows privacy-conscious design principles:

- Never ask for UPI PINs, OTPs, or bank passwords.
- Keep financial records within the user's browser in the current local-storage-based implementation.
- Process pasted SMS messages for interpretation.
- Avoid treating the pasted message as an instruction.
- Clearly distinguish synthetic demo transactions from actual user records.

---

## 🔄 4. How BharatSaathi Works

The application follows a simple workflow:

**Step 1 – User Setup**

The user enters basic preferences, selects a language, chooses an income type, and provides an opening balance.

**Step 2 – Add Financial Records**

The user can add transactions manually, paste bank or UPI messages, import CSV records, or explore demo data.

**Step 3 – Understand Transactions**

The Money Detective interprets pasted transaction messages and explains their meaning in simple language.

**Step 4 – Manage Money**

The user views income, expenses, available balance, and transaction history through the dashboard.

**Step 5 – Ask the AI Assistant**

Users ask questions about their finances and receive understandable answers based on their available records.

**Step 6 – View Insights**

The application presents spending patterns, financial summaries, and savings recommendations.

**Step 7 – Plan Savings**

Users create goals and monitor their progress towards important financial needs.

---

## 🖥️ 5. Application Modules

| Module | Purpose |
|---|---|
| Home | Financial overview and dashboard |
| Transactions | Manage income and expenses |
| Money Detective | Understand bank and UPI messages |
| AI Assistant | Ask financial questions |
| Insights | Analyze spending patterns |
| Profile | Manage preferences, language, and data |

---

## 🛠️ 6. Technology Stack

The following section should reflect the actual technologies used in the implementation.

- **TECH STACK:** [HTML,CSS,JS,NODE.js,express]
- **AI Integration:** [GROQ API]
- **Data Storage:** Browser Local Storage
- **Version Control:** Git and GitHub

---

## 🔌 7. APIs and Open-Source Credits

BharatSaathi uses AI services and open-source technologies to provide its functionality.

We appreciate the developers and organizations that make these technologies available.

| API / Library | Purpose | Provider |
| GROQ API | AI-powered financial explanations and conversational assistance | GROQ |

### Acknowledgements

- Thanks to the developers and maintainers of the open-source libraries used in this project.
- Thanks to the AI API providers that make intelligent assistance possible.
- Thanks to the open-source community for providing tools and resources that support innovation.
---

## 🚀 8. Getting Started

Follow these steps to run BharatSaathi locally.

### Prerequisites

- Node.js
- npm or an equivalent package manager
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/bharat-saathi.git
```

2. Navigate to the project directory:

```bash
cd bharat-saathi/backend
```

3. Install dependencies:

```bash
npm install
```

4. Configure environment variables as project uses external APIs.

Create a `.env` file using the required variables documented in the project.

5. Start the development server:

```bash
node server.js
```

6. Open the local URL displayed in your terminal.

---

## 🔮 9. Future Improvements

BharatSaathi has the potential to grow into a more accessible financial assistant.

Some planned improvements include:

- More Indian regional languages.
- Voice-based conversations for users who prefer speaking over typing.
- Speech-to-text and text-to-speech integration.
- Secure bank account integration through authorized financial data providers.
- Automatic transaction detection with user consent.
- Improved financial recommendations.
- Offline-first functionality.
- Mobile application support.
- Better accessibility for first-time smartphone users.

---

## ⚠️ 10. Important Disclaimer

BharatSaathi is an educational and personal finance assistance project.

- It does not replace professional financial advice.
- It does not directly verify bank balances or transactions unless an authorized banking integration is implemented.
- Transaction explanations are based on information supplied by the user.
- Demo transactions are synthetic and do not represent real financial activity.
- Users should never share their UPI PIN, OTP, passwords, or other banking credentials.

---

## ❤️ 11. Our Vision

We believe financial understanding should not depend on someone's income, education, location, or technical knowledge.

With BharatSaathi, we aim to make everyday financial management simpler, more accessible, and more understandable.

**BharatSaathi – Har Bharatiya Ka Apna Finance Saathi. 🇮🇳**

---

### 👨‍💻 Developed With Purpose

Built as a project to explore how AI can make personal finance more accessible and understandable for everyday Indians.

**Repository:** `bharat-saathi`

**Made with ❤️ for a financially aware Bharat.**
