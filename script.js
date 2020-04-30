let num = document.getElementById('txtn')
let lista = document.getElementById('selform')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){ 
        return true //Se TRUE ele é um número
    }else {
        return false //Se FALSE ele não é um número
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){ //Se o valor de "n" não foi encontrado na lista -> -1
    return true
     } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ //isNumero quer dizer numero verdade, já !inLista é o número que não está na lista
       valores.push(Number(num.value)) //vai adicionar o number que está dentro do num.value ----- empurra o num para valores
       
       let item = document.createElement('option') //cria o option no select e manda para item 
       item.text = `Valor ${num.value} adicionado` //cria o item de texto
        lista.appendChild(item) //adiciona na lista

        res.innerHTML = '' //limpa a pesquisa para que seja contado quantos numeros foram adicionado novamente
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //limpa  
    num.focus()  //coloca o foco para preencher novamente
}

function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione os dados antes de finalizar')
    }else{
        let tot = valores.length //quantos numeros
        let maior = valores[0] //maior valor
        let menor  = valores[0] //menor valor
        let soma = 0
        let media = 0
        /*Nesse 'for' os valores iram ser testados assim 
        --> ele entra com a posição. por exemplo 1 e de cara vai testar com a posição 0
        se for verdadeiro ele troca os valores do let maior por exemplo*/
        for(let pos in valores){
            soma += valores[pos] //Aqui faz a soma dos valores
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / tot // aqui faz a media dos valores
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }

}

