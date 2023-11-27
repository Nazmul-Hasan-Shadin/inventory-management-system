import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthProvider from './AuthProvider/AutProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <AuthProvider>
  <div className='max-w-7xl mx-auto'>
     <RouterProvider router={router}></RouterProvider>
     <Toaster />
   </div>
  </AuthProvider>
    </QueryClientProvider>
 
  </React.StrictMode>,
)
