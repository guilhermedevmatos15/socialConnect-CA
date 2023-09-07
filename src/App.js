import React from 'react';

// ? React Router
import { Outlet } from 'react-router-dom';

// ? Styles
import './app/styles/index.scss';

const App = () => {
   return (
      <>
         <Outlet />
      </>
   );
};

export default App;
