
function criaLiProduto (id) {
  var li = criaSelectorLi();
  li.setAttribute("id", "li-" + id);
  return li;
}

function criaImgProduto (value) {
  var img = criaSelectorImg();
  img.setAttribute("src", "./images/products/media_" + value);
  return img;
}

function criaReferenciaProd (value) {
  var referencia = criaSelectorDiv();
  referencia.innerHTML = "Ref. " + value;
  return referencia;
}

function criaPrecoProduto (value) {
  var preco = criaSelectorDiv();
  preco.innerHTML = "R$ "+ value;
  return preco;
}

function criaDescricaoProduto (value) {
  var descricao = document.createElement('h2');
  descricao.innerHTML = value;
  return descricao;
}

function criaBotaoComprar (id) {
  var div = criaSelectorDiv();
  div.setAttribute("id", "btncomprar-" + id);
  div.setAttribute("onClick", "addSacola(" + id + ")");
  div.innerHTML = "Comprar";
  return div;
}

function criaInputHiddenProduto (id, preco, descricao, foto) {
  var input = document.createElement('input');
  input.setAttribute("type", "hidden");
  input.setAttribute("id", "input-" + id);
  input.setAttribute("value", "" + '{"id":"'+ id +'","preco":"'+ preco +'","descricao":"'+ descricao +'","foto":"'+ foto +'"}');
  return input;
}


//fazendo a mágica fo json com forEach
var produtos = jsonProdutos();
produtos.forEach(function(elementoDaArray) {
    var ul = document.getElementById('ulprodutos');

    //criando LI com id id
    var li = criaLiProduto(elementoDaArray['id']);
    var img = criaImgProduto(elementoDaArray['foto']);
    var section = criaSelectorSection();
    var descricao = criaDescricaoProduto(elementoDaArray['descricao']);
    var h3 = criaSelectorH3();
    var referencia = criaReferenciaProd(elementoDaArray['id']);
    var preco = criaPrecoProduto(elementoDaArray['preco']);
    var div = criaSelectorDiv();
    var botatocomprar = criaBotaoComprar(elementoDaArray['id']);
    var inputHidden = criaInputHiddenProduto(elementoDaArray['id'], elementoDaArray['preco'], elementoDaArray['descricao'], elementoDaArray['foto']);

    //montando conteudo
    ul.appendChild(li).appendChild(img);
      li.appendChild(section);
      section.appendChild(h3);
      h3.appendChild(referencia)
      h3.appendChild(preco);
        section.appendChild(descricao);
        section.appendChild(div);
          div.appendChild(botatocomprar);
          li.appendChild(inputHidden)
});
