# 🎭 Playwright

End-to-end test automation project built with Playwright.

---

## 🚀 Main Technologies

- Playwright
- JavaScript
- GitHub Actions

---

## 📋 Prerequisites

Install:

- Node.js
- NPM

Verify the installation:

```bash
node -v
npm -v
```

---

## ⚙️ Create a New Playwright Project

```bash
npm init playwright@latest
```

---

## ▶️ Run Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test ./tests/example.spec.js
```

### Run tests in parallel

```bash
npx playwright test --workers=3
```

### Run tests only in Chromium

```bash
npx playwright test --project=chromium
```

---

## 🖥️ Playwright UI Mode

Launch the interactive test runner:

```bash
npx playwright test --ui
```

---

## 🐞 Debug Mode

Run tests with the Playwright debugger:

```bash
npx playwright test --debug
```

---

## 🤖 Code Generator

Generate test code automatically while interacting with a website:

```bash
npx playwright codegen https://www.example.com
```

---

## 📁 Project Structure

```text
Playwright/
│
├── tests/
│   └── *.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## 💡 Useful Commands

```bash
npx playwright test
npx playwright test --ui
npx playwright test --debug
npx playwright test --project=chromium
npx playwright test --workers=3
npx playwright codegen https://www.example.com
```
