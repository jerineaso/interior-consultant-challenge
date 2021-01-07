// Responsive Toggle
let hidden =  document.querySelector(".hidden"),
    navi = document.querySelector(".links")

hidden.addEventListener('click',(e) => {
    e.preventDefault();
    hidden.classList.toggle("cross");
    navi.classList.toggle("cross");
})