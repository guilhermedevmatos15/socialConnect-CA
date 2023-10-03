import React from 'react';

// Framer Motion
import { motion } from 'framer-motion';

// * style
import './TransitionAnimation.scss';

const TransitionAnimation = ({ children }) => {
   return (
      <motion.div
         className="TransitionAnimation"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
      >
         {children}
      </motion.div>
   );
};

export default TransitionAnimation;
