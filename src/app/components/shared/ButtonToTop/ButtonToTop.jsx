import React from 'react';

// * style
import './ButtonToTop.scss';

// * icons
import { BsArrowUpCircle } from 'react-icons/bs';

const ButtonToTop = () => {
   return (
      <button
         className="ButtonToTop btn"
         onClick={(e) => {
            window.scrollTo({
               top: 0,
            });
         }}
      >
         <BsArrowUpCircle className="btn-icon" />
      </button>
   );
};

export default ButtonToTop;
