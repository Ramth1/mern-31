//functional class
//class based

//4 pillars
//abstraction
//encapsulation
// inheritance
//polymorphism

function User(name="ram", address="lalitpur"){ //constructor function
    //class data
    this.name="Ram Thapa"
    this.address="Kathmandu"
    //data
}

User.prototype.setEmail = function(_email){
    this.email=_email
}
User.prototype.getEmail= function(){
    return this.email
}

const userObj=new User() //constructor call
const obj2=new User()

console.log(userObj)
userObj.name="Update Name"
userObj.address="Kathmandu"
obj2.name="rt"


//create a functional class called Student,
//obtain and assign marks and name to the student class
//using prototype create two functions to add percentage and division
//assign percentage and division to class student
//print the values

function Student(marks=0,name="ram"){
    this.marks=marks
    this.name=name
    this.percent()
}
Student.prototype.percent=function() {
    this.per=this.marks/500*100
    this.division()
}
Student.prototype.division=function(per){
 if(this.per>=80){
    this.division="distinction"
 }else if(this.per>=60){
    this.division="first division"
 }else if(this.per>=45){
    this.division="second division"
 }else if(this.per>=35){
    this.division="third division"
 }else{
    this.division="failed"
 }
}

const stuObj=new Student(450,"ram thapa")
console.log(stuObj)
