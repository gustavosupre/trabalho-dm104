function AbreLogin() {
    if ($("#login-bg").css("display") == "none") {
        $("html body").css("overflow","hidden");
        $("#login-bg").fadeTo("fast", 0.7, function(){
                $(this).show();
        });
        $("#login").fadeTo("fast", 1, function(){
                $(this).show();
        });
    } else {
        $("html body").css("overflow","auto");
        $("#login-bg").fadeTo("fast", 0, function(){
                $(this).hide();
        });
        $("#login").fadeTo("fast", 1, function(){
                $(this).hide();
        });
    }
    //carregaDadosCliente()
}

function AbreSacola() {
    if ($("#sacola-bg").css("display") == "none") {
        $("html body").css("overflow","hidden");
        $("#sacola-bg").fadeTo("fast", 0.7, function(){
                $(this).show();
                //$("#menuesquerdo-fechar").show();
        });
        $('#sacola').animate({right:0},500);
    } else {
        $("html body").css("overflow","auto");
        $("#sacola-bg").fadeTo("fast", 0, function(){
                $(this).hide();
                //$("#menuesquerdo-fechar").hide();
        });
        $('#sacola').animate({right:"-360px"},500);
    }
}

function AbreCliente (acesso){
    if ($("#cliente-bg").css("display") == "none") {
        $("html body").css("overflow","hidden");
        $("#cliente-bg").fadeTo("fast", 0.7, function(){
                $(this).show();
        });
        $("#cliente").fadeTo("fast", 1, function(){
                $(this).show();
                AbreSacola()
                cliente(acesso)
        });
    } else {
        $("html body").css("overflow","auto");
        $("#cliente-bg").fadeTo("fast", 0, function(){
                $(this).hide();
        });
        $("#cliente").fadeTo("fast", 1, function(){
                $(this).hide();
                cliente(acesso)
        });
    }
}

function animAddProduto(id){
    $('#produto-adicionado').html('Produto <strong>Ref. '+id+'</strong> adicionado!')
    $('#produto-adicionado').animate({top:"70px"},500, function(){
        $('#produto-adicionado').delay(2000).animate({top:"20px"},500)
    });
}
