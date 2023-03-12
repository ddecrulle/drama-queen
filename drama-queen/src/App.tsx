import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link } from 'react-router-dom'
import { getEnvVar } from './utils/env'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Drama Queen</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Buttons to test MFE
      </p>
      <Link to="queen">
        <button>
          Queen MFE
        </button>
      </Link>
      <a href={getEnvVar("VITE_QUEEN_URL")} target="_blank">
        <button >
          Queen Standalone
        </button>
      </a>

      <Link to="queen-v2">
        <button>
          Queen V2 MFE
        </button>
      </Link>

      <a href={getEnvVar('VITE_QUEEN_V2_URL')} target="_blank">
        <button >
          Queen V2 Standalone
        </button>
      </a>

      <p className="read-the-docs">
        Queen URL : {getEnvVar("VITE_QUEEN_URL")}<br />
        Queen V2 URL : {getEnvVar('VITE_QUEEN_V2_URL')}
      </p>
    </div >
  )
}

export default App
