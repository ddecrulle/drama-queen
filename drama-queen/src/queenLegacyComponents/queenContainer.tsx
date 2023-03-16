import React from 'react'
import { getEnvVar } from '../utils/env';

// Import de queen
//const module = await import(getEnvVar('VITE_QUEEN_URL') + '/entry.js'/* @vite-ignore */);

export function QueenContainer() {
  return (
    <>
      <queen-app />
    </>
  )

}

export default QueenContainer