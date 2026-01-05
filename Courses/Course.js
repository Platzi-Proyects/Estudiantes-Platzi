export class Course{
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
        return(
            this.name,
            this.teacher,
            this.classes.length
        )
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