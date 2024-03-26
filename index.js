import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "fisrtNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (asnwer.operator === "Addition") {
    console.log(asnwer.fisrtNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "Substraction") {
    console.log(asnwer.fisrtNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.fisrtNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.fisrtNumber / asnwer.secondNumber);
}
else {
    console.log("please select valid operator");
}
