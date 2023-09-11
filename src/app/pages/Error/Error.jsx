import React from 'react';
import { Link } from 'react-router-dom';

// * components

// * style
import './Error.scss';

// * scripts

// * contexts

// * img
import IllustrationError from '../../assets/img/illustrations/illustration-404-blue.svg';

// * icons

const Error = () => {
   return (
      <div className="Error">
         <img src={IllustrationError} alt="Illustration error, Page Not Found" />
         <div className='error-content'>
            <h1>Page Not Found</h1>
            <p>Oops, page not found in our app</p>
            <Link to='/feed'>
               <button className='btn'>Go to Feed</button>
            </Link>
         </div>
      </div>
   );
};

export default Error;
