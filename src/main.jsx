import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import Layout from "./components/layout.jsx";
import Home from "./routes/home.jsx";
import About from "./routes/about.jsx";
import Article from "./routes/article.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:
            [
                { path: "/", element: <Home /> },
                {
                    path: "/about",
                    element: <About />,
                    children:
                        [
                            { path:":slug", element: <Article /> }
                        ]
                }

            ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>

      </RouterProvider>
  </React.StrictMode>,
)
