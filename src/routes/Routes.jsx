import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../Layout/HomeLayout";
import Login from "../pages/Login";
import Register from "../components/Register";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import PlantDetails from "../pages/PlantDetails";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        loader: () => fetch('/plants.json'),
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
                path: '/plantDetails/:id',
                element: <PlantDetails />
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