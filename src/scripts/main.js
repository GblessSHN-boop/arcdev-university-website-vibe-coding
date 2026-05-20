import Alpine from "alpinejs";
import Lenis from "lenis";
import { gsap } from "gsap";

window.Alpine = Alpine;
Alpine.start();

const lenis = new Lenis({
  autoRaf: true,
  duration: 1.05
});

const header = document.querySelector("[data-site-header]");

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 20);
});

gsap.from("[data-hero-line]", {
  y: 72,
  opacity: 0,
  duration: 0.9,
  ease: "power4.out",
  stagger: 0.08,
  delay: 0.15
});

const revealItems = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      gsap.to(entry.target, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.out"
      });

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => {
  gsap.set(item, { y: 34, opacity: 0 });
  revealObserver.observe(item);
});

const counters = document.querySelectorAll("[data-count]");

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const target = Number(entry.target.dataset.count || 0);

      gsap.fromTo(
        entry.target,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.2,
          ease: "power2.out",
          snap: { innerText: 1 }
        }
      );

      countObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);

counters.forEach((counter) => countObserver.observe(counter));

console.log("ARCDEV University homepage v2 initialized.");
