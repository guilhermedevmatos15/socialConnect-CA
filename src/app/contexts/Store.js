// This file is responsible for importing and exporting the application's global contexts.
import React from 'react';

// ? Contexts
import UserContext from './UserContext';
import PostContext from './PostContext';

const Store = ({ children }) => {
   return(
      <>
         <UserContext>
            <PostContext>
               {children}
            </PostContext>
         </UserContext>
      </>
   );
};

export default Store;
