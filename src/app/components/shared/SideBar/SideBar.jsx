import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

// * components
import Navigation from '../Navigation/Navigation';

// * style
import './SideBar.scss';

// * scripts

// * contexts

// * img
import LogoColor from '../../../assets/img/logos/sc-color.png';
import LogoColorIcon from '../../../assets/img/logos/sc-icon-color.png';

// * icons
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const SideBar = ({ menu }) => {
   const [open, setOpen] = useState(false);

   return (
      <>
         {menu ? (
            ''
         ) : (
            <aside
               className={`SideBar ${open ? 'sidebar-open' : 'sidebar-close'}`}
            >
               <div
                  className="sidebar-controls"
                  onClick={(e) => setOpen(!open)}
               >
                  {open ? (
                     <BsArrowLeftCircle className="icon" />
                  ) : (
                     <BsArrowRightCircle className="icon" />
                  )}
               </div>

               <img
                  className="image-fill"
                  src={LogoColor}
                  alt="Logo of Social Connect"
               />
               <img
                  className="image-icon"
                  src={LogoColorIcon}
                  alt="Logo of Social Connect"
               />

               <Navigation />
            </aside>
         )}
      </>
   );
};

// SideBar.propTypes = {
//    prop: PropTypes,
// };

export default memo(SideBar);
