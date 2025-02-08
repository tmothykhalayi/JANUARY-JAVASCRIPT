class Student{
    constructor(name,age,gpa){
        this.name =name;
        this.age =age;
        this.gpa =gpa;
    }
    study(){
        console.log('${this.name} is studying');
    }
}
const Student1 = new Student("Edwin",21 ,3.1);
const Student2 = new Student("timothy",25 ,3.5);
const Student3 = new Student("James",26 ,3.2);
console.log(Student1.name);
console.log(Student1.age);
console.log(Student1.gpa);
Student1.study();

console.log(Student2.name);
console.log(Student2.age);
console.log(Student2.gpa);
Student2.study();

console.log(Student3.name);
console.log(Student3.age);
console.log(Student3.gpa);
Student3.study();