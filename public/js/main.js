//controle do LocalStorage
let LSKEY_sacola = "GusLS_Sacola"
let LSKEY_cadastro = "GusLS_Cadastro"
let LSKEY_compras = "GusLS_Compras"
let LSKEY_clientes = "GusLS_Clientes"
let LSKEY_login = "GusLS_Login"


function mascaraMoeda(num) {
    //num.split('.')
    //var num = num.toLocaleString('pt-BR')
    var num = num.toLocaleString('pt-BR')
    var spli = num.split(',')
    return 'R$ '+spli[0]+','+spli[1]+'0' //gambiarra - arrumar!
}
function getRandom() {
    return Math.floor(Math.random() * 999 + 1)
}
function href(link){
    window.open(link, '_self')
}
function cl(t){
    console.log(t)
}
function getLocalStorage (k){
    return localStorage.getItem(k)
}
function setLocalStorage (k, add){
    localStorage.setItem(k, add)
}
function delLocalStorage (k){
    localStorage.removeItem(k)
}
function deleteSacola(){
    delLocalStorage(LSKEY_sacola)
    document.getElementById('ulsacola').innerHTML = ""
}



function addProdSacola (id){
    var sacola_atual = getLocalStorage(LSKEY_sacola)
    var pegaAttr = document.getElementById('attr-prod-'+ id).value

    //localstorage vazio
    if (sacola_atual == null) {
        setLocalStorage(LSKEY_sacola, pegaAttr)

    //local storage NAO vazio
    } else {
        var json_sacola = JSON.parse('['+sacola_atual+']')

        var conta = 0
        var verif = 0;
        json_sacola.forEach(function(elem, conta) {
            //verifica se item ja tem no localstorage sacola - se tiver retorna a posição do array que esta repetindo
            if (id == elem["id"]) {
                verif = (conta+1)
            }
            conta++
        });

        if (verif == 0) {
            setLocalStorage(LSKEY_sacola, sacola_atual+','+pegaAttr)
        } else {
            var add_sacola = ',';
            //cl(json_sacola[0])
            for (var i=0; i<json_sacola.length; i++){
                sacola = JSON.stringify(json_sacola[i])
                if (i == verif-1) {
                    soma = '{"id":'+json_sacola[i].id+',"tipo":"'+json_sacola[i].tipo+'","preco":'+json_sacola[i].preco+',"descricao":"'+json_sacola[i].descricao+'","foto":"'+json_sacola[i].foto+'","qtd":'+(json_sacola[i].qtd+1)+'}'
                    add_sacola = add_sacola+soma+','
                } else {
                    add_sacola = add_sacola+sacola+','
                }
            }
            var add = add_sacola.substring(1, (add_sacola.length-1))
            setLocalStorage(LSKEY_sacola, add)
        }
    }
    criaElementoProdutoSacola()
    animAddProduto(id)

}

function setlogin (idCliente){
    setLocalStorage(LSKEY_login, idCliente)
    var elemLogado = document.getElementById('logado')
    elemLogado.setAttribute('class','mif-user logado')
    elemLogado.removeAttribute('onclick', 'dellogin()')
    document.getElementById('logado').innerHTML = "<span>"+getLogado('nome')+"</span>"
}

function dellogin (){
    delLocalStorage(LSKEY_login)
    var elemLogado = document.getElementById('logado')
    elemLogado.removeAttribute('class')
    elemLogado.setAttribute('class','mif-user')
    elemLogado.removeAttribute('onclick')
    document.getElementById('logado').innerHTML = ""

}

function getLogado (dado) {
    var cliente_logado = getLocalStorage(LSKEY_login)
    var ls_clientes = getLocalStorage(LSKEY_clientes)
    var json_clientes = JSON.parse('['+ls_clientes+']')
    var ret

    json_clientes.forEach(function(elem) {
        if (cliente_logado == elem["id"]){
            ret = elem[dado]
        }
    });
    return ret
}

function getClienteLs (idCliente, dado) {
    var ls_clientes = getLocalStorage(LSKEY_clientes)
    var json_clientes = JSON.parse('['+ls_clientes+']')
    var ret

    json_clientes.forEach(function(elem) {
        if (idCliente == elem["id"]){
            ret = elem[dado]
        }
    });
    return ret
}

/*
function getCliente (idCliente) {
    var cliente_logado = getLocalStorage(LSKEY_login)
    var ls_clientes = getLocalStorage(LSKEY_clientes)
    var json_clientes = JSON.parse('['+ls_clientes+']')
    var div_logado = document.getElementById('logado')

    json_clientes.forEach(function(elem) {
        if (cliente_logado == elem["id"]){
            div_logado.innerHTML = "<span>"+elem["nome"]+"</span>"
        }
    });

}
function getLID () {
    var cliente_logado = getLocalStorage(LSKEY_login)
    var ls_clientes = getLocalStorage(LSKEY_clientes)
    var json_clientes = JSON.parse('['+ls_clientes+']')
    var div_logado = document.getElementById('logado')

    json_clientes.forEach(function(elem) {
        if (cliente_logado == elem["id"]){
            div_logado.innerHTML = "<span>"+elem["nome"]+"</span>"
        }
    });

}
/*

/*


*/