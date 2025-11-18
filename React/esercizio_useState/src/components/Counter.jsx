import { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({initialValue, incrementAmount}) {
 const [counter, setCounter] = useState(initialValue);

 function handleIncrementCounter() {
  setCounter((c) => c + incrementAmount);
 }
 /*
 Quando si chiama una funzione "setter" per incrementare il contatore, è consigliabile passare 
 una arrow function (o una funzione che restituisce un valore) quando il nuovo valore dipende dal valore 
 precedente del contatore. 
 Questo perché garantisce l'uso del valore più aggiornato del contatore, 
 evitando problemi dovuti a chiusure o aggiornamenti concorrenti. 
 Se invece l'aggiornamento non dipende dal valore precedente o da aggiornamenti consecutivi/asincroni, 
 si può passare direttamente un valore immediato.*/
 
 function handleDecrementCounter() {
  setCounter((c) => c - incrementAmount);
 }
 function handleResetCounter() {
  setCounter(initialValue);
 }

 return (
    <div>
        <CounterDisplay counter={counter} />
        <button onClick={handleIncrementCounter}>Incrementa</button>
        <button onClick={handleDecrementCounter}>Decrementa</button>
        <button onClick={handleResetCounter}>Reset</button>
    </div>
 );
}

export default Counter;