import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const modalVariants = {
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  hidden: { y: "-100vh", opacity: 0 },
};
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          animate="visible"
          initial="hidden"
          exit="hidden">
          <motion.div className="modal" variants={modalVariants} exit="hidden">
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
