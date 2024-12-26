import React, { useState } from 'react';

function SizeSelection({ sizes, onSizeSelect, selectedSize }) {
  return (
    <div className="size-selection">
      {sizes.map(size => (
        <button
          key={size.name}
          className={`size-option ${selectedSize === size.name ? 'selected' : ''}`}
          onClick={() => onSizeSelect(size.name)}
        >
          {size.name} - ${size.price}
        </button>
      ))}
    </div>
  );
}

export default SizeSelection;