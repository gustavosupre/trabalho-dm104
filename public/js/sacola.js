//começa as funções referente ao Local Storage

//abrir pagina com a qtd de produtos ja no LS se houver
setQtdProdutosSacola()

function setQtdProdutosSacola (){
    sacola = document.getElementById("minhasacola_qtd");
    sacola.innerHTML = getQtdProdutosSacola();
}

function addSacola (idproduto) {
    //alert(idproduto);
    let ARR_SACOLA = new Array();

    if (localStorage.getItem(LocaStoKEY_Sacola) === null){
        ARR_SACOLA.push(idproduto)
        localStorage.setItem(LocaStoKEY_Sacola, ","+ARR_SACOLA)

    } else {
        ARR_SACOLA = localStorage.getItem(LocaStoKEY_Sacola) + "," + idproduto
        localStorage.setItem(LocaStoKEY_Sacola, ARR_SACOLA)
    }
    setQtdProdutosSacola()
    animAddProduto();
    montaProdutosSacola();

    //alert(Array.isArray(ARR_SACOLA))
    //;
    //alert(ARR_SACOLA.length)
    //localStorage.getItem(LocaStoKEY_Sacola)
    //localStorage.setItem(LocaStoKEY_Sacola, ARR_SACOLA)
    //localStorage.removeItem(LocaStoKEY_Sacola)
}
