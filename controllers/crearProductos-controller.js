import { productosServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    
    productosServices.crearProducto(url, categoria, nombre, precio, descripcion).then(respuesta => {
        window.location.href = "/productos.html";
        alert("El producto fue creado con exito");
        console.log(respuesta);
    }).catch(err => {
        console.log(err);
    });
});