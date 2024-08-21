//calculate divisions of a student using promise functions
//create 2 different functions. a.to get percentage (promise based) b. to get the division based on promise
//make a program to print the division and percentage of the student

const getPercent = async(marks_obtained,total)=>{
    try{
        if(total<0){
            throw "total must be greater than zero"
        }
        let per=marks_obtained/total*100
        return per
    }catch(exception){
        throw exception
    }
}

const division = async(per) =>{
        if(per>=80){
            return ( "distinction")
        }else if(per>=70){
            return ( "first division")
        }else if(per>=45){
            return ( "second division")
        }else if(per>=35){
            return ( "third division")
        }else if(per<35 && per>0) {
            return ( "failed")
        }else{
            throw "percentage must be greater than zero"
        }
   
}

const callHandler = async() =>{
    try{
        const per= await getPercent(450,500)
        const div=await division(per)
        console.log("Percentage: ",per,"%")
        console.log("Division: ",div)

    }catch(exception){
        console.log(exception)
    }
}

callHandler()