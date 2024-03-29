import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { useAppOutletContext } from '@/common/hooks/useOutletContext'
import { Layout } from '@/components/layout'
import { ErrorPage } from '@/pages/ErrorPage'
import { CheckEmailPage } from '@/pages/checkEmailPage'
import { ForgotPasswordPage } from '@/pages/forgotPasswordPage'
import { ProfileInformationPage } from '@/pages/profileInformationPage'
import { SignInPage } from '@/pages/signInPage'
import { SignUpPage } from '@/pages/signUpPage'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/login',
  },
  {
    element: <SignUpPage />,
    path: '/signUp',
  },
  {
    element: <ForgotPasswordPage />,
    path: '/forgotPassword',
  },
  {
    element: <CheckEmailPage />,
    path: '/checkEmail',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>Decks page</div>,
    path: '/',
  },
  {
    element: <ProfileInformationPage />,
    path: '/profile',
  },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      {
        children: publicRoutes,
        element: <PublicRoutes />,
      },
    ],
    element: <Layout />,
    errorElement: <ErrorPage />,
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { isAuthenticated } = useAppOutletContext()

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

function PublicRoutes() {
  const { isAuthenticated } = useAppOutletContext()

  return isAuthenticated ? <Navigate to={'/'} /> : <Outlet />
}
