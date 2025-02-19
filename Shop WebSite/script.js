document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Form validation
    const contactForm = document.querySelector('#contact form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();
  
        if (name === '' || email === '' || message === '') {
          alert('Please fill in all fields.');
          return;
        }
  
        if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
          return;
        }
  
        // If all validations pass, submit the form (you can replace this with an AJAX request)
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
      });
    }
  
    // Email validation helper function
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    // Accordion functionality for document checklist
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach(accordion => {
      const btn = accordion.querySelector('.accordion-btn');
      const content = accordion.querySelector('.accordion-content');
  
      btn.addEventListener('click', function () {
        accordion.classList.toggle('active');
      });
    });
  
    // Fade-in animations for sections
    const sections = document.querySelectorAll('.section');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the section is visible
      }
    );
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });