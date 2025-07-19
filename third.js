// Hero title animation
anime({
  targets: '.hero-title',
  translateY: [-50, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: 'easeOutExpo'
});

anime({
  targets: '.hero-subtitle',
  translateY: [50, 0],
  opacity: [0, 1],
  delay: 300,
  duration: 1200,
  easing: 'easeOutExpo'
});

anime({
  targets: '.btn',
  scale: [0.8, 1],
  opacity: [0, 1],
  delay: 600,
  duration: 800,
  easing: 'easeOutExpo'
});
// About section scroll animation
const aboutTitle = document.querySelector('.about-title');
const aboutText = document.querySelector('.about-text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: '.about-title',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      });
      anime({
        targets: '.about-text',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: 200,
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }
  });
}, {
  threshold: 0.3
});

observer.observe(aboutTitle);
// Animate Projects Section
const sectionTitle = document.querySelector('.section-title');
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: '.section-title',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      });

      anime({
        targets: '.project-card',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 800,
        easing: 'easeOutExpo'
      });
    }
  });
}, { threshold: 0.3 });

projectObserver.observe(sectionTitle);
// Select all tab items
const tabItems = document.querySelectorAll(".tab-item");

tabItems.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault(); // prevent default jump to ID

    // Remove active from all
    tabItems.forEach((item) => {
      item.classList.remove("active");
      const circle = item.querySelector(".circle");
      if (circle) circle.remove(); // remove old circles
    });

    // Add active to clicked one
    this.classList.add("active");

    // Create and append new circle
    const circle = document.createElement("div");
    circle.classList.add("circle");
    this.appendChild(circle);

    // Smooth scroll to section if linked
    const link = this.querySelector("a");
    const targetId = link.getAttribute("href");
    if (targetId.startsWith("#")) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

//our work
const cards = document.querySelectorAll('.work-card');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  cards.forEach(card => {
    const speed = parseFloat(card.dataset.speed);
    const offset = scrollY * speed;
    card.style.transform = `translateY(-${offset}px)`;
  });
});
// our team
const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach(card => {
  const img = card.querySelector('.team-photo');
  const vid = card.querySelector('.team-video');

  card.addEventListener('click', () => {
    // Stop all other videos
    teamCards.forEach(otherCard => {
      const otherImg = otherCard.querySelector('.team-photo');
      const otherVid = otherCard.querySelector('.team-video');
      otherVid.pause();
      otherVid.currentTime = 0;
      otherVid.style.display = "none";
      otherImg.style.display = "block";
    });

    // Show clicked video
    img.style.display = "none";
    vid.style.display = "block";
    vid.muted = true;
    vid.playsInline = true;
    vid.play().catch(err => {
      console.log("Video autoplay failed:", err);
    });
  });
});

//Blog

// Optional: Animate the blog title and cards on load
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.blog-title');
  const cards = document.querySelectorAll('.blog-card');

  title.style.opacity = 0;
  title.style.transform = 'translateY(-30px)';
  setTimeout(() => {
    title.style.transition = 'all 1s ease';
    title.style.opacity = 1;
    title.style.transform = 'translateY(0)';
  }, 300);

  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'all 0.8s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 600 + index * 300);
  });
});
//use cases
// Optional: Add animated glowing border
const videoWrapper = document.querySelector(".video-wrapper");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  videoWrapper.style.boxShadow = `
    0 0 30px rgba(${255 * x}, ${255 * y}, 255, 0.4),
    0 0 60px rgba(${255 * (1 - x)}, ${255 * (1 - y)}, 255, 0.2)
  `;
});
window.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.use-case-video');
  
  // Reset video to start and play
  if (video) {
    video.currentTime = 0;
    video.play().catch(e => {
      console.warn("Autoplay may be blocked by the browser.", e);
    });
  }
});
// footer

