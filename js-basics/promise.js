const login = (username,password)=>{
    return new Promise((resolve,reject)=>{
        //login,admin,password
        if(username ==="admin" && password ==="password"){
            resolve("User Data")
        }else{
            reject("Credential does not match.")
        }
    })
}

let result=login("admin","admin") //promise pending

//handlingg
result
    .then((resData)=>{
        //success login
        console.log(resData)
    })
    .catch((rejData)=>{
        //failed login
        console.log(rejData)
    })