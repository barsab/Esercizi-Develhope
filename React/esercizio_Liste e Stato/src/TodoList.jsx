import { useState } from "react";
import './TodoList.css'

function TodoList() {
    const [items, setItems] = useState(["React", "studio", "front end developer", "gaming"]);
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        if (inputValue.trim()) {
        setItems([...items, inputValue]);
        setInputValue("");
        }
    }

    const resetItem = () => {
        setItems([]);
    }

    const remove = (indexToRemove) => {
    setItems(items.filter((item, index) => index !== indexToRemove));
    }

    return (
        <>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}
                <button onClick={() => remove(index)}>Remove</button>
                </li>
            ))}
        </ul>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Aggiungi un elemento"></input>
        <button onClick={addItem}>Aggiungi alla lista</button>
        <button onClick={resetItem}>Reset</button>
        </>
    )
}

export default TodoList;