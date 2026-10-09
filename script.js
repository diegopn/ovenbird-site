const root = document.documentElement;
const nav = document.querySelector("#main-nav");
const menuToggle = document.querySelector("[data-menu-toggle]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeColor = document.querySelector('meta[name="theme-color"]');

const locale = root.lang.toLowerCase().startsWith("pt")
  ? "pt"
  : root.lang.toLowerCase().startsWith("es")
    ? "es"
    : "en";

const labels = {
  pt: {
    dark: "Ativar tema escuro",
    light: "Ativar tema claro",
    open: "Abrir menu",
    close: "Fechar menu",
  },
  en: {
    dark: "Enable dark theme",
    light: "Enable light theme",
    open: "Open menu",
    close: "Close menu",
  },
  es: {
    dark: "Activar tema oscuro",
    light: "Activar tema claro",
    open: "Abrir menú",
    close: "Cerrar menú",
  },
}[locale];

function setTheme(theme, save = true) {
  const dark = theme === "dark";
  root.dataset.theme = dark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", dark ? labels.light : labels.dark);
  themeToggle.title = dark ? labels.light : labels.dark;
  themeColor.content = dark ? "#101416" : "#ffffff";

  if (save) {
    try {
      localStorage.setItem("ovenbird-theme", root.dataset.theme);
    } catch {}
  }
}

function closeMenu() {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", labels.open);
}

menuToggle.setAttribute("aria-label", labels.open);
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? labels.close : labels.open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

let savedTheme;
try {
  savedTheme = localStorage.getItem("ovenbird-theme");
} catch {}

setTheme(
  savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  false,
);


const screenshotRotator = document.querySelector("[data-screenshot-rotator]");

if (screenshotRotator) {
  const screenshots = [...screenshotRotator.querySelectorAll("[data-screenshot]")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeIndex = Math.max(
    0,
    screenshots.findIndex((image) => image.classList.contains("is-active")),
  );
  let rotationTimer;

  const rotateScreenshot = () => {
    if (document.hidden) return;

    screenshots[activeIndex].classList.remove("is-active");
    screenshots[activeIndex].setAttribute("aria-hidden", "true");
    activeIndex = (activeIndex + 1) % screenshots.length;
    screenshots[activeIndex].classList.add("is-active");
    screenshots[activeIndex].removeAttribute("aria-hidden");
  };

  const startRotation = () => {
    if (screenshots.length > 1 && !reducedMotion.matches && !rotationTimer) {
      rotationTimer = window.setInterval(rotateScreenshot, 6000);
    }
  };

  const stopRotation = () => {
    window.clearInterval(rotationTimer);
    rotationTimer = undefined;
  };

  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      stopRotation();
    } else {
      startRotation();
    }
  });

  startRotation();
}
