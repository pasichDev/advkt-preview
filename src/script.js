// Мобільне меню
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  const body = document.body;
  
  if (mobileNav) {
    mobileNav.classList.toggle("active");
    
    // Блокуємо прокрутку сторінки коли меню відкрите
    if (mobileNav.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }
}

function closeMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  const body = document.body;
  
  if (mobileNav) {
    mobileNav.classList.remove("active");
    body.style.overflow = "";
  }
}

// Закриття мобільного меню при кліку поза ним
document.addEventListener('click', function(event) {
  const mobileNav = document.getElementById("mobileNav");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  
  if (mobileNav && mobileMenuBtn) {
    if (!mobileNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
      closeMobileMenu();
    }
  }
});

// Закриття мобільного меню при зміні розміру екрану
window.addEventListener('resize', function() {
  const mobileNav = document.getElementById("mobileNav");
  const body = document.body;
  
  if (window.innerWidth > 768 && mobileNav) {
    mobileNav.classList.remove("active");
    body.style.overflow = "";
  }
});

// Закриття мобільного меню при натисканні Escape
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
});

// Плавна прокрутка до секцій
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Закриваємо мобільне меню після кліку на посилання
        closeMobileMenu();
      }
    });
  });
});

// Анімація появи елементів при прокрутці
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
