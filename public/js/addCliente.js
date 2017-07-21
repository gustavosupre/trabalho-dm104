//
var form = document.getElementById("form-cliente")

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

function gravaUsuarioLocalStorage(primeiroNome, sobrenome, nascimento, email, senha) {
    var ARR_cadastroCliente = '{"idCliente":'+getRandom()+',"primeiroNome":"'+primeiroNome+'","sobrenome":"'+sobrenome+'","nascimento":"'+nascimento+'","email":"'+email+'","senha":"'+senha+'"}'
    localStorage.setItem(LSKEY_cadastro, ARR_cadastroCliente)
}

function carregaDadosCliente () {
    var LS_cliente = localStorage.getItem(LSKEY_cadastro)

    if (LS_cliente) {
        //coloca as informações no formulario
        InputClienteNome.value = getClienteNome()
        InputSobrenome.value = getClienteSobrenome()
        InputNascimento.value = getClienteNascimento()
        InputEmail.value = getClienteEmail()
        InputSenha.value = getClienteSenha()

    } else {
        InputClienteNome.value = ""
        InputSobrenome.value = ""
        InputNascimento.value = ""
        InputEmail.value = ""
        InputSenha.value = ""
    }

}

//prevent no form de clientes
function onSubmit(event) {
    event.preventDefault() //I want to stop the default event for this form
    cl(getClienteNome())
    document.getElementById('form-cliente').innerHTML=""
    AbreCliente();
}
form.addEventListener("submit", onSubmit)
