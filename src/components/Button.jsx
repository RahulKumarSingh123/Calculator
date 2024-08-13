import "../css/Button.css"

export default function Button({ name, handleClick, equals }) {
    function updatescreen() {
        handleClick(name);
    }
    let id = {
        true: "back",
        false: "fore",
    }
    return (
        <button id={id[equals]} onClick={updatescreen}>{name}</button>
    )
}