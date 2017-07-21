function mostraSacola () {
    ls = getLocalStorage(LSKEY_sacola)
    cl(ls)
}



/*
function cliente (acesso){
    var menu_dados = document.getElementById('cliente-menu-dados')
    var menu_pedidos = document.getElementById('cliente-menu-pedidos')
    var conteudo = document.getElementById('cliente-conteudo')

    if (acesso == 'dados'){
        //alterando menu em foco
        menu_dados.setAttribute('class', 'on')
        menu_dados.removeAttribute('onclick')
        menu_pedidos.removeAttribute('class')

        //id="senha" name="senha" required

        //variaveis do conteudo
        var form = document.getElementById('form-cliente')
        var label_nome = criaLabel()
        var div_nome = criaDiv()
            div_nome.innerHTML = "Primeiro Nome: "
        var input_nome = criaInput('text')
            input_nome.setAttribute('id','cli_nome')
            input_nome.setAttribute('required','required')

        var label_sobrenome = criaLabel()
        var div_sobrenome = criaDiv()
            div_sobrenome.innerHTML = "Sobrenome: "
        var input_sobrenome = criaInput('text')
            input_sobrenome.setAttribute('id','cli_sobrenome')
            //input_sobrenome.setAttribute('required','required')

        var label_nascimento = criaLabel()
        var div_nascimento = criaDiv()
            div_nascimento.innerHTML = "Data de Nascimento: "
        var input_nascimento = criaInput('date')
            input_nascimento.setAttribute('id','cli_nascimento')
            //input_nascimento.setAttribute('required','required')

        var label_email = criaLabel()
        var div_email = criaDiv()
            div_email.innerHTML = "E-mail: "
        var input_email = criaInput('email')
            input_email.setAttribute('id','cli_email')
            //input_email.setAttribute('required','required')

        var label_senha = criaLabel()
        var div_senha = criaDiv()
            div_senha.innerHTML = "Senha: "
        var input_senha = criaInput('password')
            input_senha.setAttribute('id','cli_senha')
            //input_senha.setAttribute('required','required')

        var label_submit = criaLabel()
        var input_submit = criaInput('submit')

        //criando os elementos
        form.appendChild(label_nome)
        label_nome.appendChild(div_nome)
        label_nome.appendChild(input_nome)
        form.appendChild(label_sobrenome)
        label_sobrenome.appendChild(div_sobrenome)
        label_sobrenome.appendChild(input_sobrenome)
        form.appendChild(label_nascimento)
        label_nascimento.appendChild(div_nascimento)
        label_nascimento.appendChild(input_nascimento)
        form.appendChild(label_email)
        label_email.appendChild(div_email)
        label_email.appendChild(input_email)
        form.appendChild(label_senha)
        label_senha.appendChild(div_senha)
        label_senha.appendChild(input_senha)
        form.appendChild(label_submit)
        label_submit.appendChild(input_submit)


    } else if (acesso == 'pedidos'){
        //alterando menu em foco
        menu_pedidos.setAttribute('class', 'on')
        menu_pedidos.removeAttribute('onclick')
        menu_dados.removeAttribute('class')



    }

}
*/