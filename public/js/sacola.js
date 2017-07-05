function addSacola (idproduto) {
    //alert(idproduto);
    var LS_KEY = 'SacolaCliente'

    alert(localStorage.getItem(LS_KEY));
    localStorage.setItem(LS_KEY, idproduto);
}