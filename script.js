// Theme toggle
const toggle = document.getElementById('themeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('light');
});

// Accordion functionality
const accordions = document.querySelectorAll('.accordion-btn');
accordions.forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    panel.classList.toggle('open');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
