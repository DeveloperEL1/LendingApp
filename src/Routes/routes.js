import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import LendingPage from '../Pages/LendingPage'
import DashBoard from '../Pages/DashBoard'
import Verify from '../Pages/Verify'
import Reviews from '../Pages/Reviews'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/lend',
        element: <LendingPage />
    },
    {
        path: '/dashboard',
        element: <DashBoard />
    },
    {
        path: '/verify',
        element: <Verify />
    },
    {
        path: "/reviews",
        element: <Reviews />
    }

])