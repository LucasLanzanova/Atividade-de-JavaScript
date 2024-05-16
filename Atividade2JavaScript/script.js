let valorPago = document.querySelector("#valorPago");
let valorProduto = document.querySelector("#valorProduto");
let h1titulo = document.querySelector("#h1titulo");

function Resultado(){
    let var1;
    let var2;
    var1=Number(valorPago.value);
    var2=Number(valorProduto.value);
    h1titulo.textContent= var1 - var2;
}

Troco.onclick=function(){
    Resultado();
}