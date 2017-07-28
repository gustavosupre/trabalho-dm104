var ls_clientes = getLocalStorage(LSKEY_clientes)
var ls_compras = getLocalStorage(LSKEY_compras)

if (ls_clientes != null) {
    document.getElementById('show-resumoclientes').innerHTML = resumoClientes()
}
if (ls_compras != null) {
document.getElementById('show-resumocompras').innerHTML = resumoCompras()
}

function resumoClientes (){
    var json_clientes = JSON.parse('['+ls_clientes+']')
    return json_clientes.length+" Clientes"
}

function calcValorTotalPorProduto(qtd, preco) {
    return qtd * preco
}
function somaValores(v1, v2) {
    //return parseFloat(v1) + parseFloat(v2)
    return v1 + v2
    //cl(parseFloat(v1) + parseFloat(v2))
}
function googleChartCompras (cliente, total){
    var ls_googlechart = getLocalStorage(LSKEY_googleChart)
    var insert = '["'+getClienteLs(cliente,"nome")+'", '+total+']'  //['Gustavo',     5],

    if (ls_googlechart == null) {
        setLocalStorage(LSKEY_googleChart, insert)
    } else {
        addLocalStorage(LSKEY_googleChart, ls_googlechart, insert)
    }
}
function resumoCompras (){
    var json_compras = JSON.parse('['+ls_compras+']')
    var somaTotalCompras = 0
    var somaTotalQtdCompras = 0
    var clienteTotalCompra = 0
    var cliente
    //cl(json_compras)
    //cl('total: '+json_compras[0]['308'][0]['5'][0].id)
    //cl(json_compras[0]['308'][1]['20'].length)


    json_compras.forEach(function(elem, i) {
        var somaTotalCliente = 0
        cliente = Object.keys(json_compras[i])[0]
        var clienteSomaCompras = elem[cliente].length
        clienteTotalCompra = somaValores(clienteTotalCompra, clienteSomaCompras)
        //cl('>>'+cliente)
        for (var ii = 0; ii < elem[cliente].length; ii++){

            var pedido = Object.keys(elem[cliente][ii])[0]
            var total_qtdProduto = json_compras[i][cliente][ii][pedido].length
            var valorTotalPedido = 0

            var qtdComprasCliente = elem[cliente].length
            //cl(elem[cliente].length)
            for(var iii = 0; iii < total_qtdProduto; iii++){
                var qtd = json_compras[i][cliente][ii][pedido][iii].qtd
                var preco = json_compras[i][cliente][ii][pedido][iii].preco
                var valorTotalProduto = (calcValorTotalPorProduto(qtd, preco))
                valorTotalPedido = somaValores(valorTotalPedido, valorTotalProduto)
                //cl(calcValorTotalPorProduto(qtd, preco))
                //cl(valorTotalPedido)
            }
            somaTotalCliente = somaValores(somaTotalCliente, valorTotalPedido)

        }
        somaTotalQtdCompras = somaValores(somaTotalQtdCompras, qtdComprasCliente)
        somaTotalCompras = somaValores(somaTotalCompras, somaTotalCliente)
        //cl(somaTotalCompras.toFixed(2))
        //googleChartCompras(cliente, somaTotalCliente)

    });

    return "<div>"+somaTotalQtdCompras+" compras</div><div>"+mascaraMoeda(somaTotalCompras)+"</div>"

}