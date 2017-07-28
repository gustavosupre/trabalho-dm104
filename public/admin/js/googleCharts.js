      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      var ls_compras = getLocalStorage(LSKEY_compras)

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        if (ls_compras != null) {
            var json_compras = JSON.parse('['+ls_compras+']')
            json_compras.forEach(function(elem, i) {
                var cliente = Object.keys(json_compras[i])[0]
                var cliente_nome = getClienteLs(cliente, "nome")
                var compras = elem[cliente].length
                data.addRows([[cliente_nome+' ('+compras+')', compras]]);
            });
        } else {
            data.addRows([['Nenhum Cliente', 100]]);
        }

        // Set chart options
        var options = {'title':'Concentração por nº de pedidos por cliente',
                       is3D: true
                    };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }




      /*
function dados () {
    var ls_compras = getLocalStorage(LSKEY_compras)
    var json_compras = JSON.parse('['+ls_compras+']')
    var montaRetorno = []
    json_compras.forEach(function(elem, i) {

        var cliente = Object.keys(json_compras[i])[0]
        var cliente_nome = getClienteLs(cliente, "nome")
        //cl(cliente_nome)
        for (var ii = 0; ii < elem[cliente].length; ii++){
            var pedido = Object.keys(elem[cliente][ii])[0]
            var total_pedido = json_compras[i][cliente][ii][pedido].length
            //cl(pedido)
        }

        montaRetorno[i] = cliente_nome
    });
    var retorno = [montaRetorno]
    cl(retorno )
    return retorno
    //return [['Clientes', 'Volume em compras'],['Gustavo',     5],['Marco',      2]]
}
*/
