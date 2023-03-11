import {
  createBrowserRouter,
} from "react-router-dom";
import DramaQueen from "../App";

import QueenApp from "queen/App";
import App from "queen_v2/App";

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