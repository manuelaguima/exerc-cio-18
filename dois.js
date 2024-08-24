let resposta = document.getElementById('resposta');

function gerarAleatorio() {
    let valor = [];
    for (let i = 0; i < 5; i++) {
        let valor_aleatorio = Math.floor(Math.random() * 10) + 1;
        valor.push(valor_aleatorio);
    }
    resposta.innerHTML = `Os números gerados são:  ${valor.join(', ')}`;
    return valor;
}

function somar() {
    let valorTotal = gerarAleatorio(); // Agora valorTotal recebe o array retornado por gerarAleatorio()

    let soma = 0;
    for (let i = 0; i < valorTotal.length; i++) {
        soma += valorTotal[i];
    }

    resposta.innerHTML += `<br>A soma dos valores é: ${soma}`;
}
