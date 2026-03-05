import { useState } from 'react'
import './App.css'
import MovieComponent from './Components/MovieComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className = "App">
      <h1>I am Learning Components</h1>
      <MovieComponent></MovieComponent>
     </div>
    </>
  )
}

export default App;
