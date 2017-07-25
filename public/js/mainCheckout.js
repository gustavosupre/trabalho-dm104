//verifica se esta logado
if (getLocalStorage(LSKEY_login) != null) {
    setLogado()

    $('login').css('opacity','0.3')
    document.getElementById('tipo_form').value = 'logado'
    document.getElementById('h2-cadastro').innerHTML = "Confirme seus dados"
    $('#logincheckout').css('opacity','0.3')
    $('#logincheckout').css('cursor','not-allowed')
    $('#logincheckout label').css('cursor','not-allowed')
    $('#logincheckout label input').css('cursor','not-allowed')
    document.getElementById('submitLogin').setAttribute('disabled',true)
    preencheFormClienteLogado()

} else {
    setLogoff()
    document.getElementById('tipo_form').value = ''
}

if (getLocalStorage(LSKEY_sacola) == null){
    $("html body").css("overflow","hidden");
    $("#avisoSacolaVazia-bg").css("display","block")
    $("#avisoSacolaVazia").css("display","block")
    var acaoBtn = "window.open('index.html','_self')"
    document.getElementById('btn-avisoSacolaVazia').setAttribute('onClick', acaoBtn)
}

function preencheFormClienteLogado (){
    document.getElementById('cli_nome').value = getLogado("nome")
    document.getElementById('cli_sobrenome').value = getLogado("sobrenome")
    document.getElementById('cli_nascimento').value = getLogado("nascimento")
    document.getElementById('cli_email').value = getLogado("email")
    document.getElementById('cli_senha').value = getLogado("senha")
}
