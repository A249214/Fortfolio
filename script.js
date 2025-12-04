
const navbar = document.querySelector(".navbar");
const hamburger = document.createElement("div");
hamburger.classList.add("hamburger");
navbar.appendChild(hamburger);

hamburger.onclick = () => {
  navbar.classList.toggle("active");
};

