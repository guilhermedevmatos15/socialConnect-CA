import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// <App>
import App from './App';

const Router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [

      ]
   }
]);

const Routes = () => {
   return <RouterProvider router={Router} />;
};

export default Routes;