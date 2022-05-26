function Student() {
    this.name ="Mohadese";
    this.gender = "Female";

}
Student.prototype.age = 10;
let subObj1 = new Student();
console.log(subObj1.age);  //10


Student.prototype = { age : 20 };
let subObj2 = new Student("Sara", "female");
console.log(subObj2);
console.log(subObj2.age); //20