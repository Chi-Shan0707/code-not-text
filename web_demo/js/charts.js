// ========================================
// MODERN CHART.JS CONFIGURATION
// Academic visualizations with dark theme
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // Set global Chart.js defaults for dark theme
    Chart.defaults.color = '#b8c1ec';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';
    Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

    // Create AUROC Comparison Chart
    createAUROCChart();

    // Create Reranking Impact Chart
    createRerankingChart();

    // Setup reading progress
    setupReadingProgress();

    // Initialize metric animations
    animateMetrics();

    // Create floating particles for hero section
    createParticles();

    // Setup additional animations
    setupAdvancedAnimations();

});

// ========================================
// AUROC COMPARISON CHART
// ========================================

function createAUROCChart() {
    const ctx = document.getElementById('aurocChart');
    if (!ctx) return;

    const data = {
        labels: ['Math', 'Science', 'Coding'],
        datasets: [{
            label: 'AUROC Score',
            data: [0.982, 0.850, 0.407],
            backgroundColor: [
                'rgba(46, 204, 113, 0.8)',  // Math - success
                'rgba(243, 156, 18, 0.8)',  // Science - warning
                'rgba(231, 76, 60, 0.8)'    // Coding - danger
            ],
            borderColor: [
                'rgba(46, 204, 113, 1)',
                'rgba(243, 156, 18, 1)',
                'rgba(231, 76, 60, 1)'
            ],
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 15, 30, 0.95)',
                    titleColor: '#ffffff',
                    bodyColor: '#b8c1ec',
                    borderColor: 'rgba(102, 126, 234, 0.5)',
                    borderWidth: 1,
                    padding: 15,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            const domain = context.label;
                            let interpretation = '';

                            if (domain === 'Math') {
                                interpretation = 'Excellent discrimination';
                            } else if (domain === 'Science') {
                                interpretation = 'Moderate discrimination';
                            } else {
                                interpretation = 'Poor discrimination';
                            }

                            return [
                                `AUROC: ${value.toFixed(3)}`,
                                interpretation
                            ];
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1.0,
                    ticks: {
                        callback: function(value) {
                            return value.toFixed(2);
                        },
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    title: {
                        display: true,
                        text: 'AUROC Score',
                        font: {
                            size: 14,
                            weight: '600'
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 13,
                            weight: '600'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    };

    new Chart(ctx, config);
}

// ========================================
// RERANKING IMPACT CHART
// ========================================

function createRerankingChart() {
    const ctx = document.getElementById('rerankingChart');
    if (!ctx) return;

    const data = {
        labels: ['Math', 'Science', 'Coding'],
        datasets: [{
            label: 'Pass@1 Improvement',
            data: [10.0, 8.0, -0.6],
            backgroundColor: [
                'rgba(46, 204, 113, 0.8)',  // Math - success
                'rgba(243, 156, 18, 0.8)',  // Science - warning
                'rgba(231, 76, 60, 0.8)'    // Coding - danger
            ],
            borderColor: [
                'rgba(46, 204, 113, 1)',
                'rgba(243, 156, 18, 1)',
                'rgba(231, 76, 60, 1)'
            ],
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 15, 30, 0.95)',
                    titleColor: '#ffffff',
                    bodyColor: '#b8c1ec',
                    borderColor: 'rgba(102, 126, 234, 0.5)',
                    borderWidth: 1,
                    padding: 15,
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            const domain = context.label;
                            let impact = '';

                            if (domain === 'Math') {
                                impact = 'Strong practical gain';
                            } else if (domain === 'Science') {
                                impact = 'Moderate practical gain';
                            } else {
                                impact = 'No practical gain';
                            }

                            return [
                                `Improvement: ${value > 0 ? '+' : ''}${value.toFixed(1)}%`,
                                impact
                            ];
                        }
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function(value) {
                            return (value > 0 ? '+' : '') + value + '%';
                        },
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    title: {
                        display: true,
                        text: 'Pass@1 Improvement (%)',
                        font: {
                            size: 14,
                            weight: '600'
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 13,
                            weight: '600'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart',
                delay: 500
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    };

    new Chart(ctx, config);
}

// ========================================
// READING PROGRESS
// ========================================

function setupReadingProgress() {
    const progressFill = document.getElementById('progressFill');
    if (!progressFill) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;

        progressFill.style.width = `${progress}%`;
    });
}

// ========================================
// METRIC ANIMATIONS
// ========================================

function animateMetrics() {
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
                element.style.background = 'linear-gradient(135deg, rgba(123, 44, 191, 0.2) 0%, rgba(0, 217, 255, 0.2) 100%)';
                element.style.padding = '0.3rem 0.6rem';
                element.style.borderRadius = '8px';
                element.style.webkitBackgroundClip = 'text';
                element.style.webkitTextFillColor = 'transparent';

                setTimeout(() => {
                    element.style.background = '';
                    element.style.padding = '';
                    element.style.borderRadius = '';
                    element.style.webkitBackgroundClip = '';
                    element.style.webkitTextFillColor = '';
                }, 1500);

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    metrics.forEach(metric => observer.observe(metric));
}

// ========================================
// FLOATING PARTICLES
// ========================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 8 + 4;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 15;
        const opacity = Math.random() * 0.3 + 0.1;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(0, 217, 255, ${opacity});
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            animation: float ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
            box-shadow: 0 0 ${size * 2}px rgba(0, 217, 255, ${opacity * 0.5});
        `;

        particlesContainer.appendChild(particle);
    }
}

// ========================================
// ADVANCED ANIMATIONS
// ========================================

function setupAdvancedAnimations() {
    // Setup scroll reveal
    setupScrollReveal();

    // Setup card interactions
    setupCardInteractions();

    // Setup smooth scroll
    setupSmoothScroll();
}

function setupScrollReveal() {
    const elementsToReveal = document.querySelectorAll(
        '.premium-card, .modern-method, .impact-card, .premium-chart, .insight-box, .claim-card'
    );

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px) scale(0.95)';
        element.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
}

function setupCardInteractions() {
    // Premium cards hover effect
    const premiumCards = document.querySelectorAll('.premium-card');
    premiumCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 60px rgba(123, 44, 191, 0.3)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Method cards interaction
    const methodCards = document.querySelectorAll('.modern-method');
    methodCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const methodNumber = this.querySelector('.method-number');
            if (methodNumber) {
                methodNumber.style.transform = 'scale(1.2) rotate(360deg)';
                methodNumber.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const methodNumber = this.querySelector('.method-number');
            if (methodNumber) {
                methodNumber.style.transform = '';
            }
        });
    });

    // Impact cards interaction
    const impactCards = document.querySelectorAll('.impact-card');
    impactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const iconWrapper = this.querySelector('.card-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.style.transform = 'scale(1.1) rotate(5deg)';
                iconWrapper.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const iconWrapper = this.querySelector('.card-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.style.transform = '';
            }
        });
    });

    // CTA buttons ripple effect
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// ADDITIONAL STYLES
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes metricHighlight {
        0% {
            transform: scale(1);
            filter: brightness(1);
        }
        50% {
            transform: scale(1.15);
            filter: brightness(1.3);
        }
        100% {
            transform: scale(1);
            filter: brightness(1);
        }
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            transform: translate(-20px, 20px) rotate(180deg);
            opacity: 0.8;
        }
    }

    /* Custom scrollbar for dark theme */
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #0f0f1e;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #7b2cbf 0%, #e056fd 100%);
    }

    /* Chart container hover effects */
    .premium-chart:hover .chart-container {
        transform: scale(1.02);
        transition: transform 0.3s ease;
    }

    .chart-container {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

console.log('📊 Modern charts loaded');
console.log('🎨 Dark theme applied');
console.log('✨ Animations enabled');