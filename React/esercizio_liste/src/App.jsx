import './App.css'
import Colors from './Colors'

function App() {
  return (
  <>
  <Colors items={[
    {id: 1, name: 'green'}, 
    {id: 2, name:'red'}, 
    {id: 3, name: 'yellow'}, 
    {id: 4, name: 'blue'}
  ]} />
  </>
  )
}

export default App

