//variaveis
let LsKey_sacola = 'SacolaCliente'
let LsKey_cadastro = "CadastroCliente"
let LsKey_compras = "ComprasCliente"

function getRandom() {
    return Math.floor(Math.random() * 999 + 1)
}

function apagarDadosCliente (){
    localStorage.removeItem(LsKey_cadastro)
    clienteLogado()
    abreDadosCliente()
}

const form = document.getElementById("form-cadastro")
const InputPrimeiroNome = document.getElementById("primeironome")
const InputSobrenome = document.getElementById("sobrenome")
const InputNascimento = document.getElementById("nascimento")
const InputEmail = document.getElementById("email")
const InputSenha = document.getElementById("senha")


function getJsonLocalStorageCliente () {
    var ls = localStorage.getItem(LsKey_cadastro)
    var cliente_json = JSON.parse('['+ls+']')
    return cliente_json
}
function getClienteNome (tipo) {
    var cliente_json = getJsonLocalStorageCliente()
    return cliente_json[0].primeiroNome
}
function getClienteSobrenome (tipo) {
    var cliente_json = getJsonLocalStorageCliente()
    return cliente_json[0].sobrenome
}
function getClienteNascimento (tipo) {
    var cliente_json = getJsonLocalStorageCliente()
    return cliente_json[0].nascimento
}
function getClienteEmail (tipo) {
    var cliente_json = getJsonLocalStorageCliente()
    return cliente_json[0].email
}
function getClienteSenha (tipo) {
    var cliente_json = getJsonLocalStorageCliente()
    return cliente_json[0].senha
}
//localStorage.removeItem(LsKey_cadastro)


function clienteLogado () {
    var spanCliente = document.getElementById("spanClienteLogado")
    var LS_cliente = localStorage.getItem(LsKey_cadastro)

    if (LS_cliente) {
        spanCliente.className = "mif-user"
        spanCliente.innerHTML = "<div>"+getClienteNome().toUpperCase()+"</div>"

    } else {
        spanCliente.className = "mif-user"
        spanCliente.innerHTML = ""

    }

}
clienteLogado()

function finalizarCompra(sacola){
    abreCadastro(sacola)
    abreMinhaSacola() //na verdade vai fechar
}

function getClienteIDLS () {

    var cliente = localStorage.getItem(LsKey_cadastro)
    var json_cliente = JSON.parse('['+cliente+']')
   return json_cliente[0].idCliente
}

function unirPedidoAoCliente (ls_pedido, ls_cliente) {

    var cliente = '{"cliente":'+ls_cliente+'}'
    var pedido = '{"pedidos":[{"'+getRandom()+'":['+ls_pedido+']}]}'
    var unir = cliente+','+pedido
    localStorage.setItem(LsKey_compras+getClienteIDLS(), unir)
}
function unirMaisPedidosAoCliente (idCliente, ls_pedido) {

    ls = localStorage.getItem(LsKey_compras+idCliente)
    json_ls = JSON.parse('['+ls+']')
    json_pedido = JSON.parse('['+ls_pedido+']')
    var qtdpedidos = json_ls[1].pedidos.length
    json_ls[1].pedidos[qtdpedidos] = '{"'+getRandom()+'":'+JSON.stringify(json_pedido)+'}'

    var pedidos_atuais = ""
    for (var i = 0; i < qtdpedidos; i++) {
        pedidos_atuais = pedidos_atuais+JSON.stringify(json_ls[1].pedidos[i])+","
    }

    var cliente_add = JSON.stringify(json_ls[0].cliente)
    var novopedido = '{"'+getRandom()+'":['+ls_pedido+']}'
    //var pedidos_atuais = pedidos_atuais.substr(0,(pedidos_atuais.length - 1))
    var unir = '{"cliente":'+cliente_add+'},'+'{"pedidos":['+pedidos_atuais+novopedido+']}'

    localStorage.setItem(LsKey_compras+idCliente, unir)
    //console.log(pedidos_atuais)
    //console.log(JSON.parse('['+unir+']'))

}

