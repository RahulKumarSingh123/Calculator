import "../css/Screen.css"

export default function Screen({display}){
    
    return(
        <textarea id="screen" value={display}>
        </textarea>
    )
}