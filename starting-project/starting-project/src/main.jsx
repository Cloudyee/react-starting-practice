import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts from './routes/Posts'
import NewPost from './routes/NewPost'
import RootLayout from './routes/RoutLayout'
import './index.css'

const router = createBrowserRouter([
    {path : '/', element : <RootLayout />, 
    children : [
      {path:'/', element : <Posts />, children : [
        {path:'/create-post', element : <NewPost />}]
      }, // 기본 도메인
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

