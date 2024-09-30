// Skills Chart
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['AWS', 'Docker', 'Kubernetes', 'Python', 'Ansible', 'Jenkins'],
        datasets: [{
            label: 'Skills Proficiency',
            data: [90, 80, 85, 75, 70, 80],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: '#3B82F6',
            borderWidth: 2
        }]
    },
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// Loading Screen
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});
