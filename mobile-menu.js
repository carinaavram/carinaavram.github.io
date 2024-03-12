document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.querySelector('nav');

  mobileMenuBtn.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
});
