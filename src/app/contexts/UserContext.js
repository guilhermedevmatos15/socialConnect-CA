import React, { createContext } from 'react';

export const userContext = createContext();

const UserContext = ({ children }) => {
   return(
      <>
         <userContext.Provider value={{ cont: 5 }}>
            {children}
         </userContext.Provider>
      </>
   );
};

export default UserContext;
