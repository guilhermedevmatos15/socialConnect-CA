import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

// * components

// * style
import './Header.scss';

// * scripts

// * contexts
import { userContext } from '../../../contexts/UserContext';

// * img

// * icons

const Header = () => {
   const { user } = useContext(userContext);

   const Navigate = useNavigate();

   return (
      <header className="Header">
         <div className="ignore-element"></div>
         <div>
            <button className="btn">Add Post</button>
            <img
               className="header-profile-image"
               src={user?.image}
               alt="user profile img"
               onClick={(e) => Navigate('dashboard/profile')}
               title="Go to Profile"
            />
         </div>
      </header>
   );
};

// Header.propTypes = {
//    prop: PropTypes,
// };

export default Header;
