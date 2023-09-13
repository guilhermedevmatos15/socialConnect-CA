import React from 'react';
// import PropTypes from 'prop-types';

// * components
import Navigation from '../Navigation/Navigation';

// * style
import './SideBar.scss';

// * scripts

// * contexts

// * img

// * icons

const SideBar = () => {
   return (
      <aside className="SideBar">
         <img src="./logos/sc-color.png" alt="Logo of Social Connect" />

         <Navigation />

         <div className='ignore-element'></div>
      </aside>
   );
};

// SideBar.propTypes = {
//    prop: PropTypes,
// };

export default SideBar;
