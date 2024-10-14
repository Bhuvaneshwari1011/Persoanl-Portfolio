import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <motion.div
      className="border-t border-stone-900 pb-20"
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and move down
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      transition={{ duration: 0.6 }} // Transition duration
    >
      <motion.h2
        className="my-10 text-center text-4xl"
        initial={{ y: -20, opacity: 0 }} // Slide down from above
        animate={{ y: 0, opacity: 1 }} // Slide to original position
        transition={{ duration: 0.6 }} // Animation duration for the heading
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          className="my-4"
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 0.6, delay: 0.2 }} // Add delay for a staggered effect
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          className="my-4"
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 0.6, delay: 0.4 }} // Add delay for a staggered effect
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}?subject=Inquiry&body=Hello, I would like to inquire about...`} // Prefill email fields
          className="border-b"
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 0.6, delay: 0.6 }} // Add delay for a staggered effect
          whileHover={{ scale: 1.05, color: "#1d4ed8" }} // Scale up and change color on hover
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
