// RESPONSIVE MENU 
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visibility")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visibility")
})