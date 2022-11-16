// []

const bebidas = [
    { id: 10, alcohol: false, nombre: "paso de los toros", precio: 332, stock: 100 },
    { id: 11, alcohol: false, nombre: "coca cola", precio: 409, stock: 100 },
    { id: 12, alcohol: false, nombre: "sprite", precio: 409, stock: 100 },
    { id: 13, alcohol: false, nombre: "jugo baggio", precio: 241, stock: 100 },
    { id: 15, alcohol: true, nombre: "fernet", precio: 1400, stock: 100 },
    { id: 16, alcohol: true, nombre: "gin tonic", precio: 2100, stock: 0 },
    { id: 17, alcohol: true, nombre: "vino", precio: 1780, stock: 100 },
    { id: 18, alcohol: true, nombre: "vodka", precio: 1600, stock: 100 }
]

alert("BIENVENIDO/A A LA TIENDA ONLINE DE BEBIDAS")

let precioConDescuento = 0
let cantidadPedida = 0
let precioMismaBebida = 0
let precioTotal = 0

function descuento(){
    precioConDescuento = precioTotal - (precioTotal * 0.1)
}


let bebidasEnStock = bebidas.filter(bebida => bebida.stock>0)
bebidasEnStock = bebidasEnStock.map(bebida => (bebida.nombre))
alert("Hay " + bebidasEnStock.join(", ") + " en stock.")

let rta = prompt("Desea comprar alguna bebida? (si/no)").toLowerCase()
while(rta != "si" && rta != "no"){
    alert("respuesta inválida")
    rta = prompt("Desea comprar alguna bebida? (si/no)").toLowerCase()
}
while(rta=="si"){
    let bebidaIngresada = prompt("Qué bebida quiere compar?")
    let bebidaBuscada = bebidas.find(bebida => bebida.nombre == bebidaIngresada)
    if (bebidaBuscada){
        cantidadPedida = parseInt(prompt("Cuesta $" + bebidaBuscada.precio + ". Cuantas desea?"))
        precioMismaBebida = bebidaBuscada.precio * cantidadPedida
        precioTotal = precioTotal + precioMismaBebida
        rta = prompt("Desea comprar otra bebida? (si/no)")
    }
    if (rta != "si" && rta != "no"){
        alert("Respuesta inválida")
        rta = prompt("Desea comprar otra bebida? (si/no)")
    }
}
if(rta == "no"){
    if(precioTotal < 6500){
        alert("Usted debe abonar $" + precioTotal)
    }
    else{
        descuento()
        alert("Obtiene un 10% de descuento por superar los $6500. Debe abonar $" + precioConDescuento)
    }
}


