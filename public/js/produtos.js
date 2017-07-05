//funções
function tiraAspas (v) {
   var v1 = v.replace('"', '');
   return v1.replace('"', '');
}

function stringIfy(v) {
  return tiraAspas(JSON.stringify(v))
}

//criando produtos
function jsonProdutos () {
  return [{"id":"50","preco":"118,50","descricao":"CONJUNTO CONFORT COM BOJO SOFT - ACOMPANHA 01 CALCINHA","foto":"_dsc0514_e.jpg"},{"id":"59","preco":"127,10","descricao":"CONJUNTO TOMARA QUE CAIA COM FECHO NA LATERAL","foto":"_dsc0658_e.jpg"},{"id":"63","preco":"132,40","descricao":"CONJUNTO NADADOR EM MICROFIBRA COM LATERAL E COSTAS EM PALA DUPLA - ACOMPANHA 01 CALCINHA","foto":"313.jpg"},{"id":"64","preco":"100,70","descricao":"CALCINHA COM PALA NA CINTURA E NAS PERNAS - MICROFIBRA","foto":"calcinha048.jpg"},{"id":"66","preco":"100,00","descricao":"CALCINHA COM LATERAL DUPLA","foto":"_mg_9552_f2_e.jpg"},{"id":"69","preco":"109,80","descricao":"CUECA FEMININA EM COTTON","foto":"calcinha260_e.jpg"},{"id":"72","preco":"146,20","descricao":"CALCINHA EM COTTON","foto":"_dsc5046(copia).jpg"},{"id":"75","preco":"129,30","descricao":"FIO DENTAL TACTEL DUPLO","foto":"_dsc0544ok(copia).jpg"},{"id":"77","preco":"131,30","descricao":"FIO COM GARTER","foto":"mphoto84_e.jpg"},{"id":"79","preco":"143,20","descricao":"CALCINHA SENHORA COM RENDA E VIÉS LARGO","foto":"_mg_2915_e0.jpg"},{"id":"128","preco":"136,50","descricao":"CONJUNTO TOP DE RENDA - ACOMPANHA 02 CALCINHAS","foto":"_dsc5000_e.jpg"},{"id":"141","preco":"125,80","descricao":"PIJAMA EM LIGANETE E RENDA COM ABERTURA NAS COSTAS ","foto":"_mg_5907_f4_e.jpg"},{"id":"142","preco":"125,30","descricao":"KIT COM TRÊS CALCINHAS","foto":"_mg_2920_e.jpg"},{"id":"153","preco":"120,00","descricao":"CONJUNTO NADADOR EM MICROFIBRA FINO NAS COSTAS LATERAL EM PALA DUPLA - ACOMPANHA 02 CALCINHAS","foto":"_mg_2847_e.jpg"},{"id":"154","preco":"126,10","descricao":"CONJUNTO EM MICROFIBRA COM BASE E VIÉS REFORÇADO - ACOMPANHA 01 CALCINHA","foto":"_dsc0497_e.jpg"},{"id":"159","preco":"124,80","descricao":"SUTIÃ AVULSO, COM BASE E BARBATANAS,MODELO REFORÇADO PARA LEVE SUSTENTAÇÃO","foto":"_dsc0782_e.jpg"},{"id":"164","preco":"108,70","descricao":"CUECA TRADICIONAL EM COTTON","foto":"_dsc0446_e.jpg"},{"id":"165","preco":"118,40","descricao":"CUECA BOXER EM COTTON","foto":"_dsc0430_e.jpg"},{"id":"166","preco":"136,20","descricao":"CUECA BOXER ","foto":"12072015604tratada_e.jpg"},{"id":"167","preco":"108,10","descricao":"CONJUNTO NADADOR SEM BOJO ","foto":"_dsc0630copiar_e.jpg"},{"id":"170","preco":"138,30","descricao":"SOUTIEN AMAMENTAÇÃO","foto":"mphoto107_e.jpg"},{"id":"171","preco":"131,10","descricao":"SOUTIEN SEM BOJO FECHO FRONTAL","foto":"mphoto66_e_e.jpg"},{"id":"172","preco":"140,00","descricao":"SOUTIEN BOJO SEM COSTURA COMPRESSÃO","foto":"mphoto70_e_e.jpg"},{"id":"185","preco":"146,30","descricao":"CALÇA LEGGING ESTAMPAS VARIADAS","foto":"_dsc5130(1)_e0.jpg"},{"id":"187","preco":"111,90","descricao":"REGATA CAVADA","foto":"_mg_9689_f2_e0.jpg"},{"id":"188","preco":"145,80","descricao":"BLUSA FITNESS","foto":"_mg_9665_f2_e0.jpg"},{"id":"189","preco":"104,90","descricao":"BERMUDA CORES LISAS","foto":"_mg_9689_f2_e1.jpg"},{"id":"190","preco":"123,70","descricao":"BERMUDA ESTAMPAS VARIADAS","foto":"_mg_2453_e2.jpg"},{"id":"195","preco":"144,30","descricao":"SHORT CORES LISAS","foto":"_mg_9665_f2_e1.jpg"},{"id":"196","preco":"115,20","descricao":"SHORT ESTAMPAS VARIADAS","foto":"_mg_2419_e.jpg"},{"id":"197","preco":"128,90","descricao":"KIT COM DUAS CALCINHAS","foto":"_dsc5053_e0.jpg"},{"id":"198","preco":"118,60","descricao":"CAMISOLA EM LIGANETE - COM AS COSTAS TRANÇADAS - ACOMPANHA UMA CALCINHA FIO ","foto":"_mg_9356_f2_1_e0.jpg"},{"id":"205","preco":"135,20","descricao":"CONJUNTO TOMARA QUE CAIA FECHO NA LATERAL COM RENDA E SEMI JÓIA- ACOMPANHA 02 CALCINHAS","foto":"_mg_2739_e.jpg"},{"id":"207","preco":"109,20","descricao":"CALÇA FLARE ESTAMPADAS","foto":"_mg_5983_f2_e.jpg"},{"id":"210","preco":"112,40","descricao":"CALCINHA EM COTTON - CINTURA ALTA","foto":"_mg_5929_f4_e0.jpg"},{"id":"211","preco":"105,10","descricao":"KIT FIO DUPLO COM RENDA DUAS CALCINHAS","foto":"_mg_2918_e.jpg"},{"id":"214","preco":"110,00","descricao":"CONJUNTO MICROFIBRA E RENDA ARCO INTEIRO - ACOMPANHA 02 CALCINHAS","foto":"_dsc0675_e.jpg"},{"id":"218","preco":"126,70","descricao":"CONJUNTO STRAPPY BRA - TIRAS NA FRENTE E NAS COSTAS","foto":"_mg_5914_f4_alterada_e.jpg"},{"id":"220","preco":"115,80","descricao":"SOUTIEN AVULSO CORTE A LASER S LINE","foto":"_mg_5929_f4_e.jpg"},{"id":"226","preco":"144,90","descricao":"CONJUNTO DE BIQUÍNI COM BASE E ALÇAS","foto":"_mg_6045_f_alterada_e.jpg"},{"id":"227","preco":"141,80","descricao":"CONJUNTO DE BIQUÍNI COM BASE TAMANHOS ESPECIAIS","foto":"_mg_6030_f_alterada_e0.jpg"},{"id":"230","preco":"134,60","descricao":"CONJUNTO MOLDADO MENINA MOÇA PP","foto":"img_20160601_140303622_e.jpg"},{"id":"238","preco":"123,20","descricao":"CAMISOLA EM LIGANETE,COM DETALHES EM TULE E RENDA - ACOMPANHA UMA CALCINHA FIO ","foto":"_mg_5719_f2_alterada_e.jpg"},{"id":"239","preco":"111,90","descricao":"CONJUNTO STRAPPY BRA - ALÇA TODA TRABALHADA EM RENDA","foto":"_mg_9304_f2_1_e.jpg"},{"id":"240","preco":"110,40","descricao":"CONJUNTO EM RENDA E TULE - ALÇA COM DETALHE EM PÉROLAS, ACOMPANHA PERSEX","foto":"_mg_5707_f2_alterada_e.jpg"},{"id":"243","preco":"148,30","descricao":"CAMISOLA SEM BOJO EM LIGANETE, COM DETALHE EM RENDA FINA - ACOMPANHA UMA CALCINHA FIO ","foto":"_mg_5774_f2_e.jpg"},{"id":"244","preco":"139,50","descricao":"SOUTIEN TAMANHOS ESPECIAIS EM TACTEL E RENDA","foto":"img_20151019_143124346tratadaex50_e.jpg"}]
}

