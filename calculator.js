import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let pulse = chalkAnimation.neon("Lets start calculation.");
    await sleep();
    pulse.stop();
    console.log(`_____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________| `);
}
async function askquestions() {
    var answer = await inquirer.prompt([{
            type: "list",
            name: 'operation',
            message: "What operation you want to perform? \n",
            choices: ["Addition", "Subtraction", "Division", "Multiplication"]
        },
        {
            type: 'number',
            name: 'num1',
            message: `Enter the first number `,
        },
        {
            type: 'number',
            name: 'num2',
            message: `Enter the second number `
        }]);
    if (answer.operation === "Addition") {
        console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}.`);
    }
    else if (answer.operation === "Subtraction") {
        console.log(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);
    }
    else if (answer.operation === "Division") {
        console.log(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`);
    }
    else if (answer.operation === "Multiplication") {
        console.log(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);
    }
}
async function startagain() {
    do {
        await askquestions();
        var c = await inquirer.prompt([
            {
                type: 'input',
                name: 'restart',
                message: `Do u wanna do another Operation?\n Press y or n.`
            }
        ]);
    } while (c.restart == 'y' || c.restart == 'Y' || c.restart == 'yes' || c.restart == 'Yes');
}
await welcome();
startagain();
