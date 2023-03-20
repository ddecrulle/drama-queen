import {
  createBrowserRouter,
} from "react-router-dom";
import DramaQueen from "../App";
import React from "react";
import QueenContainer from "../queenLegacyComponents/queenContainer";

// Dynamic import
//const App = React.lazy(() => import('queen_v2/App'))
// Static import 
import App from 'queen_v2/App';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DramaQueen />
  },
  {
    path: "/queen/*",
    element: <QueenContainer />
  },
  {
    path: "/queen-v2/*",
    element: <App />
  },
])