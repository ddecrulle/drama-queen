import React from 'react'
import { useNavigate } from "react-router-dom";


export function QueenContainer() {
  const QueenApp = React.lazy(() => import('queen-app/index.js'))
  console.log(QueenApp);
  return (
    <>
      <queen-app />
    </>
  )

}

export default QueenContainer