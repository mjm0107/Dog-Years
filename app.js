//constant variable for my age
const myAge = 21;

//local variable for the early Years of doghood
let earlyYears = 2;

//earlyYears times 10.5
earlyYears *= 10.5;

//laterYears equals my age minus 2
let laterYears = myAge - 2;

// laterYears times 4
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//myAgeInDogYears equals earlyYears plus laterYears
let myAgeInDogYears = earlyYears + laterYears;

//myName equals Matthew but lowercased
let myName = 'Matthew'.toLowerCase();

//checking to see if it worked properly
console.log(myName)

//console log checking if it all works in conjunction
console.log(`my name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.` )
