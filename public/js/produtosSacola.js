//contar repeticoes
function contaProdutosSemelhantes (idproduto) {
  var conta = 0;
  for (var i = 0; i <= getQtdProdutosSacola(); i++) {
    if (spli[i] == idproduto) {
     conta++
    }
  }
  return conta;
}
console.log("prod semelhantes: "+contaProdutosSemelhantes(75))

function montaProdutosSacola () {
  if (getSacolaLS() != null) {
    var arr = getSacolaLS().split(",");
    var novaArr = arr.filter(function(este, i) {
        return arr.indexOf(este) == i;
    })
    return novaArr;
  }
}
//console.log(montaProdutosSacola())

function criaLiSacola (id) {
  var li = criaSelectorLi();
  li.setAttribute("id", "li-" + id);
  return li;
}

function criaImgSacola (value) {
  var img = criaSelectorImg();
  img.setAttribute("src", "./images/products/media_" + value);
  return img;
}

function criaDescricaoSacola (value) {
  var descricao = criaSelectorDiv();
  descricao.innerHTML = value;
  return descricao;
}

function criaReferenciaSacola (value) {
  var referencia = criaSelectorDiv();
  referencia.innerHTML = "Ref. " + value;
  return referencia;
}

function criaQuantidadeSacola (value) {
  var quantidade = criaSelectorDiv();
  quantidade.innerHTML = contaProdutosSemelhantes(value);
  return quantidade;
}

function criaPrecoSacola (value) {
  var preco = criaSelectorDiv();
  preco.innerHTML = "R$ "+ value;
  return preco;
}



//fazendo a mágica fo json com forEach
var produtos = jsonProdutos();
produtos.forEach(function(elementoDaArray) {
  if (getSacolaLS() != null) {
    var ul = document.getElementById('minhasacolacompleta-ul');

    if (montaProdutosSacola().indexOf(elementoDaArray['id']) > 0) {
      var li = criaLiProduto(elementoDaArray['id'])
      var div_imagem = criaSelectorDiv()
      var img = criaImgProduto(elementoDaArray['foto'])
      var descricao = criaDescricaoSacola(elementoDaArray['descricao'])
      var referencia = criaReferenciaSacola(elementoDaArray['id'])
      var div_preco = criaSelectorDiv()
      var quantidade = criaQuantidadeSacola(elementoDaArray['id'])
      var preco = criaPrecoSacola(elementoDaArray['preco'])
      var hr = criaSelectorHr(hr)
      var div_clear = criaSelectorDiv()

      ul.appendChild(li)
      li.appendChild(div_imagem).appendChild(img)
      li.appendChild(descricao)
      li.appendChild(referencia)
      li.appendChild(div_preco).appendChild(quantidade)
      li.appendChild(div_preco).appendChild(preco)
      li.appendChild(div_clear)
      li.appendChild(hr)

    }
  }
});
