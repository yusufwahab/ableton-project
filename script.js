const navbarBtn = document.querySelector(".menu");
const navbar = document.querySelector(".nav-container")

navbarBtn.addEventListener("click", function() {
    navbar.classList.toggle("show");
});
