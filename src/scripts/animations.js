export function initAnimations() {
  const animatedItems = document.querySelectorAll(".card, .section-title, .section-lead");

  animatedItems.forEach((item) => {
    item.setAttribute("data-animate", "fade-up");
  });
}

initAnimations();
