import React, { useContext } from 'react';

// * components

// * style
import './Modal.scss';
import './Modal_responsive.scss';

// * scripts

// * contexts
import { userContext } from '../../../contexts/UserContext';

// * img

// * icons
import { FaRegCircleXmark } from 'react-icons/fa6';

const Modal = ({ children, maxWidth, open, setOpen }) => {
   const { user, setUser } = useContext(userContext);

   const style = {
      maxWidth: maxWidth,
   };

   return (
      <div className={`Modal modal ${open ? 'open' : ''}`} style={style}>
         <FaRegCircleXmark
            className="modal-icon-close"
            onClick={(e) => setOpen(false)}
         />

         <div className="modal-content">{children}</div>
      </div>
   );
};

export default Modal;
