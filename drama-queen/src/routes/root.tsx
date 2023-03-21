import {
  createBrowserRouter,
} from "react-router-dom";
import DramaQueen from "../App";

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
    element: <queen-app />
  },
  {
    path: "/queen-v2/*",
    element: <queen-v2-app />
  },
])