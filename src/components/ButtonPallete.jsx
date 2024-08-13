import Button from "./Button";
import "../css/ButtonPallete.css"


export default function ButtonPallete({addToScreen,eraseScreen,backspace,calculate}){
   
    return(
        <div id="pallete">
            <div id="row">
                <Button name={"AC"} equals={false} handleClick={eraseScreen}></Button>
                <Button name={"<-"} equals={false} handleClick={backspace}></Button>
                <Button name={"x"} handleClick={addToScreen}></Button>
                <Button name={"/"} handleClick={addToScreen}></Button>
            </div>
            <div id="row">
                <Button name={"9"} handleClick={addToScreen}></Button>
                <Button name={"8"} handleClick={addToScreen}></Button>
                <Button name={"7"} handleClick={addToScreen}></Button>
                <Button name={"+"} handleClick={addToScreen}></Button>
            </div>
            <div id="row">
                <Button name={"6"} handleClick={addToScreen}></Button>
                <Button name={"5"} handleClick={addToScreen}></Button>
                <Button name={"4"} handleClick={addToScreen}></Button>
                <Button name={"-"} handleClick={addToScreen}></Button>
            </div>
            <div id="row">
                <Button name={"3"} handleClick={addToScreen}></Button>
                <Button name={"2"} handleClick={addToScreen}></Button>
                <Button name={"1"} handleClick={addToScreen}></Button>
                <Button name={"%"} handleClick={addToScreen}></Button>
            </div>
            <div id="row">
                <Button name={"00"} handleClick={addToScreen}></Button>
                <Button name={"0"} handleClick={addToScreen}></Button>
                <Button name={"."} handleClick={addToScreen}></Button>
                <Button name={"="} equals={true} handleClick={calculate}></Button>
            </div>
        </div>
    )
} 