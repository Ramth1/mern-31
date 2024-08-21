const func1=()=>{
    //clouser function
    const func2=()=>{
    //clouser function
    const func3=()=>{
        //clouser function
        console.log("I am function3")
    }
    console.log("I am function2") 
    func3()
    
}
    console.log("I am function1")
    func2()
}

func1()


let user=[
    {name:"ram",
     lang: ['php','js','python'],
     address:"Kathmandu"
    },
    {name:"laxman",
        lang: ['php','js','python'],
        address:"Lalitpur"
       },
       {name:"chandra",
        lang: ['php','js','python'],
        address:"Kathmandu"
       }
]
let arr=[]
for(let ele of user){
    if(ele.address=="Kathmandu"){
        arr.push(ele)
    }

}
console.log("array: ",arr)


user.forEach((value,index)=>{
    console.log(value.name)
    console.log(value.lang.join(","))

})

let userArr=user.filter((value)=>value.address ==="Kathmandu")
console.log(userArr)

const numbs=[1,2,3,4,5,6,7,8,9,10]
let sum=numbs.reduce((prevValue,currVal)=>{
    prevValue +=currVal
    return prevValue
})
console.log(sum);