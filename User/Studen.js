import {User} from "./User.js";

export class Studen extends User{
    constructor({name, email, password, role = "Student"}) {
        super(name, email, password, role);
    }

    viewCourses(category) {
        category.listOfCourses()
    }

    comment(classItem, text) {
        classItem.addComment(this, text)
    }

    aboutThisCo(course) {
        course.aboutThisCourse()
    }
}