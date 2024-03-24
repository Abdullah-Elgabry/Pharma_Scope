let btnOpenSide = document.querySelector(".back");
let btn_show = document.querySelector(".toggle-nav");
let btn_close = document.querySelector(".close");

btnOpenSide.onclick = function () {
  document.querySelector("aside").classList.toggle("open");
  setTimeout(() => {
    document.querySelectorAll("aside ul li a").forEach((c) => {
      c.classList.toggle("open");
    });
  }, 120);
  // document.querySelector('.arrow').classList.toggle('d-none')
  // document.querySelector('.bars').classList.toggle('d-none')
};

btn_show.onclick = function () {
  document.querySelector("aside").classList.remove("close");
  this.classList.add("d-none");
};
btn_close.onclick = function () {
  document.querySelector("aside").classList.add("close");
  btn_show.classList.remove("d-none");
};
