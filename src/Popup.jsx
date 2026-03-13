import React, { useState, useEffect } from 'react';
import './Popup.css'; // seus estilos customizados (opcional)
import ContactForm from './form';

const PopupAfterThreeMinutes = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Define o timer para 3 minutos (180000 ms)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 3 minutos = 3 * 60 * 1000

    // Limpeza do timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []); // Array vazio garante que o efeito rode apenas uma vez

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
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