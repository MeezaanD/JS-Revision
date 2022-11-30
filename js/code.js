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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
for in (reads the property)(will give the index)
for of (will give the value) (displays the element in the array)
for(; ;)
while
do while
.forEach() 
*/

// let numbers = [8, 9, 3, 12, 34];
// let people = {
//     name: 'Brogan',
//     surname: 'Gay',
//     email: 'BroganisGay@gmail.com'
// }

// for(let numb of numbers)  {
//     console.log(numb);
// }
// console.table(numbers);

// for(let p in people) {
//     console.log(`${p} => ${people[p]}`);
// }

// for of
// for(let numb of numbers){
//     console.log(numbers);
// }

// for(let i =0;;) {
//     console.log("Lets find out");
// }

// for(let i = 0; i<5; i++){
//     console.log("Hello World");
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

/* WHILE */

// let cnt = 0;
// while(cnt < numbers.length) {
    //     console.log(`Step: ${numbers[cnt]}`);
    //     cnt++;
    // }
 
/*DO WHILE */ 

// let cnt = 0;
//  do{
//     console.log(`Step: ${numbers[cnt]}`);
//     cnt++;
// }while(cnt < numbers.length);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

/* FUNCTION */

// function addition(numb1, numb2) {
//     console.log("Answer:", numb1 + numb2);
// }
// addition(4, 5,);
// addition(5, 7);
// addition(8, 1);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Arrow method */ 
// let plus = (numb1, numb2) => {
//     console.log("Result:", numb1 + numb2);
// }
// plus(2, 5);

// function subtraction(numb1, numb2) {
//     return(numb1 - numb2) 
// }
// document.write("Result:", subtraction(9, 2));
// console.log("Result:", subtraction(5, 2));

// ((numb1, numb2)=>{
//     console.log(numb1 + numb2);
// })(8, 2);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Ternary Operator - (if statement, but simplified ) */

// let age = prompt("enter age")
// console.log(age >= 17 ? "You're Qualified":"You're not qualified");

// function sumOf(...args) {
//     return args.reduce( (a, b) => {
//        return a + b
//     })
// }
// console.log(sumOf(1, 2, 3, 4, 5));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Constructor Function */

// function Person(...details) {
//     this.firstName = details[0];
//     this.lastName = details[1];
//     this.email = details.at(-1);
//     // -1 will give man the last result innit 
// }
// let person1 = new Person("Mario", "Luigi", "ben10@gmail.com")
// console.log(person1);
// console.dir(person1);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Joel Approach */
// function PersonDetails(firstName, lastName, 
//     email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;

//     this.getFirstName = ()=> {
//         return this.firstName
//     }
//     this.setFirstName = (value) =>{
//         this.firstName = value;
//     }
//     this.getLastName = ()=> {
//         return this.lastName
//     }
//     this.setLastName = (value) =>{
//         this.lastName = value;
//     }
//     this.getEmail = ()=> {
//         return this.email
//     }
//     this.setEmail = (value) =>{
//         this.email = value;
//     }    
    
//     this.display = ()=> {
//         return `
//         Name: ${this.getFirstName()}
//         Surname: ${this.getLastName()}
//         Email: ${this.getEmail()}`;
//     }
// } 
// let person1 = new PersonDetails("Peter", "Henk",
// "peter@gmail.com");
// console.log(person1.display());
// console.log("=============");
// person1.setFirstName("Sarah");
// person1.setLastName("James");
// person1.setEmail("sarah@gmail.com");
// console.log(person1.display());
 
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Method Using Class */

// class PersonDetails{
//     // Private
//     #firstName;
//     #lastName;
//     #email;
//     constructor(firstName, lastName, email) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#email = email;
//     }
//     // FirstName
//     get firstName() {
//         return this.#firstName;
//     }
//     set firstName(value) {
//         this.#firstName = value;
//     }
//     // LastName
//     get lastName() {
//         return this.#lastName;
//     }
//     set lastName(value) {
//         this.#lastName = value;
//     }
//     // Email
//     get email() {
//         return this.#email;
//     }
//     set email(value) {
//         this.#email = value;
//     }
//     // Display
//     display() {
//         console.log(`
//         Name: ${this.firstName}
//         Surname: ${this.lastName}
//         Email: ${this.email}`);
//     }
// }
// let person1 = new PersonDetails("Joel", "Mukanya", "joel@gmail.com");
// person1.display();
// console.log("===========");
// person1.firstName = "Peter";
// person1.lastName = "Henk";
// person1.email = "peter@gmail.com"
// person1.display();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

/* onclick */

// function addition(e){
//     e.preventDefault();
//     let numb1 = document.querySelector("#numb1").value;
//     let numb2 = document.querySelector("#numb2").value;
//     document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
// }

// function addition(e){
//     e.preventDefault();
//     let numb1 = document.querySelector("#numb1").value;
//     let numb2 = document.querySelector("#numb2").value;
//     // document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
//     document.querySelector('#output').innerText = 
//     parseInt(numb1) + parseInt(numb2);
// }

/* addEventlistener */

let btnAddition = document.querySelector('button');
btnAddition.addEventListener('click', (e)=> {
    e.preventDefault();
    let numb1 = document.querySelector("#numb1").value;
    let numb2 = document.querySelector("#numb2").value;
    document.querySelector('#output').innerText = 
    parseInt(numb1) + parseInt(numb2);
    
})