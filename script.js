// Typing effect for header
var typedOutput = document.getElementById('typed-output');
var typedText = ["DevOps Engineer", "Cloud Architect", "Automation Expert"];
var textIndex = 0;
var charIndex = 0;
var typingSpeed = 100;

function typeText() {
  if (charIndex < typedText[textIndex].length) {
    typedOutput.textContent += typedText[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(deleteText, 2000);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typedOutput.textContent = typedOutput.textContent.slice(0, -1);
    charIndex--;
    setTimeout(deleteText, typingSpeed);
  } else {
    textIndex = (textIndex + 1) % typedText.length;
    setTimeout(typeText, typingSpeed);
  }
}

typeText();

// Dark Mode Toggle
var toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Skill Bar Animation
var skillBars = document.querySelectorAll('.skill-bar');
window.addEventListener('scroll', function () {
  skillBars.forEach(function (bar) {
    var barValue = bar.getAttribute('data-skill');
    bar.style.width = barValue + '%';
  });
});

// Initialize particles.js
particlesJS.load('particles-js', 'particles-config.json', function () {
  console.log('Particles.js loaded');
});
