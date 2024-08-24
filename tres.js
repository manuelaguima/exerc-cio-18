let resposta = document.getElementById('resposta');

function gerarAleatorio() {
    let valor = [];
    for (let i = 0; i < 5; i++) {
        let valor_aleatorio = Math.floor(Math.random() * 10) + 1;
        valor.push(valor_aleatorio);
    }
    resposta.innerHTML = `Os números gerados são: ${valor.join(', ')}`;
    return valor;
}

function somar() {
    let valorTotal = gerarAleatorio(); // Gera os valores e armazena no array

    let somaPares = 0;
    let somaImpares = 0;

    for (let i = 0; i < valorTotal.length; i++) {
        if (valorTotal[i] % 2 === 0) {
            somaPares += valorTotal[i];  // Soma dos números pares
        } else {
            somaImpares += valorTotal[i]; // Soma dos números ímpares
        }
    }

    resposta.innerHTML += `<br>A soma dos valores pares é: ${somaPares}`;
    resposta.innerHTML += `<br>A soma dos valores ímpares é: ${somaImpares}`;
}
