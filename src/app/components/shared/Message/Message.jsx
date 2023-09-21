import React, { memo } from 'react';

import PropTypes from 'prop-types';

// * components

// * style
import './Message.scss';

// * scripts

// * contexts

// * img

// * icons
import { FaRegCircleXmark } from 'react-icons/fa6';
import { BsFillHeartbreakFill } from 'react-icons/bs';
import { GrCloudDownload } from 'react-icons/gr';

// Icon is passed for prop.children
const Message = ({ message, icon }) => {
   const Icon = String(icon);

   return (
      <section className="Message">
         {Icon === 'error' ? (
            <FaRegCircleXmark className="icon icon-error" />
         ) : Icon === 'no-like' ? (
            <BsFillHeartbreakFill className="icon icon-no-like" />
         ) : Icon === 'load' ? (
            <GrCloudDownload className="icon icon-load" />
         ) : null}

         <p>{message}</p>
      </section>
   );
};

Message.propTypes = {
   message: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
};

export default memo(Message);
