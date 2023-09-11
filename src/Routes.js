import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// <App>
import App from './App';
import Home from './app/pages/Home/Home';
import Error from './app/pages/Error/Error';

const Router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <Home />
         }
      ]
   }
]);

const Routes = () => {
   return <RouterProvider router={Router} />;
};

export default Routes;