let btn = document.querySelector(".body .navBar .hidden i");
let linkks = document.querySelector(".body .navBar .hidden .linkks");
// btn.addEventListener("click", () => {
//   linkks.classList.toggle(".hide");
// });
// l;
btn.addEventListener("click", () => {
  if (!linkks.classList.contains("hide")) {
    linkks.style.left = "-464px";
    linkks.classList.add("hide");
  } else {
    linkks.style.left = "200px";
    linkks.classList.remove("hide");
  }
});
