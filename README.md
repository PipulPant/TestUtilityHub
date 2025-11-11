# QA Test Utility Hub

A comprehensive collection of testing utilities and tools designed for Quality Assurance professionals working with Playwright, Selenium, and web automation testing.

## 🚀 Features

### Core Testing Utilities

1. **Parallel Worker Calculator** - Calculate optimal parallel workers for Playwright tests based on CPU and memory resources
2. **Resource Requirement Calculator** - Determine CPU and memory requirements for parallel testing scenarios
3. **Test Run Duration Estimator** - Estimate test execution duration based on test count and parallel workers
4. **Test Execution Time Calculator** - Calculate total time to execute tests based on test count and average duration
5. **Timeout Configuration Helper** - Set optimal timeout values based on network speed and expected load times

### Selector & Locator Tools

6. **Selector Stability Checker** - Check if CSS selectors are stable and won't break with DOM changes
7. **Locator Coverage Checker** - Verify locator coverage to ensure selectors match unique elements
8. **XPath to CSS Converter** - Convert XPath expressions to CSS selectors for better Playwright compatibility

### Code Generation Tools

9. **Playwright Action Code Generator** - Generate Playwright code snippets for common actions (click, type, upload, etc.)
10. **Test Case Template Generator** - Generate structured test case templates with steps, expected results, and preconditions

### Data & API Tools

11. **Test Data Generator** - Generate random test data including names, emails, phone numbers, addresses, UUIDs, passwords, and more
12. **API Request Tester** - Send API requests (GET, POST, PUT, DELETE, PATCH) and view formatted JSON responses with headers
13. **JSON Formatter & Validator** - Format, validate, and beautify JSON data with syntax highlighting
14. **Base64 Encoder/Decoder** - Encode and decode text or data using Base64 encoding
15. **URL Encoder/Decoder** - Encode and decode URLs for proper handling of special characters

### Browser Testing Tools

16. **Page Load Speed Monitor** - Monitor and measure page load speeds for performance optimization
17. **Cookie Manager** - View, edit, and manage browser cookies for testing authentication and session handling
18. **Local Storage Manager** - View and manage browser local storage and session storage

### Utility Tools

19. **Regex Tester** - Test and validate regular expressions with real-time matching and highlighting

## 🎨 Design Features

- **Modern Dark Theme** - Easy on the eyes with a professional dark color scheme
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Consistent UI** - Unified design system across all utility pages
- **Copy to Clipboard** - Easy copying of generated code and results
- **Interactive Sidebar** - Quick navigation between all utilities
- **Font Awesome Icons** - Visual indicators for each utility

## 📁 Project Structure

```
TestUtilityHub/
├── index.html                          # Main landing page
├── styles.css                          # Shared stylesheet
├── common.js                           # Shared JavaScript functions
├── parallel-worker-calculator.html
├── resource-requirement-calculator.html
├── test-duration-estimator.html
├── test-time-calculator.html
├── timeout-configuration-helper.html
├── selector-stability-checker.html
├── locator-coverage-checker.html
├── page-load-speed-monitor.html
├── test-data-generator.html
├── api-request-tester.html
├── playwright-action-code-generator.html
├── json-formatter.html
├── base64-encoder.html
├── url-encoder.html
├── regex-tester.html
├── xpath-converter.html
├── test-case-generator.html
├── cookie-manager.html
└── localstorage-manager.html
```

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Navigate to any utility using the sidebar or cards on the home page
4. Start using the tools!

## 💡 Usage Examples

### Generate Playwright Code
1. Go to "Playwright Action Code Generator"
2. Enter a CSS selector
3. Choose an action (click, type, fill, etc.)
4. Click "Generate Code"
5. Copy the generated code to your test file

### Test API Endpoints
1. Go to "API Request Tester"
2. Select HTTP method (GET, POST, etc.)
3. Enter the API URL
4. Add headers and body if needed
5. Click "Send Request" to see the response

### Generate Test Data
1. Go to "Test Data Generator"
2. Select data type (name, email, phone, etc.)
3. Enter quantity
4. Click "Generate Data"
5. Copy the generated data for your tests

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with modern features (CSS Variables, Flexbox, Grid)
- **JavaScript (ES6+)** - Functionality and interactivity
- **Font Awesome** - Icons

## 📝 Notes

- All utilities work entirely in the browser - no server required
- Some features (like API testing) may be limited by CORS policies
- Cookie and Local Storage managers work with the current browser session
- All code generation follows Playwright best practices

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## 📄 License

This project is open source and available for use in testing and development.

## 🎯 Best Practices

- Use data-testid attributes for stable selectors
- Keep selectors short and specific
- Use Locator API in Playwright for better reliability
- Test API endpoints with proper authentication headers
- Generate test data that matches your application's requirements
- Monitor page load times to optimize test performance

---

**Made with ❤️ for QA Engineers and Test Automation Professionals**
