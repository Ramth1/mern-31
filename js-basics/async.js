// const func1= () =>{
//     console.log("I am in func1")
//     //validate
// }
// const func2 = () =>{
//     console.log("I am in func2")
//     //query execute
// }
// const func3 = () =>{
//     console.log("I am in func3")
//     // access defined
// }

// //synchronous
// func1()
// func2()
// func3()

// //asynchronous
// setTimeout(func1,3000) //3secs
// setTimeout(func2,1000) //1secs
// setTimeout(func3,2000) //2secs

// for(let i=1;i<=10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000*i)
// }

// let i=1;
// const timer=setInterval(()=>{
//     console.log(i++)
//     if(i>10){
//         clearInterval(timer)
//     }
// },1000)


//Digital timer
const timer = ()=>{
    const date=new Date()
    const hour= date.getHours();
    const minute=date.getMinutes();
    const seconds=date.getSeconds();
    const time=hour+":"+minute+":"+seconds
    console.log(time)
    document.getElementById("clock").innerHTML=time
}
setInterval(timer,1000 );