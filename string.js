document.querySelectorAll(".dropdown > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const menu = link.nextElementSibling;
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
});
