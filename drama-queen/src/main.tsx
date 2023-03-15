import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './routes/root'
import AppTest from '.'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppTest />
  </React.StrictMode>,
)
