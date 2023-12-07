import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthProvider from './AuthProvider/AutProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <QueryClientProvider client={queryClient}>

<AuthProvider>
<div className='max-w-7xl  mx-auto'>
<HelmetProvider>
 <RouterProvider router={router}></RouterProvider>
 </HelmetProvider>
 <Toaster />
</div>
</AuthProvider>
</QueryClientProvider>

 
  </React.StrictMode>,
)
