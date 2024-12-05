function pintar(elemento, colorNuevo = 'green'){
    elemento.style.backgroundColor = colorNuevo
}

let ele = document.getElementById("ele1")
ele.addEventListener("click", () => pintar(ele, 'yellow'));
pintar(ele)