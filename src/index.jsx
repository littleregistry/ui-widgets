import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { injectStyles } from './styles';

// Inject styles immediately
injectStyles();

// Export a function to initialize the widget
window.SearchModalWidget = {
  init: function(elementId) {
    injectStyles(); // Ensure styles are injected
    const container = document.getElementById(elementId);
    if (container) {
      const root = createRoot(container);
      root.render(<App />);
    } else {
      console.error(`Element with id "${elementId}" not found`);
    }
  }
};

// Auto-initialize if there's a container with id '__littleregistry__search-modal-root'
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('__littleregistry__search-modal-root');
    if (container) {
      const root = createRoot(container);
      root.render(<App />);
    }
  });
}
