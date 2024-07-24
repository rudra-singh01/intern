import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from '../src/components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Academics from './components/Academics/Academics.jsx'
import Admissions from './components/Admissions/Admissions.jsx'
import Faculty from './components/Faculty/Faculty.jsx'
import Students from './Students/Students.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Contact from './components/Contact/Contact.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element:<About/>,
      },
      {
        path: '/academics',
        element:<Academics/>,
      },
      {
        path:"/admissions",
        element:<Admissions/>
      },
      {
        path:"/faculty",
        element:<Faculty/>,
      },
      {
        path:"/students",
        element:<Students/>
      },
      {
        path:"/Gallery",
        element:<Gallery/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
