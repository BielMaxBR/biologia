var url   = window.location.search.replace("?", "");
var dados = url.split("&");

var respostas = ["a","b","d","a","c","c","d","b","a","b"]

var nota = 0

function corrigir(resposta, correta) {

    for (var i = 0; i < correta.length; i++) {
        var resNum = i+1
        var res1 = resposta["q-"+resNum]
        var res2 = correta[i]

        if (res1 == res2) {
            nota += 1
        }
        
    }
    return nota
}

var hash = {}
for(var i = 0; i < dados.length; i++){
    var parametro = dados[i].split("=");
    var chave = parametro[0];
    var valor = parametro[1];
    hash[chave] = valor;
}
console.log(hash)

nota = corrigir(hash, respostas)

console.log('a nota é:',nota)
notaH1 = document.getElementById('nota')
notaH1.innerHTML = 'Você tirou ' + nota + ' de 10!'
