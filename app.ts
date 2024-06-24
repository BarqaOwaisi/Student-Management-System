#! usr/bin/env node

import inquirer from "inquirer";

const studentId: number = Math.floor(Math.random() * 50000);

let myBalance: number = 0;

let info = await inquirer.prompt([
  {
    name: "StudentsInfo",
    message: "Enter your name : ",
    type: "input",
    validate: function (value) {
      if (value.trim !== "") {
        return true;
      } else {
        console.log("Please Enter Your Name");
      }
    },
  },
  {
    name: "Courses",
    type: "list",
    choices: [
      "Amazon",
      "Digital Marketing",
      "Graphic Designing",
      "E-Commerce",
      "AI",
    ],
    message: "Please Slect One Course :",
  },
]);

let courseFee: { [key: string]: number } = {
  Amazon: 5000,
  "Digital Marketing": 7000,
  "Graphic Designing": 3000,
  "E-Commerce": 9000,
  AI: 15000,
};

console.log(`\n Course Fee is ${courseFee[info.Courses]}\n`);
console.log(`\n My Balance :${myBalance} `);

const paymentMethod = await inquirer.prompt([
  {
    name: "Method",
    message: "Please Select Your Payment Method",
    type: "list",
    choices: ["Bank Transfer", "Paypal", "Jazzcash"],
  },
  {
    name: "Amount",
    type: "list",
    choices: [5000, 7000, 3000, 9000, 15000],
    message: "Your Amount : ",
    validate: function (value) {
      if (value.trim !== "") {
        return true;
      } else {
        return "Please Enter Your Amount";
      }
    },
  },
]);

console.log(`\n Your Selected Payment Method is ${paymentMethod.Method}\n`);

const courseFees = courseFee[info.Courses];
const Amount = parseFloat(paymentMethod.Amount);

if (courseFees === Amount) {
  console.log(`\n You have enrolled in ${info.Courses}.\n`);

  let info2 = await inquirer.prompt([
    {
      name: "NextMove",
      type: "list",
      choices: ["View Status", "Exit"],
      message: "What would you like to do next ?",
    },
  ]);

  if (info2.NextMove === "View Status") {
    console.log("\n *********Status*********\n");
    console.log(`Student Name : ${info.StudentsInfo}`);
    console.log(`Student ID : ${studentId}`);
    console.log(`Selected Course : ${info.Courses}`);
    console.log(`Course Fees Paid : ${Amount}`);
    console.log(`Your Balance : ${(myBalance += Amount)}`);
  } else {
    console.log(`\nYou are existing this Student Management System\n`);
  }
} else {
  console.log(`\n Please Select Correct Amount`);
}
