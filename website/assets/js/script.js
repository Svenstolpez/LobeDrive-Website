// ===================================
// MOBILE NAVIGATION TOGGLE
// ===================================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translateY(10px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');

            // Reset hamburger icon
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    });
});

// ===================================
// SMOOTH SCROLLING FOR NAVIGATION
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// FORM HANDLING & VALIDATION
// ===================================

const waitlistForm = document.getElementById('waitlist-form');
const formSuccess = document.getElementById('form-success');

if (waitlistForm) {
    waitlistForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            email: document.getElementById('email').value.trim(),
            name: document.getElementById('name').value.trim(),
            interest: document.getElementById('interest').value.trim()
        };

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Disable submit button to prevent double submission
        const submitBtn = waitlistForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        try {
            // Here you would integrate with your backend/email service
            // Example integrations:

            // Option 1: Mailchimp
            // await submitToMailchimp(formData);

            // Option 2: ConvertKit
            // await submitToConvertKit(formData);

            // Option 3: Google Sheets via API
            // await submitToGoogleSheets(formData);

            // Option 4: Your own backend
            // await fetch('/api/waitlist', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            // For now, simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Store in localStorage as backup
            storeSubmissionLocally(formData);

            // Show success message
            waitlistForm.style.display = 'none';
            formSuccess.style.display = 'block';

            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Track conversion (if using analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'YOUR_CONVERSION_ID',
                    'value': 1.0,
                    'currency': 'USD'
                });
            }

        } catch (error) {
            console.error('Form submission error:', error);
            alert('Something went wrong. Please try again or email us directly at contact@lobedrive.com');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// Store form data locally as backup
function storeSubmissionLocally(data) {
    try {
        const submissions = JSON.parse(localStorage.getItem('lobedrive_submissions') || '[]');
        submissions.push({
            ...data,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('lobedrive_submissions', JSON.stringify(submissions));
        console.log('Form data stored locally:', data);
    } catch (error) {
        console.error('Error storing form data:', error);
    }
}

// ===================================
// INTEGRATION EXAMPLES
// ===================================

// Example: Submit to Mailchimp
async function submitToMailchimp(data) {
    // You'll need to set up a server-side endpoint or use Mailchimp's API
    // This is a placeholder for the integration
    const response = await fetch('YOUR_MAILCHIMP_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email_address: data.email,
            status: 'subscribed',
            merge_fields: {
                FNAME: data.name,
                INTEREST: data.interest
            }
        })
    });

    if (!response.ok) {
        throw new Error('Mailchimp submission failed');
    }

    return response.json();
}

// Example: Submit to Google Sheets
async function submitToGoogleSheets(data) {
    // You'll need to set up Google Apps Script Web App
    // This is a placeholder for the integration
    const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: data.email,
            name: data.name,
            interest: data.interest,
            timestamp: new Date().toISOString()
        })
    });

    return response;
}

// Example: Submit to ConvertKit
async function submitToConvertKit(data) {
    // You'll need your ConvertKit API key and form ID
    const CONVERTKIT_FORM_ID = 'YOUR_FORM_ID';

    const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: data.email,
            first_name: data.name,
            fields: {
                interest: data.interest
            }
        })
    });

    if (!response.ok) {
        throw new Error('ConvertKit submission failed');
    }

    return response.json();
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

let lastScrollY = window.scrollY;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Add shadow when scrolled
    if (currentScrollY > 50) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }

    lastScrollY = currentScrollY;
});

// ===================================
// SCROLL ANIMATION FOR SECTIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===================================
// UTILITY: GET URL PARAMETERS
// ===================================

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Pre-fill form if UTM parameters or referral info exists
if (waitlistForm) {
    const utmSource = getUrlParameter('utm_source');
    const utmCampaign = getUrlParameter('utm_campaign');

    if (utmSource || utmCampaign) {
        const interestField = document.getElementById('interest');
        if (interestField && !interestField.value) {
            interestField.value = `Referred from: ${utmSource || 'unknown'} ${utmCampaign ? '(' + utmCampaign + ')' : ''}`;
        }
    }
}

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('contact-name').value.trim(),
            email: document.getElementById('contact-email').value.trim(),
            message: document.getElementById('contact-message').value.trim()
        };

        // Validate required fields
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate message length (minimum 10 characters)
        if (formData.message.length < 10) {
            alert('Please enter a message with at least 10 characters.');
            return;
        }

        // Disable submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            // Here you would integrate with your backend/email service
            // For now, simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Store in localStorage as backup
            storeContactSubmissionLocally(formData);

            // Show success message
            contactForm.style.display = 'none';
            contactSuccess.style.display = 'block';

            // Scroll to success message
            contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset form
            contactForm.reset();

        } catch (error) {
            console.error('Contact form submission error:', error);
            alert('Something went wrong. Please try again later.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// Store contact form data locally as backup
function storeContactSubmissionLocally(data) {
    try {
        const submissions = JSON.parse(localStorage.getItem('lobedrive_contact_submissions') || '[]');
        submissions.push({
            ...data,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('lobedrive_contact_submissions', JSON.stringify(submissions));
        console.log('Contact form data stored locally:', data);
    } catch (error) {
        console.error('Error storing contact form data:', error);
    }
}

// ===================================
// FAQ ACCORDION
// ===================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other open items
        const isActive = item.classList.contains('active');

        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// ===================================
// SCIENCE SECTION SCROLL ANIMATION
// ===================================

const scienceAnimateObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const scienceAnimateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Check if it's the left or right column
            const isLeft = entry.target.classList.contains('science-animate-left');
            const isRight = entry.target.classList.contains('science-animate-right');

            if (isLeft) {
                // Animate left column immediately
                entry.target.classList.add('animate-in');
            } else if (isRight) {
                // Stagger right column by 100ms
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, 100);
            }

            // Unobserve after animation to run only once
            scienceAnimateObserver.unobserve(entry.target);
        }
    });
}, scienceAnimateObserverOptions);

// Observe the science columns
const scienceAnimateLeft = document.querySelector('.science-animate-left');
const scienceAnimateRight = document.querySelector('.science-animate-right');

if (scienceAnimateLeft) {
    scienceAnimateObserver.observe(scienceAnimateLeft);
}

if (scienceAnimateRight) {
    scienceAnimateObserver.observe(scienceAnimateRight);
}

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #6B9080;');
console.log('%cInterested in how LobeDrive works? Check out our GitHub or get in touch at contact@lobedrive.com', 'font-size: 14px; color: #333;');
console.log('%cBuilt with ❤️ by Jakob', 'font-size: 12px; color: #999;');

// ===================================
// GOOGLE FORMS INTEGRATION HANDLERS
// ===================================

function handleContactSubmit(event) {
  const honeypot = document.getElementById("hp_contact");
  if (honeypot && honeypot.value) {
    event.preventDefault();
    return false;
  }

  setTimeout(() => {
    alert("Thanks for reaching out. I'll get back to you as soon as I can.");
    const form = document.getElementById("contact-form");
    if (form) form.reset();
  }, 400);

  return true;
}

function handleWaitlistSubmit(event) {
  const honeypot = document.getElementById("hp_waitlist");
  if (honeypot && honeypot.value) {
    event.preventDefault();
    return false;
  }

  setTimeout(() => {
    alert("You're on the waitlist. Thank you for your interest in LobeDrive.");
    const form = document.getElementById("waitlist-form");
    if (form) form.reset();
  }, 400);

  return true;
}
