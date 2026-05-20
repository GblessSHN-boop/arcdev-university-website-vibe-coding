import Alpine from "alpinejs";
import Lenis from "lenis";

import "./navigation.js";
import "./animations.js";
import "./sliders.js";
import "./language.js";

window.Alpine = Alpine;
Alpine.start();

const lenis = new Lenis({
  autoRaf: true
});

console.log("ARCDEV University frontend initialized.");
