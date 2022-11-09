const myArray = [1,2,3,4,5,6,7,8,9]
const AmountOfTimesToMove = 3;
    
for(let i=0;i<AmountOfTimesToMove;i++) {
    let temp1 = myArray[0];
    myArray.splice(0,1);
    myArray.push(temp1);
}

console.log(myArray);


for(let num=2; num<=16; num=num+2) {
    console.log(num);
}

const myArray2 = ['a','b','c','d','e'];

for(let i=0; i<myArray2.length; i++) {
    console.log(myArray[i]);
}




//✅
const myArray3 = [1,2,3,4,4,5,6,7,11];
let arrayString = "";

for (let index = 0; index<myArray3.length; index++ ) {
    let num = myArray3[index];
    if (num%2===1) {
        arrayString = arrayString + myArray3[index] + " ";
    } 
}
console.log(arrayString);






const myArray4 = [1,2,3,4,];

const multi = 1; 
let arrayString1 ="";
for (let i=0; index<myArray4.length; i++) {
    arrayString1 += myArray4*multi + " "; 
}
console.log(arrayString1);
