const listaProductos = () =>
  fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearProducto = (urlimg, categoria, nombre, precio, descripcion) => {
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      urlimg,
      categoria,
      nombre,
      precio,
      descripcion
    })
 }).then(respuesta =>{
   if(respuesta.ok){
     return respuesta.body;
   }
   throw new Error('No fue posible crear un nuevo producto');
 });
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => {
  console.log(respuesta.json());
  //respuesta.json();
  });
};

const editarProducto = (urlimg, categoria, nombre, precio, descripcion, id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      urlimg,
      categoria,
      nombre,
      precio,
      descripcion }),
  }).then((respuesta) => respuesta).catch((err) => console.log(err));
};


export const productosServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    editarProducto
  };