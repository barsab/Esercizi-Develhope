import { useState, useRef, useEffect } from 'react';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  const directionRef = useRef(null);       // // Direzione attuale ("up" o "down")
  const previousDirectionRef = useRef(null); // Direzione precedente
  const previousValue = useRef(initialValue);

  useEffect(() => {
    let newDirection = null;
    // Determina la direzione rispetto al valore precedente
    if (count > previousValue.current) {
      newDirection = 'up';
    } else if (count < previousValue.current) {
      newDirection = 'down';
    }
    // Aggiorna e stampa solo se la direzione è diversa dalla precedente
    if (newDirection && newDirection !== previousDirectionRef.current) {
      directionRef.current = newDirection;
      console.log(`Direzione: ${directionRef.current}`);
      previousDirectionRef.current = newDirection;
    }
    previousValue.current = count;
  }, [count]);

  return (
    <div>
      <p>Contatore: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  );
}

export default Counter;