import React from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './Navigation.scss';

// * scripts

// * contexts

// * img

// * icons

const Navigation = ({ color, fontSize, gap }) => {
   const style_list = {
      gap,
   };

   const style_links = {
      color,
      fontSize,
      gap,
   };

   return (
      <nav className="Navigation">
         <ul style={style_list}>
            <li style={style_links}>Teste</li>
            <li style={style_links}>Teste</li>
            <li style={style_links}>Teste</li>
            <li style={style_links}>Teste</li>
            <li style={style_links}>Teste</li>
         </ul>
      </nav>
   );
};

Navigation.propTypes = {
   color: PropTypes.string.isRequired,
   fontSize: PropTypes.string.isRequired,
   gap: PropTypes.string.isRequired,
};

export default Navigation;
