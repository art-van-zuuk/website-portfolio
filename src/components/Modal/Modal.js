import React from "react";
import { motion } from "framer-motion";
import "../../style.css";
import "./Modal.css";
import Backdrop from "./backdrop";

const dropIn = {
    hidden: {
        y: "-100px",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.2,
            type: "spring",
            damping: 10,
            stiffnes: 1000,
        }
    },
    exit: {
        y: "100px",
        opacity: 0,
    },
};

const Modal = ({ handleClose }) => {

    return (
        <div className="modal-page">
            <Backdrop onClick={handleClose}>
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal"
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.h2>
                        Framer Motion
                    </motion.h2>
                    <motion.div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium
                        </p>
                    </motion.div>
                    <motion.button onClick={handleClose} label='close'>Close</motion.button>
                    <motion.button onClick={handleClose} label='learn-more'>Learn more</motion.button>
                </motion.div>

            </Backdrop></div>

    );
};

export default Modal;