function criaLi (id) {
  var li = document.createElement('li');
  li.setAttribute("id", "li-" + id);
  return li;
}

function criaImg (src) {
  var img = document.createElement('img');
  img.setAttribute("src", "./images/products/media_" + src);
  return img;
}

function criaSection () {
  var sec = document.createElement('section');
  return sec;
}

function criaH3 () {
  var h3 = document.createElement('h3');
  return h3;
}

function criaRef (ref) {
  var h3div_ref = document.createElement('div');
  h3div_ref.innerHTML = "Ref. " + ref;
  return h3div_ref;
}

function criaPreco (preco) {
  var h3div_preco = document.createElement('div');
  h3div_preco.innerHTML = "R$ "+ preco;
  return h3div_preco;
}

function criaDescricao (desc) {
  var h2 = document.createElement('h2');
  h2.innerHTML = desc;
  return h2;
}

function criaDiv () {
  var div = document.createElement('div');
  return div;
}

function criaBotaoComprar (id) { //
  var div = document.createElement('div');
  div.setAttribute("id", "btncomprar-" + id);
  div.setAttribute("onClick", "addSacola(" + id + ")");
  div.innerHTML = "Comprar";
  return div;
}


//fazendo a mágica fo json com forEach
var produtos = jsonProdutos();
produtos.forEach(function(elementoDaArray) {
    var ul = document.getElementById('ulprodutos');

    //criando LI com id id
    var li = criaLi(elementoDaArray['id']);
    var img = criaImg(elementoDaArray['foto']);
    var section = criaSection();
    var descricao = criaDescricao(elementoDaArray['descricao']);
    var h3 = criaH3();
    var referencia = criaRef(elementoDaArray['id']);
    var preco = criaPreco(elementoDaArray['preco']);
    var div = criaDiv();
    var botatocomprar = criaBotaoComprar(elementoDaArray['id']);

    //montando conteudo
    ul.appendChild(li).appendChild(img);
      li.appendChild(section);
      section.appendChild(h3);
      h3.appendChild(referencia)
      h3.appendChild(preco);
        section.appendChild(descricao);
        section.appendChild(div);
          div.appendChild(botatocomprar);
});
