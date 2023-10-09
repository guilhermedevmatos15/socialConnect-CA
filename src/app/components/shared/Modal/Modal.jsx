import React from 'react';

// * components

// * style
import './Modal.scss';

// * scripts

// * contexts

// * img

// * icons
import { FaRegCircleXmark } from 'react-icons/fa6';

const Modal = ({ children, maxWidth, open, setOpen }) => {
   const style = {
      maxWidth: maxWidth,
   };

   return (
      <div className={`Modal ${open ? 'open' : ''}`} style={style}>
         <FaRegCircleXmark
            className="modal-icon-close"
            onClick={(e) => setOpen(false)}
         />

         <div className="modal-content">{children}</div>
      </div>
   );
};

export default Modal;
