// Мобільне меню
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  if (mobileNav) {
    mobileNav.classList.toggle("active");
  }
}

function closeMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  if (mobileNav) {
    mobileNav.classList.remove("active");
  }
}

// Закриття мобільного меню при кліку поза ним
document.addEventListener('click', function(event) {
  const mobileNav = document.getElementById("mobileNav");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  
  if (mobileNav && mobileMenuBtn) {
    if (!mobileNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
      mobileNav.classList.remove("active");
    }
  }
});

// Закриття мобільного меню при зміні розміру екрану
window.addEventListener('resize', function() {
  const mobileNav = document.getElementById("mobileNav");
  if (window.innerWidth > 768 && mobileNav) {
    mobileNav.classList.remove("active");
  }
});
