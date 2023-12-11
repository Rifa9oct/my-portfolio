import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1468px]'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
