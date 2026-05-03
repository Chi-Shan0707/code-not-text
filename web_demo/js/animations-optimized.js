// ✨ Elegant Research Demo Animations - Enhanced Version
// Professional micro-interactions with modern design principles

document.addEventListener('DOMContentLoaded', function() {

    // 🎯 Initialize all animation systems
    setupScrollReveal();
    setupCardInteractions();
    setupProgressTracking();
    setupKeyboardNavigation();
    setupParallaxEffects();
    setupTouchInteractions();
    setupProfessionalScrollEffects();

    console.log('✨ Enhanced animation system initialized');
});

// 🎯 Professional Scroll Reveal - Enhanced
function setupScrollReveal() {
    const elementsToReveal = document.querySelectorAll(
        '.domain-card, .method-item, .significance-card, .chart-card, .insight-box, .claim-box-yes, .claim-box-no'
    );

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple elements
                const delay = index * 50;

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotateX(0)';
                    entry.target.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px) rotateX(5deg)';
        observer.observe(element);
    });
}

// 🎴 Enhanced Card Interactions
function setupCardInteractions() {
    // Domain Cards with 3D Effects
    const domainCards = document.querySelectorAll('.domain-card');
    domainCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;

        card.addEventListener('mousemove', function(e) {
            // Enhanced 3D tilt effect
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 12;
            const rotateY = (centerX - x) / 12;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            this.style.transition = 'transform 0.1s ease-out';
            this.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2 + 20}px 40px rgba(0,0,0,0.15)`;

            // Highlight badge with glow
            const badge = this.querySelector('.badge');
            if (badge) {
                badge.style.transform = 'scale(1.1) rotate(-2deg)';
                badge.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                badge.style.transition = 'all 0.2s ease';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.4s ease-out';
            this.style.boxShadow = '';

            const badge = this.querySelector('.badge');
            if (badge) {
                badge.style.transform = '';
                badge.style.boxShadow = '';
            }
        });

        // Click to expand mechanism
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
            const mechanismBox = this.querySelector('.mechanism-box');
            if (mechanismBox) {
                mechanismBox.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                if (this.classList.contains('expanded')) {
                    mechanismBox.style.transform = 'scale(1.05)';
                    mechanismBox.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
                    mechanismBox.style.background = 'rgba(255, 255, 255, 0.95)';
                } else {
                    mechanismBox.style.transform = '';
                    mechanismBox.style.boxShadow = '';
                    mechanismBox.style.background = '';
                }
            }
        });
    });

    // Method Items with Animated Numbers
    const methodItems = document.querySelectorAll('.method-item');
    methodItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;

        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.25)';

            // Animate method number
            const methodNumber = this.querySelector('.method-number');
            if (methodNumber) {
                methodNumber.style.transform = 'scale(1.3) rotate(360deg)';
                methodNumber.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                methodNumber.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            }

            // Highlight result
            const resultValue = this.querySelector('.result-value');
            if (resultValue) {
                resultValue.style.transform = 'scale(1.1)';
                resultValue.style.textShadow = '0 0 20px currentColor';
                resultValue.style.transition = 'all 0.3s ease';
            }
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '';

            const methodNumber = this.querySelector('.method-number');
            if (methodNumber) {
                methodNumber.style.transform = '';
                methodNumber.style.boxShadow = '';
            }

            const resultValue = this.querySelector('.result-value');
            if (resultValue) {
                resultValue.style.transform = '';
                resultValue.style.textShadow = '';
            }
        });
    });

    // Significance Cards
    const sigCards = document.querySelectorAll('.significance-card');
    sigCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotateY(5deg)';
            this.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';

            // Animate icon with bounce
            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'scale(1.3) translateY(-8px)';
                icon.style.transition = 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                icon.style.filter = 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '';

            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.filter = '';
            }
        });
    });
}

// 📊 Enhanced Progress Tracking
function setupProgressTracking() {
    const sections = document.querySelectorAll('section');
    const sectionIndicators = [];

    // Create floating navigation dots
    sections.forEach((section, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'section-indicator';
        indicator.style.cssText = `
            position: fixed;
            right: 25px;
            top: 50%;
            transform: translateY(-50%);
            width: 14px;
            height: 14px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1000;
            margin-top: ${index * 30}px;
            opacity: 0;
            border: 2px solid rgba(102, 126, 234, 0.5);
        `;

        // Add tooltip
        const sectionTitle = section.querySelector('.section-title, h1, h2');
        if (sectionTitle) {
            indicator.title = sectionTitle.textContent.trim();
            indicator.style.position = 'relative';

            const tooltip = document.createElement('div');
            tooltip.textContent = sectionTitle.textContent.trim();
            tooltip.style.cssText = `
                position: absolute;
                right: 25px;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(44, 62, 80, 0.95);
                color: white;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 12px;
                white-space: nowrap;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
            `;

            indicator.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
            });

            indicator.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });

            indicator.appendChild(tooltip);
        }

        indicator.addEventListener('click', () => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        document.body.appendChild(indicator);
        sectionIndicators.push({ element: indicator, section: section });
    });

    // Update indicators on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.pageYOffset;

                sectionIndicators.forEach(({ element, section }) => {
                    const rect = section.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

                    if (isVisible) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(-50%) scale(1.4)';
                        element.style.background = 'rgba(102, 126, 234, 1)';
                        element.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.6), 0 0 40px rgba(102, 126, 234, 0.3)';
                        element.style.borderColor = 'rgba(102, 126, 234, 1)';
                    } else {
                        element.style.opacity = '0.4';
                        element.style.transform = 'translateY(-50%) scale(1)';
                        element.style.background = 'rgba(102, 126, 234, 0.3)';
                        element.style.boxShadow = 'none';
                        element.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                    }
                });

                ticking = false;
            });
            ticking = true;
        }
    });

    // Show indicators after hero section
    setTimeout(() => {
        sectionIndicators.forEach(({ element }) => {
            element.style.opacity = '0.4';
        });
    }, 1500);
}

// ⌨️ Keyboard Navigation - Enhanced
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const sections = document.querySelectorAll('section');
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight / 2;
        });

        let targetSection;

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
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
        } else if (e.key === 'Home') {
            e.preventDefault();
            targetSection = sections[0];
        } else if (e.key === 'End') {
            e.preventDefault();
            targetSection = sections[sections.length - 1];
        }

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Add visual feedback
            targetSection.style.transition = 'background-color 0.3s ease';
            targetSection.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
            setTimeout(() => {
                targetSection.style.backgroundColor = '';
            }, 300);
        }
    });

    // Add keyboard hint
    const keyboardHint = document.createElement('div');
    keyboardHint.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(44, 62, 80, 0.9);
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 12px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
        font-family: monospace;
    `;
    keyboardHint.innerHTML = '⌨️ Use arrow keys or space to navigate';
    document.body.appendChild(keyboardHint);

    // Show hint after 5 seconds
    setTimeout(() => {
        keyboardHint.style.opacity = '1';
    }, 5000);

    // Hide hint after 15 seconds
    setTimeout(() => {
        keyboardHint.style.opacity = '0';
    }, 15000);
}

// 🌊 Parallax Effects - Enhanced
function setupParallaxEffects() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = 0.4;

                // Parallax hero background
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;

                // Parallax particles
                const particles = document.querySelectorAll('.particle');
                particles.forEach((particle, index) => {
                    const speed = (index % 3 + 1) * 0.1;
                    particle.style.transform = `translateY(${scrolled * speed}px)`;
                });

                ticking = false;
            });
            ticking = true;
        }
    });
}

