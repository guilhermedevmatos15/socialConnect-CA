import React, { createContext, useEffect, useState } from 'react';

export const userContext = createContext();

const UserContext = ({ children }) => {
   const keyLocalStorage = 'user';

   const [user, setUser] = useState(JSON.parse(localStorage.getItem(keyLocalStorage)));

   useEffect(() => {
      const object = JSON.parse(localStorage.getItem(keyLocalStorage));

      if (object?.name) {
         console.log(object);
         setUser(object);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem(keyLocalStorage, JSON.stringify(user));
   }, [user]);

   return(
      <>
         <userContext.Provider value={{ user, setUser }}>
            {children}
         </userContext.Provider>
      </>
   );
};

export default UserContext;
