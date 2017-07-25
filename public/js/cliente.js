function mostraSacola () {
    ls = getLocalStorage(LSKEY_sacola)
    //cl(ls)
}

function VerifCadastroCliente(array) {
    var ls_clientes = getLocalStorage(LSKEY_clientes)

    if(ls_clientes == null) {
        var ret = 'insert'
    } else {
        var ret = 'add'
        var json_clientes = JSON.parse('['+ls_clientes+']')
        var json_array = JSON.parse('['+array+']')
        json_clientes.forEach(function(elem) {
            if (elem["email"] == json_array[0].email) {
                ret = false
            }
        });
    }
    return ret
}

function cadastraCliente(acao, array) {

    if (acao == 'insert') {
        $('#retorno-cadastro').css('display','none')
        setLocalStorage(LSKEY_clientes, array)
    } else if (acao == 'add') {
        $('#retorno-cadastro').css('display','none')
        var ls_clientes = getLocalStorage(LSKEY_clientes)
        addLocalStorage(LSKEY_clientes, ls_clientes, array)
    } else {
        $('#retorno-cadastro').css('display','block')
        //alert('email ja existe!')

    }
}

function editarCliente(id, array) {
    var ls_clientes = getLocalStorage(LSKEY_clientes)
    var json_clientes = JSON.parse('['+ls_clientes+']')

    json_clientes.forEach(function(elem, i) {
        if (id == elem["id"]) {
            var alterar = JSON.parse(array)
            //JSON.parse('['+array+']')
            json_clientes[i] = alterar
            //cl(json_clientes)
        }
    });
    stringfy_alterar = JSON.stringify(json_clientes)
    var tiraCol = stringfy_alterar.substring(1,(stringfy_alterar.length-1))
    //cl(tiraCol)
    setLocalStorage(LSKEY_clientes, tiraCol)


}