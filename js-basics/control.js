/**
 * if-else
 * else-if
 * switch-case
 * loop
 */

//expression =>true, not null, non-empty, not undefined, non zero numeric vairable(truthy)
//falsy =>flase, null, 0, empty variables, undefined,

const name=""
//if(name!==""){ }
if(name){
    //body
    //if expression is true
    console.log("Your name is:",name)
}
else{
    //if not true
    //is optional
    console.log("Name is empty")
}

const act="delete"  //crud ===>create, read, update, delete

// nesting of if-else
if(act==="create"){
    //
}else{
    //
    if(act==="read"){

    }else{
        if(act ==="update"){

        }else{
            //
            if(act==="delete"){

            }else{
                // not mentioned
            }
        }
    }
}

if(act==="create"){
    //create body
}else if(act==="read"){
    //read body
}else if(act ==="update"){
    //update
}else if(act==="delete"){
    //delete
}else{
    //not mentioned
}


// create a javascript code block to calculate percentage and division based on percentage
// you have a variable storing marks obtained.
// the value should be less than 500 and greater than or equal to 0
// calculate percentage if total score is 500
// calculate division based on the percentage;
// for division consider,
// percentage >=80,  =>first division with distinction
//percentage >=60, <80 =>first division
//percentage >=45 , <60 =>second division
//percentage >=35 , <45 =>third division
//percentage <35   => sorry! you are failed

let marks_obtained=300
let percentage=marks_obtained/500*100
if(percentage>=80 ){
    console.log("first division with distinction")
}else if(percentage>60){
    console.log("first division")
}else if(percentage>=45){
    console.log("second division")
}else if(percentage >=35){
    console.log("third division")
}else{
    console.log("sorry! you are failed")
}


//calculate utility bill for electricity 
// assume a household consumes 350 units of electricity in a month.
// consider total bill to be paid.
// consider the following.
// total units consume is less than 20, a lumsum amount of Npr.80 has to be paid.
// for next 20 units, the rate is Npr. 5/unit.
// for next 30 units, the rate is Npr. 7.5/unit.
// for next 50 units, the rate is Npr. 10/unit.
// for next 100 units, the rate is Npr. 15/unit.
 // and above all, the rate is Npr. 20/unit

 let total_bill=0;
 let total_unit=350
 if(total_unit<=20){
    total_bill=80
 }else if(total_unit<=40){
    total_bill=80+(total_unit-20)*5
 }else if(total_unit<=70){
    total_bill=80+20*5+(total_bill-30)*7.5
 }else if(total_unit<=120){
    total_bill=80+20*5+30*7.5+(total_bill-50)*10
 }else if(total_unit<=220){
    total_bill=80+20*5+30*7.5+50*10+(total_bill-100)*15
 }else{
    total_bill=80+20*5+30*7.5+50*10+100*15+(total_unit-20-20-30-50-100)*20
 }
 console.log(total_bill)


 //calculate tax to be paid monthly and yearly with net income
 //consider a software developer earns yearly Npr.5000000.
 //the tax bracket for is as follow
 // for the first Npr. 500000, 1%
 // for next Npr. 200000 ===>15%
 // for next Npr. 300000 ===>20%
 // for next Npr. 1000000  ===>25%
 // for next Npr. 2000000  ===>30%
 // and for any surplus amount =>36%

 // calculate => a. Net salary yearly, b. net salary monthly, c. tax to be paid yearly d. tax to be paid monthly

 let yearly_salary=5000000
 let net_salary_yearly=0
 let net_salary_monthly=0
 let tax=0
 let tax_monthly=0

 if(yearly_salary<=50000){
    net_salary_yearly=5000000-(yearly_salary-50000)*1/100
    tax=(yearly_salary-50000)*1/100
 }else if(yearly_salary<=200000){
    net_salary_yearly=5000000-50000*1/100-(yearly_salary-200000)*15/100
    tax=50000*1/100+(yearly_salary-200000)*15/100
 }else if(yearly_salary<=300000){
    net_salary_yearly=5000000-50000*1/100-200000*15/100-(yearly_salary-300000)*20/100
    tax=50000*1/100+200000*15/100+300000*20/100
 }else if(yearly_salary<=1000000){
    net_salary_yearly=5000000-50000*1/100-200000*15/100-300000*20/100-(yearly_salary-1000000)*25/100
    tax=50000*1/100+200000*15/100+300000*20/100+1000000*25/100
 }else if(yearly_salary<=2000000){
    net_salary_yearly=5000000-50000*1/100-200000*15/100-300000*20/100-1000000*25/100-(yearly_salary-2000000)*30/100
    tax=50000*1/100+200000*15/100+300000*20/100+1000000*25/100+2000000*30/100
 }else{
    net_salary_yearly=5000000-50000*1/100-200000*15/100-300000*20/100-1000000*25/100-2000000*30/100-(yearly_salary-(50000+200000+300000+1000000+2000000))*36/100
    tax=50000*1/100+200000*15/100+300000*20/100+1000000*25/100+2000000*30/100+(yearly_salary-(50000+200000+300000+1000000+2000000))*36/100
 }
console.log("yearly salary is:",net_salary_yearly)
console.log("monthly salary is:", net_salary_yearly/12)
console.log("yearly tax", tax)
console.log("monthly tax is:",tax/12)



//create a day variable storing name of any day from sunday to saturday
// print, if day is saturday or sunday ===>holiday
// print, if day is friday ===> weekend
// print, if day is any other day ===> weekday

let day="friday"
switch(day){
    case "saturday":
    case "sunday":
        console.log("holiday")
        break;
    case "friday":
        console.log("weekend")
        break;
    default:
        console.log("weekday")
        break;
}