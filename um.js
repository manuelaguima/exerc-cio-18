let resposta = document.getElementById('resposta')
let vetor1 = []

function gravar(){

let inserir = Number(document.getElementById('inserir').value)
    if((inserir <= 1)||(inserir >=10 )){
        resposta.innerHTML = "valor digitado é invalido! Digite novamente"
    }else{
        
        vetor1.push(inserir)
        console.log(vetor1)
        resposta.innerHTML = " "
    }

}

function somar(){
 
    if (vetor1.length === 0) {
        resposta.innerHTML = "Nenhum valor foi inserido para somar!";
        return;
    }

    let soma = 0;
    for (let i = 0; i < vetor1.length; i++) {
        soma += vetor1[i];
    }

    let media = soma / vetor1.length;
    resposta.innerHTML = `Soma dos valores: ${soma}<br>Média dos valores: ${media}`;

}