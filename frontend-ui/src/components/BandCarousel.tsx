import React, { useState } from 'react';
import Carousel from 'react-carousel';

function BandCarousel({ bands, onBandSelect }) {
  const [activeBand, setActiveBand] = useState(0);

  return (
    <div className="band-carousel">
      <Carousel
        slides={bands.map(band => ({
          key: band.name,
          content: (
            <div className="band-option">
              <img src={band.image} alt={band.name} />
              <p>{band.name}</p>
            </div>
          )
        }))}
        activeSlide={activeBand}
        onSlideChange={index => setActiveBand(index)}
      />
      <div className="band-info">
        <p>Selected Band: {bands[activeBand].name}</p>
        <button onClick={() => onBandSelect(bands[activeBand].name)}>Select Band</button>
      </div>
    </div>
  );
}

export default BandCarousel;