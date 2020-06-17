var url   = window.location.search.replace("?", "");
var dados = url.split("&");

var respostas = ["a","c","d","b","b"]

var nota = 0

function corrigir(resposta, correta) {

    for (var i = 0; i < correta.length; i++) {
        var resNum = i+1
        var res1 = resposta["q-"+resNum]
        var res2 = correta[i]

        if (res1 == res2) {
            nota += 2
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
var nome = hash["name"]

var nome = decodeURIComponent(nome)
while (nome.indexOf("+") != -1) {
    nome = nome.replace("+", " ");
}

hash["name"] = nome


console.log('a nota é:',nota, nome)
notaH1 = document.getElementById('nota')
notaH1.innerHTML = 'Você tirou ' + nota + ' !'
nomeH1 = document.getElementById('nome')
nomeH1.innerHTML = 'Parabéns! ' + nome

const urlServer = "https://notsans.herokuapp.com/bio"

const data = hash.nota = nota

fetch(
    urlServer,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "Post",
          mode:"cors",
          body: JSON.stringify(hash),
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch((e)=>console.log(e))