import React, { useContext } from 'react';

// * Animation
import TransitionAnimation from '../../components/shared/TransitionAnimation/TransitionAnimation';

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
      <TransitionAnimation>
         <div className="ForYou">
            {posts.length === 0 ? (
               <Message message={messageLoading} icon="load" />
            ) : (
               <section className="container">
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
                     {posts.map((post, index) => (
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
                     ))}
                  </div>
               </section>
            )}
         </div>
      </TransitionAnimation>
   );
};

export default ForYou;
