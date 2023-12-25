import React, { useState } from 'react';


const ModalStepOne = () => {
    const [adSoyad, setAdSoyad] = useState('');
    const [telNo, setTelNo] = useState('');
    const [markaModel, setMarkaModel] = useState('');
    const [girisTarihi, setDatee] = useState('');
    const [plaka, setPlaka] = useState('');
    const [km, setKm] = useState('');
    const [sasi, setSasi] = useState('');
    const [renk, setRenk] = useState('');
    const [adres, setAdres] = useState('');
    const [notlar, setNot] = useState('');

    if (!isOpen) return null;

    const handleNext = () => {
      const kartBilgileri = {
        adSoyad, 
        telNo, 
        markaModel, 
        girisTarihi, 
        plaka, 
        km, 
        sasi, 
        renk, 
        adres, 
        notlar
      };
      onNext(kartBilgileri);
    };

  const handleCloseAndClear = () => {
    handleClearForm(); // İlk olarak formu temizle
    onClose();         // Sonra modalı kapat
  };

  
  const handleClearForm = () => {
    setAdSoyad('');
    setTelNo('');
    setMarkaModel('');
    setDatee('');
    setPlaka('');
    setKm('');
    setSasi('');
    setRenk('');
    setAdres('');
    setNot('');
  };

  
    return (

      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm backdrop-brightness-30" onClick={onClose}>
        <div className="bg-white rounded-3xl max-w-2xl w-full mx-4 md:mx-0" onClick={e => e.stopPropagation()}>
          <div className="flex justify-between items-center p-5 border-b border-gray-200 rounded-t-lg">
            <h3 className="text-xl font-medium text-gray-900">Kart Ekle</h3>
            <button onClick={handleCloseAndClear}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-12 pl-16 pr-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Ad Soyad" value={adSoyad} onChange={e => setAdSoyad(e.target.value)} className="bg-my-beyaz border p-2 rounded-md" />
              <input type="number"  placeholder="\d{10}" value={telNo} onChange={e => setTelNo(e.target.value)} className="bg-my-beyaz border p-2 rounded-md" />
              <input type="text" placeholder="Marka Model" value={markaModel} onChange={e => setMarkaModel(e.target.value)} className="bg-my-beyaz border p-2 rounded-md" />
              <input type="date" placeholder="Giriş Tarihi" value={girisTarihi} onChange={e => setDatee(e.target.value)} className="bg-my-beyaz border p-2 rounded-md" />
              <input type="text" placeholder="Plaka" value={plaka} onChange={e => setPlaka(e.target.value)} className="bg-my-beyaz border p-2 rounded-md" />
              <input type="number" placeholder="Km" value={km} onChange={e => setKm(e.target.value)} className="bg-my-beyaz border p-2 rounded-md" />
              <input type="text" placeholder="Şasi No" value={sasi} onChange={e => setSasi(e.target.value)} className="bg-my-beyaz border p-2 rounded-md" />
              <input type="text" placeholder="Rengi" value={renk} onChange={e => setRenk(e.target.value)} className="bg-my-beyaz border p-2 rounded-md" />
              <textarea placeholder="Adres" value={adres} onChange={e => setAdres(e.target.value)} className="bg-my-beyaz border p-2 rounded-md" rows="3"></textarea>
              <textarea placeholder="Notlar" value={notlar} onChange={e => setNot(e.target.value)} className="bg-my-beyaz border p-2 rounded-md" rows="3"></textarea>
            </div>
            <div className="flex justify-between mt-12">
              <button onClick={handleCloseAndClear} className="bg-my-açıkgri text-white font-semibold rounded-full p-2 pl-8 pr-8 ">
                İptal
              </button>
              <div className="flex justify-end ">
                <button onClick={handleClearForm} className="bg-red-500 text-white font-semibold rounded-full p-2 pl-8 pr-8 ">
                  Formu Temizle
                </button>
              </div>
              <button className="bg-my-mavi text-white font-semibold rounded-full p-2 pl-8 pr-8 " onClick={handleNext}>İleri</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalStepOne;
  