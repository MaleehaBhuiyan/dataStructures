class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = []
    }

    fullname(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3){
            return "You are expelled!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies}.`
    }

    addScore(score){
        this.scores.push(score)
        return this.scores 
    }

    calculateAvg(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length
    }

    static enrollStudents(){
        return "Enrolling Students!"
    }

}

let firstStudent = new Student("Colt", "Steele")
let secondStudent = new Student("Blue", "Steele")

Student.enrollStudents([firstStudent, secondStudent])


