/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// * style
import './Home.scss';

// * scripts
import getRandomNumber from '../../utils/getRandomNumber';

// * contexts
import { userContext } from '../../contexts/UserContext';

// * img
import Illustration from '../../assets/img/illustrations/illustration-blue.svg';

const Home = () => {
   const Navigate = useNavigate();

   const { user, setUser } = useContext(userContext);

   const [password, setPassword] = useState('');
   const [inputName, setInputName] = useState('');
   const [inputPassword, setInputPassword] = useState('');

   useEffect(() => {
      if (user?.name) {
         Navigate('/dashboard');
      } else {
         const newPassword = getRandomNumber(100, 999);
         setPassword(() => newPassword);
      }
   }, []);

   function handleClickLogin(e) {
      const checkValues = (...values) =>
         values.every((value) => String(value).length !== 0);

      if (checkValues(inputName, inputPassword)) {
         if (String(inputName).length < 3 || String(inputName).length > 12) {
            alert(
               'Please, enter a new name, being greater than 3 and less than 12 characters'
            );
         } else if (Number(inputPassword) !== password) {
            alert('Please, check the password passed to you');
            alert(`Your password is: ${password}`);
         } else {
            Navigate('/dashboard');

            const imageIcon = 'https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg';
            setUser({ ...user, name: inputName, image: imageIcon });
         }
      }
   }

   return (
      <div className="Home">
         <div className="container">
            <div>
               <h2 data-aos="fade-up" data-aos-duration="1200">
                  Welcome Back!
               </h2>

               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
               >
                  <div
                     className="inputs"
                     data-aos="fade-up"
                     data-aos-duration="1400"
                  >
                     <input
                        type="string"
                        name="input-name"
                        id="input-name"
                        className="input"
                        required={true}
                        autoComplete={'no'}
                        value={inputName}
                        onInput={(e) => setInputName(e.target.value)}
                        placeholder="Username"
                     />

                     <input
                        type="password"
                        name="input-password"
                        id="input-password"
                        className="input"
                        required={true}
                        value={inputPassword}
                        onInput={(e) => setInputPassword(e.target.value)}
                        placeholder="Password"
                     />
                  </div>

                  <p data-aos="fade-up" data-aos-duration="1600">
                     Access the password!{' '}
                     <span
                        onClick={(e) => {
                           alert(`Your password is: ${password}`);
                        }}
                     >
                        Click here
                     </span>
                  </p>

                  <button
                     type="button"
                     className="btn"
                     onClick={(e) => handleClickLogin(e)}
                     data-aos="fade-up"
                     data-aos-duration="1800"
                  >
                     Login
                  </button>
               </form>
            </div>
            <div className="image">
               <img
                  src={Illustration}
                  alt="Illustration of a girl at her computer"
                  data-aos="zoom-in"
                  data-aos-duration="1800"
               />
            </div>
         </div>
      </div>
   );
};

export default Home;
