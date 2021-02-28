import React, { useContext } from 'react';
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/all";

const Modal = () => {
    const { modalOpen, closeModalHandler} = useGlobalContext()

    return (
        <div className={`modal-overlay ${modalOpen ? 'show-modal' : ''}`}>
            <div className="modal-container">
                <h3>modal content</h3>

                <button className="close-modal-btn" onClick={closeModalHandler}><FaTimes /></button>
            </div>
        </div>
    );
};

export default Modal;
