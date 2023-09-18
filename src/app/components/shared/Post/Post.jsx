import React, { memo, useContext } from 'react';

// * components

// * style
import './Post.scss';

// * scripts

// * contexts
import { postsContext } from '../../../contexts/PostContext';

// * img

// * icons
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Post = ({
   id,
   name,
   imagePost,
   imageUser,
   description,
   liked,
   likeCont,
}) => {
   const { posts, setPosts } = useContext(postsContext);

   return (
      <article className="Post">
         <img src={imagePost} alt={description} />
         <div className="user-content">
            <div className="user-info" title={`Go to ${name}`}>
               <img src={imageUser} alt="Icon user" />
               <p className="user-name">{name}</p>
            </div>
            <div
               className="user-iterations"
               onClick={(e) =>
                  setPosts(
                     posts.map((value) =>
                        // eslint-disable-next-line eqeqeq
                        value?._id == id
                           ? {
                              ...value,
                              liked: !liked,
                              likeCont: liked
                                 ? Number(likeCont) - 1
                                 : Number(likeCont) + 1,
                           }
                           : value
                     )
                  )
               }
            >
               {liked ? (
                  <AiFillHeart className="icon-heart-fill icon" />
               ) : (
                  <AiOutlineHeart className="icon-heart-outline icon" />
               )}

               <span className="like-counter">{likeCont}</span>
            </div>
         </div>
      </article>
   );
};

export default memo(Post);
