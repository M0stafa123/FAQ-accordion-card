let q = document.querySelectorAll("article section .heading");
let arrow = document.querySelectorAll("article section .heading img");
q.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.parentElement.classList.contains("open")) {
      e.parentElement.classList.remove("open");
    } else {
      arrow.forEach((el) => el.classList.remove("rotate"));
      q.forEach((el) => {
        el.parentElement.classList.remove("open");
        el.classList.remove("font");
      });
      e.parentElement.classList.add("open");
    }
    e.firstElementChild.classList.toggle("rotate");
    e.classList.toggle("font");
  });
});
