// IkinciModal.js
import React, { useState } from 'react';

const IkinciModal = ({ onIkinciModalClose, ilkModalBilgi }) => {
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

  // İkinci modalın state'leri ve işlevleri burada
  const fonk = () => {
  }

  const ikinciModalBilgiler = {
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

  const handleIkinciModalSubmit = () => {
    console.log("ilk,",ilkModalBilgi);
    console.log("ikinci,",ikinciModalBilgiler);

  }
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
          id="markaModel"
          className="mt-1 p-2 w-full border rounded-md"
          value={markaModel}
          onChange={(e) => setMarkaModel(e.target.value)}
        />
      </div>
      {/* <p>İlk Modal Bilgisi: {ilkModalBilgi}</p> */}
      {
        /* İkinci modalın içeriği buraya gelecek */
        fonk()
      }
        <button onClick={handleIkinciModalSubmit} className="bg-my-mavi p-2 pl-4 pr-4 rounded-full font-medium text-my-beyaz hover:underline">
        Kaydet
      </button>
      <button onClick={onIkinciModalClose}>Kapat</button>
    </div>
  );
};

export default IkinciModal;
