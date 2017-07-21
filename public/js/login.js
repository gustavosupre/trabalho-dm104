function getLoginEmail (){
    return document.getElementById("login_email").value
}
function getLoginSenha (){
    return document.getElementById("login_senha").value
}


function verifLogin (email, senha) {
    var ls_clientes = getLocalStorage(LSKEY_clientes)
    var json_clientes = JSON.parse('['+ls_clientes+']')

    json_clientes.forEach(function(elem) {
        //cl(email+':'+elem["email"]+' - '+senha+':'+elem["senha"])
        if ((email == elem["email"]) && (senha == elem["senha"])){
            setlogin(elem["id"])
        }
    });
}

//prevent no form de clientes
function onSubmitLogin(event) {
    event.preventDefault() //para o form para eu processar via javascript
    verifLogin(getLoginEmail(), getLoginSenha())

}
var form_login = document.getElementById("form-login")
//form_login.addEventListener("submit", onSubmitLogin)
