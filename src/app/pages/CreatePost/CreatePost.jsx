import React, { useContext, useState, useRef } from 'react';

// * Animation
import TransitionAnimation from '../../components/shared/TransitionAnimation/TransitionAnimation';

// * components

// * style
import './CreatePost.scss';
import './CreatePost_responsive.scss';

// * scripts
import getBase64Image from '../../utils/getBase64Image';
import rulesImage from '../../utils/rulesImage';

// * contexts
import { userContext } from '../../contexts/UserContext';

// * img

// * icons

const CreatePost = () => {
   const { user, setUser } = useContext(userContext);

   // Ref for image
   const inputImageFile = useRef(null);

   const [description, setDescription] = useState('');
   const [image, setImage] = useState(null);

   function handleImageUpload(e) {
      const file = e.target.files[0];

      if (file) {
         if (file.size >= rulesImage.MAX_SIZE_MB) {
            alert('Please, enter an image less than 1mb');
            return;
         } else if (!rulesImage.SUPPORTED_IMAGE_TYPES.includes(file.type)) {
            alert('Unsupported file type');
            return;
         }

         getBase64Image(file, (base64Image) => {
            setImage(base64Image);
         });

         return;
      } else {
         alert('Please, select an image');
         return;
      }
   }

   function handleClick(e) {
      if (image && description.length >= 1) {
         setUser({
            ...user,
            userPosts: [
               ...user.userPosts,
               {
                  _id: `${user.name}_${user.userPosts.length + 1}`,
                  author: user.name,
                  urlToImage: image,
                  content: description,
                  imageUser: user.image,
                  liked: false,
                  likeCont: 0,
               },
            ],
         });

         alert('Create Post!');

         // Reset inputs
         setImage(null);
         inputImageFile.current.value = null;
         setDescription('');

         return;
      }

      alert('Provide all data');
   }

   return (
      <TransitionAnimation>
         <div className="CreatePost">
            <section className="container">
               <form onSubmit={(e) => e.preventDefault()}>
                  <label>
                     <span>Choose a file:</span>
                     <input
                        accept=".jpg, .jpeg, .png, .gif, .pdf"
                        className="input"
                        type="file"
                        onChange={(e) => handleImageUpload(e)}
                        ref={inputImageFile}
                     />
                  </label>

                  <label>
                     <span>Insert the description</span>
                     <input
                        className="input"
                        type="text"
                        value={description}
                        onInput={(e) => setDescription(String(e.target.value))}
                     />
                  </label>

                  <button
                     className="btn"
                     type="button"
                     onClick={(e) => handleClick(e)}
                  >
                     Create!
                  </button>
               </form>
            </section>
         </div>
      </TransitionAnimation>
   );
};

export default CreatePost;
