//chaves Local Storage

function delLocalStorage (key){
    localStorage.removeItem(key)
    document.getElementById("ulminhasacolacompleta").innerHTML = ""
    document.getElementById("minhasacola_qtd").innerHTML = 0
    document.getElementById("minhasacola_total").innerHTML = "Sua sacola está vazia."
}


function setSacolaQtdTotal () {
    var sacola_json = JSON.parse('['+localStorage.getItem(LsKey_sacola)+']')
    var soma_qtd = 0;
    var soma_total = 0;
    for (var it = 0; it < sacola_json.length; it++) {
        var item = sacola_json[it]
        var soma_qtd = item.qtd + soma_qtd
        var soma_total = (item.preco * item.qtd) + soma_total
    }
    document.getElementById("minhasacola_qtd").innerHTML = soma_qtd
    document.getElementById("minhasacola_total").innerHTML = "Total: "+soma_total.toFixed(2).replace(".",",")

}

function criaElementoProdutoSacola(json_produto) {
    var json = JSON.parse(json_produto)

    id = json["id"]
    preco = json["preco"]
    descricao = json["descricao"]
    foto = json["foto"]
    qtd = json["qtd"]

    var ul = document.getElementById("ulminhasacolacompleta")
    var li = criaElementoLi("li-sacola-", id)
    var img = criaElementoImg(foto)
    var div_descricao = criaElementoDiv(descricao, "descricao")
    var hr = criaElementoHr()
    var div_ref = criaElementoDiv("Ref. "+id, "referencia")
    var div_qtd = criaElementoDiv("", "qtd")
    var input_qtd = criaElementoInutQtd(id, qtd)
    var div_preco = criaElementoDiv("R$ "+preco, "preco")

    ul.appendChild(li)
    li.appendChild(img)
    li.appendChild(div_descricao)
    li.appendChild(div_ref)
    li.appendChild(div_qtd)
        div_qtd.appendChild(input_qtd)
    li.appendChild(div_preco)
}

function addProdutoStorage (id) {
    var value = document.getElementById("input-produtos-"+id).value
    var value_json = JSON.parse(value)
    var sacola = localStorage.getItem(LsKey_sacola)
    var sacola_json = JSON.parse('['+localStorage.getItem(LsKey_sacola)+']')

    if (localStorage.getItem(LsKey_sacola) == null){
        var ARR_SACOLA = value
        criaElementoProdutoSacola(value)
    } else {
        var verif = false
        for (var it = 0; it < sacola_json.length; it++) {
            var item = sacola_json[it]
            if (id == item.id) {
                verif = true
                var stop = it
                //console.log(verif)
            }
        }
        if (verif == false) { //produto não existe
            //alert("add")
            var ARR_SACOLA = value+","+sacola
            criaElementoProdutoSacola(value)

        } else { //produto ja existe no carrinho
            //alert("edit")
            //var montaLinhaProdutoSacola = new Array()
            for (var it2 = 0; it2 < sacola_json.length; it2++) {
                if (it2 == stop) {
                    var linhaProdutoSacola = '{"id":"'+sacola_json[it2].id+'","preco":"'+sacola_json[it2].preco+'","descricao":"'+sacola_json[it2].descricao+'","foto":"'+sacola_json[it2].foto+'","qtd":'+(sacola_json[it2].qtd+1)+'}'
                    //acrescenta apenas a nova qtd ao input na sacola do cliente
                    var produto_repetido = document.getElementById("sacola-qtd-"+sacola_json[it2].id).value = sacola_json[it2].qtd+1
                } else {
                    var linhaProdutoSacola = '{"id":"'+sacola_json[it2].id+'","preco":"'+sacola_json[it2].preco+'","descricao":"'+sacola_json[it2].descricao+'","foto":"'+sacola_json[it2].foto+'","qtd":'+sacola_json[it2].qtd+'}'
                }
                var montaLinhaProdutoSacola = linhaProdutoSacola+","+montaLinhaProdutoSacola
            }
            var ARR_SACOLA = montaLinhaProdutoSacola.substr(0,(montaLinhaProdutoSacola.length - 10));
        }
    }
    localStorage.setItem(LsKey_sacola, ARR_SACOLA)
    setSacolaQtdTotal()
    animAddProduto()
}


