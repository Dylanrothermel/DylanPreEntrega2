


const divContenido = document.getElementById("content")
const btnComprar = document.getElementsByClassName("btn")


const carrito = []

const productos = [
    {
        id: 1,
        nombre: "Galaxy A23 5G",
        img: "./img/0003_A23-5g-White-300x300.jpg",
        precio: 162.349
    },
    {
        id: 2,
       nombre: "Moto G32 6/128",
       precio: 134.999,
       img: "003_Moto-G32-300x300.jpg"
   },
   {
       id: 3,
       nombre: "Moto G23",
       precio: 107.999,
       img: "G23-300x300.png"
   },
   {
       id: 4,
       nombre: "Moto E13",
       precio: 61.199,
       img: "moto-e13-300x300.png"
   },
   {
       id: 5,
       nombre: "Moto E22 4/64",
       precio: 80.999,
       img:"Moto-e22-300x300.png"
   },
   {
       id: 6,
       nombre: "Moto G72",
       precio: 161.999,
       img: "Moto-g72-300x300.png"
   },

]


productos.forEach((producto) => {
    let contenedorProducto = document.createElement("div")
    contenedorProducto.innerHTML = `<div id = "${producto.id}"class="card" style="width: 400px;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>`

  divContenido.appendChild(contenedorProducto)
})

function añadirProductos(){
    
}