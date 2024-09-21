import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectShow from '../components/projectShow.jsx'
import ProductDetail from '../components/breadcrumbs/productDetail.jsx'
import Productlisting from '../components/breadcrumbs/productlisting.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/project/:id',
    element: <ProjectShow />
  },

  {
    path: '/products/:id',
    element: <ProductDetail />
  },

  {
    path: '/products',
    element: <Productlisting />
  },



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
