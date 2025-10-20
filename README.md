**Profile Card Component - Multi-Page Application**

A responsive, accessible multi-page application built with semantic HTML, modern CSS, and JavaScript. This project demonstrates modern frontend development practices with a focus on accessibility, responsive design, and form validation.

**🚀 Features
✅ Core Features**

    ✅ Multi-Page Application - Three interconnected pages: Home, About, and Contact
    ✅ Responsive Design - Works seamlessly on mobile, tablet, and desktop
    ✅ Accessibility First - WCAG compliant with proper ARIA attributes and keyboard navigation
    ✅ Modern UI/UX - Clean design with smooth animations and hover effects
    ✅ Real-time Updates - Live time display in milliseconds
    ✅ Avatar Upload - Click-to-upload profile picture functionality
    ✅ Semantic HTML - Proper HTML5 structure for better SEO and accessibility
    ✅ Cross-browser Compatible - Works on all modern browsers


**✅ New Stage 1 Features**

    Contact Form - Fully validated contact form with real-time feedback
    About Me Page - Reflective content with proper semantic structure
    Navigation System - Consistent navigation across all pages
    Form Validation - Client-side validation with accessibility support
    Success States - User feedback for form submissions


**📋 Requirements Met
Data Test IDs**

**All elements include required data-testid attributes for automated testing:**

**Home Page**

    test-profile-card - Root container
    test-user-name - User name
    test-user-bio - Biography
    test-user-time - Current time in milliseconds
    test-user-avatar - Profile image
    test-user-social-links - Social links container
    test-user-social-<network> - Individual social links
    test-user-hobbies - Hobbies list
    test-user-dislikes - Dislikes list

**Contact Page**

    test-contact-page - Main container
    test-contact-name - Full name input
    test-contact-email - Email input
    test-contact-subject - Subject input
    test-contact-message - Message textarea
    test-contact-submit - Submit button
    test-contact-error-<field> - Field error messages
    test-contact-success - Success message

**About Page**

    test-about-page - Main container
    test-about-bio - Bio section
    test-about-goals - Goals section
    test-about-confidence - Confidence section
    test-about-future-note - Future note section
    test-about-extra - Extra thoughts section

**Semantic HTML Structure**

    <article> for the main profile card
    <header> for the name section
    <figure> and <img> for avatar with proper alt text
    <nav> for social links and main navigation
    <section> for content sections
    <main> for primary content
    Proper form structure with <label> associations
    Accessible error messaging with aria-describedby
    

**🛠 Technologies Used**

    HTML5 - Semantic markup with proper structure
    CSS3 - Flexbox, CSS Grid, Custom Properties, Animations, Media Queries
    JavaScript (ES6+) - DOM manipulation, File API, LocalStorage, Form Validation
    Accessibility - ARIA attributes, keyboard navigation, screen reader support
    Performance - Intersection Observer, efficient event handling

**📁 Project Structure
text**

profile-card/
│
├── index.html          # Home page with profile card
├── about.html          # About Me page with reflections
├── contact.html        # Contact page with form validation
├── style.css           # Comprehensive CSS styles
├── script.js           # Home page JavaScript functionality
├── contact.js          # Contact form validation logic
├── about.js            # About page interactions & animations
└── assets/
    └── images/
        └── oba.jpg     # Profile avatar image


**🚀 Quick Start
Prerequisites**

    A modern web browser (Chrome, Firefox, Safari, Edge)
    Basic knowledge of HTML, CSS, and JavaScript (for customization)

**Installation**

    Clone or download the project
    bash

git clone https://github.com/SamuelOnyedikachi/profilecard-frontendwizard.git
cd profile-card

**Open in browser**

    Simply open index.html in your web browser
    Or use a local server for better functionality:
    bash

# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000

    Navigate between pages
        Use the navigation menu to switch between Home, About, and Contact pages


**🎨 Customization
Colors and Theme**

Modify the CSS custom properties in style.css:
css

:root {
    --primary-color: #062f06;
    --secondary-color: #0c9733;
    --accent-color: #0a7c2a;
    --text-color: #333;
    --light-bg: #f5f7fa;
    --nav-bg: #062f06;
    --card-bg: #ffffff;
    /* ... more variables */
}


**Personal Information**

Update content in respective HTML files:

**Home Page (index.html):**
html

<h2 data-testid="test-user-name" class="profile-name">Your Name</h2>
<p data-testid="test-user-bio" class="profile-bio">Your biography...</p>

**About Page (about.html):**
Update the reflective sections with your personal insights and goals.
Social Links

A**dd or modify social media links in index.html:**
html

