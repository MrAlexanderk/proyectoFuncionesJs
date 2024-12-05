function pintar(elemento, colorNuevo = 'green'){
    elemento.style.backgroundColor = colorNuevo
}

const bloque1 = document.getElementById('bloque1')
const bloque2 = document.getElementById('bloque2')
const bloque3 = document.getElementById('bloque3')
const bloque4 = document.getElementById('bloque4')

bloque1.addEventListener("click", () => pintar(bloque1, 'black'))
bloque2.addEventListener("click", () => pintar(bloque2, 'black'))
bloque3.addEventListener("click", () => pintar(bloque3, 'black'))
bloque4.addEventListener("click", () => pintar(bloque4, 'black'))

let color = 'green'
let key = document.getElementById("key")

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    color = 'pink'
    } else if (event.key === 's') {
    color = 'orange'
    } else if (event.key === 'd') {
        color = 'lightblue'
    }
    else{
        return
    }
    key.style.backgroundColor = color
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        color = 'purple'
    } else if (event.key === 'w') {
        color = 'gray'
    } else if (event.key === 'e') {
        color = 'brown'
    }
    else{
        return
    }
    const nuevoDiv = document.createElement('div');

    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    document.body.appendChild(nuevoDiv);
})
