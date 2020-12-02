const bar = document.querySelector(".icon-bar");
const menu = document.querySelector(".menu-bar");
bar.addEventListener("click", function () {
  menu.classList.toggle("transOp");
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};
