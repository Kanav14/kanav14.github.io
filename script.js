// Function to show a specific section and hide others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.section');
    // Hide all sections
    sections.forEach((section) => {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Initial setup to show the About Me section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('about'); // Show the About Me section on page load
});

// Filter portfolio items based on category
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach((item) => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
}
