import Age from './Age'
import Message from './Message'

export default function Welcome({ name, age }) {
    return (
        <>
            <p>Welcome, {name}!</p>
            <Message age={age} />
            {age > 18 && <Age age={age} />}
            {age && <Age age={age} />}
            {age > 18 && age < 65 && <Age age={age} />}
            {age > 18 && name === "John" && <Age age={age} name={name} />}
            <Age age={age} />
        </>
    )
}