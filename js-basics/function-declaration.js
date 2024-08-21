function addNumbers(a,b){
    const c=a+b
    return c
}

//a function is also called data type because it can be assigned into variables.
const addNumber=function (d,e){
    const f=d+e
    return f
}

//arrow function
const add= ()=>{

}

const addNumbers3 = (a,b)=>(a+b) //function return

const calculate ={
    addNumbers: function(a,b){
        const c=a+b
        return c
    },
    addNumbers1:(a,b)=>{
        const c= a+b
        return c;
    }
}
console.log(calculate.addNumbers(4,5))
console.log(calculate.addNumbers1(10,5))

//a. time delay
//b. promise return

//a. async-await async

// promise return

//header
// sidebar
// footer


//create a js function to get the sum of number in an array

const getSum=(arr)=>{
    let sum=0;
    console.log("length:",arr.length)
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum

}
const arr=[1,2,3,4,5,6,7,8,9,10]
const result=getSum(arr)
console.log("the sum is: ",result)