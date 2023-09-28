import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// * components
import Modal from '../Modal/Modal';
import Message from '../Message/Message';

// * style
import './Navigation.scss';

// * scripts
import logOut from '../../../utils/logOut';

// * contexts

// * img

// * icons
import { AiFillStar, AiFillHeart, AiFillSetting } from 'react-icons/ai';
import { BiRightTopArrowCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineFeed } from 'react-icons/md';
import { BiSolidLogIn } from 'react-icons/bi';

const Navigation = () => {
   const [openModal, setOpenModal] = useState(false);

   function handleLogOut(e) {
      setOpenModal(true);
   }

   return (
      <>
         <div className="basic-links-group">
            <Link to="foryou" className="link">
               <span className="icon">
                  <AiFillStar />
               </span>
               <span className="text">For you</span>
            </Link>
            <Link to="top-rated" className="link">
               <span className="icon">
                  <BiRightTopArrowCircle />
               </span>
               <span className="text">Top rated</span>
            </Link>
            <Link to="favorite" className="link">
               <span className="icon">
                  <AiFillHeart />
               </span>
               <span className="text">Favorite</span>
            </Link>
            <Link to="profile" className="link">
               <span className="icon">
                  <CgProfile />
               </span>
               <span className="text">Profile</span>
            </Link>
            <Link to="about" className="link">
               <span className="icon">
                  <MdOutlineFeed />
               </span>
               <span className="text">About</span>
            </Link>
         </div>

         <div className="logout-link-group">
            <div className="link" onClick={(e) => handleLogOut(e)}>
               <span className="icon">
                  <BiSolidLogIn />
               </span>
               <span className="text">LogOut</span>
            </div>
         </div>

         {/* Modal */}
         <Modal open={openModal} setOpen={setOpenModal} maxWidth="350px">
            <Message icon="question" message="Do you want to log out?" />

            <div className="btn-container">
               <button className="btn btn-confirm" onClick={(e) => logOut()}>
                  Confirm
               </button>
               <button className="btn btn-cancel" onClick={(e) => setOpenModal(false)}>
                  Cancel
               </button>
            </div>
         </Modal>
      </>
   );
};

export default Navigation;
