
document.addEventListener('DOMContentLoaded', function () {
    const systemResetButton = document.querySelector('.system-reset-button');
    const greetingSection = document.querySelector('.greeting');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const intersectionCallback = (entries, observer) => {
      const greetingSectionEntry = entries.find(entry => entry.target === greetingSection);
  
      if (greetingSectionEntry && greetingSectionEntry.isIntersecting) {
        // Greeting section is in view, hide the button
        systemResetButton.style.display = 'none';
      } else {
        // Greeting section is not in view, show the button
        systemResetButton.style.display = 'flex';
      }
    };
  
    const observer = new IntersectionObserver(intersectionCallback, observerOptions);
  
    // Observe the greeting section
    observer.observe(greetingSection);
  });