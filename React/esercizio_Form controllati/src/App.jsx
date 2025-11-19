import './App.css'
import InteractiveWelcome from './InteractiveWelcome'
import Login from './Login'

function App() {
  function handleLogin(data) {
    console.log("Login data:", data);
  }

  return (
    <>
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
    </>
  )
}

export default App
