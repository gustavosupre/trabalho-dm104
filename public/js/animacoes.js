function abreMinhaSacola() {
    if ($("#minhasacolacompleta-bg").css("display") == "none") {
        $("html body").css("overflow","hidden");
        $("#minhasacolacompleta-bg").fadeTo("fast", 0.7, function(){
                $(this).show();
                //$("#menuesquerdo-fechar").show();
        });
        $('#minhasacolacompleta').animate({right:0},500);
    } else {
        $("html body").css("overflow","auto");
        $("#minhasacolacompleta-bg").fadeTo("fast", 0, function(){
                $(this).hide();
                //$("#menuesquerdo-fechar").hide();
        });
        $('#minhasacolacompleta').animate({right:"-360px"},500);
    }
}

function abreCadastro (){
    if ($("#login-bg").css("display") == "none") {
        $("html body").css("overflow","hidden");
        $("#login-bg").fadeTo("fast", 0.7, function(){
                $(this).show();
                //$("#menuesquerdo-fechar").show();
        });
        $("#cadastro").fadeTo("fast", 1, function(){
                $(this).show();
        });
    } else {
        $("html body").css("overflow","auto");
        $("#login-bg").fadeTo("fast", 0, function(){
                $(this).hide();
                //$("#menuesquerdo-fechar").hide();
        });
        $("#cadastro").fadeTo("fast", 1, function(){
                $(this).hide();
        });
    }
    carregaDadosCliente()
}

function animAddProduto(){
    $('#produtoadicionado').animate({top:"65px"},500, function(){
        $('#produtoadicionado').delay(2000).animate({top:"20px"},500)
    });
}
