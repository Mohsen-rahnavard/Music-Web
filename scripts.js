window.onload = function() {
    document.body.classList.add('fade-in');
};

// Dropdown Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function (e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-N1SSRSE35X');


window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none'; // Hide preloader
    document.getElementById('content').style.display = 'block'; // Show content
});

window.addEventListener("load", function() {
    const images = document.querySelectorAll(".fade-blur-image");
    images.forEach((image) => {
      image.classList.add("show");
    });
  });
  