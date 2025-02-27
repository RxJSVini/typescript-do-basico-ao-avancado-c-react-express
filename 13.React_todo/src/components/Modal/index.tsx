import React from 'react';
import styles from "./Modal.module.css";

interface IProps {
    children:React.ReactNode;
}

export const Modal = ({ children }:IProps) =>{
    const closeModal = (e:React.MouseEvent):void =>{
        const modal = document.querySelector('#modal');
        modal!.classList.add("hide");
    }
    
    
    return(
        <div id="modal">
            <div className={styles.fade} onClick={closeModal}></div>
            <div className={styles.modal}>
                <h2>Texto modal</h2>
                {children}
            </div>
        </div>
    )
}