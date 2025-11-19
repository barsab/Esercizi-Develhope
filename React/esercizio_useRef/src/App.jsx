import './App.css'
import FocusableInput from './FocusableInput'
import PrimoMessaggio from './PrimoMessaggio'
import Counter from './Counter'

function App() {
  return (
    <>
      <FocusableInput />
      <PrimoMessaggio />
      <Counter initialValue={0} />
    </>
  )
}

export default App;
