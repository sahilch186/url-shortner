
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Auth from './pages/auth'
import LinkPage from './pages/LinkPage'
import LinkRedirect from './pages/LinkRedirect'

const router = createBrowserRouter([{
  element: <AppLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/auth',
      element: <Auth />
    },
    {
      path: '/link/:id',
      element: <LinkPage />
    },
    {
      path: '/:id',
      element: <LinkRedirect />
    },
  ],
}])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
