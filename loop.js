let i=1
//do-while
do{
    console.log(i)
    i++
}while(i<=10)

//while
i=1
while(i<=10){
    console.log(i)
    i++
}

//for
for(i=1;i<=10;i++){
    console.log(i)
}

/**
 * 1
 * 1 2 
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 */

for(a=1;a<=5;a++){
    let i=""
    for(b=1;b<=a;b++){
        i+=b+" "
    }
    console.log(i)
}

/**
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */
for(a=5;a>=1;a--){
    let i=""
    for(b=1;b<=a;b++){
        i+= b+" "
    }
    console.log(i)
}