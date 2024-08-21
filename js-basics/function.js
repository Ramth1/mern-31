function addNumber(x,y=0){
    const z=x+y
    return z
}

const a=10
const b=20
const c=addNumber(a)
console.log("the sum is: ",c)


const d=20
const e=5
const f=addNumber(d,e)
console.log("the sum is: ",f)