//Funciones____________________________________________

const mostrarSeleccion = () => {
    console.log(txtplayer.value)
    alert(txtplayer.value)
    
}

//_____________________________________________________
//DOM

const root = documents.getElementById('root')

/* 1. BIENVENIDA AL JUEGO   
    2.SELECCION DE ARMAS
    3. CALCULAR Y MOSTRAR EL GANADOR
        empate
        ganador
        perdedor
     */

//Fase #1: Bienvenida al juego 

const h1bienvenida = document.createElement('h1')
h1bienvenida.textContent = 'bienvenido/a al juego'
root.createElement(h1bienvenida)

//fase #2: Seleccion de armas 
/*
    sub-fase: 
        1. indicar al usuario que elija un arma.
        nota: si el usuario no elije un arma o elije cualquier otro elemento, muestra un mensaje de error e indica al usuario que vuelva a elegir.
        2. la maquina elije un arma 
        3. guardamos en variables la seleccion de ambos contendientes 

*/

let puntosplayer = 0
let seleccionplayer = ' '

const lblplayer = document.createElement('label')
lblplayer.textContent = 'usuario' 
root.appendchild(lblplayer)

const txtplayer = document.createElement('imput') 
txtplayer.Placeholder = 'introduce tu seleccion'
root.appendchild(txtplayer)

const btnplayer = document.createElement('button')
btnplayer.textContent = 'Guardar cambios'
btnplayer.addEventListener = ('click', mostrarSeleccion)
root.appendchild(btnplayer)

const pSeleccioPlayer = Document.createElement('P')
root.appendchild(pSeleccioPlayer) 
