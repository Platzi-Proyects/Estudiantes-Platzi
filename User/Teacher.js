import {User} from "./User";
import {Category} from "../Courses/Course";

class Teacher extends User{
    constructor({name, email, password, role = "Teacher"}) {
        super(name,email,password, role);
    }

    createCategory(id, name) {
        return new Category(id, name)
    }

}