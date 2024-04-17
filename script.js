// Remove loading spinner when page is fully loaded
window.addEventListener('load', function() {
  document.querySelector('.loader').style.display = 'none';
});

// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add fade-in animation to sections when scrolled into view
const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
