import React, { useState } from 'react';
import ModalStepOne from './ModalStepOne';
import ModalStepTwo from './ModalStepTwo';

const ParentComponent = () => {
    const [modalStep, setModalStep] = useState(1); // Başlangıçta 1. adımı göster
    const [kartBilgileri, setKartBilgileri] = useState({});

    const handleModalOneNext = (bilgiler) => {
        console.log(bilgiler);
        setKartBilgileri(bilgiler);
        console.log(bilgiler);
        setModalStep(2); // 2. adıma geç
    };

    const handleClose = () => {
        setModalStep(0); // Tüm modalları kapat
    };

    const handleBack = () => {
        setModalStep(1); // 1. adıma geri dön
    };

    const handleSaveAndClose = (items) => {
        const dataToSend = {
          ...kartBilgileri,
          items,
        };
        // API'ye POST isteği gönder
        fetch('http://localhost:3000/card', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Ağ hatası oluştu!');
          }
          return response.json();
        })
        .then(data => {
          console.log('Başarılı:', data);
          onClose(); // İşlem başarılı ise modalı kapat
        })
        .catch(error => {
          console.error('Hata:', error);
        });
      };

    return (
        <>
            <ModalStepOne isOpen={modalStep === 1} onNext={handleModalOneNext} onClose={handleClose} />
            <ModalStepTwo isOpen={modalStep === 2} onClose={handleClose} onBack={handleBack} onSaveAndClose={handleSaveAndClose} kartBilgileri={kartBilgileri} />
        </>
    );
};

export default ParentComponent;
