// Mobile navigation toggle script (< 30 lines)
// Toggles the mobile menu open/closed and updates accessibility attributes.

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// 1. Toggle mobile menu on hamburger button click
navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// 2. Automatically close mobile menu when any navigation link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
