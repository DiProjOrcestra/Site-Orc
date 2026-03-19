import React, { useState, useEffect } from 'react';
import './Popup.css';
import ContactForm from './form';

const PopupAfterThreeMinutes = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); // 30 segundos
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Impede que o clique no conteúdo feche o pop-up
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={handleContentClick}>
            <h2 className='title'>Entre em Contato</h2>
            <button className="close-button" onClick={handleClosePopup}>
              <img src="./assets/close.png" alt="fechar" />
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupAfterThreeMinutes;