// Smooth scroll to form when "Request Information" or "Book Consultation" is clicked
document.addEventListener('DOMContentLoaded', function() {
    // Navbar hide on scroll functionality
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                // At the top of the page, always show navbar
                navbar.classList.remove('hidden');
            } else if (currentScroll > lastScroll && currentScroll > 100) {
                // Scrolling down past 100px, hide navbar
                navbar.classList.add('hidden');
            } else {
                // Scrolling up, show navbar
                navbar.classList.remove('hidden');
            }
            
            lastScroll = currentScroll;
        });
    }
    // Handle smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchor links
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Form submission handling
    const leadForm = document.getElementById('lead-form');
    
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const hearAbout = document.getElementById('hearAbout').value;
            const textConsent = document.getElementById('textConsent').checked;
            
            // Validate required fields
            if (!firstName || !lastName || !email || !phone || !hearAbout) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (!textConsent) {
                alert('Please consent to receive text messages to continue.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[\d\s\-\(\)]+$/;
            if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // If validation passes, show success message
            // In production, you would send this data to your server
            alert('Thank you for your inquiry! We will contact you soon.');
            
            // Reset form
            leadForm.reset();
            
            // Optional: Scroll to top or show a success message in the page
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Subtle fade-in on scroll (optional, very subtle)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll animation for benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    if (benefitCards.length > 0) {
        const benefitObserverOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const benefitObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    benefitObserver.unobserve(entry.target);
                }
            });
        }, benefitObserverOptions);

        benefitCards.forEach(card => {
            benefitObserver.observe(card);
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
});
