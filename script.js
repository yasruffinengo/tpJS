//hay sprite , coca, fernet, vodka, gin tonic, vino
// sprite $450
// coca $450
// fernet $1400
// gin tonic $2100

alert("BIENVENIDO/A A LA TIENDA ONLINE DE BEBIDAS")
let precioTotal = 0
let precioActualizado = 0
let rta = prompt("Desea comprar alguna bebida? (si/no)").toLowerCase()
while(rta != "si" && rta != "no"){
    alert("respuesta inválida")
    rta = prompt("Desea comprar alguna bebida? (si/no)").toLowerCase()
}
while(rta == "si" ){
    let bebida = prompt("Qué desea comprar? (coca cola/sprite/fernet/gin tonic)").toLowerCase()
    while(bebida != "coca cola" && bebida != "sprite" && bebida != "fernet" && bebida != "gin tonic"){
        alert("respuesta inválida")
        bebida = prompt("Qué desea comprar?").toLowerCase()
    }
    let cantidad = parseInt(prompt("Cuántas " + bebida + " quiere comprar?"))
    //aca me gustaria agregar un while como en la linea 17 que considere el caso de que la persona no ponga un numero
    switch(bebida){
        case ("coca cola"):
            precioTotal = cantidad * 450
            break;
        case ("sprite"):
            precioTotal = cantidad * 450
            break;
        case "fernet":
            precioTotal = cantidad * 1400
            break;
        case "gin tonic":
            precioTotal = cantidad * 2100
            break;
    }
    precioActualizado = precioTotal + precioActualizado
    rta = prompt("Desea comprar otra bebida? (si/no)").toLowerCase()
}
if(rta == "no"){
    if(precioActualizado < 6500){
        console.log("Usted debe abonar $" + precioActualizado)
    }
    else{
        precioConDescuento = precioActualizado - (precioActualizado * 0.1)
        alert("Obtiene un 10% de descuento por superar los $6500. Debe abonar $" + precioConDescuento)
    }
}
