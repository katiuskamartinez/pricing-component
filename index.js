const $togle=document.getElementById("toggle");
const $cambio=document.getElementById("cambio");
$togle.addEventListener("change",(e) =>{
    $cambio.classList.toggle("mostrar-x-mes");
})