// Update time display with performance optimization
function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Initial update
updateTime();

// Update every 100ms for reasonable accuracy without excessive updates
const timeInterval = setInterval(updateTime, 100);

// Avatar upload functionality with enhanced features
function setupAvatarUpload() {
  const avatarElement = document.querySelector(
    '[data-testid="test-user-avatar"]'
  );

  if (!avatarElement) {
    console.warn('Avatar element not found');
    return;
  }

  // Create file input for avatar upload
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';
  fileInput.setAttribute('aria-label', 'Upload profile picture');
  document.body.appendChild(fileInput);

  // Add click event to avatar for upload
  avatarElement.addEventListener('click', () => {
    fileInput.click();
  });

  // Handle file selection with validation
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      showNotification('Please select a valid image file', 'error');
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      showNotification('Image size should be less than 5MB', 'error');
      return;
    }

    // Show loading state
    const originalSrc = avatarElement.src;
    avatarElement.style.opacity = '0.7';
    avatarElement.style.cursor = 'wait';

    const reader = new FileReader();

    reader.onload = function (e) {
      // Create a new image to check dimensions
      const img = new Image();
      img.onload = function () {
        // Optional: Check image dimensions
        if (img.width < 100 || img.height < 100) {
          showNotification('Image should be at least 100x100 pixels', 'error');
          avatarElement.style.opacity = '1';
          avatarElement.style.cursor = 'pointer';
          return;
        }

        // Update avatar source
        avatarElement.src = e.target.result;
        avatarElement.style.opacity = '1';
        avatarElement.style.cursor = 'pointer';

        // Save to localStorage for persistence
        try {
          localStorage.setItem('userAvatar', e.target.result);
          showNotification('Profile picture updated successfully!', 'success');
        } catch (error) {
          console.warn('Could not save avatar to localStorage:', error);
          showNotification('Profile picture updated!', 'success');
        }
      };
      img.onerror = function () {
        showNotification('Error loading image', 'error');
        avatarElement.style.opacity = '1';
        avatarElement.style.cursor = 'pointer';
      };
      img.src = e.target.result;
    };

    reader.onerror = function () {
      showNotification('Error reading file', 'error');
      avatarElement.style.opacity = '1';
      avatarElement.style.cursor = 'pointer';
    };

    reader.readAsDataURL(file);

    // Reset file input
    event.target.value = '';
  });

  // Add upload hint to avatar
  avatarElement.style.cursor = 'pointer';
  avatarElement.title = 'Click to upload new profile picture';
  avatarElement.setAttribute(
    'aria-label',
    'Profile picture - click to upload new image'
  );

  // Load saved avatar from localStorage if exists
  try {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      avatarElement.src = savedAvatar;
    }
  } catch (error) {
    console.warn('Could not load avatar from localStorage:', error);
  }
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach((notification) => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  });

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.setAttribute('role', 'alert');
  notification.setAttribute('aria-live', 'assertive');

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 6px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

  // Set background color based on type
  const colors = {
    success: '#0c9733',
    error: '#e74c3c',
    info: '#3498db',
    warning: '#f39c12',
  };
  notification.style.backgroundColor = colors[type] || colors.info;

  document.body.appendChild(notification);

  // Animate in
  requestAnimationFrame(() => {
    notification.style.transform = 'translateX(0)';
  });

  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Add accessibility enhancements
function enhanceAccessibility() {
  // Add ARIA labels where needed
  const socialNav = document.querySelector(
    '[data-testid="test-user-social-links"]'
  );
  if (socialNav) {
    socialNav.setAttribute('aria-label', 'Social media profiles');
  }

  // Add role to time container
  const timeContainer = document.querySelector('.time-container');
  if (timeContainer) {
    timeContainer.setAttribute('role', 'timer');
    timeContainer.setAttribute('aria-live', 'polite');
    timeContainer.setAttribute('aria-atomic', 'true');
    timeContainer.setAttribute('aria-label', 'Current time in milliseconds');
  }

  // Add ARIA labels to sections
  const hobbiesSection = document.querySelector(
    '[data-testid="test-user-hobbies"]'
  );
  const dislikesSection = document.querySelector(
    '[data-testid="test-user-dislikes"]'
  );

  if (hobbiesSection) {
    hobbiesSection
      .closest('section')
      ?.setAttribute('aria-label', 'Hobbies and interests');
  }

  if (dislikesSection) {
    dislikesSection
      .closest('section')
      ?.setAttribute('aria-label', 'Dislikes and pet peeves');
  }

  // Add keyboard navigation enhancements
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach((link, index) => {
    link.setAttribute('tabindex', '0');
  });
}

// Performance optimization for time updates
function optimizeTimeUpdates() {
  let lastUpdateTime = 0;
  const updateInterval = 100; // ms

  function efficientUpdate() {
    const now = Date.now();
    if (now - lastUpdateTime >= updateInterval) {
      updateTime();
      lastUpdateTime = now;
    }
    requestAnimationFrame(efficientUpdate);
  }

  // Uncomment below to use requestAnimationFrame instead of setInterval
  // efficientUpdate();
}

// Initialize all functionality when DOM is loaded
function init() {
  console.log('Initializing profile card...');

  // Initialize avatar upload
  setupAvatarUpload();

  // Enhance accessibility
  enhanceAccessibility();

  // Optional: Use requestAnimationFrame for time updates (more performant)
  // optimizeTimeUpdates();

  // Add page visibility awareness for performance
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      // Page is hidden, stop time updates to save resources
      clearInterval(timeInterval);
    } else {
      // Page is visible, resume time updates
      setInterval(updateTime, 100);
    }
  });

  console.log('Profile card initialized successfully!');
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export functions for testing purposes (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    updateTime,
    setupAvatarUpload,
    enhanceAccessibility,
    showNotification,
  };
}
