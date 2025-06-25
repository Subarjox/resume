const texts = ["Fullstack Developer", "Tech Enthusiast", "AI engineer"];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('pass').textContent = "I'm a " + letter;

    if (letter.length === currentText.length) {
      setTimeout(() => {
        erase();
      }, 1500);
    } else {
      setTimeout(type, 100);
    }
  }

  function erase() {
    if (index === 0) {
      count++;
      type();
      return;
    }

    currentText = texts[count];
    letter = currentText.slice(0, --index);
    document.getElementById('pass').textContent = "I'm a " + letter;
    setTimeout(erase, 50);
  }

  document.addEventListener("DOMContentLoaded", type);

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.banner');
    if (window.scrollY > 150) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  