function criaElementoLi (nome, id) {
  var cria = document.createElement('li');
  cria.setAttribute("id", nome + id);
  return cria;
}
function criaElementoImg (src) {
    var cria = document.createElement('img');
    cria.setAttribute("src", "./images/products/media_" + src);
    return cria;
}
function criaElementoDiv (conteudo, classe) {
  var cria = document.createElement('div');
  if (conteudo != "") {
      cria.innerHTML = conteudo
  }
  if (classe != "") {
      cria.setAttribute("class", classe);
  }
  return cria;
}
function criaElementoHr (hr) {
    var cria = document.createElement('hr');
    return cria;
}
function criaElementoBotaoComprar (id) {
  var cria = document.createElement('input');
  cria.setAttribute("type", "submit");
  cria.setAttribute("id", "btncomprar-produtos-" + id);
  cria.setAttribute("onClick", "addProdutoStorage(" + id + ")");
  cria.setAttribute("value", "Comprar");
  return cria;
}
function criaElementoInutHiddenIndex (id, preco, descricao, foto, qtd) {

  var cria = document.createElement('input');
  cria.setAttribute("type", "hidden");
  cria.setAttribute("id", "input-produtos-" + id);
  cria.setAttribute("value", "" + '{"id":"'+ id +'","preco":'+ preco +',"descricao":"'+ descricao +'","foto":"'+ foto +'","qtd":1}');
  //cria.setAttribute("value", "" + '{id:"'+ id +'",preco:"'+ preco +'",descricao:"'+ descricao +'",foto:"'+ foto +'"}');
  return cria;
}
function criaElementoInutQtd (id, qtd) {

  var cria = document.createElement('input');
  cria.setAttribute("id", "sacola-qtd-" + id);
  cria.setAttribute("readonly","readonly");
  cria.setAttribute("value", qtd);
  return cria;
}