const container = document.querySelector(".container")
const color = document.getElementById("color");

container.childNodes.forEach((elemento)=>{
    
    elemento.addEventListener("click",(e)=>{
        const elementos = e.target;
        elementos.style.background = color.value;
    })
})