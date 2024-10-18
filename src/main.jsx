import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Product from './components/Products/Products.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/home',
        element: <Home></Home>

      },
      {
        path: '/product',
        element : <Product></Product>
      },
      {
        path: '/Blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/About',
        element : <About></About>
      },
      {
        path: '/Contact',
        element: <Contact></Contact>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
