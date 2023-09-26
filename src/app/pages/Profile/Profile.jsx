import React, { useContext } from 'react';

// * components
import Message from '../../components/shared/Message/Message';
import Post from '../../components/shared/Post/Post';

// * style
import './Profile.scss';
import './Profile_responsive.scss';

// * scripts

// * contexts
import { userContext } from '../../contexts/UserContext';

// * img

// * icons
import { MdOutlineEdit } from 'react-icons/md';

const Profile = () => {
   const { user, setUser } = useContext(userContext);

   return (
      <div className="Profile">
         {!user?.name ? (
            <Message
               message="Please wait, we are loading your profile"
               icon="load"
            />
         ) : (
            <section>
               <div className="profile-content">
                  <img
                     className="profile-image main-profile-image"
                     src={user?.image}
                     alt={`User ${user?.name}`}
                  />

                  <div className="profile-username-container">
                     <h3 className="profile-specification">Username</h3>
                     <p className="profile-data">{user?.name}</p>
                  </div>

                  <button className="btn">
                     <MdOutlineEdit className="btn-icon" /> Edit
                  </button>
               </div>

               <div className="profile-posts">
                  <h2>Your Posts</h2>

                  <div className='posts'>
                     {user?.userPosts.map((post, index) => (
                        <Post
                           key={`${post?._id}_${index}`}
                           type="profile"
                           id={post?._id}
                           name={user?.name}
                           description={post?.content}
                           imagePost={post?.urlToImage}
                           imageUser={post?.imageUser}
                           liked={post?.liked}
                           likeCont={post?.likeCont}
                        />
                     ))}
                  </div>
               </div>
            </section>
         )}
      </div>
   );
};

export default Profile;
