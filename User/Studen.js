import {User} from "./User";

class Studen extends User{
    constructor({name, email, password, role = "Student"}) {
        super(name, email, password, role);
    }

    viewCourses(category) {
        category.listOfCourses()
    }

    comment(classItem, text) {
        classItem.addComment(this, text)
    }

    aboutThisCourse(course) {
        course.aboutThisCourse()
    }
}