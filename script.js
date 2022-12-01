// []

const bebidas = [
    { id: 10, alcohol: false, nombre: "paso de los toros", precio: 332, imgUrl: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/144/141/products/pomelo_15001-11db1e72f3a389542916071101037250-640-0.png", stock: 100 },
    { id: 11, alcohol: false, nombre: "coca cola", precio: 409, imgUrl: "https://www.casa-segal.com/wp-content/uploads/2020/03/coca-cola-225L-almacen-gaseosas-casa-segal-mendoza-600x600.jpg", stock: 100 },
    { id: 12, alcohol: false, nombre: "sprite", precio: 409, imgUrl: "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/sprite-1-5-lts-6062114db4442.png", stock: 100 },
    { id: 13, alcohol: false, nombre: "jugo baggio", precio: 241, imgUrl: "https://www.conradomarket.com.ar/images/000000000010900485969BEBIDAS-BAGGIO-Jugo-de-Naranja-x-1.jpg", stock: 100 },
    { id: 15, alcohol: true, nombre: "fernet", precio: 1400, imgUrl: "https://cdn11.bigcommerce.com/s-720fd/images/stencil/2560w/products/872/794/Fernet_Branca__98772.1541077705.jpg?c=2", stock: 100 },
    { id: 16, alcohol: true, nombre: "gin tonic", precio: 2100, imgUrl: "https://vinotecalavia.com/4908-thickbox_default/gin-gordons.jpg", stock: 100 },
    { id: 17, alcohol: true, nombre: "vino", precio: 1780, imgUrl: "https://ardiaprod.vtexassets.com/arquivos/ids/227190/Vino-Tinto-Estancia-Mendoza-Malbec-Cabernet-01-750-Ml-_1.jpg?v=637929053385630000", stock: 100 },
    { id: 18, alcohol: true, nombre: "vodka", precio: 1600, imgUrl: "http://cdn.shopify.com/s/files/1/0557/2093/5599/products/VODKA-SMIRNOFF-ORIGINAL-700ML-UNIDAD_e4b52f_13957.jpg?v=1627078615", stock: 100 }
]

let contenedorBebidas = document.getElementById("contenedorBebidas")
let carrito = document.getElementById("carrito")
let arrayCarrito = [ ]

if(localStorage.getItem("carrito")){
    arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
}

renderizarCarrito()
renderizarBebidas(bebidas)

function renderizarBebidas(arrayBebidas){
    contenedorBebidas.innerHTML = " "
    for (const bebida of arrayBebidas) {
        let tarjetaBebida = document.createElement("div")
        tarjetaBebida.className = "bebida"
        tarjetaBebida.innerHTML = `
        <h3>${bebida.nombre}</h3>
        <img src=${bebida.imgUrl}>
        <h4>$${bebida.precio}</h4>
        <h4>Quedan ${bebida.stock} unidades</h4>
        <button id= ${bebida.id} class="botonCarrito">Agregar al carrito</button>
        `

        tarjetaBebida.id = bebida.id
        contenedorBebidas.append(tarjetaBebida)
    }
    let botones = document.getElementsByClassName("botonCarrito")
    for (const boton of botones) {
        boton.addEventListener("click", agregarCarrito)
    }

}

///BUSCADOR
let input = document.getElementById("input")
input.addEventListener("input", funcionInput)

function funcionInput(event) {
  console.log(event)
  let bebidasFiltradas = bebidas.filter(bebida => bebida.nombre.includes(input.value))
  renderizarBebidas(bebidasFiltradas)
}

////CARRITO
function agregarCarrito(e){
    let idBebidaBuscada = (e.target.id)
    let bebidaBuscada = bebidas.find(bebida => bebida.id == idBebidaBuscada)
    let posicionBebida = arrayCarrito.findIndex(bebida => bebida.id == idBebidaBuscada)
    if(posicionBebida != -1){
        arrayCarrito[posicionBebida] = {
            id: arrayCarrito[posicionBebida].id, nombre: arrayCarrito[posicionBebida].nombre, precio: arrayCarrito[posicionBebida].precio, subtotal: arrayCarrito[posicionBebida].precio * (arrayCarrito[posicionBebida].cantidad + 1), cantidad: arrayCarrito[posicionBebida].cantidad + 1
        }
    } else{
        arrayCarrito.push({
        id: bebidaBuscada.id, nombre: bebidaBuscada.nombre, precio: bebidaBuscada.precio, subtotal: bebidaBuscada.precio, cantidad: 1
    })
    }

    ///LOCALSTORAGE
    let carritoJSON = JSON.stringify(arrayCarrito)
    localStorage.getItem("carrito", carritoJSON)

    renderizarCarrito()
}

function renderizarCarrito() {
    carrito.innerHTML = " "
    for (const itemCarrito of arrayCarrito) {
        carrito.innerHTML += `
        <div class = "contenedorCarrito">
          <h4>${itemCarrito.nombre}</h4>
          <h4>${itemCarrito.cantidad}</h4>
          <h4>${itemCarrito.subtotal}</h4>
        </div>
    `
    }
}


