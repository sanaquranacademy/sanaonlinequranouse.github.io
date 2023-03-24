document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#40513B";
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }
  });
});