function _unirPedidoAoCliente (pedido, cliente){
    var cliente = '{"cliente":'+cliente+'}'
    var pedido1 = ''+pedido+''
    var pedido2 = '{"id":"50","preco":"106.8","descricao":"SOUTIEN TAMANHOS ESPECIAIS EM TACTEL E RENDA","foto":"img_20151019_143124346tratadaex50_e.jpg","qtd":2},{"id":"47","preco":"136.2","descricao":"CONJUNTO STRAPPY BRA - ALÇA TODA TRABALHADA EM RENDA","foto":"_mg_9304_f2_1_e.jpg","qtd":2},{"id":"46","preco":"124.9","descricao":"CAMISOLA EM LIGANETE,COM DETALHES EM TULE E RENDA - ACOMPANHA UMA CALCINHA FIO ","foto":"_mg_5719_f2_alterada_e.jpg","qtd":2},{"id":"45","preco":"114","descricao":"CONJUNTO MOLDADO MENINA MOÇA PP","foto":"img_20160601_140303622_e.jpg","qtd":2},{"id":"44","preco":"140.1","descricao":"CONJUNTO DE BIQUÍNI COM BASE TAMANHOS ESPECIAIS","foto":"_mg_6030_f_alterada_e0.jpg","qtd":2},{"id":"48","preco":"123.9","descricao":"CONJUNTO EM RENDA E TULE - ALÇA COM DETALHE EM PÉROLAS, ACOMPANHA PERSEX","foto":"_mg_5707_f2_alterada_e.jpg","qtd":2},{"id":"49","preco":"131.8","descricao":"CAMISOLA SEM BOJO EM LIGANETE, COM DETALHE EM RENDA FINA - ACOMPANHA UMA CALCINHA FIO ","foto":"_mg_5774_f2_e.jpg","qtd":4},{"id":"40","preco":"107.7","descricao":"CONJUNTO MICROFIBRA E RENDA ARCO INTEIRO - ACOMPANHA 02 CALCINHAS","foto":"_dsc0675_e.jpg","qtd":1},{"id":"42","preco":"130.6","descricao":"SOUTIEN AVULSO CORTE A LASER S LINE","foto":"_mg_5929_f4_e.jpg","qtd":1},{"id":"43","preco":"109.5","descricao":"CONJUNTO DE BIQUÍNI COM BASE E ALÇAS","foto":"_mg_6045_f_alterada_e.jpg","qtd":1}'
    var unir_pedidos = '{"pedidos":[{"001":['+pedido1+']},{"002":['+pedido2+']}]}'
    var tudo = "["+cliente+","+unir_pedidos+"]"

    var json = JSON.parse(tudo)

    //var unir2 =
    var cliente = json[0].cliente.primeiroNome
    console.log("cliente: "+cliente)

    var pedido = Object.getOwnPropertyNames(json[1].pedidos[0])
    console.log("pedido: "+pedido)
    var produto = json[1].pedidos[0][pedido]
    console.log("produto: "+produto[0].id)


    console.log("---")
    console.log(tudo)
}
//unirPedidoAoCliente (localStorage.getItem(LsKey_sacola), localStorage.getItem(LsKey_cadastro))
novopedido1 = '{"id":"01","preco":"99.01","descricao":"desc 1","foto":"1.jpg","qtd":1},{"id":"02","preco":"99.02","descricao":"desc 2","foto":"2.jpg","qtd":3}'
novopedido2 = '{"id":"55","preco":"10","descricao":"desc 1","foto":"1.jpg","qtd":1},{"id":"56","preco":"99.02","descricao":"desc 2","foto":"2.jpg","qtd":3}'
novopedido3 = '{"id":"48","preco":"123.9","descricao":"CONJUNTO EM RENDA E TULE - ALÇA COM DETALHE EM PÉROLAS, ACOMPANHA PERSEX","foto":"_mg_5707_f2_alterada_e.jpg","qtd":2},{"id":"49","preco":"131.8","descricao":"CAMISOLA SEM BOJO EM LIGANETE, COM DETALHE EM RENDA FINA - ACOMPANHA UMA CALCINHA FIO ","foto":"_mg_5774_f2_e.jpg","qtd":4},{"id":"40","preco":"107.7","descricao":"CONJUNTO MICROFIBRA E RENDA ARCO INTEIRO - ACOMPANHA 02 CALCINHAS","foto":"_dsc0675_e.jpg","qtd":1},{"id":"42","preco":"130.6","descricao":"SOUTIEN AVULSO CORTE A LASER S LINE","foto":"_mg_5929_f4_e.jpg","qtd":1},{"id":"43","preco":"109.5","descricao":"CONJUNTO DE BIQUÍNI COM BASE E ALÇAS","foto":"_mg_6045_f_alterada_e.jpg","qtd":1}'
unirMaisPedidosAoCliente(632, novopedido3)
//localStorage.removeItem('ComprasCliente632')

