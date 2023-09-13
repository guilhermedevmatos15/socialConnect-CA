/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

// * components
import SideBar from '../../components/shared/SideBar/SideBar';

// * style
import './Feed.scss';

// * scripts

// * contexts
import { userContext } from '../../contexts/UserContext';

// * img

// * icons

const Feed = () => {
   const Navigate = useNavigate();
   
   const { user } = useContext(userContext);
   
   useEffect(() => {
      if (user?.name) {
         Navigate('/feed/foryou');
      } else {
         Navigate('/');
      }
   }, []);

   return (
      <div className="Feed">
         <SideBar />

         <Outlet />
      </div>
   );
};

export default Feed;
