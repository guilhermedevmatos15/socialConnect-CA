import React from 'react';

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
   return <Outlet />;
};

export default App;
