class Admin{
    name;
    address;
    #email;
    static role="admin"

    set email(_email){
        this.#email=_email
    }
    get email(){
        return this.#email
    }
    setName(_name){
        this.name=_name;
    }

    getName=function(){
        return this.name;
    }

    setAddress=(_address)=>{
        this.address=_address
    }
}
const admin= new Admin()
admin.setName("Ram Thapa")
admin.email="ram@gmail.com"
console.log(admin)