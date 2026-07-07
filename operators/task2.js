//Student Grade System
let marks;
marks=85;

if(marks>=90){
    console.log("A+")
}
else if(marks>=80){
    console.log("A")
}
else if(marks>=70){
    console.log("B")
}
else if(marks>=60){
    console.log("C")
}
else if (marks>=50){
    console.log("D")
}
else{
    console.log("Fail")
}

//Loan Approvel System

let age=19;
let salary=60000;
let experience=2;
let cibilScore=700;

if(age>=21 && age<=60){
    if(salary>=50000){
        if(experience>=2){
            if(cibilScore>=700){
                console.log("Loan Approved")
            }
            else{
                console.log("Loan Rejected due to low CIBIL score")
            }
        }
        else{
            console.log("Loan Rejected due to insufficient experience")
        }
    }
    else{
        console.log("Loan Rejected due to low salary")
    }
}
else{
    console.log("Loan Rejected due to age criteria")
}
//E-Commerce Discount System
let totalAmount=30000;
let customerType="Premium";
let couponAvailable=true;
let discount=0;
let finalBill;

if(customerType==="Premium"){
    if(totalAmount>10000){
    discount=totalAmount*0.20
    }
    else{
        discount=totalAmount*0.10
    }
}

else if (totalAmount>10000 && customerType==="Regular"){
   discount=totalAmount*0.10 
}
else{
    console.log("Tata Bye Bye...........")
}

let finalAmount=totalAmount-discount;
console.log("Final Amount after Discount:"+finalAmount+"Rs.")

if (couponAvailable && finalAmount>10000){
    finalBill=finalAmount-500;
    console.log("Final Bill after applying coupon:"+finalBill+"Rs.")
}
else{
    console.log("No Coupon Available")
}

//Employee Bonus System
let experience1=6;
let rating="A";
let salary1=80000;

if(experience1>5){
    if(rating==="A"){
        bonus=salary1*0.30
        
   
    }
    else if(rating==="B"){
        bonus=salary1*0.20
    }
    else{
        bonus=salary1*0.10
    }
}
else if (experince1<5){
    if (rating==="A"){
        bonus=salary1*0.015
        
    }

    else{
        bonus=salary1*0.05
    }
}

console.log("Final Salary after Bonus:"+ (salary1 + bonus) + "Rs.")

//Inventory Stock Status

let stock=9;
let reorderLevel=20;
let expiryDate=new Date("2026.06.20");
let today=new Date();

let dayLeft=(expiryDate-today)/(1000*60*60*24);// JS converts both date into milliseconds and sustract them.

if (stock<=0){
    console.log("Out of Stock")
}
else if(stock<reorderLevel){
    if(dayLeft<=30){
        console.log("Low Stock & Near Expiry")
    }
    else{
        console.log("Low Stock")
    }
}
else{
    if(dayLeft<=30){
        console.log("In Stock & Near Expiry")
    }
    else{
        console.log("Stock Available")
    }
}

