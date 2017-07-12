
function getPrimeiroNome (){
    return InputPrimeiroNome.value
}
function getSobrenome (){
    return InputSobrenome.value
}
function getNascimento (){
    return InputNascimento.value
}
function getEmail (){
    return InputEmail.value
}
function getSenha (){
    return InputSenha.value
}

function carregaDadosCliente () {
    var LS_cliente = localStorage.getItem(LsKey_cadastro)

    if (LS_cliente) {
        //coloca as informações no formulario
        InputPrimeiroNome.value = getClienteNome()
        InputSobrenome.value = getClienteSobrenome()
        InputNascimento.value = getClienteNascimento()
        InputEmail.value = getClienteEmail()
        InputSenha.value = getClienteSenha()

    } else {
        InputPrimeiroNome.value = ""
        InputSobrenome.value = ""
        InputNascimento.value = ""
        InputEmail.value = ""
        InputSenha.value = ""
    }

}


function gravaUsuarioLocalStorage(primeiroNome, sobrenome, nascimento, email, senha) {
    var ARR_cadastroCliente = '{"primeiroNome":"'+primeiroNome+'","sobrenome":"'+sobrenome+'","nascimento":"'+nascimento+'","email":"'+email+'","senha":"'+senha+'"}'
    localStorage.setItem(LsKey_cadastro, ARR_cadastroCliente)
}

function onSubmit(event) {
    event.preventDefault() //I want to stop the default event for this form
    gravaUsuarioLocalStorage(getPrimeiroNome(), getSobrenome(), getNascimento(), getEmail(), getSenha())
    abreCadastro() //na verdade é para fechar a tela de cadastro
    clienteLogado()
}
form.addEventListener("submit", onSubmit)