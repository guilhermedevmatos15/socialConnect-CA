import React from 'react';
import PropTypes from 'prop-types';

// * components
import Navigation from '../Navigation/Navigation';

// * style
import './Header.scss';

// * scripts

// * contexts

// * img

// * icons

const Header = ({ navigator }) => {
   return (
      <header className="Header">
         <img
            src="/logos/sc-color.png"
            alt="Our company logo, Social Connect "
         />

         {navigator && (
            <Navigation color='black' fontSize='1rem' gap='30px' />
         )}

         <div className="buttons">
            <button className="btn">Sing In</button>
            <button className="btn">Sing Up</button>
         </div>
      </header>
   );
};

Header.propTypes = {
   navigator: PropTypes.bool.isRequired,
};

export default Header;
