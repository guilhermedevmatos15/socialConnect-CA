import React, { useContext, useRef, useState } from 'react';

// * components

// * style
import './EditProfile.scss';

// * scripts
import rulesImage from '../../../utils/rulesImage';
import getBase64Image from '../../../utils/getBase64Image';

// * contexts
import { userContext } from '../../../contexts/UserContext';

// * img

// * icons

const EditProfile = ({ setOpenModal }) => {
   const { user, setUser } = useContext(userContext);

   // Ref for image
   const inputImageFile = useRef(null);

   const [image, setImage] = useState(null);
   const [username, setUsername] = useState('');

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
      } else {
         alert('Attention! No images selected');
      }
   }

   function handleClick(e) {
      let newImage = image ? image : user.image;
      let newUsername = user.name;

      if (username.length >= 1) {
         if (username.length < 3 || username.length > 12) {
            alert(
               'Please enter a new name, with more than 3 and less than 12 characters and no spaces'
            );
         } else if (username.includes(' ')) {
            alert('Please, no spaces.');
         } else {
            newUsername = username.toLowerCase();
         }
      }

      setUser({ ...user, name: newUsername, image: newImage });
      setOpenModal(false);
   }

   return (
      <div className="EditProfile">
         <h2>Editing Profile</h2>

         <form onSubmit={(e) => e.preventDefault()}>
            <label>
               <span>Select the new profile picture file</span>
               <input
                  type="file"
                  className="input"
                  ref={inputImageFile}
                  onInput={(e) => handleImageUpload(e)}
               />
            </label>

            <label>
               <span>Enter your new username</span>
               <input
                  type="text"
                  className="input"
                  value={username}
                  onInput={(e) => setUsername(String(e.target.value))}
               />
            </label>

            <button
               type="button"
               className="btn"
               onClick={(e) => handleClick(e)}
            >
               Confirm
            </button>
         </form>
      </div>
   );
};

export default EditProfile;