// 📱 Touch Interactions - Mobile Optimization
function setupTouchInteractions() {
    if (!('ontouchstart' in window)) return;

    // Add touch feedback to interactive elements
    const touchElements = document.querySelectorAll('.domain-card, .method-item, .significance-card, .cta-button');

    touchElements.forEach(element => {
        element.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        }, { passive: true });

        element.addEventListener('touchend', function(e) {
            this.style.transform = '';
            this.style.transition = 'transform 0.3s ease';
        }, { passive: true });

        // Prevent double-tap zoom on buttons
        element.addEventListener('touchend', function(e) {
            e.preventDefault();
            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
            });
            this.dispatchEvent(clickEvent);
        }, { passive: false });
    });

    // Add swipe gestures for navigation
    let touchStartX = 0;
    let touchStartY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Minimum swipe distance
        if (Math.abs(diffX) > 50 && Math.abs(diffY) < 50) {
            const sections = document.querySelectorAll('section');
            const currentSection = Array.from(sections).find(section => {
                const rect = section.getBoundingClientRect();
                return rect.top >= 0 && rect.top < window.innerHeight / 2;
            });

            if (currentSection) {
                const currentIndex = Array.from(sections).indexOf(currentSection);

                if (diffX > 0 && currentIndex > 0) {
                    // Swipe right - go to previous section
                    sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else if (diffX < 0 && currentIndex < sections.length - 1) {
                    // Swipe left - go to next section
                    sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    }, { passive: true });
}

// 🎯 Professional Scroll Effects
function setupProfessionalScrollEffects() {
    // Smooth reveal for claim boxes
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
        box.style.transform = 'translateY(40px) scale(0.95)';
        observer.observe(box);
    });

    // Enhance particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.style.animationDelay = `${index * 0.8}s`;
        particle.style.opacity = Math.random() * 0.6 + 0.2;
    });

    // Smooth reveal for metrics
    const metrics = document.querySelectorAll('.metric-value, .impact-value, .result-value');

    const metricObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Add glow effect
                element.style.animation = 'metricGlow 1s ease-out';
                element.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)';
                element.style.padding = '0.3rem 0.6rem';
                element.style.borderRadius = '10px';
                element.style.webkitBackgroundClip = 'text';
                element.style.webkitTextFillColor = 'transparent';

                setTimeout(() => {
                    element.style.background = '';
                    element.style.padding = '';
                    element.style.borderRadius = '';
                    element.style.webkitBackgroundClip = '';
                    element.style.webkitTextFillColor = '';
                }, 1000);

                metricObserver.unobserve(element);
            }
        });
    }, { threshold: 0.8 });

    metrics.forEach(metric => metricObserver.observe(metric));
}

