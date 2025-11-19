import { useState } from "react"

function Login({onLogin}) {
    const [data, setData] = useState({username:'', password:'', remember:false})
    
    function inputChange(event) {
      const { name, type, value, checked } = event.target;

      setData((data) => {
       return {
        ...data,
       [name]: type === 'checkbox' ? checked : value
       }
      })
    }

    function reset() {
        setData({
        username:'',
        password:'',
        remember:false
        })
    }
    
    return (
        <form className="container">
            <input type="text" name="username" value={data.username} onChange={inputChange} placeholder="Username" />
            <input type="password" name="password" value={data.password} onChange={inputChange} placeholder="Password" />
            <label>
                Remember me
                <input type="checkbox" name="remember" checked={data.remember} onChange={inputChange} />
            </label>
            <button disabled={!data.username.trim() || !data.password.trim()} 
            onClick={(e) => {
            e.preventDefault();
            onLogin(data);
            }}>
            Login</button>
            <button type="button" onClick={reset}>Reset</button>
        </form>
    )
}

export default Login;