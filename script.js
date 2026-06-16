let historyList = document.getElementById("history-list");


function calculate(operation) {

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    if (num1 === "" || num2 === "") {
        document.getElementById("result").innerText = "Enter Both No.";
        return;
    }


    num1 = Number(num1);
    num2 = Number(num2);


    let result;
    let expression;/*working*/


    if (operation === "add") {
        result = num1 + num2;
        expression = num1 + " + " + num2 + " = " + result;

    } else if (operation === "subtract") {
        result = num1 - num2;
        expression = num1 + " - " + num2 + " = " + result;

    } else if (operation === "multiply") {
        result = num1 * num2;
        expression = num1 + " × " + num2 + " = " + result;

    } else if (operation === "divide") {

        // division by zero check
        if (num2 === 0) {
            document.getElementById("result").innerText = "Cannot divide by zero";
            return;
        }

        result = num1 / num2;
        result = Math.round(result * 100) / 100;
        // 2 decimal places

        expression = num1 + " ÷ " + num2 + " = " + result;
    }


    document.getElementById("result").innerText = "Result: " + result;


    let listItem = document.createElement("li");
