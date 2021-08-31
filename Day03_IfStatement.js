/* COMPARISONS */
console.clear();
const s1 = 5; 
console.log(s1 == 5);       // true
console.log(s1 == "5");       // true
console.log(s1 === "5");  // false
console.log(s1 !== 5);      // false
console.log(s1 != "5");     // false 
console.log(s1 !== "5");  // true
console.log(s1 > 5);     // false
console.log(s1 > "4");     // true
console.log(s1 >= 5);    // true
console.log(s1 > "6");     // false
/* LOGICAL OPERATORS */
let s2 = true;
let s3 = true;
console.log(s2 && true); //true         
console.log(s2 && s3); //true               
console.log(s2 && s3 && false); //false
s3 = false;
console.log(s2 || s3 || false);//true
s3 = null;
console.log(s2 && s3);  //true && null = null           
console.log(s2 || s3);  //true || null =true
console.log(!s2);       //!true = false
console.log(s3);        //null
console.log(!s3);       //true

/*
if(true){
print if true
}else{
print if false
}
*/
console.clear();
const x=4,y="4",z=5;
if(x==y){//true
  console.log('x and y equal');
}else{
  console.log('x and y NOT equal')
}
if(x===y){//false
  console.log('x and y equal')
}else{
  console.log('x and y NOT equal');
}
if(x>=y && z>=y){//true
  console.log('true');
}else{
  console.log('false');
}
if(0){//false
   console.log('true');
}else{
   console.log('false');
}
if(10){//true
   console.log('true');
}else{
   console.log('false');
}
if(NaN){//false
   console.log('true');
}else{
   console.log('false');
}
if(null){//false
   console.log('true');
}else{
   console.log('false');
}
if(""){//false
   console.log('true');
}else{
   console.log('false');
}
if(undefined){//false
   console.log('true');
}else{
   console.log('false');
}
if("javascript"){//true
   console.log('true');
}else{
   console.log('false');
}
/*
if(true){
print if true
}else{
print if false
}
*/
console.clear();
const x=4,y="4",z=5;
if(x==y){//true
  console.log('x and y equal');
}else{
  console.log('x and y NOT equal')
}
if(x===y){//false
  console.log('x and y equal')
}else{
  console.log('x and y NOT equal');
}
if(x>=y && z>=y){//true
  console.log('true');
}else{
  console.log('false');
}
if(" "){//true
    console.log('true');
  }else{
    console.log('false')
  }
  
  
  if("0"){//true
    console.log('true');
  }else{
    console.log('false')
  }
 /*
 IMPORTANT NOTE:
0, FALSE, null, undefined, "" , NaN(Not A Number)  considered as FALSE.
All other values are TRUE
 */ 
if(0){//false
   console.log('true');
}else{
   console.log('false');
}
if(10){//true
   console.log('true');
}else{
   console.log('false');
}
if(NaN){//false
   console.log('true');
}else{
   console.log('false');
}
if(null){//false
   console.log('true');
}else{
   console.log('false');
}
if(""){//false
   console.log('true');
}else{
   console.log('false');
}
if(undefined){//false
   console.log('true');
}else{
   console.log('false');
}
if("javascript"){//true
   console.log('true');
}else{
   console.log('false');
}