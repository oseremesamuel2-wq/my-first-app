import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <main className="app">
      <section className="container">
        <h1>My First React App</h1>

        <p className="intro">
          I'm a frontend development student who enjoys learning how to build
          interactive websites and applications with modern web technologies.
        </p>

        <section className="counter-section">
          <h2>Counter</h2>

          <p className="count">{count}</p>

          <div className="button-group">
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
          </div>

          <p className="message">
            {count % 2 === 0 ? 'Even number' : 'Odd number'}
          </p>
        </section>

        <section className="greeting-section">
          <h2>Enter Your Name</h2>

          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />

          {name.trim() !== '' && (
            <p className="greeting">
              Hello, {name}! Welcome to my React app.
            </p>
          )}
        </section>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} My First React App</p>
      </footer>
    </main>
  )
}

export default App

