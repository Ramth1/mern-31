class Admin{
    name;
    address;
    #email;
    static role="admin"

    constructor(_name,_address,_email){
        this.name=_name
        this.address=_address
        this.#email=_email
    }

    //set email(_email){
    // this.#email=_email
    // }

    getemail(){
        return this.#email
    }
}

const admin=new Admin("ram","kathmandu","ram@gmail.com")
const email=admin.getemail()
console.log(admin)
console.log(email)

//db operation
class DatabaseService{
    #connect;  //making it private variable
    constructor(){
        //db connect
         //select db
          this.#connect=""; //connection instance
    }
    createOperation = ()=>{
        //query
        //connection //query execute =>query
            const result=null
    }
}
const db=new DatabaseService()
db.createOperation()