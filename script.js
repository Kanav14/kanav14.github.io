// Initialize AOS for scroll animations
AOS.init();

// Typing effect for header
var typed = new Typed('#typed-output', {
  strings: ["DevOps Engineer", "Cloud Architect", "Automation Expert"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Particle.js configuration
particlesJS.load('particles-js', 'particles-config.json', function() {
  console.log('particles.js loaded');
});

// Dark/Light mode toggle
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
