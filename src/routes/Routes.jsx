import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../Layout/HomeLayout";
import Login from "../pages/Login";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage.jsx";
import PlantDetails from "../pages/PlantDetails";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        loader: () => fetch('/plants.json'),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/plants',
                element: <Plants />
            },
            {
                path: '/plantDetails/:id',
                element: <PrivateRoute >
                    <PlantDetails />
                </PrivateRoute>
            },
            {
                path: '/myProfile',
                element: <PrivateRoute >
                    <MyProfile />
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: 
                    <Register/>
                
            }
        ]
    },
    {

    }
])
export default router;