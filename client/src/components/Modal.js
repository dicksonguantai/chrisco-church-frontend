import React, { useState } from 'react';
import Login from './Login';
import './modal.css';

const Modal = ({ isOpen, onClose }) => {
    const handleCloseModal = (e) => {
        if (e.target.classList.contains('modal')) {
          onClose();
        }
      };

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <Login />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
