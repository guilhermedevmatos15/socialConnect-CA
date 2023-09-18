import React from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './Fault.scss';

// * scripts

// * contexts

// * img

// * icons
import { FaRegCircleXmark } from 'react-icons/fa6';
import { IoReloadSharp } from 'react-icons/io5';

const Fault = ({ page }) => {
   return (
      <section className="Fault">
         <FaRegCircleXmark />
         <h2>Oops!</h2>
         <hr />
         <p>We had a problem in the section"{page}"! Please try again.</p>

         <button
            className="btn"
            onClick={(e) => {
               window.location.reload();
            }}
         >
            <IoReloadSharp />
            Reload Page
         </button>

         <p>
            If the error persists,{' '}
            <a
               href="https://github.com/guilhermedevmatos15"
               target="_blank"
               rel="noreferrer"
               title="Go to my GitHub"
            >
               get in touch!
            </a>
         </p>
      </section>
   );
};

Fault.propTypes = {
   page: PropTypes.string.isRequired,
};

export default Fault;
