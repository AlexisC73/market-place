import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

export const createRouter = () => createBrowserRouter([{
  path: '/',
  element: <Home />,
  index: true
}])
