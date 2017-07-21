var ls_clientes = getLocalStorage(LSKEY_clientes)
var json_clientes = JSON.parse('['+ls_clientes+']')
var table = document.getElementById('admin-clientes')


json_clientes.forEach(function(elem) {
    var tbody = criaTbody()
    var tr = criaTr()
    var td_id = criaTd()
        td_id.innerHTML = elem["id"]
    var td_nomecompleto = criaTd()
        td_nomecompleto.innerHTML = elem["nome"]+' '+elem["sobrenome"]
    var td_nascimento = criaTd()
        td_nascimento.innerHTML = elem["nascimento"]
    var td_email = criaTd()
        td_email.innerHTML = elem["email"]
    var td_senha = criaTd()
        td_senha.innerHTML = elem["senha"]

    table.appendChild(tbody)
    tbody.appendChild(tr)
    tr.appendChild(td_id)
    tr.appendChild(td_nomecompleto)
    tr.appendChild(td_nascimento)
    tr.appendChild(td_email)
    tr.appendChild(td_senha)

});

