import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import axios from 'axios'
import './App.css'
import Perfumes from './componentes/perfume'

function App() {
  return (
    <div className='body'>
      <section className='mostruario'>
      < Perfumes/>
      </section>

    </div>
  )
}

export default App
