import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../style.css";
import "../Button/Button.css"
import Modal from "../Modal/Modal";
import "./ExpendableCard.css";


function ExpendableCard(props) {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    //Checks if carousel is draged or card is pressed
    const mouseDownCoords = e => {
        window.checkForDrag = e.clientX;
    };
    const clickOrDrag = e => {
        const mouseUp = e.clientX;
        if (
            mouseUp < window.checkForDrag + 5 &&
            mouseUp > window.checkForDrag - 5
        ) {
            if (modalOpen) {
                close()
            } else {
                open()
            }
        }
    };

    return (
        <div className="App">
            <motion.div
                className="card"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onMouseDown={e => mouseDownCoords(e)}
                onMouseUp={e => clickOrDrag(e)}
            >
                <div className="imgDiv" style={{backgroundColor: props.project.backgroundColor}}>
                    <img draggable="false" className="image" src={"/images/Projects/" + props.project.name + "/thumbnail.png"}></img>
                </div>

                <div className="text">
                    <h4 className="bold-text" > {props.project.name} </h4>
                    <p> {props.project.explanation} </p>
                    <b> {props.project.type} in {props.project.year} </b>
                </div>


            </motion.div>

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>

        </div>


    );
};

export default ExpendableCard;
