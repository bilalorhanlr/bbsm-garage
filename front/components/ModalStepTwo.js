import React, { useState } from 'react';
import './Wizard.js';
import './ModalStepOne.js';


const ModalStepTwo = ({ isOpen, onClose, onBack, onSaveAndClose, kartBilgileri}) => {
  const [birimAdedi, setBirimAdedi] = useState('');
  const [parcaAdi, setParcaAdi] = useState('');
  const [birimFiyati, setBirimFiyati] = useState('');
  const [items, setItems] = useState([]);

  const handleSave = () => {
    onSaveAndClose(items); // ParentComponent'tan gelen onSaveAndClose fonksiyonunu çağır
  };

  const handleAddClick = () => {
    if (!birimAdedi || !parcaAdi || !birimFiyati) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    if (birimAdedi && parcaAdi && birimFiyati) {
      const newItem = {
        birimAdedi,
        parcaAdi,
        birimFiyati,
        toplamFiyat: Number(birimAdedi) * Number(birimFiyati),
      };
      setItems([...items, newItem]);

      // Clear the input fields
      setBirimAdedi('');
      setParcaAdi('');
      setBirimFiyati('');
    }
  };

  const handleClearItems = () => {
    setItems([]); // Tüm öğeleri temizle
  };

  const handleCloseAndClear = () => {
    handleClearItems(); // İlk olarak formu temizle
    onClose();         // Sonra modalı kapat
  };

  const handleRemoveItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };


  const handleSaveAsOffer = () => {
    // Burada teklif olarak kaydetme işlemleri olacak
    console.log('Offer saved', items);
    // onClose(); // Modal kapat
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm backdrop-brightness-30" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 md:mx-0" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-5 border-b border-gray-200 ">
          <h3 className="text-xl font-medium text-gray-900">Kart Ekle - Aşama 2</h3>
          <button onClick={handleCloseAndClear}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="number"
              id="birimAdedi"
              value={birimAdedi}
              onChange={(e) => setBirimAdedi(e.target.value)}
              placeholder="Birim Adedi"
              className="border p-2 rounded-md bg-my-beyaz"
            />
            <input
              type="text"
              id="parcaAdi"
              value={parcaAdi}
              onChange={(e) => setParcaAdi(e.target.value)}
              placeholder="Parça Adı"
              className="border p-2 rounded-md bg-my-beyaz"
            />
            <input
              type="number"
              id="birimFiyati"
              value={birimFiyati}
              onChange={(e) => setBirimFiyati(e.target.value)}
              placeholder="Birim Fiyatı"
              className="border p-2 rounded-md bg-my-beyaz"
            />
          </div>
          {/* <p>İlk Modal Bilgisi: {ilkModalBilgi}</p> */}
          {
            /* İkinci modalın içeriği buraya gelecek */
            fonk()
          }
          <div className="flex justify-end mb-4">
            <button onClick={handleIkinciModalSubmit} className="bg-yellow-500 text-white font-semibold text-md rounded-full p-2 pl-6 pr-6 ">
              Ekle
            </button>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full text-sm divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Birim Adedi</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">Parça Adı</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Birim Fiyatı</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700 uppercase tracking-wider">Toplam Fiyat</th>
                  <th>
                    <button onClick={handleClearItems} className="bg-red-500 text-white font-semibold text-md rounded-full p-2 pl-8 pr-8 mr-4">
                      Tümünü Temizle
                    </button>
                  </th>
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.birimAdedi}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.parcaAdi}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.birimFiyati}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.toplamFiyat}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleRemoveItem(index)} className="text-red-500 hover:text-red-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4 space-x-2 ">
            <button onClick={onBack} className=" bg-gray-200 text-my-siyah font-semibold text-md rounded-full p-2 pl-6 pr-6 mr-10">
              Geri Dön
            </button>
            <button onClick={onClose} className=" bg-green-500 text-white font-semibold text-md rounded-full p-2 pl-4 pr-4 mr-4">
              Excel İndir
            </button>
            <button onClick={handleSaveAsOffer} className="bg-my-siyah text-white font-semibold text-md rounded-full p-2 pl-4 pr-4 mr-4">
              Teklif Olarak Kaydet
            </button>
            <button onClick={handleSave} className="bg-my-mavi text-white font-semibold text-md rounded-full p-2 pl-8 pr-8 mr-4">
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalStepTwo;
