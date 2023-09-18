import React from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './Loading.scss';

// * scripts

// * contexts

// * img

// * icons
import { FaRegCircleXmark } from 'react-icons/fa6';

const Loading = ({ page }) => {
   return (
      <section className="Loading">
         <FaRegCircleXmark />
      </section>
   );
};

Loading.propTypes = {
   page: PropTypes.string.isRequired,
};

export default Loading;
