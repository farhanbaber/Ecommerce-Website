document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const page = document.body.id || "unknown"; // Fallback for missing body ID
  const toggler = document.querySelector(".navbar-toggler");

  if (!navbar) {
    console.error("Navbar element with ID 'navbar' not found!");
    return;
  }

  // Apply glass effect immediately for non-home/product pages
  if (page !== "home" && page !== "product") {
    navbar.classList.add("glass");
  } else {
    const triggerHeight = page === "home" ? window.innerHeight : window.innerHeight * 0.8;
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("glass", window.scrollY > triggerHeight - 50);
    });
  }

  // Apply glass effect when hamburger menu is clicked
  if (toggler) {
    toggler.addEventListener("click", function () {
      const isExpanded = toggler.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        navbar.classList.add("glass");
      } else if (page === "home" || page === "product") {
        // Only remove glass if not scrolled past triggerHeight on home/product
        if (window.scrollY <= triggerHeight - 50) {
          navbar.classList.remove("glass");
        }
      }
    });
  }
});



// count

count = 0
function display() {
  document.getElementById("output").innerText = count
}
function Add() {
  count++
  display()
}
function sub() {
  if (count > 0) {
      count--
  display()
  }

}
// thumbnail
 document.addEventListener('DOMContentLoaded', () => {
      const mainImage = document.getElementById('main-image');
      const thumbnails = document.querySelectorAll('.thumbnail');

      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
          // Remove active class from all thumbnails
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          
          // Add active class to clicked thumbnail
          thumbnail.classList.add('active');
          
          // Update main image source
          const newSrc = thumbnail.querySelector('img').getAttribute('data-src');
          mainImage.src = newSrc;
          mainImage.alt = thumbnail.querySelector('img').alt;
        });
      });
    }); 


    // Target date set karein (apna sale end date lagao)
let countDownDate = new Date("Aug 20, 2025 23:59:59").getTime();

// Sare .timer spans nikal lo
let timers = document.querySelectorAll(".timer");

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(x);
        document.querySelector("h3").innerHTML = "Offer Expired!";
        document.getElementById("timer-btn").disabled = true;
        return;
    }

    // Calculation
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update spans
    timers[0].innerHTML = days.toString().padStart(2, "0");
    timers[1].innerHTML = hours.toString().padStart(2, "0");
    timers[2].innerHTML = minutes.toString().padStart(2, "0");
    timers[3].innerHTML = seconds.toString().padStart(2, "0");
}, 1000);

  const cardsWrapper = document.getElementById('cardsWrapper');
    const images = [
      'assets/main head img two.jpg',
      'assets/Hero section img -three.jpg',
      'assets/main img head one.png',
      'assets/main img.webp'
    ];

    function createCard(index) {
      const card = document.createElement('div');
      card.className = 'customCard';
      const imgSrc = images[index % images.length];
      card.innerHTML = `
        <img src="${imgSrc}" alt="Card Image">
        <p>From timeless tables to modern décor, our collection reflects both tradition and style</p>
     <button>Shop Now</button>
      `;
      return card;
    }

    for (let i = 0; i < 10; i++) {
      cardsWrapper.appendChild(createCard(i));
    }

    const cards = document.querySelectorAll('.customCard');
    cards.forEach(card => {
      cardsWrapper.appendChild(card.cloneNode(true));
    });

    cardsWrapper.addEventListener('mouseenter', () => {
      cardsWrapper.style.animationPlayState = 'paused';
    });

    cardsWrapper.addEventListener('mouseleave', () => {
      cardsWrapper.style.animationPlayState = 'running';
    });