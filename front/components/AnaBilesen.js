// AnaBilesen.js
import React, { useState } from 'react';
import IlkModal from './IlkModal';
import IkinciModal from './IkinciModal';

const AnaBilesen = () => {
  const [ilkModalGorunur, setIlkModalGorunur] = useState(true);
  const [ikinciModalGorunur, setIkinciModalGorunur] = useState(false);
  const [girilenBilgi, setGirilenBilgi] = useState('');

  const handleIlkModalSubmit = (bilgi) => {
    // İlk modal submit işlemi sonrasında ikinci modalı aç
    setGirilenBilgi(bilgi);
    setIlkModalGorunur(false);
    setIkinciModalGorunur(true);
  };

  const handleIkinciModalClose = () => {
    // İkinci modal kapatıldığında durumu sıfırla
    setIkinciModalGorunur(false);
    setIlkModalGorunur(true);
  };

  return (
    <div>
      {ilkModalGorunur && (
        <IlkModal
          onIlkModalSubmit={handleIlkModalSubmit}
          onIlkModalClose={() => setIlkModalGorunur(false)}
        />
      )}

      {ikinciModalGorunur && (
        <IkinciModal
          ilkModalBilgi={girilenBilgi}
          onIkinciModalClose={handleIkinciModalClose}
        />
      )}
    </div>
  );
};

export default AnaBilesen;
