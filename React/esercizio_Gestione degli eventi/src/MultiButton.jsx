function MultiButton() {
 function handleButton(event) {
    console.log('Pulsante:', event.target.name);
 }
 
 return (
    <div>
     <button name="one" onClick={handleButton}>One</button>
     <button name="two" onClick={handleButton}>Two</button>
     <button name="three" onClick={handleButton}>Three</button>
    </div>
 )
}

export default MultiButton;