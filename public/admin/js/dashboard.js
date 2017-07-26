document.getElementById('show-resumoclientes').innerHTML = resumoClientes()
document.getElementById('show-resumocompras').innerHTML = resumoCompras()

function resumoClientes (){
    var ls_clientes = getLocalStorage(LSKEY_clientes)
    var json_clientes = JSON.parse('['+ls_clientes+']')
    return json_clientes.length
}

function calcValorTotalPorProduto(qtd, preco) {
    return qtd * preco
}

function resumoCompras (){
    var ls_compras = getLocalStorage(LSKEY_compras)
    var json_compras = JSON.parse('['+ls_compras+']')
    var valorTotal
    cl(json_compras)
    //cl('total: '+json_compras[0]['308'][0]['5'][0].id)
    //cl(json_compras[0]['308'][1]['20'].length)


    json_compras.forEach(function(elem, i) {
        var cliente = Object.keys(json_compras[i])[0]
        //cl(cliente)
        for (var ii = 0; ii < elem[cliente].length; ii++){
            var pedido = Object.keys(elem[cliente][ii])[0]
            var total_qtdProduto = json_compras[i][cliente][ii][pedido].length
            //cl('    '+pedido)
            for(var iii = 0; iii < total_qtdProduto; iii++){
                var qtd = json_compras[i][cliente][ii][pedido][iii].qtd
                var preco = json_compras[i][cliente][ii][pedido][iii].preco
                var valorTotalProduto = (calcValorTotalPorProduto(qtd, preco))
                //valorTotal = valorTotalProduto + valorTotal
                cl(qtd+' x '+preco+' = '+calcValorTotalPorProduto(qtd, preco))
                valorTotal = parseFloat(valorTotalProduto + valorTotal)
            }
            cl(valorTotal)
        }
    });

    //ret = total_qtdCompras

}

