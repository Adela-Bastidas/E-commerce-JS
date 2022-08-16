
import { usuarios } from "./usuarios.js";
import { SistemaAutenticacion } from "./sistemaAutenticacion.js";


const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();


    const usuario = new usuarios("alura@example.com");
    usuario.asignarClave('12345');
    console.log(usuario);

    const email = document.querySelector("[data-email]").value;
    //console.log(email);
    
    const passw = document.querySelector("[data-pssw]").value;
    //console.log(passw);

    if(email == "alura@example.com" && passw == '12345'){
        window.location.href = "./agregarProductos.html";
    }else{
        alert("Correo electrónico y/o contraseña incorrectos");
    }

  
});
