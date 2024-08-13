import { useState } from "react";
import ButtonPallete from "./components/ButtonPallete";
import Screen from "./components/Screen";

export default function App() {
    const [screen, setScreen] = useState("");
    function addToScreen(item) {
        setScreen(screen + item);
    }
    function eraseScreen() {
        setScreen("");
    }
    function backspace() {
        setScreen(screen.slice(0, screen.length - 1));
    }
    function doOperation(operator, a, b) {
        switch (operator) {
            case '+':
                return (b + a);
            case '-':
                return (b - a);
            case 'x':
                return (b * a);
            case '/':
                return (b / a);
            case '%':
                return (b % a);
        }
    }
    async function calculate() {
        let result = "";
        let expression = screen + ")";
        let operators = [];
        let operands = [];
        let temp = "";
        const priority = {
            '+': 1,
            '-': 1,
            'x': 2,
            '/': 2,
            '%': 2,
        }
        console.log(priority["%"]);
        for (let i = 0; i < expression.length; i++) {

            if (isNaN(Number(temp + expression.charAt(i)))) {
                if (temp == "") {
                    result = "Error";
                    break;
                }
                operands.push(Number(temp));
                if (expression.charAt(i) == ")")
                    continue;
                else {
                    if (operators.length == 0)
                        operators.push(expression.charAt(i));
                    else {
                        let a = expression.charAt(i);
                        let b = operators[operators.length - 1];
                        while (priority[a] <= priority[b]) {
                            let operator = operators.pop();
                            let item = await doOperation(operator, operands.pop(), operands.pop());
                            operands.push(item);
                            console.log(item);
                            if(operators.length==0)
                                break;
                            else
                                b = operators[operators.length - 1];
                        }
                        operators.push(a);
                    }
                }
                temp = "";
            }
            else {
                temp = temp + expression.charAt(i);
            }
        }
        console.log(operands,operators);
        while (operators.length != 0) {
            let operator = operators.pop();
            let item = await doOperation(operator, operands.pop(), operands.pop());
            console.log(item);
            operands.push(item);
        }
        if(operators.length==0 && operands.length==1)
            result=operands.pop();
        console.log(result)
        if(isNaN(result))
            result="Error"
        setScreen(String(result))
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "black", height: "100vh", width: "100vw", justifyContent: "space-around", alignItems: "center", overflowX: "hidden", overflowY: "hidden" }}>
            <Screen display={screen}></Screen>
            <ButtonPallete addToScreen={addToScreen} eraseScreen={eraseScreen} backspace={backspace} calculate={calculate}></ButtonPallete>
        </div>
    );
}