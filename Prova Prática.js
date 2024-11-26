// Para coletar as cores da página:
let vetorCores = [];
for (let i = 1; i <= 148; i++) {
    let cor = document.querySelector(`#box${i} > span > a`).innerText.toLowerCase();
    vetorCores.push(cor);
}

// Para escolher as 10 cores aleatórias da página
function Gerador(vetorCores) {
    let coresAleatorias = [];

    while (coresAleatorias.length < 10) {
        let numeroAleatorio = Math.floor(Math.random() * vetorCores.length);
        let corEscolhida = vetorCores[numeroAleatorio];

        // Verifica se a cor já foi escolhida, se não, adiciona no vetor
        if (!coresAleatorias.includes(corEscolhida)) {
            coresAleatorias.push(corEscolhida);
        }
    }

    return coresAleatorias;
}

// Para escolher uma cor aleatória entre as 10
function GeradorCorAleatória(coresAleatorias) {
    let numeroAleatorio = Math.floor(Math.random() * coresAleatorias.length);
    console.log(`Cor escolhida aleatoriamente: ${coresAleatorias[numeroAleatorio]}`);
}

// Para imprimir as cores aleatórias e, em seguida, a cor aleatória escolhida entre as 10
let coresAleatorias = Gerador(vetorCores);
console.log(coresAleatorias);  
GeradorCorAleatória(coresAleatorias);  
