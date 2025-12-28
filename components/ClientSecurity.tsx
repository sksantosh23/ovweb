'use client';

import { useEffect } from 'react';

/**
 * ClientSecurity Component
 * 
 * Implements client-side security measures:
 * - Disables right-click context menu
 * - Blocks keyboard shortcuts for dev tools
 * - Prevents text selection on sensitive areas
 * - Detects and warns about dev tools
 * - Clears console with security message
 * 
 * Note: These are deterrents, not foolproof security measures.
 * Always implement proper server-side security.
 */
export default function ClientSecurity() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') {
      console.log('🔓 Security measures disabled in development mode');
      return;
    }

    // =====================
    // Disable Right Click
    // =====================
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // =====================
    // Block Dev Tools Shortcuts
    // =====================
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I (Dev Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }

      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }

      // Cmd variants for Mac
      if (e.metaKey) {
        if (e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
          e.preventDefault();
          return false;
        }
        if (e.key === 'u' || e.key === 's') {
          e.preventDefault();
          return false;
        }
        // Cmd+Option+I (Mac Dev Tools)
        if (e.altKey && e.key === 'i') {
          e.preventDefault();
          return false;
        }
      }
    };

    // =====================
    // Console Security Message
    // =====================
    const clearConsole = () => {
      console.clear();
      
      // Security warning
      console.log(
        '%c⚠️ SECURITY WARNING',
        'color: #ef4444; font-size: 40px; font-weight: bold; text-shadow: 2px 2px 0 #000;'
      );
      console.log(
        '%cThis browser feature is intended for developers only.',
        'color: #f59e0b; font-size: 16px;'
      );
      console.log(
        '%cIf someone told you to copy-paste something here to enable a feature or "hack" an account, it is a scam and will give them access to your account.',
        'color: #ef4444; font-size: 14px;'
      );
      console.log(
        '%cSee https://omniverity.com/security for more information.',
        'color: #06b6d4; font-size: 12px;'
      );
    };

    // =====================
    // Dev Tools Detection
    // =====================
    let devToolsOpen = false;
    
    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      
      if (widthThreshold || heightThreshold) {
        if (!devToolsOpen) {
          devToolsOpen = true;
          // Log warning but don't redirect - could be false positive
          console.warn('Developer tools detected');
        }
      } else {
        devToolsOpen = false;
      }
    };

    // =====================
    // Prevent Image Dragging
    // =====================
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
        return false;
      }
    };

    // =====================
    // Prevent Selection on Sensitive Elements
    // =====================
    const addNoSelectStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Prevent selection on sensitive elements */
        [data-secure],
        .no-select {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Disable image dragging */
        img {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }
        
        /* Disable printing (optional - can be removed) */
        @media print {
          body {
            display: none !important;
          }
        }
      `;
      document.head.appendChild(style);
      return style;
    };

    // =====================
    // Apply Security Measures
    // =====================
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    
    const styleElement = addNoSelectStyles();
    clearConsole();
    
    // Check for dev tools periodically
    const devToolsInterval = setInterval(detectDevTools, 1000);
    window.addEventListener('resize', detectDevTools);

    // =====================
    // Cleanup
    // =====================
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('resize', detectDevTools);
      clearInterval(devToolsInterval);
      
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, []);

  // This component doesn't render anything
  return null;
}
