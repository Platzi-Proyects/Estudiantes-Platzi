console.log("HOLA")

class User {
    // Clases protegidas
    #email
    #password
    constructor() {
        this.name = null
        this.#email = null
        this.#password = null
        this.role = null
    }

    createUser(name, email, password, role){
        this.name = name
        this.#email = email
        this.#password = password
        this.role = role
    }

    login(email, password){
        if (email !== this.#email || password !== this.#password) {
            return console.log("The password or email is not valid")
        }else{
            console.log("Contraseña correcta")
        }

    }
    logout(validation){
        this.#email = null
        this.#password = null
        this.name = null
        this.role = null
    }
    updateProfile(newName){
        this.name = newName
    }
}

const users = new User()