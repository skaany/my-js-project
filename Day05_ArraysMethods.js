var friendList = ['sam','tom','tim','john','bob']
console.log(friendList);

/* 
push adds a new element to the end of an element whereas pop removes the last element. 
pop doesn't need a parameter.
unshift adds a new element to the beginning of an array where as shift removes an element from the 
beginning of an array

push -> adds end     pop -> removes the end
unshift -> adds to the beginning   shift -> removes from the begining
so basically pop and shift removes
push and unshift adds
unshift adds to the first index, push adds to the last index
shift removes the first index, pop removes the last index


*/

//1. push()     : add element at the end of an array
friendList.push('jack');
console.log(friendList);

//2. unshift()  : add element to the beginning of an array
friendList.unshift('fred')
console.log(friendList);

//3. pop()      : remove from the last element of an array
friendList.pop();
console.log(friendList);

//4. shift()    : remove the first element of an array
friendList.shift();
console.log(friendList);
console.clear()

var ages = [10, 14, 34, 16, 10]
console.log(ages);
console.log(typeof(ages));

//5. indexOf(item) -> returns the first index of the item
//5. indexOf(item, startingIndex) -> returns the first index of the item after startingIndex
//5. lastIndexOf(item) -> returns the last index of the item
console.log(ages.indexOf(10));
console.log(ages.indexOf(10, 1));