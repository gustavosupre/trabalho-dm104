
function getLoginEmail (){
    return document.getElementById("login_email").value
}
function getLoginSenha (){
    return document.getElementById("login_senha").value
}
function getLoginTipo (){
    return document.getElementById("login_tipo").value
}


function verifLogin (email, senha) {
    var ls_clientes = getLocalStorage(LSKEY_clientes)
    var json_clientes = JSON.parse('['+ls_clientes+']')
    var ret = false

    json_clientes.forEach(function(elem) {
        //cl(email+':'+elem["email"]+' - '+senha+':'+elem["senha"])
        if ((email == elem["email"]) && (senha == elem["senha"])){
            setlogin(elem["id"])
            ret = true
        }
    });
    return ret
}

//prevent no form de clientes
function onSubmitLogin(event) {
    event.preventDefault() //para o form para eu processar via javascript
    var verif = verifLogin(getLoginEmail(), getLoginSenha())

    if (verif == true) {
        if (getLoginTipo() == "index") {
            AbreLogin()
        } else if (getLoginTipo() == "checkout") {
            var numPedido = getRandom()
            addCompra(numPedido)
            href('sucesso.html')
        }
    //login não deu certo
    } else {
        $('#retorno-login').css('display','block')
    }
}
var form_login = document.getElementById("form-login")
form_login.addEventListener("submit", onSubmitLogin)
