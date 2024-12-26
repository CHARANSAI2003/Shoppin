import React, { useState } from 'react';

function CaseSelection({ cases, onCaseSelect, selectedCase }) {
  const [hoveredCase, setHoveredCase] = useState(null);

  return (
    <div className="case-selection">
      {cases.map(case => (
        <div
          key={case.name}
          className={`case ${selectedCase === case.name ? 'selected' : ''} ${hoveredCase === case.name ? 'hovered' : ''}`}
          onClick={() => onCaseSelect(case.name)}
          onMouseEnter={() => setHoveredCase(case.name)}
          onMouseLeave={() => setHoveredCase(null)}
        >
          <img src={case.image} alt={case.name} />
          <div className="case-info">
            <h3>{case.name}</h3>
            <p>Price: ${case.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default CaseSelection;