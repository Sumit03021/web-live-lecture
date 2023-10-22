class Person{
    constructor(naam,umar){
        this.username=naam;
        this.age=umar;
        }
        fulldetail(){

        }
        user(){

        }
}

let person2=new Person('samarth',24);
console.log(person2);

// copying person properties by using extends person in students.
class Student extends Person{
// add new properties with old one then use super()---for copy old oone
constructor(naam,umar,rollNo){
    super(naam,umar); // from parents.
    this.roll=rollNo;
}
fulldetail(){
    console.log(`kaa hua ${this.username}`)
}
}

let student1=new Student('anand',27,1234);
console.log(student1);
console.log(student1.fulldetail());

























































