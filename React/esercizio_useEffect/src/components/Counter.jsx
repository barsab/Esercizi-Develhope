import { useState, useEffect } from 'react';

function Counter() {
 const [counter, setCounter] = useState(0);

 useEffect(() => {
    console.log('Valore attuale del contatore:', counter);
  }, [counter]);

 function handleIncrementCounter() {
    setCounter(c => c+1);
 }
 return (
    <div>
        <h2>{counter}</h2>
        <button onClick={handleIncrementCounter}>Incrementa</button>
    </div>
 );
}

export default Counter;