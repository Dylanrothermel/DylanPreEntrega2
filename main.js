
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    let removerItem = document.getElementsByClassName("boton")
        for (let i = 0; i < removerItem.length; i++){
            let boton = removerItem[i]
            boton.addEventListener("click", eliminarItems)
        }

        let cantidadInputs = document.getElementsByClassName("carrito-cantidad-input")
        for(let i = 0; i < cantidadInputs.length; i++){
            let input = cantidadInputs[i]
            input.addEventListener("change", cantidadChange)
        }
    
        let añadirACarritoBotones = document.getElementsByClassName("btn")
        for(let i = 0; i < añadirACarritoBotones.length; i++){
            let boton = añadirACarritoBotones[i]
            boton.addEventListener("click", añadirACarritoclicked)
        }
    document.getElementsByClassName('btn-comprar')[0].addEventListener('click', botonComprar)
}

const divContenido = document.getElementById("content")




const productos = [
    {
        nombre: "Galaxy A23 5G",
        precio: 162.349
    },
    {
       nombre: "Moto G32 6/128",
       precio: 134.999
   },
   {
       nombre: "Moto G23",
       precio: 107.999
   },
   {
       nombre: "Moto E13",
       precio: 61.199
   },
   {
       nombre: "Moto E22 4/64",
       precio: 80.999
   },
   {
       nombre: "Moto G72",
       precio: 161.999
   },

]


productos.forEach((producto) => {
    let contenedorProducto = document.createElement("div")
    contenedorProducto.innerHTML = `<div class="card" style="width: 400px;">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <button class="btn btn-primary"type="button">Añadir al carrito</button>
    </div>
  </div>`

  divContenido.appendChild(contenedorProducto)
})

function botonComprar(){
    alert("Gracias por su compra")
    let carritoItems = document.getElementsByClassName("carrito-items")[0]
    while(carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarCarrito()

}




function añadirACarritoclicked(event){
    let boton = event.target
    let item = boton.parentElement.parentElement
    let nombre = item.getElementsByClassName("card-title")[0].innerText
    let precio = item.getElementsByClassName("card-text")[0].innerText
    añadirAlCarrito(nombre, precio)
    actualizarCarrito()
    
}

function añadirAlCarrito(nombre, precio){
    let carritoFila = document.createElement('div')
    carritoFila.classList.add('carrito-fila')
    let carritoItems = document.getElementsByClassName('carrito-items')[0]
    let carritoItemNombres = carritoItems.getElementsByClassName('carrito-item-titulo')
    for (let i = 0; i < carritoItemNombres.length; i++) {
        if (carritoItemNombres[i].innerText == nombre) {
            alert('Este item ya esta en el carrito')
            return
        }
    }
    let carritoFilaContenido = `
        <div class="carrito-item carrito-columna">
            <span class="carrito-item-titulo">${nombre}</span>
        </div>
        <span class="carrito-precio carrito-columna">${precio}</span>
        <div class="carrito-cantidad carrito-columna">
            <input class="carrito-cantidad-input" type="number" value="1">
            <button class="boton" type="button" >Eliminar</button>
        </div>`
    carritoFila.innerHTML = carritoFilaContenido
    carritoItems.append(carritoFila)
    carritoFila.getElementsByClassName("boton")[0].addEventListener("click", eliminarItems)
    carritoFila.getElementsByClassName("carrito-cantidad-input")[0].addEventListener("change", cantidadChange)
    
}



function eliminarItems(event){
    let botonclicked = event.target
    botonclicked.parentElement.parentElement.remove()
    actualizarCarrito()

}


function cantidadChange(event){
    let input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    actualizarCarrito()
}

function actualizarCarrito(){
    let carritoItemContainer = document.getElementsByClassName('carrito-items')[0]
    let carritoFilas = carritoItemContainer.getElementsByClassName('carrito-fila')
    let total = 0
    for (let i = 0; i < carritoFilas.length; i++) {
        let carritoFila = carritoFilas[i]
        let precioDelItem = carritoFila.getElementsByClassName('carrito-precio')[0]
        let cantidadDeItems = carritoFila.getElementsByClassName('carrito-cantidad-input')[0]
        let precio = precioDelItem.innerText.replace('$', '')
        let cantidad = cantidadDeItems.value
        total = total + (precio * cantidad)
    }

    total = Math. round(total * 1e8) / 1e8
    document.getElementsByClassName('carrito-total-precio')[0].innerText = '$' + total
}





