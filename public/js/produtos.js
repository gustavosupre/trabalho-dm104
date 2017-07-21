
function criaElementoProduto (getul, id, tipo, preco, descricao, foto, qtd = 1){

    //variaveis
    var ul = document.getElementById(getul)
    var li = criaLi()
    var div_img = criaDiv()
    var img = criaImg('./images/products/media_' + foto)
    var div_ref = criaDiv()
    var div_qtd = criaDiv()
    var input_qtd = criaInput("text")
    var div_preco = criaDiv()
    var div_descricao = criaDiv()
    var div_comprar = criaDiv()
    var submit_comprar = criaInput("submit")
    var input_hidden = criaInput("hidden")
    var hr = criaHr()

    //setando atributos para as variaveis
    li.setAttribute('id', 'prod-index-' + id)
    submit_comprar.setAttribute('value', 'Comprar')
    submit_comprar.setAttribute('onclick', 'addProdSacola(' + id + ')')
    input_qtd.setAttribute('value', qtd)
    input_qtd.setAttribute("readonly","readonly");
    input_hidden.setAttribute('id', 'attr-prod-'+ id)
    input_hidden.setAttribute('value', '{"id":'+ id +',"tipo":"'+ tipo +'","preco":'+ preco +',"descricao":"'+ descricao +'","foto":"'+ foto +'","qtd":'+qtd+'}')

    //setando conteudos para os elementos
    div_ref.innerHTML = 'Ref.' + id
    div_preco.innerHTML = mascaraMoeda(preco)
    div_descricao.innerHTML = descricao

    //criando elementos
    if (getul == "ulprodutos") {
        ul.appendChild(li)
        li.appendChild(div_img)
        div_img.appendChild(img)
        li.appendChild(div_ref)
        li.appendChild(div_preco)
        li.appendChild(div_descricao)
        li.appendChild(div_comprar)
        div_comprar.appendChild(submit_comprar)
        li.appendChild(input_hidden)
    } else {
        ul.appendChild(li)
        li.appendChild(div_img)
        div_img.appendChild(img)
        li.appendChild(div_descricao)
        li.appendChild(div_ref)
        li.appendChild(div_qtd)
        div_qtd.appendChild(input_qtd)
        li.appendChild(div_preco)
        li.appendChild(hr)
    }

}


//verifica se esta logado
if (getLocalStorage(LSKEY_login) != null) {
    var ls_login = getLocalStorage(LSKEY_login)

    document.getElementById('logado').setAttribute('class', 'mif-user logado')
    document.getElementById('logado').setAttribute('onclick', 'dellogin()')
    document.getElementById('logado').innerHTML = "<span>"+getLogado('nome')+"</span>"

} else {
    document.getElementById('logado').setAttribute('onclick', 'AbreLogin()')
}


function criaElementoProdutoSacola () {

    //zerando ul da sacola
    document.getElementById('ulsacola').innerHTML = ""

    var sacola_atual = getLocalStorage(LSKEY_sacola)
    var json_sacola = JSON.parse('['+sacola_atual+']')

    var conta = 0
    var verif = 0;
    var qtd_total = 0;
    var valor_total = 0;

    //executa se a sacola não estiver vazia
    if (sacola_atual != null) {
        json_sacola.forEach(function(elem, conta) {
            criaElementoProduto("ulsacola", elem["id"], elem["tipo"],  elem["preco"],  elem["descricao"],  elem["foto"],  elem["qtd"])
            qtd_total = elem["qtd"]+qtd_total
            valor_total = (elem["preco"]*elem["qtd"])+valor_total
        });
        document.getElementById('sacola_qtd').innerHTML = qtd_total
        document.getElementById('sacola_valortotal').innerHTML = mascaraMoeda(valor_total)
    }

}
