class Category{
    constructor(id,name) {
        this.id = id
        this.name = name
        this.courses = []
    }

    addCourse(name,teacher){
        const newCourse = new Course(name,teacher)
        this.courses.push(newCourse)
    }

    listOfCourses() {
        this.courses.forEach(course => {
            console.log(`Name of course: ${course.name}`)
        })
    }
}

class Course{
    constructor(name,teacher) {
        this.name = name
        this.classes = []
        this.teacher = teacher
    }

    newClasses(name, duration){
        const newItem = new Classes({name, duration})
        this.classes.push(newItem)
        console.log(`New classes add: ${newItem}`)
    }

    aboutThisCourse(){
        return(console.log(`this coruse: Teacher: ${this.teacher} Name: ${this.name} Total Class: ${this.classes.length}`))
    }
}

class ClassItem {
    constructor(name, duration){
        this.name = name
        this.duration = duration
        this.comments = []
    }

    addComment(userName, role, text) {
        const newComment = new Comment(userName, role, text)
        this.comments.push(newComment)
    }
}

class Comment {
    constructor(userName, role, text) {
        this.userName = userName
        this.role = role
        this.text = text
        this.date = new Date()
    }
}


