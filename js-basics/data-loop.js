let product = [
    {name:"Iphone",price:94000,discount:10},
    {name:"bag",price:3400,discount:15}

]
product[5]={name:"laptop",price:10400,discount:15}
for(i=0;i<product.length;i++){
    if(product[i]){
        console.log("Product Name: ",product[i].name)
        console.log("Product Price: ",product[i].price)
        console.log("Product Discount: ",product[i].discount)
        let after_discount=product[i].price-product[i].price*product[i].discount/100
        console.log("After Discount: ",after_discount)
        console.log("---------------------------------")
    }
    
}

//for-in  it takes index value
console.log("for-in")
for(let i in product){
    
        console.log("Product Name: ",product[i].name)
        console.log("Product Price: ",product[i].price)
        console.log("Product Discount: ",product[i].discount)
        let after_discount=product[i].price-product[i].price*product[i].discount/100
        console.log("After Discount: ",after_discount)
        console.log("---------------------------------")
}
    

//for-of  it takes index value
console.log("for-of")
for(let elem of product){
    if(elem){
        console.log("Product Name: ",elem.name)
        console.log("Product Price: ",elem.price)
        console.log("Product Discount: ",elem.discount)
        let after_discount=elem.price-elem.price*elem.discount/100
        console.log("After Discount: ",after_discount)
        console.log("---------------------------------")
    }
    
}


//create an array of students having name, email, marksobt as an object data
//Store atleast 10 students data on that array
// consider 500 as total score.
// print each student's percentage and division
// >=80 =======>distinction
// >=60 ,<80 ===>first
// >=45 ,<60 ===>second 
// >=35 ,<45 ===>third
// <35 ====> Sorry! you are failed

let students=[
    {name:"ram",email:"ram@gmail.com",marksObt:490},
    {name:"laxman",email:"laxman@gmail.com",marksObt:489},
    {name:"jharna",email:"jharna@gmail.com",marksObt:479},
    {name:"chandra",email:"chandra@gmail.com",marksObt:487},
    {name:"om",email:"om@gmail.com",marksObt:489},
    {name:"hari",email:"hari@gmail.com",marksObt:496},
    {name:"shyam",email:"shyam@gmail.com",marksObt:468},
]
for(let ele of students){
    console.log("name: ",ele.name)
    let percentage=ele.marksObt/500*100
    console.log("percentage obtained is: ",percentage)
    if(percentage>=80){
        console.log("division obtained is distinction ",)  
    }else if(percentage<80 && percentage>=60){
        console.log("division obtained is first")
    }else if(percentage<60 && percentage>=45){
        console.log("division obtained is second")
    }else if(percentage<45 && percentage>=35){
        console.log("division obtained is third")
    }else if(percentage<35){
        console.log("Sorry! you are failed")
    }
    
}