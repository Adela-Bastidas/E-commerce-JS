import { productosServices } from "../servicios/productos-servicios.js";



 export const crearNuevoProducto = (urlimg, nombre, precio, descripcion, id) => {
    const card = document.createElement("div");
    const contenido = `
       
    <div >
        <div class="iconos" >
            <button type="button" class="borrar" id="${id}"></button>
            <input type="button"  class="editar" id="${id} data-edit">
        </div>
        <img class="producto__cards__img" src="${urlimg}" alt="imagen1"
        >
        <h5 class="producto__cards__titulo" >${nombre} </h5>
        <p class="producto__cards__precio">${precio}</p>
        <p  class="producto__cards_numeral">${descripcion}</p> 
    </div>`;
    
    card.className = 'iconos';
    card.className = 'borrar';
    card.className = 'editar';
    card.className = 'producto__cards__img';
    card.className = 'producto__cards__titulo';
    card.className = 'producto__cards__precio';
    card.className = 'producto__cards_numeral';
    
    card.innerHTML = contenido;
    card.classList.add("card")

    const editar = card.querySelector("input");
    //console.log(editar);

    editar.addEventListener("click", () => {
        const id = btn.id;
        console.log(id);

        productosServices.detalleProducto(id).then((producto) => {    
        //console.log(id);
        //obtenerInformacion();
          window.location.href = "./EditarProductos.html";
            
       }).catch((err) => alert("Ocurrió un error"));
    });


    const btn = card.querySelector("button");
    //console.log(btn);
    btn.addEventListener("click", () => {
    const id = btn.id;
    productosServices.eliminarProducto(id)
     .then((respuesta) => {
       console.log(respuesta);
     })
     .catch((err) => alert("Ocurrió un error"));
 });

    return card;
};

const productos = document.querySelector("[data-productos]");

const render = async () => {
    try{
        const listaProductos = await productosServices.listaProductos()
        listaProductos.forEach(element => {
            productos.appendChild(crearNuevoProducto (element.urlimg, element.nombre, element.precio, element.descripcion,  element.id))
        });
    } catch(erro){
        console.log(erro)
    }
}

render(); 