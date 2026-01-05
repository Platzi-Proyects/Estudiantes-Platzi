import {User} from "./User.js";
import {Category} from "../Courses/Course.js";

export class Teacher extends User{
    constructor({name, email, password, role = "Teacher"}) {
        super(name,email,password, role);
    }

    createCategory(id, name) {
        return new Category(id, name)
    }

}