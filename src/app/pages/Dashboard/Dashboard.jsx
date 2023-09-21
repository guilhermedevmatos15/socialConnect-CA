import React, { useContext, useEffect, useState } from 'react';
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
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const [menu, setMenu] = useState(window.innerWidth <= 550 ? true : false);
   window.addEventListener('resize', (e) => {
      if (window.innerWidth <= 550) {
         setMenu(true);
      } else {
         setMenu(false);
      }
   });

   return (
      <div className="Dashboard">
         <SideBar menu={menu} />

         <div className={menu ? 'no-margin' : ''}>
            <Header menu={menu} />
            <Outlet />
         </div>
      </div>
   );
};

export default Dashboard;
