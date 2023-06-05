function comparador() { 
	return Math.random() - 0.5; 
}

let numeroCartas = 0;
let numeroDuplas = 0;
let arrayImagens = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot']
let arrayCartas = [];
let cartaVirada = '';
let contadorJogada = 0;
let primeiraCarta = '';
let segundaCarta = '';
let contadorGeral = 0;
let container = document.querySelector('.container');
let tempo = 0;
let idRelogio = '';
let resposta = '';


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
    `<div class="carta desvirada" onclick="virarCarta(this)" data-test="card">
        <div class="face frente">
            <img class="papagaio" src="images/back.png" data-test="face-down-image">
        </div>
        <div class="face outrolado">
            <img src="images/${cartaVirada}.gif" data-test="face-up-image">
        </div>
    </div>`
}

relogio()

function virarCarta(essaCarta) {
    let frenteVirado = essaCarta.querySelector('.frente')
    let outroladoVirado = essaCarta.querySelector('.outrolado')

    frenteVirado.classList.add('frente-virado')
    outroladoVirado.classList.add('outrolado-virado')
    essaCarta.removeAttribute('onclick')
    essaCarta.classList.remove('desvirada')
    contadorGeral++

    if (contadorJogada === 0){
        
        contadorJogada++;

        primeiraCarta = outroladoVirado.innerHTML;

        essaCarta.classList.add('para-desvirar')
        
        

    } else {
        
        container.classList.add('nao-clica')
        setTimeout (simclica, 1000)

        segundaCarta = outroladoVirado.innerHTML;

        essaCarta.classList.add('para-desvirar2')
        

        if ( primeiraCarta !== segundaCarta ){
            setTimeout (desvirar, 1000)
            setTimeout (zerarAtributos, 1000)
        } else {
            setTimeout (zerarAtributos, 1000)
            setTimeout (verificaVitoria, 1000)
        }        

    }

}

function desvirar() {

    let desviro = document.querySelector('.para-desvirar .frente')
    let desviro2 = document.querySelector('.para-desvirar .outrolado')
    let desviro3 = document.querySelector('.para-desvirar2 .frente')
    let desviro4 = document.querySelector('.para-desvirar2 .outrolado')

    desviro.classList.remove('frente-virado')
    desviro2.classList.remove('outrolado-virado')
    desviro3.classList.remove('frente-virado')
    desviro4.classList.remove('outrolado-virado')

    let clicavel = document.querySelector('.para-desvirar')
    let clicavel2 = document.querySelector('.para-desvirar2')
    clicavel.setAttribute("onclick", "virarCarta(this)")
    clicavel2.setAttribute("onclick", "virarCarta(this)")
    clicavel.classList.add('desvirada')
    clicavel2.classList.add('desvirada')

}

function zerarAtributos() {
    primeiraCarta = '';
    segundaCarta = '';
    contadorJogada = 0;
    let cartaPassada = document.querySelector('.para-desvirar')
    cartaPassada.classList.remove('para-desvirar')
    let cartaPassada2 = document.querySelector('.para-desvirar2')
    cartaPassada2.classList.remove('para-desvirar2')
    
}

function verificaVitoria() {
    let temDesvirada = document.querySelector('.desvirada')
    if (temDesvirada === null) {
        alert(`Você ganhou em ${contadorGeral} jogadas! A duração do jogo foi de ${tempo} segundos!`)
        
        while(resposta !== 'sim' && resposta !== 'não'){
        resposta = prompt('Você gostaria de reiniciar a partida? (sim ou não)')
        }

        if(resposta === 'sim'){
            location.reload()
        }else{
            clearInterval(idRelogio)
        }
    }
}

function simclica() {    
    container.classList.remove('nao-clica')
}

function passarTempo() {
    tempo++
    const divContador = document.querySelector('.contador')
    divContador.innerHTML = tempo    
}

function relogio() {
    idRelogio = setInterval(passarTempo, 1000)
}