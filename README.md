# Playwright Automation (TypeScript)

End-to-end test automation framework built with **Playwright** and **TypeScript**, featuring Page Object Model architecture, environment-based configuration, and CI integration via GitHub Actions.

---

## What is Playwright?

[Playwright](https://playwright.dev/) is a browser automation framework (built and maintained by Microsoft) used for end-to-end testing and web scraping. It drives real browsers — **Chromium, Firefox, and WebKit (Safari's engine)** — through a single, unified API, and supports TypeScript/JavaScript, Python, Java, and .NET.

Key features that make it stand out:

- **Auto-waiting** — automatically waits for elements to be visible, enabled, and stable before interacting with them, removing the need for manual waits or sleeps.
- **Cross-browser by default** — one test suite runs against Chromium, Firefox, and WebKit without separate driver installations.
- **Built-in test runner** (`@playwright/test`) — parallel execution, automatic retries, tracing, and HTML reports out of the box.
- **Network interception** — mock or intercept API calls natively, without extra libraries.
- **Codegen & Trace Viewer** — record user actions into test code automatically, and replay a failed test step-by-step with screenshots and DOM snapshots for debugging.

---

## Why Playwright + TypeScript over Selenium + Java?

| | Selenium (Java) | Playwright (TypeScript) |
|---|---|---|
| **Waits** | Manual (`WebDriverWait`, `Thread.sleep`) → prone to flakiness | Auto-waiting built in → more stable tests |
| **Setup** | Requires WebDriver binaries, manual browser/driver version matching | Browsers bundled with install — no driver management needed |
| **Speed** | Slower, more boilerplate code | Faster execution, significantly less boilerplate |
| **Parallelism** | Requires Selenium Grid / TestNG configuration | Built directly into the test runner |
| **Debugging** | Limited — manual screenshot capture | Trace Viewer — full step-by-step replay with DOM snapshots |
| **API testing** | Requires a separate HTTP client library | Built-in `request` context for API calls |
| **Browser contexts** | Needs separate driver sessions per user/session | Lightweight isolated browser contexts — fast multi-user/session testing |
| **Language overhead** | Java — more verbose, requires Maven/Gradle + POM setup | TypeScript — less boilerplate, clean `async`/`await` syntax, large JS ecosystem |

---

## Tech Stack

- **Framework:** Playwright
- **Language:** TypeScript
- **Test Runner:** `@playwright/test`
- **CI/CD:** GitHub Actions

---

## Getting Started

```bash
# Install dependencies
npm install

# Install browser binaries
npx playwright install

# Run all tests
npx playwright test

# Run tests in UI mode (interactive)
npx playwright test --ui

# View the HTML report
npx playwright show-report
```