<a 
    href="https://your-profile-url" 
    target="_blank" 
    rel="noopener noreferrer"
    data-testid="test-user-social-platform"
    class="social-link"
>
    Platform Name
</a>



**🧪 Testing
Automated Testing**

The component includes specific data-testid attributes for stable automated testing:
javascript

// Example tests using data-testid attributes
const profileCard = document.querySelector('[data-testid="test-profile-card"]');
const userName = document.querySelector('[data-testid="test-user-name"]');
const contactForm = document.querySelector('[data-testid="test-contact-form"]');
const aboutPage = document.querySelector('[data-testid="test-about-page"]');


**Manual Testing Checklist
Home Page**

    All data-testid attributes are present and correct
    Real-time clock updates every 100ms
    Avatar upload functionality works
    Social links open in new tabs
    Responsive design works on all screen sizes

**Contact Page**

    Form validation prevents invalid submissions
    Real-time field validation provides immediate feedback
    Error messages are accessible and clear
    Success message shows after valid submission
    All form fields are properly labeled

**About Page**

    All sections have correct data-testid attributes
    Semantic HTML structure is maintained
    Content is properly organized and accessible
    Navigation works correctly

**General**

    Keyboard navigation works for all interactive elements
    Screen readers properly announce content
    Responsive design works on mobile, tablet, and desktop
    Color contrast meets WCAG AA standards


**♿ Accessibility Features**

    Keyboard Navigation: All interactive elements are focusable and navigable
    Screen Reader Support: Proper ARIA labels and semantic structure
    Color Contrast: Meets WCAG AA standards for text and UI elements
    Focus Indicators: Clear focus states for all interactive elements
    Alt Text: Descriptive alt text for images
    ARIA Live Regions: Dynamic content updates announced to screen readers
    Form Accessibility: Proper label associations, error descriptions, and required indicators
    Reduced Motion Support: Respects user motion preferences


**📱 Responsive Breakpoints**

    Mobile: < 480px
    Tablet: 481px - 768px
    Desktop: > 768px

    
**🌐 Browser Support**

    Chrome 60+
    Firefox 55+
    Safari 12+
    Edge 79+

**🔧 JavaScript Features
Core Functions
Home Page (script.js)**

    updateTime() - Updates current time display in milliseconds
    setupAvatarUpload() - Handles avatar image uploads with validation
    setupNavigation() - Manages mobile navigation toggle
    showNotification() - Displays user feedback messages
    enhanceAccessibility() - Adds ARIA attributes and accessibility features

**Contact Page (contact.js)**

    ContactForm class - Comprehensive form validation and submission
    Real-time field validation with immediate user feedback
    Accessible error messaging with proper ARIA attributes
    Form data processing and success states

**About Page (about.js)**

    AboutPage class - Page enhancements and animations
    Scroll-triggered animations using Intersection Observer
    Accessibility enhancements for screen readers
    Smooth section transitions and interactions

**Form Validation Rules**

    Name: Required, minimum 2 characters, letters and spaces only
    Email: Required, valid email format
    Subject: Required, minimum 3 characters
    Message: Required, 10-1000 characters

**Avatar Upload Features**

    Click the avatar to upload a new image
    Supports common image formats (JPEG, PNG, GIF, WebP)
    File size limit: 5MB
    Image validation and error handling
    LocalStorage persistence across sessions


**🚀 Deployment
Netlify**

    Drag and drop the project folder to Netlify
    Or connect your GitHub repository for automatic deployments

**GitHub Pages**

    Push code to GitHub repository
    Go to Settings → Pages
    Select source branch and folder


**📄 License**

This project is open source and available under the MIT License.
🤝 Contributing

    Fork the project
    Create your feature branch (git checkout -b feature/AmazingFeature)
    Commit your changes (git commit -m 'Add some AmazingFeature')
    Push to the branch (git push origin feature/AmazingFeature)
    Open a Pull Request


**🌐 Live Demo**

    Live Site: https://profilecard-frontendwizard.netlify.app/
    GitHub Repository: https://github.com/SamuelOnyedikachi/profilecard-frontendwizard


**📞 Support**

If you have any questions or issues, please open an issue on GitHub or contact:

    Name: Samuel Onyedikachi
    Twitter: @Psalmc0des
    GitHub: SamuelOnyedikachi
    LinkedIn: samuel-onyedikachi
    

**🙏 Acknowledgments**

    Modern CSS techniques and best practices
    Accessibility guidelines and WCAG resources
    Form validation patterns and user experience principles
    Responsive design methodologies and breakpoint strategies
    JavaScript ES6+ features and modern DOM manipulation

Made with ❤️ by **Samuel Onyedikachi**
