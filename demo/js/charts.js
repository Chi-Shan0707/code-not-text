// Academic charts for research blog
document.addEventListener('DOMContentLoaded', function() {

    // Detect dark mode
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Chart.js global settings
    Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
    Chart.defaults.font.size = 14;
    Chart.defaults.color = isDark ? '#8b949e' : '#495057';
    Chart.defaults.borderColor = isDark ? '#30363d' : '#dee2e6';

    // AUROC comparison chart
    createAUROCChart();

    // Methods comparison chart
    createMethodsChart();

});

function createAUROCChart() {
    const ctx = document.getElementById('aurocChart');
    if (!ctx) return;

    const anchors = ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];

    // B0 canonical legacy AUROC at each anchor (from dense_anchor_main_table.csv)
    const mathData =     [0.936, 0.951, 0.959, 0.969, 0.973, 0.975, 0.976, 0.978, 0.978, 0.982];
    const scienceData =  [0.767, 0.801, 0.821, 0.834, 0.836, 0.838, 0.842, 0.846, 0.842, 0.841];
    const codingData =   [0.466, 0.455, 0.425, 0.417, 0.415, 0.429, 0.442, 0.428, 0.437, 0.407];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: anchors,
            datasets: [
                {
                    label: 'Math',
                    data: mathData,
                    borderColor: 'rgba(47, 158, 68, 1)',
                    backgroundColor: 'rgba(47, 158, 68, 0.1)',
                    borderWidth: 2.5,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Science',
                    data: scienceData,
                    borderColor: 'rgba(240, 140, 0, 1)',
                    backgroundColor: 'rgba(240, 140, 0, 0.1)',
                    borderWidth: 2.5,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Coding',
                    data: codingData,
                    borderColor: 'rgba(250, 82, 82, 1)',
                    backgroundColor: 'rgba(250, 82, 82, 0.1)',
                    borderWidth: 2.5,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    tension: 0.3,
                    fill: false
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
                    labels: { font: { size: 13 }, usePointStyle: true, pointStyle: 'circle' }
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
                    min: 0.35,
                    max: 1.0,
                    title: {
                        display: true,
                        text: 'AUROC (higher is better)',
                        font: { size: 14 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Trace position (% visible)',
                        font: { size: 14 }
                    },
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
            labels: ['Feature\nSweep', 'SSL\nPre-training', 'Nonlinear\nMLP', 'De-knotting', 'Interpretable\nProbe'],
            datasets: [
                {
                    label: 'Math',
                    data: [0.990, 0.978, 0.985, 0.988, 0.982],
                    backgroundColor: 'rgba(47, 158, 68, 0.8)',
                    borderColor: 'rgba(47, 158, 68, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Coding',
                    data: [0.556, 0.454, 0.503, 0.440, 0.434],
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
                    position: 'top',
                    labels: { font: { size: 13 } }
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
                        text: 'AUROC (higher is better)',
                        font: { size: 14 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}

console.log('Research blog charts loaded');
