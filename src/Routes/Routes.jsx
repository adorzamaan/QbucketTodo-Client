import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddTask from '../Components/AddTask/AddTask';
import CompletedTask from '../Components/CompletedTask/CompletedTask';
import MyTask from '../Components/MyTask/MyTask';
import ErrorPage from '../Components/Shared/ErrorPage/ErrorPage';
import Main from '../Main/Main';
import Home from '../Pages/Home/Home';

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/addtask',
                    element:<AddTask></AddTask>
                },
                {
                    path:'/mytask',
                    element:<MyTask></MyTask>
                },
                {
                    path:'/completedtask',
                    element:<CompletedTask></CompletedTask>
                }
            ]
        }
    ])


    return (
        <div>
            <RouterProvider router={routes}></RouterProvider>
        </div>
    );
};

export default Routes;