//variaveis
let LsKey_sacola = 'SacolaCliente'
let LsKey_cadastro = "CadastroCliente"

function apagarDadosCliente (){
    localStorage.removeItem(LsKey_cadastro)
    clienteLogado()
    abreDadosCliente()
}

const form = document.getElementById("form-cadastro")
const InputPrimeiroNome = document.getElementById("primeironome")
const InputSobrenome = document.getElementById("sobrenome")
const InputNascimento = document.getElementById("nascimento")
const InputEmail = document.getElementById("email")
const InputSenha = document.getElementById("senha")


function getJsonLocalStorageCliente () {
    var ls = localStorage.getItem(LsKey_cadastro)
    var cliente_json = JSON.parse('['+ls+']')
    return cliente_json
}
function getClienteNome (tipo) {
    var cliente_json = getJsonLocalStorageCliente()
    return cliente_json[0].primeiroNome
}
function getClienteSobrenome (tipo) {
    var cliente_json = getJsonLocalStorageCliente()
    return cliente_json[0].sobrenome
}
function getClienteNascimento (tipo) {
    var cliente_json = getJsonLocalStorageCliente()
    return cliente_json[0].nascimento
}
function getClienteEmail (tipo) {
    var cliente_json = getJsonLocalStorageCliente()
    return cliente_json[0].email
}
function getClienteSenha (tipo) {
    var cliente_json = getJsonLocalStorageCliente()
    return cliente_json[0].senha
}
//localStorage.removeItem(LsKey_cadastro)


function clienteLogado () {
    var spanCliente = document.getElementById("spanClienteLogado")
    var LS_cliente = localStorage.getItem(LsKey_cadastro)

    if (LS_cliente) {
        spanCliente.className = "mif-user"
        spanCliente.innerHTML = "<div>"+getClienteNome().toUpperCase()+"</div>"
    } else {
        spanCliente.className = "mif-user"
        spanCliente.innerHTML = ""
    }

}
clienteLogado()
