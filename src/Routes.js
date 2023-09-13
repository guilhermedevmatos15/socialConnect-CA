import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// <App>
import App from './App';
import Home from './app/pages/Home/Home';
import Error from './app/pages/Error/Error';
import Feed from './app/pages/Feed/Feed';
import ForYou from './app/pages/ForYou/ForYou';

const Router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/feed',
            element: <Feed />,
            children: [
               {
                  path: '/feed/foryou',
                  element: <ForYou />
               }
            ],
         }
      ]
   }
]);

const Routes = () => {
   return <RouterProvider router={Router} />;
};

export default Routes;