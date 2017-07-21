function criaDiv (){
    var cria = document.createElement('div')
    return cria
}

function criaSpan (){
    var cria = document.createElement('span')
    return cria
}

function criaUl (){
    var cria = document.createElement('ul')
    return cria
}

function criaLi (){
    var cria = document.createElement('li')
    return cria
}

function criaImg (src){
    var cria = document.createElement('img')
    cria.setAttribute("src", src)
    return cria
}

function criaHr () {
    var cria = document.createElement('hr');
    return cria;
}

function criaInput(type){
    var cria = document.createElement('input');
    cria.setAttribute("type", type);
    return cria;
}

function criaForm(id){
    var cria = document.createElement('form');
    cria.setAttribute("id", id);
    return cria;
}

function criaLabel(){
    var cria = document.createElement('label');
    return cria;
}

function criaTable(){
    var cria = document.createElement('table');
    return cria;
}

function criaThead(){
    var cria = document.createElement('thead');
    return cria;
}

function criaTbody(){
    var cria = document.createElement('tbody');
    return cria;
}

function criaTfoot(){
    var cria = document.createElement('tfoot');
    return cria;
}

function criaTr(){
    var cria = document.createElement('tr');
    return cria;
}

function criaTd(){
    var cria = document.createElement('td');
    return cria;
}
