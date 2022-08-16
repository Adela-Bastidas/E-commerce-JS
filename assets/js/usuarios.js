export class usuarios{
    email;
    #clave;

    constructor(email){
        this.email = email;
        this.#clave = '';
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    autenticar(clave){
        return clave == this.#clave;
    }
}