const ready = (callback) => {
  if (document.readyState !== "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
};

ready(() => {
  const revealItems = document.querySelectorAll(".u6-reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -80px 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
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

  document.querySelectorAll(".u6-partner-logo").forEach((img) => {
    const setFallback = () => {
      const card = img.closest(".u6-partner-card");
      if (card) {
        card.classList.add("is-logo-failed");
      }
      img.setAttribute("hidden", "true");
    };

    img.addEventListener("error", setFallback);

    if (img.complete && img.naturalWidth === 0) {
      setFallback();
    }
  });

  const canUseCursor = window.matchMedia("(pointer: fine)").matches;

  if (canUseCursor && !document.querySelector(".u6-cursor")) {
    const cursor = document.createElement("div");
    cursor.className = "u6-cursor";
    document.body.appendChild(cursor);

    window.addEventListener("pointermove", (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    });

    document.querySelectorAll("a, button, [data-interactive-card]").forEach((item) => {
      item.addEventListener("pointerenter", () => cursor.classList.add("is-active"));
      item.addEventListener("pointerleave", () => cursor.classList.remove("is-active"));
    });
  }
});
