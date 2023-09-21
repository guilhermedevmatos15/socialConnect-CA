import React, { useContext } from 'react';

// * components
import Message from '../../components/shared/Message/Message';

// * style
import './Profile.scss';

// * scripts

// * contexts
import { userContext } from '../../contexts/UserContext';

// * img

// * icons

const Profile = () => {
   const { user, setUser } = useContext(userContext);

   return (
      <div className='Profile'>
         {!user?.name ? (
            <Message
               message="Please wait, we are loading your profile"
               icon="load"
            />
         ) : (
            <div></div>
         )}
      </div>
   );
};

export default Profile;
