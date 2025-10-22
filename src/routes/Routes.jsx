import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../Layout/HomeLayout";
import Login from "../pages/Login";
import Register from "../components/Register";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/plants',
                element: <Plants />
            },
            {
                path: '/myProfile',
                element: <MyProfile />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {

    }
])
export default router;