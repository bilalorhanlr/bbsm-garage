// IlkModal.js
import React, { useState } from 'react';

const IlkModal = ({ onIlkModalClose, onIlkModalSubmit }) => {
  const [adSoyad, setAdSoyad] = useState('');
  const [telNo, setTelNo] = useState('');
  const [markaModel, setMarkaModel] = useState('');
  const [girisTarihi, setGirisTarihi] = useState('');
  const [plaka, setPlaka] = useState('');
  const [km, setKm] = useState('');
  const [sasi, setSasi] = useState('');
  const [renk, setRenk] = useState('');
  const [adres, setAdres] = useState('');
  const [notlar, setNot] = useState('');

  const handleIlkModalSubmit = () => {
    // İlk modalın submit işlemleri burada yapılabilir
    const ilkModalBilgiler = {
      adSoyad,
      telNo,
      markaModel,
      girisTarihi,
      plaka,
      km,
      sasi,
      renk,
      adres,
      notlar,
    };

    onIlkModalSubmit(ilkModalBilgiler);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="adSoyad" className="block text-sm font-medium text-gray-600">
          Ad-Soyad
        </label>
        <input
          type="text"
          id="adSoyad"
          className="mt-1 p-2 w-full border rounded-md"
          value={adSoyad}
          onChange={(e) => setAdSoyad(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="telNo" className="block text-sm font-medium text-gray-600">
          Telefon Numarası
        </label>
        <input
          type="text"
          id="telNo"
          className="mt-1 p-2 w-full border rounded-md"
          value={telNo}
          onChange={(e) => setTelNo(e.target.value)}
        />
      </div>

      {/* Diğer inputlar ve gerekli state'ler için benzer şekilde ekleyebilirsiniz. */}
      
      <button onClick={handleIlkModalSubmit} className="bg-my-mavi p-2 pl-4 pr-4 rounded-full font-medium text-my-beyaz hover:underline">
        İleri
      </button>
      <button onClick={onIlkModalClose} className="bg-red-500 p-2 pl-4 pr-4 rounded-full font-medium text-my-beyaz hover:underline">
        Kapat
      </button>
    </div>
  );
};

export default IlkModal;
