import React, { useContext, useEffect, useState } from 'react';

// * components
import Post from '../../components/shared/Post/Post';
import Message from '../../components/shared/Message/Message';

// * style
import './Favorite.scss';
import './Favorite_responsive.scss';

// * scripts

// * contexts
import { postsContext } from '../../contexts/PostContext';
import { userContext } from '../../contexts/UserContext';

// * img

// * icons

const Favorite = () => {
   const { posts } = useContext(postsContext);
   const { user } = useContext(userContext);

   const [favoriteOtherPosts, setFavoriteOtherPosts] = useState([]);
   const [favoriteMyPosts, setFavoriteMyPosts] = useState([]);

   useEffect(() => {
      setFavoriteMyPosts(
         user.userPosts.filter((post) => {
            return post?.liked;
         })
      );

      setFavoriteOtherPosts(
         posts.filter((post) => {
            return post?.liked;
         })
      );
   }, [posts, user]);

   return (
      <div className="Favorite">
         {favoriteMyPosts.length < 1 && favoriteOtherPosts.length < 1 ? (
            <Message message="Sorry! You didn't like any post" icon="no-like" />
         ) : (
            <section>
               {!(favoriteMyPosts.length < 1) && (
                  <div>
                     <h2>Your posts</h2>

                     <div className="posts">
                        {favoriteMyPosts
                           .map((post, index) => (
                              <Post
                                 key={`${post?._id}_${index}`}
                                 type="profile"
                                 id={post?._id}
                                 name={post?.author}
                                 description={post?.content}
                                 imagePost={post?.urlToImage}
                                 imageUser={post?.imageUser}
                                 liked={post?.liked}
                                 likeCont={post?.likeCont}
                              />
                           ))
                           .reverse()}
                     </div>
                  </div>
               )}

               {!(favoriteOtherPosts?.length < 1) && (
                  <div>
                     <h2>Other posts</h2>

                     <div className="posts">
                        {favoriteOtherPosts
                           .map((post, index) => (
                              <Post
                                 key={`${post?.source.id}_${index}`}
                                 type="web"
                                 id={post?._id}
                                 name={post?.author}
                                 description={post?.content}
                                 imagePost={post?.urlToImage}
                                 imageUser={post?.imageUser}
                                 liked={post?.liked}
                                 likeCont={post?.likeCont}
                              />
                           ))
                           .reverse()}
                     </div>
                  </div>
               )}
            </section>
         )}
      </div>
   );
};

export default Favorite;
