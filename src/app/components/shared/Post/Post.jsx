import React, { memo, useContext } from 'react';

// * components

// * style
import './Post.scss';
import './Post_responsive.scss';

// * scripts

// * contexts
import { postsContext } from '../../../contexts/PostContext';
import { userContext } from '../../../contexts/UserContext';

// * img

// * icons
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Post = ({
   type,
   id,
   name,
   imagePost,
   imageUser,
   description,
   liked,
   likeCont,
}) => {
   const { posts, setPosts } = useContext(postsContext);
   const { user, setUser } = useContext(userContext);

   function handleClickWEB(e) {
      setPosts(
         posts.map((post) =>
            post?._id === id
               ? {
                  ...post,
                  liked: !liked,
                  likeCont: liked
                     ? Number(likeCont) - 1
                     : Number(likeCont) + 1,
               }
               : post
         )
      );
   }

   function handleClickMY(e) {
      setUser({
         ...user,
         userPosts: user.userPosts.map((post) =>
            post?._id === id
               ? {
                  ...post,
                  liked: !liked,
                  likeCont: liked
                     ? Number(likeCont) - 1
                     : Number(likeCont) + 1,
               }
               : post
         ),
      });
   }

   return (
      <article className="Post">
         <img src={imagePost} alt={description} />

         <div className="user-content">
            <div className="user-info">
               <img src={imageUser} alt="Icon user" />
               <p className="user-name">{name}</p>
            </div>

            {String(type) === 'web' ? (
               <div
                  className="user-iterations"
                  onClick={(e) => handleClickWEB(e)}
               >
                  {liked ? (
                     <AiFillHeart className="icon-heart-fill icon" />
                  ) : (
                     <AiOutlineHeart className="icon-heart-outline icon" />
                  )}

                  <span className="like-counter">{likeCont}</span>
               </div>
            ) : (
               <div
                  className="user-iterations"
                  onClick={(e) => handleClickMY(e)}
               >
                  {liked ? (
                     <AiFillHeart className="icon-heart-fill icon" />
                  ) : (
                     <AiOutlineHeart className="icon-heart-outline icon" />
                  )}

                  <span className="like-counter">{likeCont}</span>
               </div>
            )}
         </div>
      </article>
   );
};

export default memo(Post);
