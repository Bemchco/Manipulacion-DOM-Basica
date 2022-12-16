
const h1 = document.querySelector("h1");
const form = document.querySelector("#form");

const input1 = document.querySelector("#numero1");
const input2 = document.querySelector("#numero2");
const btn = document.querySelector("#btnCalcular")
const result = document.querySelector("#resultado")

form.addEventListener("submit",sumarImputvalues);

function sumarImputvalues(){
    event.preventDefault();
    const resultado = input1.value + input2.value;
    result.innerText = "Resultado " + resultado;
};



