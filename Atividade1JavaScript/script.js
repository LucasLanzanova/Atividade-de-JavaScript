let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let h1titulo = document.querySelector("#h1titulo");

function Resultado(){
    let var1;
    let var2;
    var1=Number(valor1.value);
    var2=Number(valor2.value);
    h1titulo.textContent= var1 + var2;
}

soma.onclick=function(){
    Resultado();
}