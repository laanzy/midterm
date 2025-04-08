// Get the hamburger icon and the nav-links element
const hamburger = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle the "active" class on the nav-links to show/hide the menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
