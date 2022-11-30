// --------------------------------------------------------------------------------------------------------------------------------

// To find the middleIndex you need to determine the length and then divide by 2
// Math trunc allows you to get the integer value
// --------------------------------------------------------------------------------------------------------------------------------
// console.log("sqrt(): ", Math.sqrt(100));

// let data = [9, 3, 1, "Peter", 5, 10];
// let size = data.length ;
// console.log("Array size: ",size);
// console.log("Element", data[size]);
// console.log("at(): ", data.at(-1));


// To get the highest value from an array NB, does not work if string is included remove string first
// let onlyNumbers = data.splice(3, 1);
// console.log("Max:", Math.max(...data));

// let onlyNumbers = data.filter( item => {
//     if(typeof item != 'string')
//     return item;
// })
// console.table(onlyNumbers);



// let middleIndex = Math.trunc(data.length -1)/2;
// if( data.length
//      % 2 == 0) {
//     console.log(data.slice(middleIndex, middleIndex + 2));
// }else {
//     console.log(data[middleIndex]);
// }
// console.log("middleIndex:", middleIndex);
// console.log("middle element: ", data.slice(middleIndex, middleIndex + 2));

// let digits = [1, 3, 5, 17, 29]
// console.log("Max:", Math.max(...digits));
// String Method
// let sentence = "I love programming";
// console.log(sentence);
// console.log(sentence.toLowerCase());

// TO PUT IN ARRAY OF WORD
// console.log(sentence.split(' '));

// Date code
// let myDate = new Date();
// console.log("date:", myDate.getDate);

// Add days to current date
// const myDate = new Date();
// myDate.setDate(myDate.getDate() + 5)

// console.log(myDate)


// if statement
// let age = 17;
// if(age > 17) {
//     console.log("You're qualified");
// }else {
//     console.log("You're not qualified");
// }

// Nested if statement
// let age = 18
// let salary = 5000;
// if(age > 17) {
//     if(salary >= 5000) {
//         console.log("well done");
//     }else {
//         console.log("Present the second payslip");
//     }
// }else {
//     console.log("You're not qualified");
// }

// if( age > 17 && salary >= 5000) {
//     console.log("How you doin?");
// }else {
//     console.log("Bye");
// }

// Switch Statement
// let monthInt = 1;
// switch(monthInt) {
//     case 1:
//         console.log("January");
//     break;
//     case 2:
//         console.log("February");
//     break;
// }
// let grade = 86;
// switch(true) {
//     case grade == 100:
//         console.log("You're Awesome");
//     break;
//     case (grade >= 90) && (grade <=99) :
//         console.log("Well done");
//     break;
//     case (grade >=75 ) && (grade <=89 ):
//         console.log("Distinction");
//     break;
//     case (grade >=50 ) && (grade <=74):
//         console.log("pass");
//     break;
//     // case (grade >=49) && (Math.sign grade != -1):
//     //     console.log("Fail");

// }

/*
for in (reads the property)(will give the index)
for of (will give the value) (displays the element in the array)
for(; ;)
while
do while
.forEach() 
*/

let numbers = [8, 9, 3, 12, 34];
let people = {
    name: 'Brogan',
    surname: 'Gay',
    email: 'BroganisGay@gmail.com'
}
// for(let numb of numbers)  {
//     console.log(numb);
// }
// console.table(numbers);

// for(let p in people) {
//     console.log(`${p} => ${people[p]}`);
// }

// for of
for(let numb of numbers){
    console.log(numbers);
}