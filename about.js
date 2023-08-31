const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const elementsToAnimate = document.querySelectorAll('.about-text, .about-image');
elementsToAnimate.forEach(element => {
  observer.observe(element);
});