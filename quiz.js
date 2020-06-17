var url   = window.location.search.replace("?", "");
var dados = url.split("&");

var respostas = ["d","c","a","a","c"]

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

while (nome.indexOf("+") != -1) {
    nome = nome.replace("+", " ");
}
var nome = hash["name"]

console.log('a nota é:',nota, nome)
notaH1 = document.getElementById('nota')
notaH1.innerHTML = 'Você tirou ' + nota + ' !'
nomeH1 = document.getElementById('nome')
nomeH1.innerHTML = 'Parabéns! ' + nome

const urlServer = 'https://3333-d2d47888-f1af-4d68-a9e4-3a3926d49652.ws-us02.gitpod.io/bio'
const urlPost = "http//httpbin.org/post"

fetch(urlPost, { method: "Post", body: "tulio=faria" })
  .then(res => res.json())
  .then(json => console.log(json)).catch((e)=>console.log(e))