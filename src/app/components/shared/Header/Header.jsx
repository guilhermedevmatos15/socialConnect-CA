import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// * components
import Menu from '../Menu/Menu';

// * style
import './Header.scss';

// * scripts

// * contexts
import { userContext } from '../../../contexts/UserContext';

// * img

// * icons
import { HiMenu } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';

const Header = ({ menu }) => {
   const { user } = useContext(userContext);

   const Navigate = useNavigate();

   const [openMenu, setOpenMenu] = useState(false);

   return (
      <>
         {JSON.parse(menu) && <Menu open={openMenu} setOpen={setOpenMenu} />}
         <header className="Header">
            {JSON.parse(menu) ? (
               <HiMenu
                  className="icon-menu"
                  onClick={(e) => {
                     setOpenMenu(true);
                  }}
               />
            ) : (
               <div className="ignore-element"></div>
            )}
            <div>
               <button className="btn">
                  <AiOutlinePlus className="btn-icon" /> To Add
               </button>
               <img
                  className="header-profile-image"
                  src={user?.image}
                  alt="user profile img"
                  onClick={(e) => Navigate('profile')}
                  title="Go to Profile"
               />
            </div>
         </header>
      </>
   );
};

export default Header;
