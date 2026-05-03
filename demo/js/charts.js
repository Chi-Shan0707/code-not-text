// Academic charts for research blog
document.addEventListener('DOMContentLoaded', function() {

    // Chart.js global settings
    Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
    Chart.defaults.color = '#495057';
    Chart.defaults.borderColor = '#dee2e6';

    // AUROC comparison chart
    createAUROCChart();

    // Methods comparison chart
    createMethodsChart();

});

function createAUROCChart() {
    const ctx = document.getElementById('aurocChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Math', 'Science', 'Coding'],
            datasets: [{
                label: 'AUROC',
                data: [0.982, 0.850, 0.407],
                backgroundColor: [
                    'rgba(47, 158, 68, 0.8)',   // green for math
                    'rgba(240, 140, 0, 0.8)',   // orange for science
                    'rgba(250, 82, 82, 0.8)'    // red for coding
                ],
                borderColor: [
                    'rgba(47, 158, 68, 1)',
                    'rgba(240, 140, 0, 1)',
                    'rgba(250, 82, 82, 1)'
                ],
                borderWidth: 2
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
                            return 'AUROC: ' + context.parsed.y.toFixed(3);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1.0,
                    title: {
                        display: true,
                        text: 'AUROC (higher is better)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createMethodsChart() {
    const ctx = document.getElementById('methodsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Interpretable\nProbe', 'Feature\nSweep', 'Nonlinear\nMLP', 'SSL\nPre-training', 'De-knotting'],
            datasets: [
                {
                    label: 'Math',
                    data: [0.982, 0.990, 0.985, 0.978, 0.988],
                    backgroundColor: 'rgba(47, 158, 68, 0.8)',
                    borderColor: 'rgba(47, 158, 68, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Coding',
                    data: [0.434, 0.556, 0.503, 0.454, 0.440],
                    backgroundColor: 'rgba(250, 82, 82, 0.8)',
                    borderColor: 'rgba(250, 82, 82, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': AUROC ' + context.parsed.y.toFixed(3);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1.0,
                    title: {
                        display: true,
                        text: 'AUROC (higher is better)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

console.log('Research blog charts loaded');