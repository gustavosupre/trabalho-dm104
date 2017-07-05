//contar repeticoes
function contaProdutosSemelhantes (idproduto) {
  var conta = 0;
  for (var i = 0; i < getQtdProdutosSacola(); i++) {
    if (spli[i] == idproduto) {
     conta++
    }
  }
  return conta;
}
//console.log(contaProdutosSemelhantes(75))

function montaProdutosSacola () {
  console.log(getSacolaLS())
  if (getSacolaLS() != null) {
    var arr = getSacolaLS().split(",");
    var novaArr = arr.filter(function(este, i) {
        return arr.indexOf(este) == i;
    })
    return novaArr;
  }
}
alert(montaProdutosSacola ())
//console.log(montaProdutosSacola())

//fazendo a mágica fo json com forEach
var produtos = jsonProdutos();
produtos.forEach(function(elementoDaArray) {
  if (getSacolaLS() != null) {
    var ul = document.getElementById('minhasacolacompleta-ul');

    if (montaProdutosSacola().indexOf(elementoDaArray['id']) > 0) {
      var li = criaLiProduto(elementoDaArray['id'])

      ul.appendChild(li)

    }
  }
});
