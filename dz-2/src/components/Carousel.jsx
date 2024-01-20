import React, { useState } from 'react';
import Thumbnails from'./Thumbnails';


const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const ThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  const CarouselClick = (direction) => {
    if (direction === 'prev') {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (direction === 'next') {
      setCurrentImage((next) => (next === images.length - 1 ? 0 : next + 1));
    }
  };

  return (
    <div>
    
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <button style={{  cursor: 'pointer', marginRight: '-23px', zIndex: '1', opacity:'40%' }} 
            onClick={() => CarouselClick('prev')}>{'<'}</button>
        <img
            src={images[currentImage]}
            alt={`current-${currentImage}`}
            onClick={() => CarouselClick('prev')}
            style={{ width: '80%', height: '500px', cursor: 'pointer' }}
        />
        <button style={{ cursor: 'pointer',  marginLeft: '-23px', zIndex: '1', opacity:'40%'  }} 
            onClick={() => CarouselClick('next')}> {'>'} </button>
      </div>
     
      <Thumbnails
        images={images}
        current={currentImage}
        onChange={ThumbnailClick}
      />

    </div>
  );
};

export default Carousel;