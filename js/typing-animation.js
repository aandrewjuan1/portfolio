// Typing animation for hero section
(function() {
  'use strict';

  function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-subtitle');
    if (!typingElement) return;

    const subtitleText = "CS Student | Full Stack Developer | Seeking Part-Time Work";
    let currentText = '';
    let currentIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
      if (isDeleting) {
        currentText = subtitleText.substring(0, currentIndex - 1);
        currentIndex--;
        typingSpeed = 50;
      } else {
        currentText = subtitleText.substring(0, currentIndex + 1);
        currentIndex++;
        typingSpeed = 100;
      }

      typingElement.textContent = currentText;

      if (!isDeleting && currentIndex === subtitleText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        typingSpeed = 500; // Pause before starting again
      }

      setTimeout(typeText, typingSpeed);
    }

    // Start typing animation
    typeText();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTypingAnimation);
  } else {
    initTypingAnimation();
  }
})();

