#! /usr/bin/env node

import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";

// Function to display text
let displayMessage = (message: string) => {
    return message;
};

//  Thank you Note
let thanks = chalk.yellowBright.bold.underline("Thank you") + chalk.red("!");

// Function to handle withdrawal
let handleWithdrawal = (amount: number) =>{ 
    if (amount <= dummyUser.balance) {
        let initialAmount = amount;
        let remainingBalance = (dummyUser.balance -= initialAmount);
        console.log(
            chalk.green(displayMessage(`Withdrawal of ${initialAmount} Successful`))
        );
        // let remainingBalance = dummyUser.balance - amount;
        console.log(
            chalk.blue(
                displayMessage(`Your Remaining Balance is ${remainingBalance}!`)
            )
            );
            } else {
                console.log(chalk.cyanBright(displayMessage(`Insufficient Balance`)));
                
            };
        }

// Function to handle deposit
let handleDeposit = (Amount: number) => {
    if (Amount <= dummyUser.balance) {
        let initialAmount = Amount;
        let newBalance = (dummyUser.balance += initialAmount);
        console.log(
            chalk.blue(displayMessage(`Deposit of ${initialAmount} Successful!`))
        );
        console.log(
            chalk.red(displayMessage(`Your new balance is ${newBalance} now!`))
        )
        
    }
};

// Function to handle transfer
let handleTransfer = (amount: number) => {
    if (amount <= dummyUser.balance){
        let initialAmount = amount;
        initialAmount <= dummyUser.balance;
        let remainingBalance = (dummyUser.balance -= initialAmount);
        console.log(
            chalk.green(displayMessage(`Transfer of ${initialAmount} Successful!`))
        );
        console.log(
            chalk.magenta(
                displayMessage(`Your remaining balance is ${remainingBalance}`)
            )
        );
    } else {
        console.log(
            chalk.red(displayMessage(`Insufficient Balance`))
        );
    }
};
// Function to handle inquiry
let handleInquiry = () => {
    console.log(
        chalk.cyan(displayMessage(`Your current balance is ${dummyUser.balance}`))
    );
};

let dummyUser = {
    name: "Parizah Shaikh",
    balance: 100000,
};
enum transaction {
    withdraw = "Withdraw",
    deposit = "Deposit",
    transfer = "Transfer",
    inquiry = "Inquiry",
}
enum account {
    current = "Current",
    saving = "Saving",
}
let promptUser = async () => {
    let answers = await inquirer.prompt(
        [
            {
                type: "input",
                name: "userId",
                message: chalk.bgAnsi256(194)("Kindly enter your userId:"),
            },
            {
                type: "numberUserPin",
                name: "userPin",
                message: chalk.bgAnsi256(194)("Kindly enter your userPin:"),
            },
            {
                type: "list",
                name: "accountType",
                choices: Object.values(account),
                message: chalk.bgAnsi256(194)("Select you Account type:"),
            },
            {
                type: "list",
                name: "transactionType",
                choices: Object.values(transaction),
                message: chalk.bgAnsi256(194)("Select you Transaction:"),
            },
        ]
    );
    switch (answers.transactionType) {
        case transaction.withdraw:
            promptWithdrawal();
            break;
            case transaction.deposit:
            promptWithdrawal();
            break;
            case transaction.transfer:
            promptWithdrawal();
            break;
            case transaction.inquiry:
            handleInquiry();
    }
};

// Prompt for Withdrawal
let promptWithdrawal = async () => {
    let answers = await inquirer.prompt(
        [
            {
                type: "number",
                name: "amount",
                messages: chalk.rgb(225, 136, 0)("Enter Withdrawal Amount"),
            },
        ]
    );

    handleWithdrawal(answers.amount);
};

// Prompt for Deposit
let promptDeposit = async () => {
    let answers = await inquirer.prompt(
        [
            {
                type: "number",
                name: "amount",
                messages: chalk.rgb(225, 136, 0)("Enter Deposit Amount"),
            },
        ]
    );

    handleDeposit(answers.amount);
};

// Prompt for Deposit
let promptTransfer = async () => {
    let answers = await inquirer.prompt(
        [
            {
                type: "number",
                name: "amount",
                messages: chalk.rgb(225, 136, 0)("Enter Transfer Amount"),
            },
        ]
    );

    handleTransfer(answers.amount);
};

console.log(
    "--".repeat(6) +
    chalk.blue.bgWhiteBright.bold.italic("Welcome to the Parizah's CLI-ATM") +
    "--".repeat(6)
);
console.log(
    "**".repeat(6) +
    chalk.italic.bgRedBright.black(`Your Initial Balance is "1Lac"`) +
    "**".repeat(6)
);

promptUser();

// let myBalance = 50000; // Dollar $

// let myPin = 2008;


// let pinAnswer = await inquirer.prompt(
//     [
//         {
//             name: "pin",
//             message: "enter your pin",
//             type: "number"
//         }
//     ]
// );
// if (pinAnswer.pin === myPin) {
//     console.log("Correct Pin!");

//     let operationsAnswer = await inquirer.prompt(
//         [
//             {
//                 name: "operations",
    //             message: "select option",
    //             type: "list",
    //             choices: ["withdraw", "check balance"]
    //         }
    //     ]
    // );
    // console.log(operationsAnswer);
    // if (operationsAnswer.operation === "withdraw") {
    //     let amountAnswer = await inquirer.prompt(
//             [
//                 {
//                     name: "amount",
//                     message: "enter your amount",
//                     type: "number"
//                 }
//             ]
//         );
//         myBalance -= amountAnswer.amount;
//         console.log("Your remaining balance is: " + myBalance)
//     }
// }
// else {
//     console.log("Incorrect Pin");
// }
//     let operationsAnswer = await inquirer.prompt(
        // [
        //     {
        //         name: "operations",
        //         message: "Select Option",
        //         type: "list",
        //         choices: ["Withdraw", "Check Balance"]
        //     }
        // ]
//     );
//     console.log(operationsAnswer);
//     if (operationsAnswer.operation === "Withdraw") {
//         let amountAnswer = await inquirer.prompt(
//             [
                // {
                //     name: "amount",
                //     message: "Enter Your Amount",
                //     type: "number"
                // }
//             ]
//         );
//         myBalance -= amountAnswer.amount;
//         console.log("Your Remaining Balance is: " + myBalance)
//     }
// }
// else {
//     console.log("Incorrect pin");
// }