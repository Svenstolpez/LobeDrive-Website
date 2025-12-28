/**
 * LobeDrive Language Switcher
 * Handles bilingual Swedish/English content switching
 *
 * Dependencies: lang.js (must be loaded before this script)
 */

(function() {
  'use strict';

  // Default language (Swedish for Swedish company)
  const DEFAULT_LANG = 'sv';
  const STORAGE_KEY = 'lobedrive_language';

  /**
   * Get current language from localStorage or default
   * @returns {string} Language code ('sv' or 'en')
   */
  function getCurrentLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    // Validate stored value
    if (stored === 'sv' || stored === 'en') {
      return stored;
    }
    return DEFAULT_LANG;
  }

  /**
   * Save language preference to localStorage
   * @param {string} langCode - Language code ('sv' or 'en')
   */
  function saveLanguage(langCode) {
    localStorage.setItem(STORAGE_KEY, langCode);
  }

  /**
   * Update all elements with data-lang-key attributes
   * @param {string} langCode - Language code ('sv' or 'en')
   */
  function updateContent(langCode) {
    if (!window.lang || !window.lang[langCode]) {
      console.error(`Language data not found for: ${langCode}`);
      return;
    }

    const currentLang = window.lang[langCode];

    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      const value = getNestedValue(currentLang, key);

      if (value !== undefined) {
        // Check if element should use innerHTML (for HTML content)
        if (element.hasAttribute('data-lang-html')) {
          element.innerHTML = value;
        } else {
          element.textContent = value;
        }
      } else {
        console.warn(`Translation key not found: ${key}`);
      }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
      const key = element.getAttribute('data-lang-placeholder');
      const value = getNestedValue(currentLang, key);

      if (value !== undefined) {
        element.placeholder = value;
      }
    });

    // Update aria-label attributes
    document.querySelectorAll('[data-lang-aria]').forEach(element => {
      const key = element.getAttribute('data-lang-aria');
      const value = getNestedValue(currentLang, key);

      if (value !== undefined) {
        element.setAttribute('aria-label', value);
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLang.meta.htmlLang;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentLang.meta.description);
    }

    // Update page title
    document.title = currentLang.meta.title;

    // Update language switcher active state
    updateSwitcherState(langCode);
  }

  /**
   * Get nested object value using dot notation
   * Example: getNestedValue(obj, 'hero.headline')
   * @param {Object} obj - Object to search
   * @param {string} path - Dot-notation path
   * @returns {*} Value or undefined
   */
  function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  /**
   * Update language switcher button states
   * @param {string} activeLang - Active language code
   */
  function updateSwitcherState(activeLang) {
    document.querySelectorAll('.lang-switcher-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === activeLang) {
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'true');
      } else {
        btn.classList.remove('active');
        btn.removeAttribute('aria-current');
      }
    });
  }

  /**
   * Switch to specified language
   * @param {string} langCode - Language code ('sv' or 'en')
   */
  function switchLanguage(langCode) {
    if (langCode !== 'sv' && langCode !== 'en') {
      console.error(`Invalid language code: ${langCode}`);
      return;
    }

    saveLanguage(langCode);
    updateContent(langCode);

    // Dispatch custom event for other scripts
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: langCode }
    }));
  }

  /**
   * Initialize language switcher on page load
   */
  function init() {
    // Check if lang.js is loaded
    if (typeof window.lang === 'undefined') {
      console.error('Language data (lang.js) not loaded. Please include lang.js before language-switcher.js');
      return;
    }

    // Get saved or default language
    const currentLang = getCurrentLanguage();

    // Apply language on page load
    updateContent(currentLang);

    // Attach event listeners to language switcher buttons
    document.querySelectorAll('.lang-switcher-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle to the opposite language
        const currentLang = getCurrentLanguage();
        const newLang = currentLang === 'sv' ? 'en' : 'sv';
        switchLanguage(newLang);
      });
    });

    console.log(`LobeDrive language switcher initialized. Current language: ${currentLang}`);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose switchLanguage function globally for manual use if needed
  window.lobeDriveSwitchLanguage = switchLanguage;

})();
