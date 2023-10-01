import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// <App>
import App from './App';
import Home from './app/pages/Home/Home';
import Error from './app/pages/Error/Error';

import Dashboard from './app/pages/Dashboard/Dashboard';
import ForYou from './app/pages/ForYou/ForYou';
import TopRated from './app/pages/TopRated/TopRated';
import Favorite from './app/pages/Favorite/Favorite';

import Profile from './app/pages/Profile/Profile';
import About from './app/pages/About/About';

import CreatePost from './app/pages/CreatePost/CreatePost';

const Router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/dashboard',
            element: <Dashboard />,
            children: [
               {
                  path: '/dashboard/foryou',
                  element: <ForYou />,
               },
               {
                  path: '/dashboard/top-rated',
                  element: <TopRated />,
               },
               {
                  path: '/dashboard/favorite',
                  element: <Favorite />,
               },
               {
                  path: '/dashboard/profile',
                  element: <Profile />,
               },
               {
                  path: '/dashboard/about',
                  element: <About />,
               },
               {
                  path: '/dashboard/create-post',
                  element: <CreatePost />,
               },
            ],
         },
      ],
   },
]);

const Routes = () => {
   return <RouterProvider router={Router} />;
};

export default Routes;
