import React, { useState } from 'react'; // React ve useState hook'u içe aktarır
import Images from './Images'; // Resimlerin bulunduğu dosya içe aktarmasına yarıyor.
import "./styles.css"; // CSS dosyası projeye dahil eder.

function App() {
  // State tanımlaması: Seçili resim (selectedImg) başlangıçta Images dizisinin ilk elemanıdır
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="App">
      {/* Ana kapsayıcı div */}
      <div className="container">
        {/* Seçili resmin büyük halini burada gösterir */}
        <img src={selectedImg} alt="Selected" className="selected" />
      </div>

      <div className="imgContainer">
        {/* Images dizisindeki her resim için bir küçük resim (thumbnail) oluşturuluyor */}
        {Images.map((img, index) => (
          <img
            key={index} // Her bir resme benzersiz bir anahtar atar (React performansı için gerekli)
            src={img} // Resmin URL'sini atarr
            alt="tantuni" // Resim için alternatif metin atanıyor
            onClick={() => setSelectedImg(img)} // Resme tıklandığında seçili resmi güncelleyen fonksiyon
          />
        ))}
      </div>
    </div>
  );
}

export default App; // App bileşeni dışa aktarılıyor

