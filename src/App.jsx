import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './components/Counter'
import './App.css'

function App() {
  return (
  <>
  <Counter initalValue={0}/>
  <Counter initalValue={1000}/>
  <Counter initalValue={-1000}/>
  </>
  )
}

export default App
