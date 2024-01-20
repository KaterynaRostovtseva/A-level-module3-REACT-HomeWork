import React from 'react';

const Thumbnails = ({ images, current, onChange }) => {

  return (
    <div>
        
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index}`}
          style={{
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            border: index === current ? '3px solid red' : '3px solid transparent',
            margin: '10px 5px',
          }}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  );
};

export default Thumbnails;