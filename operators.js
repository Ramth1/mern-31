/**
 * a. Arithmetic Operators
 * +,-,*,/,%
 */


let a=10;
let b=3;

const c=a/b //10/3=>3.333
const d=a%b //10/3=>3

a++ //a=a+1,11
console.log(a)//11

++a //a=a+1
console.log(a) //12

console.log(a++) //12
console.log(++a) //14

//let a=12
console.log()

//string concatenation
let x=10
let y='10'

const z=x+y;
console.log(z)


// using template literals
let name="ram"

let html= `Dear ${name} ,<br/>`
html +=""



//comparision operators
a=10
b=10

console.log(a<b)//false
console.log(a>b)//false
console.log(a==b)//true
console.log(a===b)//false, it checks data type as well


// null colleaching(??)
// let userrole= userrole.role ?? "user"

// object destructor
const userData={
    name:"User one",
    email:"one@user.com",
    address:"Kathmandu",
    phone:"9876543210"
}

const adminUser={
    ...userData,     //spread operator
    role:"admin"
}
// ...rest operator
let{name:fullName,address,...remaining}=userData

// let fullName=userData.name
// let address=userData.address

// let remaining={
//email:userData.email,
//phone:userData.phone}


const user={
    name:"Ram"
}
console.log(user.name)  //Ram

const user1=user;
user1.name="Updated name";
console.log(user1.name)  //updated name
console.log(user.name) //updated name