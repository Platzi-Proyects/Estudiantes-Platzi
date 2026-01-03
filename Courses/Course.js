export class Course{
    constructor({
        name = null,
        teacher = null
                }) {
        this.name = name
        this.classes = []
        this.teacher = teacher
    }

    newClasses(name, duration){
        const newItem = new Classes({name, duration})
        this.classes.push(newItem)
        console.log(`New classes add: ${newItem}`)
    }
}

class Classes{
    constructor({
        name = null,
        duration = null,
        comments = []
                }) {
        this.name = name
        this.duration = duration
        this.comments = comments
    }
}