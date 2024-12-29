let $ = document;
let scrollBar = $.querySelector(".scrollbar");
let percentage;

window.addEventListener("scroll", function () {
  percentage =
    window.scrollY / ($.documentElement.scrollHeight - window.innerHeight);
  scrollBar.style.left = window.innerWidth * (1 - percentage) + "px";
});
