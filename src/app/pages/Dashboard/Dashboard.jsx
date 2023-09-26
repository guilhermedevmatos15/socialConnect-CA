import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

// * components
import SideBar from '../../components/shared/SideBar/SideBar';
import Header from '../../components/shared/Header/Header';
import ButtonToTop from '../../components/shared/ButtonToTop/ButtonToTop';

// * style
import './Dashboard.scss';
import './Dashboard_responsive.scss';

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

   const [enableMenu, setEnableMenu] = useState(window.innerWidth <= 550 ? true : false);
   window.addEventListener('resize', (e) => {
      if (window.innerWidth <= 550) {
         setEnableMenu(true);
      } else {
         setEnableMenu(false);
      }
   });

   return (
      <div className="Dashboard">
         <SideBar enableMenu={enableMenu} />
         <ButtonToTop />

         <main className={enableMenu ? 'no-margin' : ''}>
            <Header enableMenu={enableMenu} />
            <Outlet />
         </main>
      </div>
   );
};

export default Dashboard;
