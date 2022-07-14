const clickedButton = () => {
    alert("Bottone cliccato.")
}


function FunctionEvent() {
    return (
        <div>
            <button onClick={clickedButton}>Click here</button>
        </div>
    )
}


export default FunctionEvent;