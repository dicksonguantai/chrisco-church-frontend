import React, { useState } from 'react';
import Login from './Login';
import SignUp from './Signup';
import ResetPassword from './ResetPassword';
import './modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [resetPasswordMode, setResetPasswordMode] = useState(false);

  const handleCloseModal = (e) => {
      if (e.target.classList.contains('modal')) {
          onClose();
      }
  };

  const toggleMode = () => {
      setIsLoginMode(!isLoginMode);
  };

  const toggleResetPasswordMode = () => {
    setResetPasswordMode(!resetPasswordMode);
  };

  return (
      <>
          {isOpen && (
              <div className="modal" onClick={handleCloseModal}>
                  <div className="modal-content">
                      <span className="close" onClick={onClose}>&times;</span>
                      {resetPasswordMode ? (
                        <ResetPassword onClose={onClose} />
                        ) : (
                          <>
                           {isLoginMode ? <Login onClose={onClose} /> : <SignUp onClose={onClose} />} 
                           <button className="modal-button" onClick={toggleMode}>
                          {isLoginMode ? "Switch to Signup" : "Switch to Login"} 
                      </button>
                      <p onClick={toggleResetPasswordMode} className="forgot-password-link">
                      Forgot your password? Click here to reset.
                      </p>
                      </>
                        )}
                  </div>
              </div>
          )}
      </>
  );
};

export default Modal;