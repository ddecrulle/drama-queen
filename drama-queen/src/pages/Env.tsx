import React from 'react'
import './Env.css'

function Env() {
  return (
    <div className="App">
      <h1>Drama Queen</h1>
      <div className="card">
        <p>Les variables d'environnements</p>
        <p className="read-the-docs">
          {Object.entries(import.meta.env).filter(([k,]) => k.startsWith("VITE")).map(([k, v]) => (
            <React.Fragment key={k}>
              <b>{k}</b> : {v}<br />
            </React.Fragment>
          )
          )}
        </p>
      </div>
    </div >
  )
}

export default Env
