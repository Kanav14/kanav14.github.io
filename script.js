// Skills Chart
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ansible', 'Docker', 'Kubernetes', 'Jenkins', 'Shell Scripting'],
        datasets: [{
            label: 'Skill Level (%)',
            data: [85, 90, 75, 80, 70],
            backgroundColor: [
                'rgba(59, 130, 246, 1)',
                'rgba(34, 197, 94, 1)',
                'rgba(220, 38, 38, 1)',
                'rgba(256, 159, 0, 1)',
                'rgba(162, 162, 162, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Skill Level (%)'
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});
});
