// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scroll Polyfill for anchor links
  document.querySelectorAll('nav a[href^="#"], a.cta-button[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Only smooth scroll for internal page anchors
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Active link switching on scroll
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('nav a');

  function changeActiveNav() {
    let index = sections.length;

    while(--index && window.scrollY + 150 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) navLinks[index].classList.add('active');
  }

  changeActiveNav();
  window.addEventListener('scroll', changeActiveNav);

  // Contact form validation and feedback
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // Simple email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name.length < 2) {
        alert('Please enter a valid name.');
        form.name.focus();
        return;
      }
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        form.email.focus();
        return;
      }
      if (message.length < 10)
// Moving Image Effect (Left to Right)
const movingImage = document.getElementById("movingImage");

function moveImage() {
    let screenWidth = window.innerWidth;
    let maxPosition = screenWidth + 200;  // Allow image to move off-screen
    let leftPosition = parseInt(movingImage.style.left.replace('px', '')) || -200;

    // Reset position when off-screen
    if (leftPosition > maxPosition) {
        movingImage.style.left = '-200px';
    } else {
        movingImage.style.left = (leftPosition + 5) + 'px'; // Move 5px per frame
    }

    // Repeat the animation every 20 milliseconds
    setTimeout(moveImage, 20);
}

moveImage();  // Start moving the image


// Bouncing Image Effect (Up and Down)
const bouncingImage = document.getElementById("bouncingImage");
let bounceDirection = 1;  // 1 for down, -1 for up

function bounceImage() {
    const maxHeight = window.innerHeight - 100; // Max screen height
    let topPosition = parseInt(bouncingImage.style.top.replace('px', '')) || 50;

    // Reverse direction at top/bottom
    if (topPosition >= maxHeight || topPosition <= 50) {
        bounceDirection *= -1;
    }

    bouncingImage.style.top = (topPosition + bounceDirection * 5) + 'px'; // Move 5px per frame

    // Repeat the animation every 10 milliseconds
    setTimeout(bounceImage, 10);
}

bounceImage();  // Start bouncing the image


// Floating Image Effect (Gentle Up and Down)
const floatingImage = document.getElementById('floatingImage');
let floatPosition = 0;  // Starting position for floating effect
let floatDirection = 1; // 1 for moving down, -1 for moving up

function floatImage() {
    floatPosition += floatDirection * 2; // Change position by 2px per frame

    if (floatPosition >= 20 || floatPosition <= -20) {
        floatDirection *= -1; // Reverse direction when limit is reached
    }

    floatingImage.style.top = 50 + floatPosition + 'px'; // Update image's top position

    // Repeat the animation every 10 milliseconds
    setTimeout(floatImage, 10);
}

floatImage();  // Start floating the image
