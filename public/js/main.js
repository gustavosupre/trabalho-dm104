//controle do LocalStorage
let LSKEY_sacola = "GusLS_Sacola"
let LSKEY_cadastro = "GusLS_Cadastro"
let LSKEY_compras = "GusLS_Compras"
let LSKEY_clientes = "GusLS_Clientes"
let LSKEY_login = "GusLS_Login"
let LSKEY_compraSucesso = "GusLS_CompraSucesso"
let LSKEY_googleChart = "GusLS_GoogleChart"

//delLocalStorage(LSKEY_clientes)
//delLocalStorage(LSKEY_compras)
//delLocalStorage(LSKEY_login)
//delLocalStorage(LSKEY_compraSucesso)


function mascaraMoeda(num) {
    //num.split('.')
    //var num = num.toLocaleString('pt-BR')
    var num = num.toLocaleString('pt-BR')
    var spli = num.split(',')

    if (spli.length == 1) {
        var centavos = "00"
    } else {
        var centavos = +spli[1]+"0"
    }
    return 'R$ '+spli[0]+','+centavos //gambiarra - arrumar!
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
function isNumber(n) {
    return n+ " - "+!isNaN(parseFloat(n)) && isFinite(n);
}
function getLocalStorage (k){
    return localStorage.getItem(k)
}
function addLocalStorage (k, atual, add){
    localStorage.setItem(k, atual+','+add)
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
function setLogado(){
    var ls_login = getLocalStorage(LSKEY_login)
    document.getElementById('logado').setAttribute('class', 'mif-user logado')
    document.getElementById('logado').setAttribute('onclick', 'dellogin()')
    document.getElementById('logado').innerHTML = "<span>"+getLogado('nome')+"</span>"
}
function setLogoff(){
    var elemLogado = document.getElementById('logado')

    elemLogado.removeAttribute('class')
    elemLogado.setAttribute('class','mif-user')
    elemLogado.removeAttribute('onclick')
    elemLogado.setAttribute('onclick', 'AbreLogin()')
    elemLogado.innerHTML = ""
}
function setlogin (idCliente){
    setLocalStorage(LSKEY_login, idCliente)
    setLogado()
    /*
    var elemLogado = document.getElementById('logado')
    elemLogado.setAttribute('class','mif-user logado')
    elemLogado.removeAttribute('onclick', 'dellogin()')
    document.getElementById('logado').innerHTML = "<span>"+getLogado('nome')+"</span>"
    */
}

function dellogin (){
    delLocalStorage(LSKEY_login)
    setLogoff()

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

