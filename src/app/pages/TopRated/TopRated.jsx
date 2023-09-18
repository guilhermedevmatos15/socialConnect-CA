import React, { useContext, useEffect, useState } from 'react';

// * components
import Loading from '../../components/shared/Loading/Loading';
import Post from '../../components/shared/Post/Post';

// * style
import './TopRated.scss';

// * scripts
import orderPostsByLikeCont from '../../utils/orderPostsByLikeCont';

// * contexts
import { postsContext } from '../../contexts/PostContext';

// * img

// * icons

const TopRated = () => {
   const { posts } = useContext(postsContext);

   const [topPosts, setTopPosts] = useState([]);

   useEffect(() => {
      const response = orderPostsByLikeCont(posts);

      const arrayUp = [
         response[response.length - 1],
         response[response.length - 2],
         response[response.length - 3],
      ];

      setTopPosts([...arrayUp]);
   }, [posts]);

   return (
      <>
         {topPosts.length < 1 ? (
            <Loading page="Top Rated" />
         ) : (
            <section className="TopRated">
               <div className="podium">
                  <div className="podium-element" id="podium-2">
                     <Post
                        id={topPosts[1]?._id}
                        name={topPosts[1]?.author}
                        description={topPosts[1]?.description}
                        imagePost={topPosts[1]?.urlToImage}
                        imageUser={topPosts[1]?.imageUser}
                        likeCont={topPosts[1]?.likeCont}
                        liked={topPosts[1]?.liked}
                     />
                  </div>
                  <div className="podium-element" id="podium-1">
                     <Post
                        id={topPosts[0]?._id}
                        name={topPosts[0]?.author}
                        description={topPosts[0]?.description}
                        imagePost={topPosts[0]?.urlToImage}
                        imageUser={topPosts[0]?.imageUser}
                        likeCont={topPosts[0]?.likeCont}
                        liked={topPosts[0]?.liked}
                     />
                  </div>
                  <div className="podium-element" id="podium-3">
                     <Post
                        id={topPosts[2]?._id}
                        name={topPosts[2]?.author}
                        description={topPosts[2]?.description}
                        imagePost={topPosts[2]?.urlToImage}
                        imageUser={topPosts[2]?.imageUser}
                        likeCont={topPosts[2]?.likeCont}
                        liked={topPosts[2]?.liked}
                     />
                  </div>
               </div>
            </section>
         )}
      </>
   );
};

export default TopRated;
