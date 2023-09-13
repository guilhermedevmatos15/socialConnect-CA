/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// * components

// * style
import './Navigation.scss';

// * scripts

// * contexts

// * img

// * icons
import { AiFillStar, AiFillHeart, AiFillSetting } from 'react-icons/ai';
import { BiRightTopArrowCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineFeed } from 'react-icons/md';

const Navigation = () => {
   return (
      <nav>
            <div>
               <Link to="/foryou" className="link">
                  <span className="icon">
                     <AiFillStar />
                  </span>
                  <span className="text">For you</span>
               </Link>

               <Link to="/top-rated" className="link">
                  <span className="icon">
                     <BiRightTopArrowCircle />
                  </span>
                  <span className="text">Top rated</span>
               </Link>

               <Link to="/favorite" className="link">
                  <span className="icon">
                     <AiFillHeart />
                  </span>
                  <span className="text">Favorite</span>
               </Link>
            </div>
            <div>
               <Link to="/profile" className="link">
                  <span className="icon">
                     <CgProfile />
                  </span>
                  <span className="text">Profile</span>
               </Link>

               <Link to="/settings" className="link">
                  <span className="icon">
                     <AiFillSetting />
                  </span>
                  <span className="text">Settings</span>
               </Link>

               <Link to="/about" className="link">
                  <span className="icon">
                     <MdOutlineFeed />
                  </span>
                  <span className="text">About</span>
               </Link>
            </div>
         </nav>
   );
};

Navigation.propTypes = {

};

export default Navigation;
