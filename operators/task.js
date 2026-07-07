let studentName = "Ahshan";
let age = 22;
let course = "Full Stack Development";
let courseFee = 50000;
let bookFee = 5000;
let hostelFee = 10000;
let discount = 5000;
let paidAmount = 30000;
let marks = 78;
let isPaid = false;
let hasScholarship = true;
let attendance = 85;
let bonusMarks = 5;
let loginCount = 0;
let teacher = null;
let project = {
  title: "POS System",
  frontend: {
    framework: "React",
  },
};


let totalFee = courseFee + bookFee + hostelFee;
let substractDiscount = totalFee - discount;
let remainingFee = substractDiscount - paidAmount;

// Arithmetic Operators
console.log("1." + totalFee); //Calculate total fee
console.log("2." + substractDiscount); //Calculate final fee
console.log("3." + remainingFee); //Calculate remaining fee
console.log("4." + substractDiscount / 6); // Divide fee into 6 installments
console.log("5." + substractDiscount % 6); //Find modulus of fee
console.log("6." + bonusMarks ** 2); //calculate bonus marks

// Assignment Operators
totalFee += 1000; //Add additional fee
console.log("7." + totalFee);

totalFee -= 5000; //subtract scholarship amount
console.log("8." + totalFee);

totalFee *= 2; //Double the fee
console.log("9." +  totalFee);

totalFee /= 2; //Halve the fee
console.log("10." + totalFee);

totalFee %= 4; //Find modulus of fee by 4
console.log("11." + totalFee);

//Comparison Operators
let age1 = 24;
console.log("12." + (age == age1));
console.log("13." + (age === age1));
console.log("14." + (age != age1));
console.log("15." + (age !== age1));
console.log("16." + (age > age1));
console.log("17." + (age < age1));
console.log("18." + (age >= age1));
console.log("19." + (age <= age1));

let marks1=85;
console.log("20." + (marks == marks1));
console.log("21." + (marks === marks1));
console.log("22." + (marks != marks1));
console.log("23." + (marks !== marks1));
console.log("24." + (marks > marks1));
console.log("25." + (marks < marks1));
console.log("26." + (marks >= marks1));
console.log("27." + (marks <= marks1));

let attendance1=90;
console.log("28." + (attendance == attendance1));
console.log("29." + (attendance === attendance1));
console.log("30." + (attendance != attendance1));
console.log("31." + (attendance !== attendance1));
console.log("32." + (attendance > attendance1));
console.log("33." + (attendance < attendance1));
console.log("34." + (attendance >= attendance1));
console.log("35." + (attendance <= attendance1));

let courseFee1=55000;
console.log("36." + (courseFee == courseFee1));
console.log("37." + (courseFee === courseFee1));
console.log("38" + (courseFee != courseFee1));  
console.log("39." + (courseFee !== courseFee1));
console.log("40." + (courseFee > courseFee1));
console.log("41." + (courseFee < courseFee1));
console.log("42." + (courseFee >= courseFee1));
console.log("43." + (courseFee <= courseFee1));

//Logical Operators
if(attendance>=85 && isPaid){
    console.log("44."+"You are eligible for exam");
}
else{
    console.log("45." + "Not eligible for exam");
}

if(marks>75 || hasScholarship){
    console.log("46." + "You are eligible for scholarship");
}
else{
    console.log("47." + "Not eligible for scholarship");
}

console.log("48." + !(isPaid)); 

//string operator

console.log("49." + studentName + " is enrolled in " + course); //Concatenate student name and course


//Ternary operator
let result = marks>=75 ? "pass with distinction" : "fail";
console.log("50."+result);



//Typeof operator
console.log("51."+ typeof studentName);
console.log("52."+ typeof age);
console.log("53."+ typeof course);
console.log("54."+typeof isPaid);

//Nullish coalescing operator
let teachname= teacher ?? "Ahsan is the teacher";
console.log("55."+ teachname );

//Optional chaining operator
console.log("56." +project?.frontend?.framework);//Accessing nested property using optional chaining
