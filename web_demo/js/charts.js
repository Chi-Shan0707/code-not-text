// Professional Academic Charts for Code-Not-Text Research
document.addEventListener('DOMContentLoaded', function() {

    // Chart.js global configuration for academic style
    Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    Chart.defaults.color = '#2c3e50';
    Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;

    // 1. AUROC Comparison Chart
    const aurocCtx = document.getElementById('aurocChart').getContext('2d');
    new Chart(aurocCtx, {
        type: 'bar',
        data: {
            labels: ['Mathematical\nReasoning', 'Science\nProblems', 'Coding\nChallenges'],
            datasets: [{
                label: 'AUROC @ 100%',
                data: [0.982, 0.841, 0.407],
                backgroundColor: [
                    'rgba(46, 204, 113, 0.8)',  // Green for success
                    'rgba(243, 156, 18, 0.8)',  // Orange for partial
                    'rgba(231, 76, 60, 0.8)'    // Red for failure
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
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const domain = context.label;
                            const value = context.parsed.y;
                            let interpretation = '';

                            if (value > 0.9) {
                                interpretation = 'Excellent - Strong signal';
                            } else if (value > 0.7) {
                                interpretation = 'Good - Usable signal';
                            } else if (value > 0.5) {
                                interpretation = 'Weak - Limited utility';
                            } else {
                                interpretation = 'Poor - Below chance';
                            }

                            return `AUROC: ${value.toFixed(3)} (${interpretation})`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Cross-Domain Performance Gap (31K+ samples, 95% CI verified)',
                    font: {
                        size: 14,
                        weight: '600'
                    },
                    color: '#7f8c8d',
                    padding: {
                        bottom: 20
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1.0,
                    ticks: {
                        callback: function(value) {
                            return (value * 100).toFixed(0) + '%';
                        },
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: false
                    },
                    title: {
                        display: true,
                        text: 'AUROC (higher is better)',
                        font: {
                            size: 13,
                            weight: '600'
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 13,
                            weight: '500'
                        }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });

    // 2. Reranking Impact Chart
    const rerankingCtx = document.getElementById('rerankingChart').getContext('2d');
    new Chart(rerankingCtx, {
        type: 'bar',
        data: {
            labels: ['Math', 'Science', 'Coding'],
            datasets: [
                {
                    label: 'Random Selection',
                    data: [64.2, 60.2, 61.7],
                    backgroundColor: 'rgba(149, 165, 166, 0.7)',
                    borderColor: 'rgba(149, 165, 166, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
                },
                {
                    label: 'Probe Reranking',
                    data: [74.2, 68.2, 61.1],
                    backgroundColor: [
                        'rgba(46, 204, 113, 0.8)',  // Math - big gain
                        'rgba(243, 156, 18, 0.8)',  // Science - moderate gain
                        'rgba(231, 76, 60, 0.8)'    // Coding - no gain
                    ],
                    borderColor: [
                        'rgba(46, 204, 113, 1)',
                        'rgba(243, 156, 18, 1)',
                        'rgba(231, 76, 60, 1)'
                    ],
                    borderWidth: 2,
                    borderRadius: 8,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 13
                        },
                        usePointStyle: true,
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.parsed.y;
                            const domain = context.label;

                            if (context.datasetIndex === 1) { // Probe reranking
                                let delta = value - context.chart.data.datasets[0].data[context.dataIndex];
                                let significance = '';

                                if (domain === 'Math' && delta > 5) {
                                    significance = '✓ Significant improvement';
                                } else if (domain === 'Science' && delta > 5) {
                                    significance = '✓ Moderate improvement';
                                } else if (domain === 'Coding' && Math.abs(delta) < 1) {
                                    significance = '✗ No meaningful gain';
                                }

                                return `${label}: ${value.toFixed(1)}% (Δ${delta >= 0 ? '+' : ''}${delta.toFixed(1)}%) ${significance}`;
                            }

                            return `${label}: ${value.toFixed(1)}%`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Best-of-N=64 Reranking: Practical Consequences',
                    font: {
                        size: 14,
                        weight: '600'
                    },
                    color: '#7f8c8d',
                    padding: {
                        bottom: 20
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: false
                    },
                    title: {
                        display: true,
                        text: 'Pass@1 Accuracy',
                        font: {
                            size: 13,
                            weight: '600'
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 13,
                            weight: '500'
                        }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });

    // Create floating particles for hero section
    createParticles();

    // Animate metrics on scroll
    setupMetricAnimations();

    // Add scroll-based animations
    setupScrollAnimations();
});

// Create elegant particles for hero section
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 6 + 3;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 15;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            animation: float ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
        `;

        particlesContainer.appendChild(particle);
    }
}

// Setup metric counter animations
function setupMetricAnimations() {
    const metrics = document.querySelectorAll('.metric-value');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalValue = parseFloat(element.textContent);
                animateValue(element, 0, finalValue, 1500);
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    metrics.forEach(metric => observer.observe(metric));
}

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    const isDecimal = end < 1;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        const currentValue = start + (end - start) * easeProgress;

        if (isDecimal) {
            element.textContent = currentValue.toFixed(3);
        } else {
            element.textContent = currentValue.toFixed(1);
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = isDecimal ? end.toFixed(3) : end.toFixed(1);
        }
    }

    requestAnimationFrame(update);
}

// Setup scroll-based section animations
function setupScrollAnimations() {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });

    // Start observing after a short delay to ensure hero is visible immediately
    setTimeout(() => {
        sections.forEach((section, index) => {
            if (index > 0) { // Skip hero section
                observer.observe(section);
            }
        });
    }, 100);
}

// Add hover effects to domain cards
document.addEventListener('DOMContentLoaded', function() {
    const domainCards = document.querySelectorAll('.domain-card');

    domainCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
            this.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});

// Add method card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const methodItems = document.querySelectorAll('.method-item');

    methodItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.animation = 'fadeInUp 0.6s ease-out forwards';
        item.style.opacity = '0';

        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.03)';
            this.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});

// Add significance card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const sigCards = document.querySelectorAll('.significance-card');

    sigCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        card.style.animation = 'fadeInUp 0.6s ease-out forwards';
        card.style.opacity = '0';

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotateY(5deg)';
            this.style.boxShadow = '0 12px 32px rgba(102, 126, 234, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});

// Add CTA button ripple effect
document.addEventListener('DOMContentLoaded', function() {
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
});

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
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
});

// Add reading progress indicator
function createReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        width: 0%;
        z-index: 1000;
        transition: width 0.1s ease;
        box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createReadingProgress();

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('🚀 Code-Not-Text Demo Initialized');
console.log('📊 Professional academic charts loaded');
console.log('✨ Elegant animations enabled');
