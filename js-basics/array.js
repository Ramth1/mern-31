const allUsers=[
    {name:"user one", email:"one@user.com",address:"lalitpur",phone:"+977 9803253830",desgination:"CEO"},
    {name:"user two", email:"two@user.com",address:"bhaktapur",phone:"+977 9804253830",desgination:"CTO"}

]
console.log(allUsers[1].desgination)
console.log(allUsers[1]['desgination'])


let all_employee=[
    ["Person Name","name@person.com","Kathmandu","+977 9801234567"],
    ["Person Name 2","two@person.com","Lalitpur","+977 9805126347"],
    ["Person Name 3","three@person.com","Bhaktapur","+977 9803542167"],
]

console.log(all_employee[1][1])



let user_1={
    name:{
        first:"Person",
        middle:null,
        last:"Name"
    },
    email:"name@person.com",
    address:"Kathmandu",
    phone:"+977 987654331"
}
console.log(user_1)