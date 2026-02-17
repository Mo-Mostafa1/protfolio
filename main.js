const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => observer.observe(el));


let aaa=document.querySelector(".aaa");
let par=document.querySelector(".fa-bars");

par.addEventListener("click",function(){
  aaa.classList.toggle("aaa")
})