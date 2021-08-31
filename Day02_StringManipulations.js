const location = 'Regent Street, London, England'

console.log(location.indexOf('S'));


var result = location.indexOf('S') < 8 ? true : false;

console.log(result);

var fname = 'AhMEt'

var fname2 = fname.slice(0, 1).toUpperCase() + fname.slice(1).toLowerCase()
//fname = fname.substring(1).toLowerCase()
console.log(fname2);

let str1 = 'I love Javascript'
let len = str1.length;
console.log(len);

//indexof
let indexOfLove = str1.indexOf('love')
console.log(indexOfLove);

//slice(start, end(optional))

//Note: if there's no end index, then end index will be the last index
//Note: when slice(-5), returns LAST 5 characters

console.log(str1.slice(3));
console.log(str1.slice(-3))
console.log(str1.slice(5,1));

//substring(start, end(optional))
//Note: when substring(-5), returns all characters
//Note: wehen substring (5,1) = substring(1,5)
console.log('SUBSTRING');
console.log(str1.substring(3));
console.log(str1.substring(-3))
console.log(str1.substring(5,1));

/* 
Strings Manipulations:
*/
console.clear();
let str1='I love javascript';
//length
let len=str1.length;
console.log(len)
//indexof
//find index of love
let indexOfLove=str1.indexOf('love')
console.log(indexOfLove)
//slice(start, end(optional))
//substring(start,end(optional))
//Note: if there is no end index, then end index will be the last index
//Note: when slice(-5), returns LAST 5 characters
//Note: when substring(-5) returns all charachters
//Note: substring(5,1) = substring(1,5)
console.log(str1.slice(3));//"ove javascript"
console.log(str1.slice(-3));//ipt
console.log(str1.slice(5,1));//""
//substring
console.log(str1.substring(3));//"ove javascript"
console.log(str1.substring(-3));//"I love javascript"
console.log(str1.substring(5,1));//" lov"
