/*let name="Himas";
let age=23;
let course="Computer Science";
let totalFee=100000;
let paidFee=50000;

let mathsMarks=85;
let physicsMarks=86;
let chemistryMarks=80;
let attendance=90;



let teacherStatus="Available";

console.log("Student Name:"+name);
console.log("Student Age:"+age);
console.log("Course Enrolled:"+course);

let balanceFee=totalFee-paidFee;
console.log("Balance Payment Fee:"+balanceFee);

let installmentAmount=balanceFee/5;
console.log("Installment Amount:"+installmentAmount);

let averageMarks=(mathsMarks+physicsMarks+chemistryMarks)/3;
console.log("Average Marks:"+averageMarks);

let result=averageMarks=60?"pass":"fail";
console.log("Result:"+result);

if (mathsMarks>=75 && physicsMarks>=75 && chemistryMarks>=75){
    console.log("Great job in All Subjects!");
}
else if (mathsMarks>=50 && mathsMarks<75 && physicsMarks>=50 && physicsMarks<75 && chemistryMarks>=50 && chemistryMarks<75){
    console.log("Good effort in All Subjects, but there's room for improvement.");
}
else{
    console.log("You need to work harder in All Subjects.");
}

if (teacherStatus==="Available"){
    console.log("You can schedule a meeting with your teacher.");
}

if(averageMarks>=80){
    console.log("You selected a scholarship!");
}
else{
    console.log("Not Selected for scholarship");
}

if (attendance>=70){
    console.log("Your are eligible for the exam.");
}
else{
    console.log("Not Eligible for the exam.");
}

console.log("Thank you for using the student management system!");

console.log(5|3)*/

//********************************************************************** */
//First Way
/*  let userName="admin";
let password="admin123";

if(userName==="admin" && password==="admin123"){
    console.log("Login successful!");
}
else if(userName==="admin" && password!=="admin123"){
    console.log("Incorrect password. Please try again.");
}
else if (userName!=="admin" && password ==="admin123"){
    console.log("Username not found. Please try again.");
}
else{
    console.log("Invalid username and password. Please try again.");
}*/

//Second Way
let userName = "admin";
//  userName= "admin2";
let password = "admin124";

if (userName === "admin") {
  if (password === "admin124") {
    console.log("Login successful!");
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("Username not found.");
}
//***************************************************************************/