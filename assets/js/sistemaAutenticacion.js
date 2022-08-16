export class SistemaAutenticacion {
    static login(email,clave) {
        if ("autenticar" in email 
            && email.autenticar instanceof Function)
            return email.autenticar(clave);
        else
            return false;
    }
}