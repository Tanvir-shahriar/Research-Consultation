// Main application initialization
document.addEventListener('DOMContentLoaded', () => {
  console.log('Firebase Authentication Blog System initialized');
  
  // Check if Firebase is loaded
  if (typeof firebase === 'undefined') {
    console.error('Firebase not loaded. Please check your Firebase configuration.');
    return;
  }
  
  // Check if auth is initialized
  if (!window.auth) {
    console.error('Firebase Auth not initialized. Please check your Firebase configuration.');
    return;
  }
  
  console.log('Firebase Auth initialized successfully');
  
  // The auth state listener in auth.js will handle showing the appropriate page
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && window.authUtils && window.authUtils.getCurrentUser()) {
    // Refresh blog posts when page becomes visible and user is authenticated
    if (window.blogUtils) {
      window.blogUtils.loadBlogPosts();
    }
  }
});

// Handle online/offline status
window.addEventListener('online', () => {
  console.log('Connection restored');
  // You could show a notification here
});

window.addEventListener('offline', () => {
  console.log('Connection lost');
  // You could show a notification here
});

// Global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // In production, you might want to send this to an error tracking service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // In production, you might want to send this to an error tracking service
});