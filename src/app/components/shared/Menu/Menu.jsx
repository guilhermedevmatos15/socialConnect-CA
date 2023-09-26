import React from 'react';

// * components

// * style
import './Menu.scss';

// * scripts

// * contexts

// * img

// * icons
import { HiXMark } from 'react-icons/hi2';
import Navigation from '../Navigation/Navigation';

const Menu = ({ open, setOpen }) => {
   return (
      <div className={`Menu ${open ? 'open' : 'close'}`}>
         <HiXMark className="icon-close" onClick={(e) => setOpen(false)} />

         <Navigation />
      </div>
   );
};

export default Menu;
