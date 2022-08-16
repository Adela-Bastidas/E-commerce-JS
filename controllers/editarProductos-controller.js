import { productosServices } from "../servicios/productos-servicios.js";

const formulario = document.querySelector("[data-formEditar]");


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id);
  
    const urlimg = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productosServices.editarProducto(urlimg, categoria, nombre, precio, descripcion, id).then(() => {
      window.location.href = "./productos.html";
    });
  });