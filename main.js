import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1. Pakistan shares its longest border with which country?",
        choices: ['India', 'Afghanistan', 'Iran', 'China']
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2. In which year did Pakistan gain independence from British rule?",
        choices: ['1947', '1945', '1964', '1946']
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3. Who was the first Governor-General of Pakistan?",
        choices: ['Liaquat Ali Khan', 'Muhammad Ali Jinnah', 'Ayub Khan', 'Zulfikar Ali Bhutto']
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4. What is the name of the famous resolution passed in 1940 that called for a separate Muslim state?",
        choices: ['Karachi Resolution', ' Lahore Resolution', 'Pakistan Resolution', 'Delhi Resolution']
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5. Who was the first woman Prime Minister of Pakistan?",
        choices: ['Fatima Jinnah', 'Begum Rana Liaquat', 'Benazir Bhutto', 'Asma Jahangir']
    },
    {
        name: "question_6",
        type: "list",
        message: "Q6. Which city is the financial hub of Pakistan?",
        choices: ['Lahore', 'Karachi', 'Islamabad', 'Faisalabad']
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "India":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "1947":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "Muhammad Ali Jinnah":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case "Pakistan Resolution":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "Benazir Bhutto":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
switch (quiz.question_6) {
    case "Karachi":
        console.log("6. Correct!");
        ++score;
        break;
    default:
        console.log("6. Incorrect!");
}
console.log(`Score ${score}`);
