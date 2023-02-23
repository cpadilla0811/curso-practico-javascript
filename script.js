console.log("Hello, world")



console.log("id: ", id)
console.log("clase: ", clase)
console.log("QuerySelector: ", h1) 

//Query Selector

//1. Selector para elemento

const h1 = document.querySelector("h1") //Por etiqueta, selecciona la primera
const p = document.querySelector("p") //Por etiqueta, selecciona la primera
const ps = document.querySelectorAll("p") //Todas las etiquetas y las convierte en un array
const parrafito = document.querySelector(".parrafito") //Por nombre de clase
const pid = document.querySelector("#pid")//Por nombre id
const input = document.querySelector("input")//Por etiqueta

console.log({h1})

console.log({
    h1,
    p,
    ps,
    parrafito,
    pid,
    input
})

h1.innerHTML="Patito <br> Feo" //Formatea el html
h1.innerText ="Patito <br> Feo" //No formatea el html

//Obtener el valor de un atributo
console.log(h1.getAttribute("class"))

//modificar el valor de un atributo
//h1.setAttribute("class", "rojo")


//Agregar nuevas clases separadas por espacios
h1.classList.add("rojo")

//eliminar clases
h1.classList.remove("rojo")

//modificar aributo directamente (solo para input)
input.value = "456" 
input.placeholder = "Come verga"

//Crear un elemento html en javascript
const img = document.createElement("img")

//Establecer un atributo para ese elemento
img.setAttribute("src", "https://www.latercera.com/resizer/574_O1rba6ZbPS-iQTTzHmmthvo=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/NTKPPFAA3JGDFNYE63OR5J22EE.png")

console.log(img)

//insertar el elemento creado en un elemento que traimos del html
pid.append(img)