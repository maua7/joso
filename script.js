// Contabilizei Layout - JavaScript Functions
// Este arquivo contém as funcionalidades básicas para o layout

document.addEventListener('DOMContentLoaded', function() {
    // Cookie Banner functionality
    initCookieBanner();
    
    // Mobile navigation
    initMobileNavigation();
    
    // FAQ functionality
    initFAQ();
    
    // Tab functionality
    initTabs();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // WhatsApp button functionality
    initWhatsAppButton();
});

// Cookie Banner
function initCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.querySelector('.btn-cookie-accept');
    const closeBtn = document.querySelector('.btn-cookie-close');
    
    // Check if user has already accepted cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }
    
    // Accept cookies
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.style.display = 'none';
        });
    }
    
    // Close banner
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            cookieBanner.style.display = 'none';
        });
    }
}

// Mobile Navigation
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
}

// FAQ Functionality
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.style.display === 'block';
            
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            // Toggle current answer
            if (!isOpen) {
                answer.style.display = 'block';
            }
        });
    });
}

// Tab Functionality
function initTabs() {
    // Opening section tabs
    const openingTabs = document.querySelectorAll('.tab-btn');
    openingTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            openingTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });
    
    // Plan tabs
    const planTabs = document.querySelectorAll('.plan-tab');
    planTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            planTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });
    
    // City tabs
    const cityTabs = document.querySelectorAll('.city-tab');
    cityTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            cityTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// WhatsApp Button
function initWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // Replace with actual WhatsApp number
            const phoneNumber = '554799854490';
            const message = 'Olá! Gostaria de saber mais sobre os serviços da SIMPLES D+ Contabilidade.';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Scroll animations (optional enhancement)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.plan-card, .testimonial, .step');
    animateElements.forEach(el => observer.observe(el));
}

// Form validation (for future use)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Loading state management
function showLoading(element) {
    element.classList.add('loading');
    element.disabled = true;
}

function hideLoading(element) {
    element.classList.remove('loading');
    element.disabled = false;
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initCookieBanner,
        initMobileNavigation,
        initFAQ,
        initTabs,
        initSmoothScrolling,
        initWhatsAppButton,
        validateForm,
        showLoading,
        hideLoading
    };
}

