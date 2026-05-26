import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [qtd,setQtd]=useState(0);

  return (
    <div>
      <h1>Olá mundo! </h1>

      <p>{qtd} cliques foram feitos</p>

      <button onClick={()=>setQtd(qtd+1)}>Aumentar</button>
    </div>
  )
}

export default App
