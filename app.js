// Exercise-1

// let number=prompt("Eded daxil edin:");
// if (number%2==0) {
//     console.log(number + " " + "is a Even numer.");
// }
// else{
//     console.log(number + " " + "is a Odd numer.");
// }


// Exercise-2

// let num1 =+prompt("Enter number1:"); 
// let num2 =+prompt("Enter number2:"); 

// if (num1 > num2) {
//     console.log("num1 is the largest");
// }
//  else if (num1 < num2) {
//     console.log("num2 is the largest");
// }
//  else {
//     console.log("num1 and num2 are equal");
// }


// Exercise-3

// let num1=23;
// let num2=4;
// let num3=-56;
// if (num1>num2 && num1>num3) {
//     console.log(num1);
// }
// else if(num2>num3 && num2>num1){
//     console.log(num2);
// }
// else{
//     console.log(num3);
// }


// Exercise-4

// let month=+prompt("Enter month:");
// if(month>=1 && month<=12){
//     console.log("Correct month.");
// }
// else{
//     console.log("Invalid month.");
// }
// if(month==2){
//     let year=+prompt("Enter year:");
//     if(year%4==0 && year%400===0){
//         console.log("29 days");
//     }
//     else{
//         console.log("28 days");
//     }
// }
// else if (month==4 || month==6 || month==9 || month==11) {
//     console.log("30 days");
// }
// else{
//     console.log("31 days");
// }

// Exercise-5

// let Grade=+prompt("Enter Grade:")
// if (Grade>=90 && Grade<=100){
//     console.log("S grade");
// } 
// else if(Grade>=80 && Grade<90){
//     console.log("A grade");
// }
// else if(Grade>=70 && Grade<80){
//     console.log("B grade");
// }
// else if(Grade>=60 && Grade<70){
//     console.log("C grade");
// }
// else if(Grade>=50 && Grade<60){
//     console.log("D grade");
// }
// else if(Grade>=40 && Grade<50){
//     console.log("E grade");
// }
// else if(Grade>=0 && Grade<40){
//     console.log("Student has failed");
// }
// else{
//     console.log("Invalid marks");
// }


// Exercise-6

// let year=+prompt("Enter year:");
// if(year%4==0 && year/100!==0 && year%400==0){
//     console.log("Year" + " " + year + " " + "is a leap year");
// }
// else{
//     console.log("Year" + " " + year + " " + "is not a leap year");
// }


// Exercise-7

// let num1=+prompt("Enter Number1:");
// let num2=+prompt("Enter Number2:");
// let op=prompt("Enter Operation:");
// if (op=="add") {
//     console.log(num1+num2);
// }
// else if(op=="subtract"){
//     console.log(num1-num2);
// }
// else if(op=="multiply"){
//     console.log(num1*num2);
// }
// else if(op=="divide"){
//     console.log(num1/num2);
// }
// else if(op=="modulus"){
//     console.log(num1%num2);
// }
// else{
//     console.log("Invalid operation");
// }


// Exercise-8

// let side1=+prompt("Enter Side1:");
// let side2=+prompt("Enter Side2:");
// let side3=+prompt("Enter Side3:");
// if (side1==side2==side3){
//     console.log("Equilateral triangle.");
// }
// else if(side1==side2 && side3){
//     console.log("Isosceles triangle.");
// }
// else{
//     console.log("Scalene triangle.");
// }
