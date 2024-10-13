// Currency Converter Project No:05
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("\n \t Welcome to 'CodewithSohail' - Currency Converter\n"));

// Define the list of currencies and their exchange rates.

let exchange_rate: any = {
    "USD": 1,    // Base Currency 
    "EUR": 0.85, // European Currency 
    "JPY": 0.85, // Japanese Currency
    "CAD": 1.3, // Canadian Currency
    "AUD": 1.65,// Australian Currency
    "PKR": 277.70, // Pakistan Currency
    "INR": 70, // Indian Currency 
    "SGD": 1.25, // Singapore Currency
    "NZD": 1.5, // New Zealand Currency
    "GBP": 1.5, // British Pound Currency
    // Add more currencies and their exchange rates here.
}

// prompt the user to select currencies to convert from and to.

let user_answer = await inquirer.prompt([
    {
        type: "list",
        name: "from_currency",
        message: "Select a currency to convert from:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR", "INR", "SGD", "NZD", "GBP"],
    },
    {
        type: "list",
        name: "to_currency",
        message: "Select a currency to convert into:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR", "INR", "SGD", "NZD", "GBP"],
    },
    {
        type: "input",
        name: "amount",
        message: "Enter the amount to convert:",
    }
]);

// perform currency conversion using formula.

let from_amount = exchange_rate[user_answer.from_currency]; // Corrected variable name
let to_amount = exchange_rate[user_answer.to_currency]; // Corrected variable name
let amount = parseFloat(user_answer.amount); // Parsing input amount to float

// Formula for Conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

// Display the conversion amount.
console.log(`Converted Amount = ${chalk.yellow(converted_amount.toFixed(2))}`);