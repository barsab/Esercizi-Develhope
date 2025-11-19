import { Welcome } from "./Welcome";
import { useState } from "react";

function InteractiveWelcome() {
    const [name, setName] = useState('')

    function usernameChange(event) {
        setName(event.target.value)
    }

    return (
    <>
        <form>
            <input value={name} placeholder="Enter your name" onChange={usernameChange} />
        </form>
        <Welcome name={name} />
    </>
    )
}

export default InteractiveWelcome;