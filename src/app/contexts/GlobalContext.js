// This file is responsible for importing and exporting the application's global contexts.
import React from 'react';

// ? Contexts
import UserContext from './UserContext';

const GlobalContext = ({ children }) => {
   return(
      <>
         <UserContext>
            {children}
         </UserContext>
      </>
   );
};

export default GlobalContext;
