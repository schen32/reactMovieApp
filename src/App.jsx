import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner"></img>
            <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
          </header>
        </div>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
      </div>
    </main>
  )
}

export default App
