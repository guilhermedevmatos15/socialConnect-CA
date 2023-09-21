import React, { useContext } from 'react';

// * components
import Message from '../../components/shared/Message/Message';
import Post from '../../components/shared/Post/Post';

// * style
import './ForYou.scss';

// * scripts

// * contexts
import { postsContext } from '../../contexts/PostContext';

// * img

// * icons
import { BiRefresh } from 'react-icons/bi';

const ForYou = () => {
   const { posts, setPosts } = useContext(postsContext);

   let messageLoading = 'Wait, this page is loading';

   return (
      <div className="ForYou">
         {posts.length === 0 ? (
            <Message message={messageLoading} icon='load' />
         ) : (
            <section>
               <div>
                  <h1>For You</h1>
                  <button
                     className="btn"
                     onClick={(e) => {
                        setPosts([]);
                        window.location.reload();
                     }}
                  >
                     <BiRefresh className="btn-icon" /> Refresh
                  </button>
               </div>
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
