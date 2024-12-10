import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <div>Home</div>,
      },
      {
        path: '/products',
        element: <div>Products</div>,
      },
      {
        path: '/cart',
        element: <div>Cart</div>,
      },
      {
        path: '/login',
        element: <div>Login</div>,
      },
      {
        path: '/register',
        element: <div>Register</div>,
      },
      {
        path: '/profile',
        element: <div>Profile</div>,
      },
      {
        path: '/orders',
        element: <div>Orders</div>,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
