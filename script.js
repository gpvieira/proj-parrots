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
    `<div class="carta">
        <div class="normal">
            <img src="images/back.png">
        </div>
        <div class="virada">
            <img src="images/${cartaVirada}.gif">
        </div>
    </div>`
}


