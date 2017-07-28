var ls_compras = getLocalStorage(LSKEY_compras)

if (ls_compras != null) {
    var json_compras = JSON.parse('['+ls_compras+']')
    var table = document.getElementById('admin-compras')

    json_compras.forEach(function(elem, i) {
        var cliente_id = Object.keys(json_compras[i])[0]
        var cliente_nomecompleto = getClienteLs(cliente_id, "nome")+' '+getClienteLs(cliente_id, "sobrenome")
        var compra_total = Object.keys(Object.values(json_compras[i])[0]).length

        var tbody = criaTbody()
        var tr = criaTr()
        var td_idcliente = criaTd()
            td_idcliente.innerHTML = cliente_id
        var td_nomecompleto = criaTd()
            td_nomecompleto.innerHTML = cliente_nomecompleto
        var td_compras = criaTd()
            for (var c = 0; c < compra_total; c++){
                var compra_id = Object.keys(Object.values(json_compras[i])[0][c])[0]
                var compras = '<span class="pedido">'+compra_id+'</span> '+compras
            }
            td_compras.innerHTML = compras.substring(0,compras.length-10)

        table.appendChild(tbody)
        tbody.appendChild(tr)
        tr.appendChild(td_idcliente)
        tr.appendChild(td_nomecompleto)
        tr.appendChild(td_compras)

    });
}

