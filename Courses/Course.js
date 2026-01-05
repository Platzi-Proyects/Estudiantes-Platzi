export class Category {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.courses = []
    }

    addCourse(name, teacher) {
        if (teacher.role !== "Teacher") {
            throw new Error("Only teachers can create courses")
        }

        const newCourse = new Course(name, teacher)
        this.courses.push(newCourse)
    }

    listOfCourses() {
        this.courses.forEach(course => {
            console.log(`Name of course: ${course.name}`)
        })
    }
}

class Course {
    constructor(name, teacher) {
        this.name = name
        this.teacher = teacher // guardas la instancia
        this.classes = []
    }

    newClasses(name, duration, user) {
        if (user.role !== "Teacher") {
            throw new Error("Only teachers can create class")
        }

        if (user !== this.teacher) {
            throw new Error("Only the course teacher can create classes")
        }

        const newItem = new ClassItem(name, duration)
        this.classes.push(newItem)
    }

    aboutThisCourse() {
        console.log(
            `Teacher: ${this.teacher} | Course: ${this.name} | Total classes: ${this.classes.length}`
        )
    }
}

class ClassItem {
    constructor(name, duration) {
        this.name = name
        this.duration = duration
        this.comments = []
    }

    addComment(user, text) {
        const newComment = new Comment(user, text)
        this.comments.push(newComment)
    }
}

class Comment {
    constructor(user, text) {
        this.userName = user.name
        this.role = user.role
        this.text = text
        this.date = new Date()
    }
}

