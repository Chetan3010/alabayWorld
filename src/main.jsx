import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GamePreview from './components/GamePreview/GamePreview.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/game/:id',
        element: <GamePreview />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} >
        <App />
    </RouterProvider>
  </StrictMode>,
)
