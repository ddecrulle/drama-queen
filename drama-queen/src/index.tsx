import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/root'
import { getEnvVar } from './utils/env'

function AppTest() {
  const script = document.createElement('script');
  script.src = `${getEnvVar("VITE_QUEEN_URL")}/entry.js`;
  document.body.appendChild(script);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default AppTest