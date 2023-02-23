const idCompleto = (name, lastname, nickname)=>{
    let completeName = name + " " + lastname
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas "+ nickname + ".")
}

idCompleto("Juan David","Castro Gallego", "juandc")

//VM612:3 Mi nombre es Juan David Castro Gallego, pero prefiero que me digas juandc.


const tipoDeSuscripcion = "Basic"

if (tipoDeSuscripción = "Free") {
    console.log("Solo puedes tomar los cursos gratis")
} else if (tipoDeSuscripcion = "Basic") {
    console.log("Puedes tomar casi todos los cursos de platzi durante un mes")
} else if (tipoDeSuscripcion = "Expert") {
    console.log("Puedes tomar casi todos los cursos de platzi durante un año")
} else if (tipoDeSuscripcion = "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar todos los cursos de Platzi durante un año")
} else {
    console.log("No está suscrito")
}