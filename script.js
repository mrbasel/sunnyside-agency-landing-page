const humMenuButton = document.querySelector(".hum-menu");
const mobileMenu = document.querySelector(".header-nav");

humMenuButton.addEventListener("click", () => {
  const displayValue = mobileMenu.style.display;
  const isOpen = displayValue === "flex";

  if (isOpen) mobileMenu.style.display = "none";
  else mobileMenu.style.display = "flex";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) mobileMenu.style.display = "flex";
});
