//AreaCircle
const areaCircle = r => {const pi = 3.14
return pi*(r**2)}

console.log(areaCircle(5));

//body mass index bmi= weight/(height*height)
const calcBodyMass = (w, h)=> Math.round(w/(h*h));
console.log(calcBodyMass(178, 1.72));

//leap year
console.clear();
const isLeap = y => y % 4 == 0 && (y % 100 !== 0 || y % 400 === 0);
console.log(isLeap(1996));


//whoPays
console.clear();
var arrNames= ['Sam', 'Tom', 'Cindy', 'Cole', 'Jim']
const whoPays = names => 
{
    let random= Math.floor(Math.random()*10);
    console.log(random);
    
    return random<names.length ? names[random]:'no one pays today'
};

console.log(whoPays(arrNames));

/* 
Create a function which returns the number of true values there are in an array
countTrue([true,false,true,true]) -> 3
countTrue([true,false]) -> 1
*/
console.clear();
var arrCount = [true,false,true,true]  
const countTrue = arr => {
    return arr.filter(t=>t==true).length;
}


console.log(countTrue(arrCount));
/* 
A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not. 
isRepdigit(66) ➞ true isRepdigit(6666) ➞ true isRepdigit(0) ➞ true isRepdigit(-11) ➞ false

611 - not repdigit
666 - repdigit
-1 - repdigit
*/
console.clear();




const isRepDigit = n => {
    let newArr = (""+n).split('');

    for(i = 0; i < newArr.length; i++){
        if(newArr[i]!=newArr[0]){
            return false;
        }      
    }
    return true;
    
}

console.log(isRepDigit(0));


/*

Create a function that counts the integer's number of digits.

count(318) -> 3
count(-1232) -> 4
count(46666) -> 5
-1232 -> 1232 -> 4

*/

function count(n){
    return Math.abs(n).toString().length;
}

console.log(count(11000));
/* 

Create a function to return 
the second largest number from an array


Sort the array in descending order -> Take the 2 value 

*/
console.clear();

const secondLargest= nums => {
    nums.sort((a,b) => b-a);
 
    return arr[1];
}
   
   let arr = [100,5,2,10];
   
   console.log("The second largest value is "+secondLargest(arr));

   /* 
   Get both sides of the triangle and print the hypothenus of the triangle.
   Round your answer to the nearest whole number.
   */

   console.clear();

   const hypothenus = (base, altitude) => Math.round(Math.sqrt(base**2+altitude**2));

   console.log(hypothenus(3, 4));

   /* 
   Create a function customerInfo
   it takes 2 parameters; Name and CardNum,
   Returns the info as following
   Customer first letter in caps, and rest is masked
   Customer card number first 12 digist is masked(not visible) and the last 4 digits is visible
   Name = Johnny Cash
Card Num = 1234 1234 1234 5684
J*********
**** **** **** 5684
1)take first letter -> Make it UpperCase
2) take the rest -> replace with *
3) print 12 '*' 
4) print the last 4 digits of the credit card.
*/
console.clear();

const maskInfo=(cName, cardNum) => {
    cName = cName.slice(0,1).toUpperCase() + cName.slice(1).replaceAll(/[a-z]/gi, '*')
    cardNum = cardNum.slice(0,13).replaceAll(/[0-9]/gi, '*') + cardNum.slice(12);

    console.log(`cname : ${cName} cardNum ${cardNum}`);
    
}
maskInfo('Kaan', '1234567891011125');

