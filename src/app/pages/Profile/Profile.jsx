import React, { useContext, useState } from 'react';

// * components
import Message from '../../components/shared/Message/Message';
import Post from '../../components/shared/Post/Post';
import Modal from '../../components/shared/Modal/Modal';
import EditProfile from '../../components/shared/EditProfile/EditProfile';

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
   const { user } = useContext(userContext);

   const [openModalEdit, setOpenModalEdit] = useState(false);

   return (
      <div className="Profile">
         {!user?.name ? (
            <Message
               message="Please wait, we are loading your profile"
               icon="load"
            />
         ) : (
            <section className='container'>
               <div className="profile-content">
                  <img
                     className="profile-image main-profile-image"
                     src={user?.image}
                     alt={`User ${user?.name}`}
                  />

                  <div className="profile-username-container">
                     <p className="profile-data">{user?.name}</p>
                  </div>

                  <button
                     className="btn"
                     onClick={(e) => setOpenModalEdit(true)}
                  >
                     <MdOutlineEdit className="btn-icon" /> Edit
                  </button>
               </div>

               {user?.userPosts.length >= 1 ? (
                  <div className="profile-posts">
                     <h2>Your Posts</h2>

                     <div className="posts">
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
               ) : (
                  <Message
                     icon="no-like"
                     message="You haven't made a post yet"
                  />
               )}

               {/* Modal */}
               <Modal
                  open={openModalEdit}
                  setOpen={setOpenModalEdit}
                  maxWidth="425px"
               >
                  <EditProfile setOpenModal={setOpenModalEdit} />
               </Modal>
            </section>
         )}
      </div>
   );
};

export default Profile;
