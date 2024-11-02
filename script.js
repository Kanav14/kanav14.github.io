function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block'; // Show the selected section
    }
    // Make the active button appear pressed
    const buttons = document.querySelectorAll('#nav button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.innerText.toLowerCase() === sectionId) {
            button.classList.add('active');
        }
    });
}

// Show the About Me section by default
showSection('about');
