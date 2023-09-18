import React, { useContext } from 'react';

// * components
import Loading from '../../components/shared/Loading/Loading';
import Post from '../../components/shared/Post/Post';

// * style
import './ForYou.scss';

// * scripts

// * contexts
import { postsContext } from '../../contexts/PostContext';

// * img

// * icons

const ForYou = () => {
   const { posts } = useContext(postsContext);

   return (
      <div className="ForYou">
         {Array.from(posts).length === 0 ? (
            <Loading page="For you" />
         ) : (
            <section>
               <h1>For You</h1>
               <div className="posts">
                  {posts.map((post, index, arr) => {
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

export default ForYou;
