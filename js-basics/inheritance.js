class Database {
    connection;

    constructor(){
        this.connection="Connected"
        console.log("I am in Database class")
    }   
    getConnection(){
        return this.connection;
    }
}

class User extends Database{
    constructor(){
        //this.constructor()
        super() //this will call parent Constructor
        console.log("i am in user class")
        this.connection;
    }
    getConnection(){
        return super.getConnection()
    }
   
}

const userObj=new User()
console.log(userObj.getConnection())
