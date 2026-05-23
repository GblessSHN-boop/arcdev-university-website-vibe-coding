import Alpine from "alpinejs";
import Lenis from "lenis";
import { gsap } from "gsap";

window.Alpine = Alpine;
Alpine.start();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const lenis = new Lenis({
  autoRaf: true,
  duration: 1.1,
  lerp: 0.085
});

const header = document.querySelector("[data-site-header]");

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
});

if (!prefersReducedMotion) {
  const cursorOrb = document.createElement("div");
  cursorOrb.className = "cursor-orb";
  document.body.appendChild(cursorOrb);

  window.addEventListener("pointermove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    document.documentElement.style.setProperty("--pointer-x", `${x}px`);
    document.documentElement.style.setProperty("--pointer-y", `${y}px`);

    gsap.to(cursorOrb, {
      x,
      y,
      duration: 0.38,
      ease: "power3.out"
    });
  });

  const magneticItems = document.querySelectorAll(".btn-v2, .lang-switch, .partner-ticker-card");

  magneticItems.forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      gsap.to(item, {
        x: x * 0.12,
        y: y * 0.18,
        duration: 0.28,
        ease: "power3.out"
      });
    });

    item.addEventListener("pointerleave", () => {
      gsap.to(item, {
        x: 0,
        y: 0,
        duration: 0.45,
        ease: "elastic.out(1, 0.45)"
      });
    });
  });

  const interactiveCards = document.querySelectorAll("[data-interactive-card], .faculty-card-v2, .center-card, .news-layout article, .admission-panel");

  interactiveCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--card-x", `${x}px`);
      card.style.setProperty("--card-y", `${y}px`);
    });
  });

  gsap.from("[data-hero-line]", {
    y: 34,
    opacity: 0,
    duration: 0.78,
    ease: "power4.out",
    stagger: 0.08,
    delay: 0.1
  });
}

const revealItems = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      gsap.to(entry.target, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out"
      });

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => {
  gsap.set(item, { y: 24, opacity: 0 });
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
          duration: 1.15,
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

console.log("ARCDEV UI/UX v5 initialized.");








// === ARCDEV CLEAN MOTION V9 START ===
(() => {
  const ready = (fn) => {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  };

  ready(() => {
    document.querySelectorAll(".arc-cursor, .cursor-orb, .custom-cursor, .u6-cursor").forEach((el) => el.remove());

    const revealItems = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -80px 0px" });

      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    document.querySelectorAll("[data-interactive-card]").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      });

      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--mx");
        card.style.removeProperty("--my");
      });
    });

    document.querySelectorAll("img[src*='/images/partners/']").forEach((img) => {
      img.addEventListener("error", () => {
        img.style.display = "none";
        const parent = img.closest(".q-partner-card");
        if (parent) parent.classList.add("is-missing-logo");
      });
    });
  });
})();
// === ARCDEV CLEAN MOTION V9 END ===
