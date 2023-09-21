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

// * img

// * icons

const Favorite = () => {
   const { posts } = useContext(postsContext);

   const [favoritePosts, setFavoritePosts] = useState([]);

   useEffect(() => {
      setFavoritePosts(
         posts.filter((post) => {
            return post?.liked === true;
         })
      );
   }, [posts]);

   return (
      <div className="Favorite">
         {favoritePosts.length < 1 ? (
            <Message message="Sorry! You didn't like any post" icon='no-like' />
         ) : (
            <section>
               <h1>Favorite Posts</h1>

               <div className="posts">
                  {favoritePosts.map((post, index) => {
                     return (
                        <Post
                           key={`${post?.source.id}_${index}`}
                           id={post?._id}
                           name={post?.author}
                           description={post?.content}
                           imagePost={post?.urlToImage}
                           imageUser={post?.imageUser}
                           liked={post?.liked}
                           likeCont={post?.likeCont}
                        />
                     );
                  })}
               </div>
            </section>
         )}
      </div>
   );
};

export default Favorite;
