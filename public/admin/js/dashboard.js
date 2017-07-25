document.getElementById('show-resumoclientes').innerHTML = resumoClientes()
document.getElementById('show-resumocompras').innerHTML = resumoCompras()

function resumoClientes (){
    var ls_clientes = getLocalStorage(LSKEY_clientes)
    var json_clientes = JSON.parse('['+ls_clientes+']')
    return json_clientes.length
}

function resumoCompras (){
    var ls_compras = getLocalStorage(LSKEY_compras)
    var json_compras = JSON.parse('['+ls_compras+']')
    var ret
    cl(json_compras)
    var total_qtdCompras = 0
    json_compras.forEach(function(elem, i) {
        var compras_idcliente = Object.keys(json_compras[i])[0]
        total_qtdCompras = elem[compras_idcliente].length + total_qtdCompras

        var qtdVendaPorCliente = elem[compras_idcliente].length
        var compras_cliente = Object.keys(json_compras[i])[0]
        for (var ii = 0; ii < qtdVendaPorCliente; ii++){
            cl(Object.keys(elem[compras_idcliente][ii])[0].length)
            //cl(Object.keys(elem[compras_idcliente][ii])[0].length)
            //cl('---')
        }
    });

    ret = total_qtdCompras
    return ret
}

