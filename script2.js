const h1 =document.querySelector("h1")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const boton = document.querySelector("#btnCalcular")
let pResult = document.querySelector("#result")

function btnOnClick(){
    console.log("Escuchando el evento de click")
    let suma = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText= `La suma es:  +${suma}`
}






