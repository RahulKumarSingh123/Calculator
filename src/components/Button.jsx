import "../css/Button.css"

export default function Button({name,handleClick}){
    function updatescreen(){
        handleClick(name);
    }
    return(
        <button onClick={handleClick}>{name}</button>
    )
}