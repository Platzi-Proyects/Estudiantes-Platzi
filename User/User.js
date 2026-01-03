class User {
    // Clases protegidas
    #email
    #password
    constructor(name, email, password, role) {
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

    logout(){
        this.#email = null
        this.#password = null
        this.name = null
        this.role = null
    }

    get email() {
        return this.#email
    }

    set email(newEmail) {
        if (!newEmail.includes("@")) {
            throw new Error("Invalid email")
        }
        this.#email = newEmail
    }

    set password(newPassword) {
        if (newPassword.length < 6) {
            throw new Error("Weak password")
        }
        this.#password = newPassword
    }
}