/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

// * components
import SideBar from '../../components/shared/SideBar/SideBar';
import Header from '../../components/shared/Header/Header';

// * style
import './Dashboard.scss';

// * scripts

// * contexts
import { userContext } from '../../contexts/UserContext';

// * img

// * icons

const Dashboard = () => {
   const Navigate = useNavigate();
   
   const { user } = useContext(userContext);
   
   useEffect(() => {
      if (user?.name) {
         Navigate('/dashboard/foryou');
      } else {
         Navigate('/');
      }
   }, []);

   return (
      <div className="Dashboard">
         <SideBar />

         <div>
            <Header />
            <Outlet />
         </div>
      </div>
   );
};

export default Dashboard;