// 🎨 CTA Button Enhanced Interactions
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach((button, index) => {
        button.style.animationDelay = `${index * 0.1}s`;

        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.05)';
            this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '0 16px 32px rgba(0,0,0,0.25)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '';
        });
    });
});

// ✨ Add CSS for Additional Animations
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    @keyframes metricGlow {
        0% {
            transform: scale(1);
            filter: brightness(1);
        }
        50% {
            transform: scale(1.1);
            filter: brightness(1.2);
        }
        100% {
            transform: scale(1);
            filter: brightness(1);
        }
    }

    .domain-card.expanded {
        z-index: 10;
    }

    .domain-card.expanded .mechanism-box {
        transform: scale(1.05);
        box-shadow: 0 12px 32px rgba(0,0,0,0.15);
    }

    /* Smooth scrolling for Firefox */
    @-moz-document url-prefix() {
        * {
            scroll-behavior: smooth !important;
        }
    }

    /* Reduce motion for accessibility */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* Enhanced focus states for accessibility */
    a:focus,
    button:focus,
    .cta-button:focus {
        outline: 3px solid rgba(102, 126, 234, 0.5);
        outline-offset: 2px;
    }

    /* Print optimizations */
    @media print {
        .section-indicator,
        .keyboard-hint {
            display: none !important;
        }

        .domain-card,
        .method-item {
            break-inside: avoid;
            page-break-inside: avoid;
        }
    }
`;
document.head.appendChild(enhancedStyles);

// 🚀 Performance Monitoring - Enhanced
if (window.performance) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
            const firstPaint = perfData.responseStart - perfData.navigationStart;

            console.log('⚡ Performance Metrics:');
            console.log(`   ├─ First Paint: ${firstPaint}ms`);
            console.log(`   ├─ DOM Ready: ${domReadyTime}ms`);
            console.log(`   └─ Full Load: ${pageLoadTime}ms`);

            if (pageLoadTime > 4000) {
                console.warn('⚠️ Load time > 4s, consider optimizing assets');
            } else if (pageLoadTime < 2000) {
                console.log('🚀 Excellent load time! User experience optimized.');
            }
        }, 0);
    });

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
        try {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log(`🖼️ Largest Contentful Paint: ${entry.startTime}ms`);
                    } else if (entry.entryType === 'first-input') {
                        console.log(`⌨️ First Input Delay: ${entry.processingStart - entry.startTime}ms`);
                    }
                });
            });

            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
        } catch (e) {
            console.log('PerformanceObserver not fully supported');
        }
    }
}

// 🎉 Final initialization message
console.log('✨ Enhanced animations loaded successfully');
console.log('🎯 Professional interactions enabled');
console.log('⚡ Performance optimized for all devices');
console.log('♿ Accessibility features activated');
console.log('📱 Touch gestures ready for mobile devices');