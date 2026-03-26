import React, { useState, useEffect } from 'react';
import '../css/Popup.css';
import ContactForm from './form';

const PopupAfterThreeMinutes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 120000); // 120 segundos ou 2 min
    return () => clearTimeout(timer);
  }, [tick]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setTick((v) => v + 1)
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
              <img src="../src/assets/close.png" alt="fechar" />
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupAfterThreeMinutes;