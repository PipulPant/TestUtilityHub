// Shared JavaScript functions for Test Utility Hub

// Toggle sidebar navigation
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.querySelector('.hamburger');
  
  if (sidebar && sidebar.classList.contains('active')) {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
      sidebar.classList.remove('active');
    }
  }
});

// Copy to clipboard function
function copyToClipboard(text, buttonElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = buttonElement.textContent;
    buttonElement.textContent = '✓ Copied!';
    buttonElement.style.background = 'linear-gradient(135deg, #4ec9b0 0%, #3ba012 100%)';
    
    setTimeout(() => {
      buttonElement.textContent = originalText;
      buttonElement.style.background = '';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
    alert('Failed to copy to clipboard');
  });
}

// Format JSON with proper indentation
function formatJSON(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return JSON.stringify(parsed, null, 2);
  } catch (e) {
    return jsonString;
  }
}

// Validate JSON
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

// Get all utility pages for sidebar
function getUtilityPages() {
  return [
    { name: 'Home', url: 'index.html', icon: 'fa-home' },
    { name: 'Parallel Worker Calculator', url: 'parallel-worker-calculator.html', icon: 'fa-calculator' },
    { name: 'Resource Requirement Calculator', url: 'resource-requirement-calculator.html', icon: 'fa-server' },
    { name: 'Test Run Duration Estimator', url: 'test-duration-estimator.html', icon: 'fa-clock' },
    { name: 'Test Execution Time Calculator', url: 'test-time-calculator.html', icon: 'fa-stopwatch' },
    { name: 'Timeout Configuration Helper', url: 'timeout-configuration-helper.html', icon: 'fa-hourglass-half' },
    { name: 'Selector Stability Checker', url: 'selector-stability-checker.html', icon: 'fa-shield-alt' },
    { name: 'Locator Coverage Checker', url: 'locator-coverage-checker.html', icon: 'fa-search' },
    { name: 'Page Load Speed Monitor', url: 'page-load-speed-monitor.html', icon: 'fa-tachometer-alt' },
    { name: 'Test Data Generator', url: 'test-data-generator.html', icon: 'fa-database' },
    { name: 'API Request Tester', url: 'api-request-tester.html', icon: 'fa-plug' },
    { name: 'Playwright Action Code Generator', url: 'playwright-action-code-generator.html', icon: 'fa-code' },
    { name: 'JSON Formatter & Validator', url: 'json-formatter.html', icon: 'fa-brackets-curly' },
    { name: 'Base64 Encoder/Decoder', url: 'base64-encoder.html', icon: 'fa-key' },
    { name: 'URL Encoder/Decoder', url: 'url-encoder.html', icon: 'fa-link' },
    { name: 'Regex Tester', url: 'regex-tester.html', icon: 'fa-filter' },
    { name: 'XPath to CSS Converter', url: 'xpath-converter.html', icon: 'fa-exchange-alt' },
    { name: 'Test Case Template Generator', url: 'test-case-generator.html', icon: 'fa-file-alt' },
    { name: 'Cookie Manager', url: 'cookie-manager.html', icon: 'fa-cookie' },
    { name: 'Local Storage Manager', url: 'localstorage-manager.html', icon: 'fa-hdd' }
  ];
}

// Initialize sidebar with current page highlighting
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pages = getUtilityPages();
  
  let sidebarHTML = '';
  pages.forEach(page => {
    const isActive = page.url === currentPage ? 'active' : '';
    sidebarHTML += `<a href="${page.url}" class="${isActive}">
      <i class="fas ${page.icon}"></i> ${page.name}
    </a>`;
  });
  
  sidebar.innerHTML = sidebarHTML;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initSidebar();
});

