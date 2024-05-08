#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "action",
            message: "please select an option",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.action === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.action === "Check Balance") {
        console.log("Your Balance is: " + myBalance);
    }
}
else {
    console.log("incorrect pin code");
}
