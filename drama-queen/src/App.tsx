import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/root'
import { getEnvVar } from './utils/env'

const injectBodyScript = (url: string) => {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script)
}
const injectLegacyEntryQueens = () => {
  injectBodyScript(`${getEnvVar("VITE_QUEEN_URL")}/entry.js`)
  injectBodyScript(`${getEnvVar("VITE_QUEEN_V2_URL")}/entry.js`)
}

function App() {
  injectLegacyEntryQueens();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App