function sacolaChekout() {
    return JSON.parse('['+getLocalStorage(LSKEY_sacola)+']')
}
if (sacolaChekout() != '') {
    sacolaChekout().forEach(function(elem) {
        criaElementoProduto("ulsacola", elem["id"], elem["tipo"],  elem["preco"],  elem["descricao"],  elem["foto"],  elem["qtd"])
    });
} else {
    document.getElementById('ulsacola').innerHTML = "<div>Sua sacola está vazia.</div><div><a href='index.html'>Retornar às compras.</a></div>"
}

function finalizaPedido(cadastro, sacola) {

}


//trabalhando com formulario de finalizar pedido
function getClienteNome (){
    return document.getElementById("cli_nome").value
}
function getClienteSobrenome (){
    return document.getElementById("cli_sobrenome").value
}
function getClienteNascimento (){
    return document.getElementById("cli_nascimento").value
}
function getClienteEmail (){
    return document.getElementById("cli_email").value
}
function getClienteSenha (){
    return document.getElementById("cli_senha").value
}

function cadastraCliente(array) {
    ls_clientes = getLocalStorage(LSKEY_clientes)
    if (ls_clientes == null) {
        setLocalStorage(LSKEY_clientes, array)
    } else {
        setLocalStorage(LSKEY_clientes, ls_clientes+','+array)
    }
}
function addCompra (idCliente, numPedido) {
    var ls_sacola = getLocalStorage(LSKEY_sacola)
    var ls_compras = getLocalStorage(LSKEY_compras)
    var json_compras = JSON.parse('['+ls_compras+']')

    //acrescentar mais pedidos ao q ja existe
    var arraySacola = '{"'+idCliente+'":[{"'+numPedido+'":['+ls_sacola+']}]}'
    //cl(JSON.parse('['+arraySacola+']'))

    //verificando se o cliente logado tem
    var verif = -1
    for (var i = 0; i < json_compras.length; i++){
        var arrayCompras_idCliente = Object.keys(json_compras[i])[0]
        if (idCliente == arrayCompras_idCliente) {
            verif = i
        }
    }
    cl(verif)
    //apos verificar se o cliente ja tem compra (ls_compra) executo a função ideal
    if (verif == -1) {
        setLocalStorage(LSKEY_compras, ls_compras+','+arraySacola)
        deleteSacola()
    } else {

    }

}

//prevent no form de clientes
function onSubmit(event) {
    event.preventDefault() //para o form para eu processar via javascript
    //cl(getClienteNome()+" - "+getClienteSobrenome()+" - "+getClienteNascimento()+" - "+getClienteEmail()+" - "+getClienteSenha())
    var idCliente = getRandom()
    var numPedido = getRandom()

    var arrayCliente = '{"id":'+idCliente+',"nome":"'+getClienteNome()+'","sobrenome":"'+getClienteSobrenome()+'","nascimento":"'+getClienteNascimento()+'","email":"'+getClienteEmail()+'","senha":"'+getClienteSenha()+'"}'
    cl(document.getElementById("cli_nome").value)
    cadastraCliente(arrayCliente)
    addCompra(idCliente, numPedido)
    setlogin(idCliente)
    href('sucesso.html')
}
var form = document.getElementById("form-cadastro")
form.addEventListener("submit", onSubmit)

//cl(JSON.parse('['+getLocalStorage(LSKEY_clientes)+']'))
//delLocalStorage(LSKEY_clientes)
//delLocalStorage(LSKEY_compras)
//delLocalStorage(LSKEY_login)

//cadastraCliente('{"748":[{"nome":"gustavo","sobrenome":"costa","nascimento":"1986-03-17","email":"gustavo@gmail.com","senha":"123"}]}, {"350":[{"nome":"Marco","sobrenome":"Araujo","nascimento":"1950-02-26","email":"mestremarcoantonio@gmail.com","senha":"111"}]}')
//cl(JSON.parse('['+getLocalStorage(LSKEY_clientes)+']'))
//alert(getLocalStorage(LSKEY_clientes))

//prevent no form de login no checkout
function onSubmitLoginCheckout(event) {
    var numPedido = getRandom()

    event.preventDefault() //para o form para eu processar via javascript
    verifLogin(getLoginEmail(), getLoginSenha())
    addCompra(getLocalStorage(LSKEY_login), numPedido)

}
var form_logincheckout = document.getElementById("form_logincheckout")
form_logincheckout.addEventListener("submit", onSubmitLoginCheckout)

/*



*/