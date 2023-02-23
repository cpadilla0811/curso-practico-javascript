let tiposDeSuscripciones = {
    "free": "Solo puedes tomar cursos gratis",
    "basic": "Puedes tomar casi todos los cursos de Platzi en un mes",
    "expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    "expertduo": "Tú y alguien más pueden tomar todos los cursos por un año"
}
const validaSuscripcion = (sus) => {
    if (tiposDeSuscripciones[sus]){
        console.log(tiposDeSuscripciones[sus]) //Con la notación de corchetes le pasamos el parametro de la función y así buscará el valor de la propiedad pasada en la variable sus
        return
    }
    console.warn("Este tipo de suscripcion no existe")
}

validaSuscripcion("free")
validaSuscripcion("perro")

//Solo puedes tomar cursos gratis