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
function getClienteTipoForm (){
    return document.getElementById("tipo_form").value
}

function addCompra (numPedido) {
    var cliente_id = getLogado("id")
    var ls_sacola = getLocalStorage(LSKEY_sacola)
    var ls_compras = getLocalStorage(LSKEY_compras)
    var json_compras = JSON.parse('['+ls_compras+']')

    //acrescentar mais pedidos ao q ja existe
    var arraySacola = '{"'+cliente_id+'":[{"'+numPedido+'":['+ls_sacola+']}]}'

    //verificando se o cliente logado tem
    if (ls_compras == null){
        setLocalStorage(LSKEY_compras, arraySacola)
        setLocalStorage(LSKEY_compraSucesso, numPedido)
        deleteSacola()
    } else {
        var verif = -1
        for (var i = 0; i < json_compras.length; i++){
            var arrayCompras_idCliente = Object.keys(json_compras[i])[0]
            if (cliente_id == arrayCompras_idCliente) {
                verif = i
            }
        }

        if (verif == -1) {
            addLocalStorage(LSKEY_compras, ls_compras, arraySacola)
            setLocalStorage(LSKEY_compraSucesso, numPedido)
            deleteSacola()

        } else {
            json_compras.forEach(function(elem, i) {
                var compras_idcliente = Object.keys(json_compras[i])[0]
                var stringfy_compras = JSON.stringify(json_compras[i])
                if (cliente_id == compras_idcliente) {
                        //adiciona o objeto da sacola na ultima posição do cliente no arrau compras do locasorage
                        var elemComprasCliente = elem[compras_idcliente]
                        var itemArrayAdd = elem[compras_idcliente].length
                        elemComprasCliente[itemArrayAdd] = JSON.parse('{"'+numPedido+'":['+ls_sacola+']}')
                }
            });
            var stringfy_compras = JSON.stringify(json_compras)
            var tiraCol = stringfy_compras.substring(1,(stringfy_compras.length-1))
            //cl(tiraCol)
            setLocalStorage(LSKEY_compras, tiraCol)
            setLocalStorage(LSKEY_compraSucesso, numPedido)
            deleteSacola()
        }
    }
}

//prevent no form de clientes
function onSubmitCadastro(event) {
    event.preventDefault() //para o form para eu processar via javascript
    var numPedido = getRandom()
    if(getClienteTipoForm() == "logado") { //verificar aqui!
        var arrayCliente = '{"id":'+getLogado("id")+',"nome":"'+getClienteNome()+'","sobrenome":"'+getClienteSobrenome()+'","nascimento":"'+getClienteNascimento()+'","email":"'+getClienteEmail()+'","senha":"'+getClienteSenha()+'"}'
        editarCliente(getLogado("id"), arrayCliente)
        addCompra(numPedido)
        href('sucesso.html')
    } else {
        var idCliente = getRandom()
        var arrayCliente = '{"id":'+idCliente+',"nome":"'+getClienteNome()+'","sobrenome":"'+getClienteSobrenome()+'","nascimento":"'+getClienteNascimento()+'","email":"'+getClienteEmail()+'","senha":"'+getClienteSenha()+'"}'
        var verif = VerifCadastroCliente(arrayCliente)
        if (verif == false) {
            $('#retorno-cadastro').css('display','block')
            $('#retorno-cadastro').html('E-mail já existe!<br />')
        } else { //para os casos da verif ser insert ou add
            cadastraCliente(verif, arrayCliente)
            setlogin(idCliente)
            addCompra(numPedido)
            href('sucesso.html')
            //cl(numPedido)
        }
    }
}
var formCadastro = document.getElementById("form-cadastro")
formCadastro.addEventListener("submit", onSubmitCadastro)
