const button = document.getElementById("button");
const mobileMenu = document.getElementById("unhide");

button.addEventListener("click", () => {
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
  } else {
    mobileMenu.classList.remove("hidden");
  }
});
