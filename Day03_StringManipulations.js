// concat() : used to concatanate the strings

let fName = 'John'
let lName = 'Walker'

console.log(fName + ' ' + lName);
console.log(fName.concat(' ' + lName));

//trim(): remove spaces from the beginning and the end
let words = ' Today is Wednesday '
let trimmed = words.trim()
console.log(trimmed);

//charAt('index'): return the character at that index. Index starts from 0
let charAt4 = words.charAt(4)
console.log(charAt4);

//split('character'): returns an array that is splitted from this character
let splitted = words.split(' ');
console.log(splitted);

let trimSplitted = words.trim().split(' ')
console.log(trimSplitted);

let states = 'AL, AK, AZ, AR, TX, NY, NF, FL'
let listOfStates = states.split(',')
console.log(listOfStates);