'use client';

import { useEffect } from 'react';

/**
 * ClientSecurity Component
 * 
 * Implements client-side security measures that DO NOT harm accessibility:
 * 
 * ✅ INCLUDED (accessibility-safe):
 * - Console security warning (prevents self-XSS attacks)
 * - Dev tools detection for analytics (non-blocking)
 * 
 * ❌ REMOVED (breaks accessibility):
 * - Right-click disable: Screen reader users need context menus
 * - Keyboard shortcut blocking: Interferes with assistive technologies
 * - Text selection prevention: Users need to copy content
 * - Print blocking: Violates user expectations
 * - Image drag prevention: Not a real security measure
 * 
 * IMPORTANT: These client-side "protections" were never real security.
 * Anyone can bypass them. Real security comes from:
 * - Server-side authentication & authorization
 * - Input validation & sanitization
 * - HTTPS & security headers (configured in next.config.js)
 * - Rate limiting & CSRF protection
 * 
 * @see https://webaim.org/blog/web-accessibility-and-security/
 */
export default function ClientSecurity() {
  useEffect(() => {
    // Only run security features in production
    if (process.env.NODE_ENV !== 'production') {
      console.log(
        '%c🔓 Development Mode',
        'color: #10b981; font-size: 14px; font-weight: bold;'
      );
      console.log(
        '%cSecurity warnings are disabled in development.',
        'color: #64748b; font-size: 12px;'
      );
      return;
    }

    // =====================
    // Console Security Warning
    // =====================
    // This is the ONLY effective client-side security measure.
    // It helps prevent "self-XSS" attacks where attackers trick
    // users into pasting malicious code into the console.
    const displaySecurityWarning = () => {
      // Clear any previous output
      console.clear();
      
      // Large warning header
      console.log(
        '%c⚠️ STOP!',
        'color: #ef4444; font-size: 48px; font-weight: bold; text-shadow: 2px 2px 0 #000;'
      );
      
      // Explanation
      console.log(
        '%cThis browser feature is intended for developers.',
        'color: #f59e0b; font-size: 18px; font-weight: bold;'
      );
      
      // Warning message
      console.log(
        '%cIf someone told you to copy-paste something here to enable a feature, ' +
        'unlock content, or "hack" an account, it is a scam.',
        'color: #ef4444; font-size: 14px; line-height: 1.5;'
      );
      
      console.log(
        '%cPasting code here could give attackers access to your account.',
        'color: #ef4444; font-size: 14px; font-weight: bold;'
      );
      
      // Help link
      console.log(
        '%cLearn more: https://omniverity.com/security',
        'color: #06b6d4; font-size: 12px;'
      );
      
      // Legitimate developer message
      console.log(
        '%c\nIf you are a developer, we welcome you! ' +
        'Check out our careers page: https://omniverity.com/careers',
        'color: #10b981; font-size: 12px;'
      );
    };

    // Display warning immediately
    displaySecurityWarning();

    // =====================
    // Dev Tools Detection (Analytics Only)
    // =====================
    // This is for analytics purposes only - we DO NOT block dev tools.
    // Blocking dev tools is:
    // 1. Easily bypassed
    // 2. Annoying to legitimate developers
    // 3. Not a real security measure
    let devToolsDetected = false;
    
    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      
      const isDevToolsOpen = widthThreshold || heightThreshold;
      
      // Only log once when dev tools are first opened
      if (isDevToolsOpen && !devToolsDetected) {
        devToolsDetected = true;
        
        // You could send this to analytics here
        // analytics.track('dev_tools_opened');
        
        // Re-display the warning since they might have cleared console
        displaySecurityWarning();
      } else if (!isDevToolsOpen) {
        devToolsDetected = false;
      }
    };

    // Check periodically (but don't be annoying about it)
    const devToolsInterval = setInterval(detectDevTools, 2000);
    
    // Also check on resize
    window.addEventListener('resize', detectDevTools);

    // =====================
    // Cleanup
    // =====================
    return () => {
      clearInterval(devToolsInterval);
      window.removeEventListener('resize', detectDevTools);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}

/**
 * ACCESSIBILITY NOTE
 * ==================
 * 
 * The following "security" measures were intentionally NOT implemented
 * because they break accessibility and provide no real security:
 * 
 * 1. Disabling right-click (contextmenu event)
 *    - Screen reader users rely on context menus
 *    - Users need to copy text, save images, etc.
 *    - Easily bypassed with browser settings
 * 
 * 2. Blocking keyboard shortcuts (F12, Ctrl+Shift+I, etc.)
 *    - Many shortcuts overlap with assistive technologies
 *    - Screen readers use keyboard extensively
 *    - Easily bypassed
 * 
 * 3. Preventing text selection
 *    - Users need to copy addresses, codes, etc.
 *    - Breaks basic web usability
 *    - Violates WCAG guidelines
 * 
 * 4. Disabling print
 *    - Users may need printed copies for accessibility
 *    - Some users prefer reading printed documents
 *    - Easily bypassed
 * 
 * 5. Dev tools detection and blocking
 *    - Legitimate developers need dev tools
 *    - Security researchers need dev tools
 *    - False positives are common
 *    - Easily bypassed
 * 
 * For actual security, see:
 * - next.config.js (CSP, HSTS, etc.)
 * - Server-side authentication
 * - API rate limiting
 * - Input validation
 */
