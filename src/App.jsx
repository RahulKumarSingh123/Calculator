import { useState } from "react";
import ButtonPallete from "./components/ButtonPallete";
import Screen from "./components/Screen";

export default function App(){
    const [screen,setScreen]=useState("");
 
    return (
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"lightgrey",height:"100vh",width:"100vw",justifyContent:"space-around",alignItems:"center",overflowX:"hidden",overflowY:"hidden"}}>
            <Screen display={screen}></Screen>
            <ButtonPallete handleClick={setScreen}></ButtonPallete>
        </div>
    );
}