import React from 'react';

// * Animation for replacement page
import { AnimatePresence } from 'framer-motion';

// * React Router
import { Outlet } from 'react-router-dom';

// * Styles
import './app/styles/index.scss';

// * AOS (animation)
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
   duration: 1300,
});

const App = () => {
   return (
      <AnimatePresence mode='wait'>
         <Outlet />
      </AnimatePresence>
   );
};

export default App;
