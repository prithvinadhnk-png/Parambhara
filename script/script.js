

document.addEventListener("DOMContentLoaded", function () {

  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuCheckbox = document.getElementById('menu-checkbox');

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove the "show" class to trigger CSS fade-out
      mobileMenu.classList.remove('show');

      // Wait for the CSS transition to finish (300ms matches your CSS)
      setTimeout(() => {
        menuCheckbox.checked = false; // uncheck checkbox after fade
      }, 300);
    });
  });

  const faders = document.querySelectorAll(".fade-in-bottom");
  document.querySelectorAll('.classesCard').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
  });
  const hrs = document.querySelectorAll(".animated-hr");
  // use same observer as faders



  const appearOptions = {
    threshold: 0.5, // trigger when 20% is visible
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // run once
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  hrs.forEach(hr => appearOnScroll.observe(hr));

  const classesCards = document.querySelectorAll(".classesCard, .classesCard2, .myFab");
  const cardOptions = {
    threshold: 0.3, // 100% visible
  };
  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, cardOptions);
  classesCards.forEach(card => cardObserver.observe(card));






});


