import Button from "./Button";
import "../css/ButtonPallete.css"


export default function ButtonPallete( setScreen,calculate){
   
    return(
        <div id="pallete">
            <div id="row">
                <Button name={"AC"} handleClick={setScreen}></Button>
                <Button name={"<-"} handleClick={handleClick}></Button>
                <Button name={"x"} handleClick={handleClick}></Button>
                <Button name={"/"} handleClick={handleClick}></Button>
            </div>
            <div id="row">
                <Button name={"9"} handleClick={handleClick}></Button>
                <Button name={"8"} handleClick={handleClick}></Button>
                <Button name={"7"} handleClick={handleClick}></Button>
                <Button name={"+"} handleClick={handleClick}></Button>
            </div>
            <div id="row">
                <Button name={"6"} handleClick={handleClick}></Button>
                <Button name={"5"} handleClick={handleClick}></Button>
                <Button name={"4"} handleClick={handleClick}></Button>
                <Button name={"-"} handleClick={handleClick}></Button>
            </div>
            <div id="row">
                <Button name={"3"} handleClick={handleClick}></Button>
                <Button name={"2"} handleClick={handleClick}></Button>
                <Button name={"1"} handleClick={handleClick}></Button>
                <Button name={"%"} handleClick={handleClick}></Button>
            </div>
            <div id="row">
                <Button name={"00"} handleClick={handleClick}></Button>
                <Button name={"0"} handleClick={handleClick}></Button>
                <Button name={"."} handleClick={handleClick}></Button>
                <Button name={"="} handleClick={handleClick}></Button>
            </div>
        </div>
    )
} 