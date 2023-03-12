import {
  createBrowserRouter,
} from "react-router-dom";
import DramaQueen from "../App";
import React from "react";
//import QueenApp from "queen/App";
//import App from "queen_v2/App";

const QueenApp = React.lazy(() => import('queen/App'))
const App = React.lazy(() => import('queen_v2/App'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DramaQueen />
  },
  {
    path: "/queen",
    element: <QueenApp />
  },
  {
    path: "/queen-v2",
    element: <App />
  }
])