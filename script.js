function comparador() { 
	return Math.random() - 0.5; 
}

let numeroCartas = 0;
let numeroDuplas = 0;
let arrayImagens = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot']
let arrayCartas = [];
let cartaVirada = ''

while(numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0){
    numeroCartas = prompt("Com quantas cartas quer jogar?");
    numeroDuplas = numeroCartas / 2;
}

for( i = 0; i < numeroDuplas; i++ ) {
    arrayCartas.push(arrayImagens[i])
    arrayCartas.push(arrayImagens[i])
}

arrayCartas.sort(comparador)


for( i = 0; i < numeroCartas; i++ ){    
    cartaVirada = arrayCartas[i];
    const divContainer = document.querySelector('.container')
    divContainer.innerHTML += 
    `<div class="carta" onclick="virarCarta(this)">
        <div class="face frente">
            <img src="images/back.png">
        </div>
        <div class="face outrolado">
            <img src="images/${cartaVirada}.gif">
        </div>
    </div>`
}


function virarCarta(essaCarta) {
    let frenteVirado = essaCarta.querySelector('.frente')
    let outroladoVirado = essaCarta.querySelector('.outrolado')

    frenteVirado.classList.add('frente-virado')
    outroladoVirado.classList.add('outrolado-virado')
}


