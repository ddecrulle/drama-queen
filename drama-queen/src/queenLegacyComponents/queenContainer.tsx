import React from 'react'
import { getEnvVar } from '../utils/env';


export function QueenContainer() {
  React.lazy(() => import(getEnvVar('VITE_QUEEN_URL') + '/entry.js'/* @vite-ignore */))
  return (
    <>
      <queen-app />
    </>
  )

}

export default QueenContainer