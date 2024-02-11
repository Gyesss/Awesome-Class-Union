// Backsound

document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('myAudio');

  // Pemutaran audio saat halaman di-scroll
  function playAudioOnScroll() {
      audio.play();
      // Hapus event listener setelah pemutaran pertama
      document.removeEventListener('scroll', playAudioOnScroll);
  }

  // Event listener untuk klik di halaman
  document.addEventListener('click', function() {
      audio.play();
      // Hapus event listener scroll setelah pemutaran pertama
      document.removeEventListener('scroll', playAudioOnScroll);
  });

  // Event listener untuk pergerakan kursor
  document.addEventListener('mousemove', function() {
      audio.play();
      // Hapus event listener scroll setelah pemutaran pertama
      document.removeEventListener('scroll', playAudioOnScroll);
  });

  // Event listener untuk mendeteksi scroll
  document.addEventListener('scroll', playAudioOnScroll);
});

// Navbar 

function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbarContainer').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

// Collapsible 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}

// Slider 

document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? "block" : "none";
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000);

  showSlide(currentSlide);
});

// Countdown 

document.addEventListener('DOMContentLoaded', function() {
  var countDownDate = new Date("Jun 8, 2024 00:00:00").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Kalian telah berpisah!";
    }
  }, 1000);

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
});

// Animated Item 

document.addEventListener('DOMContentLoaded', function () {
  var animatedItems = document.querySelectorAll('.animated-item');

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      animatedItems.forEach(function (item) {
          if (isElementInViewport(item)) {
              item.classList.add('appear');
          }
      });
  }

  document.addEventListener('scroll', handleScroll);
  document.addEventListener('DOMContentLoaded', handleScroll);
});