const func1 = () =>{
    return new Promise((res,rej)=>{
        let status=true;
        if(status){
            res("I am resolved of func1")
        }else{
            rej("I am reject of func1")
        }
    })
}

const func2 = () =>{
    return new Promise((res,rej)=>{
        let status=true;
        if(status){
            res("I am resolved of func2")
        }else{
            rej("I am reject of func2")
        }
    })
}

const func3 = () =>{
    return new Promise((res,rej)=>{
        let status=true;
        if(status){
            res("I am resolved of func3")
        }else{
            rej("I am reject of func3")
        }
    })
}

//promise chain
func1()
    .then((res1)=>{
        console.log(res1)
        return func2()
    })
    .then((res2)=>{
        console.log(res2)
        return func3()
    })
    .then((res3)=>{
        console.log(res3)
    })
    .catch((rej)=>{
        console.log(rej)
    })


let promiseArr=[func1(),func2(),func3()]
//handling
Promise.all(promiseArr)  // all resolved
    .then((res)=>{
        console.log(res)
    })
    .catch((rej)=>{
        console.log(rej)
    })

Promise.allSettled(promiseArr) //any resolved
    .then((res)=>{
        console.log(res)
    })