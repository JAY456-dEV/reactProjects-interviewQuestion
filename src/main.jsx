import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectShow from '../components/projectShow.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/project/:id',
    element: <ProjectShow />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
