document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          } else {
              console.warn(`Target section with id '${targetId}' not found.`);
          }
      });
  });

  // Form validation
  const contactForm = document.querySelector('#contact form');

  if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
          e.preventDefault();

          const name = contactForm.querySelector('input[name="name"]').value.trim();
          const email = contactForm.querySelector('input[type="email"]').value.trim();
          const message = contactForm.querySelector('textarea').value.trim();

          if (!name || !email || !message) {
              alert('Please fill in all fields.');
              return;
          }

          if (!validateEmail(email)) {
              alert('Please enter a valid email address.');
              return;
          }

          // Simulating form submission (replace with AJAX request if needed)
          alert('Thank you for contacting us! We will get back to you soon.');
          contactForm.reset();
      });
  }

  // Email validation function
  function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }

  // Accordion functionality for document checklist
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
      const btn = accordion.querySelector('.accordion-btn');
      if (btn) {
          btn.addEventListener('click', function () {
              accordion.classList.toggle('active');
          });
      }
  });

  // Fade-in animations for sections
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});
