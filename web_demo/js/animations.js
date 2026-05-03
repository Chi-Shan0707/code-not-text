// Elegant Research Demo Animations
// Focus on subtle, professional interactions that enhance rather than distract

document.addEventListener('DOMContentLoaded', function() {

    // Smooth reveal animations for sections
    setupScrollReveal();

    // Enhanced hover interactions
    setupCardInteractions();

    // Professional progress indicators
    setupProgressTracking();

    // Keyboard navigation
    setupKeyboardNavigation();

});

// Professional scroll reveal animations
function setupScrollReveal() {
    const elementsToReveal = document.querySelectorAll(
        '.domain-card, .method-item, .significance-card, .chart-card, .insight-box, .claim-box-yes, .claim-box-no'
    );

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple elements in same viewport
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotateX(0)';
                    entry.target.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                }, index * 50); // 50ms stagger for multiple elements

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px) rotateX(5deg)';
        observer.observe(element);
    });
}

// Enhanced card interactions
function setupCardInteractions() {
    // Domain cards
    const domainCards = document.querySelectorAll('.domain-card');
    domainCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;

        card.addEventListener('mouseenter', function(e) {
            // Add subtle 3D tilt effect
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            this.style.transition = 'transform 0.3s ease-out';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';

            // Highlight badge
            const badge = this.querySelector('.badge');
            if (badge) {
                badge.style.transform = 'scale(1.1)';
                badge.style.transition = 'transform 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.3s ease-out';
            this.style.boxShadow = '';

            const badge = this.querySelector('.badge');
            if (badge) {
                badge.style.transform = '';
            }
        });

        // Click to expand
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
            const mechanismBox = this.querySelector('.mechanism-box');
            if (mechanismBox) {
                mechanismBox.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                if (this.classList.contains('expanded')) {
                    mechanismBox.style.transform = 'scale(1.05)';
                    mechanismBox.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                } else {
                    mechanismBox.style.transform = '';
                    mechanismBox.style.boxShadow = '';
                }
            }
        });
    });

    // Method items
    const methodItems = document.querySelectorAll('.method-item');
    methodItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;

        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '0 16px 32px rgba(102, 126, 234, 0.2)';

            // Animate method number
            const methodNumber = this.querySelector('.method-number');
            if (methodNumber) {
                methodNumber.style.transform = 'scale(1.2) rotate(360deg)';
                methodNumber.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '';

            const methodNumber = this.querySelector('.method-number');
            if (methodNumber) {
                methodNumber.style.transform = '';
            }
        });
    });

    // Significance cards
    const sigCards = document.querySelectorAll('.significance-card');
    sigCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotateY(5deg)';
            this.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '0 16px 32px rgba(102, 126, 234, 0.25)';

            // Animate icon
            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) translateY(-5px)';
                icon.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '';

            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
}

// Professional progress tracking
function setupProgressTracking() {
    // Reading progress bar (already in charts.js)
    // Add section progress indicators

    const sections = document.querySelectorAll('section');
    const sectionIndicators = [];

    sections.forEach((section, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'section-indicator';
        indicator.style.cssText = `
            position: fixed;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 12px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 1000;
            margin-top: ${index * 25}px;
            opacity: 0;
        `;

        indicator.addEventListener('click', () => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        document.body.appendChild(indicator);
        sectionIndicators.push({ element: indicator, section: section });
    });

    // Update indicators on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sectionIndicators.forEach(({ element, section }) => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

            if (isVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(-50%) scale(1.3)';
                element.style.background = 'rgba(102, 126, 234, 1)';
                element.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
            } else {
                element.style.opacity = '0.3';
                element.style.transform = 'translateY(-50%) scale(1)';
                element.style.background = 'rgba(102, 126, 234, 0.3)';
                element.style.boxShadow = 'none';
            }
        });
    });

    // Show indicators after hero section
    setTimeout(() => {
        sectionIndicators.forEach(({ element }) => {
            element.style.opacity = '0.3';
        });
    }, 1000);
}

// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const sections = document.querySelectorAll('section');
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight / 2;
        });

        let targetSection;

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            if (currentSection) {
                const currentIndex = Array.from(sections).indexOf(currentSection);
                targetSection = sections[currentIndex + 1] || currentSection;
            } else {
                targetSection = sections[0];
            }
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            if (currentSection) {
                const currentIndex = Array.from(sections).indexOf(currentSection);
                targetSection = sections[currentIndex - 1] || currentSection;
            } else {
                targetSection = sections[sections.length - 1];
            }
        }

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Add professional parallax effect to hero
function setupParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.4;

        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

setupParallax();

// Add subtle floating animation to hero particles
function enhanceParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.style.animationDelay = `${index * 0.5}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;
    });
}

enhanceParticles();

// Smooth reveal for metrics
function setupMetricReveal() {
    const metrics = document.querySelectorAll('.metric-value, .impact-value, .result-value');

    const observerOptions = {
        threshold: 0.8,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Add highlight animation
                element.style.animation = 'metricHighlight 1s ease-out';
                element.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)';
                element.style.padding = '0.2rem 0.5rem';
                element.style.borderRadius = '8px';

                setTimeout(() => {
                    element.style.background = '';
                    element.style.padding = '';
                    element.style.borderRadius = '';
                }, 1000);

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    metrics.forEach(metric => observer.observe(metric));
}

setupMetricReveal();

// Add CSS for metric highlight animation
const style = document.createElement('style');
style.textContent = `
    @keyframes metricHighlight {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.1);
            opacity: 0.8;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    .domain-card.expanded {
        z-index: 10;
    }

    .domain-card.expanded .mechanism-box {
        transform: scale(1.05);
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    }
`;
document.head.appendChild(style);

// Performance monitoring (for development)
if (window.performance) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Demo loaded in ${pageLoadTime}ms`);

            if (pageLoadTime > 3000) {
                console.warn('⚠️ Load time > 3s, consider optimizing');
            }
        }, 0);
    });
}

// Add touch support for mobile
if ('ontouchstart' in window) {
    document.querySelectorAll('.domain-card, .method-item, .significance-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        });

        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// CTA buttons enhanced interactions
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach((button, index) => {
        button.style.animationDelay = `${index * 0.1}s`;

        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
            this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '';
        });
    });
});

// Professional fade-in for claim boxes
function setupClaimBoxAnimations() {
    const claimBoxes = document.querySelectorAll('.claim-box-yes, .claim-box-no');

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                }, index * 200);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    claimBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px) scale(0.95)';
        observer.observe(box);
    });
}

setupClaimBoxAnimations();

console.log('✨ Elegant animations loaded');
console.log('🎯 Professional interactions enabled');
console.log('⚡ Performance optimized');
