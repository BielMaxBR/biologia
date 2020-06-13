var url   = window.location.search.replace("?", "");
var dados = url.split("&");

var hash = {}
for(var i = 0; i < dados.length; i++){
    var parametro = dados[i].split("=");
    var chave = parametro[0];
    var valor = parametro[1];
    hash[chave] = valor;
}
console.log(hash)

nota = "-1"

notaH1 = document.getElementById('nota')

if (notaH1) {
    notaH1.innerHTML = 'Você tirou ' + nota.toString() + ' de 10!'
}