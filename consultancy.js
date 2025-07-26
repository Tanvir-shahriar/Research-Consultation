// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Form state management
let isSubmitting = false;

// Toast notification system
function showToast(title, description, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="flex items-start">
            <div class="mr-3">
                ${type === 'success' 
                    ? '<svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
                    : '<svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>'
                }
            </div>
            <div class="flex-1">
                <h4 class="font-semibold text-gray-900">${title}</h4>
                <p class="text-sm text-gray-600 mt-1">${description}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-gray-400 hover:text-gray-600">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Show toast with animation
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    const form = event.target;
    const formData = new FormData(form);
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'message'];
    for (const field of requiredFields) {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            showToast(
                'Validation Error',
                `Please fill in the ${field} field.`,
                'error'
            );
            input.focus();
            return;
        }
    }
    
    // Validate email format
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast(
            'Validation Error',
            'Please enter a valid email address.',
            'error'
        );
        document.getElementById('email').focus();
        return;
    }
    
    isSubmitting = true;
    submitBtn.disabled = true;
    submitText.textContent = 'Submitting...';
    
    // Convert FormData to JSON
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Submit to Formspree (replace 'your-form-id' with actual form ID)
    fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            showToast(
                'Consultation Request Submitted!',
                "We'll get back to you within 24 hours to schedule your free consultation.",
                'success'
            );
            
            // Reset form
            form.reset();
        } else {
            throw new Error('Failed to submit form');
        }
    })
    .catch(error => {
        console.error('Form submission error:', error);
        showToast(
            'Submission Failed',
            'Please try again or contact us directly.',
            'error'
        );
    })
    .finally(() => {
        isSubmitting = false;
        submitBtn.disabled = false;
        submitText.textContent = 'Book My Free Consultation';
    });
}

// Attach form submit handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('consultation-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

// Smooth scrolling for anchor links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add smooth scrolling to buttons that might link to form
document.addEventListener('DOMContentLoaded', function() {
    const heroBookingBtn = document.querySelector('.btn-hero');
    const ctaBookingBtns = document.querySelectorAll('section:last-child button');
    
    if (heroBookingBtn) {
        heroBookingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const formSection = document.querySelector('#consultation-form');
            if (formSection) {
                formSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    }
    
    // Add click handlers for CTA section buttons
    ctaBookingBtns.forEach(btn => {
        if (btn.textContent.includes('Schedule') || btn.textContent.includes('Free Call')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const formSection = document.querySelector('#consultation-form');
                if (formSection) {
                    formSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            });
        }
    });
});

// Add intersection observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.hover-scale');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Phone number formatting
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            let formattedValue = value;
            
            if (value.length >= 6) {
                formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            } else if (value.length >= 3) {
                formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            }
            
            e.target.value = formattedValue;
        });
    }
});

// Add focus enhancement for form inputs
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = 'var(--shadow-glow)';
            this.style.borderColor = 'hsl(var(--primary))';
        });
        
        input.addEventListener('blur', function() {
            this.style.boxShadow = '';
            this.style.borderColor = '';
        });
    });
});

// Console message for developers
console.log('🚀 Consultancy Booking Page Loaded Successfully!');
console.log('📧 Don\'t forget to replace "your-form-id" with your actual Formspree form ID');
console.log('🎨 Created with modern HTML, CSS, and JavaScript');