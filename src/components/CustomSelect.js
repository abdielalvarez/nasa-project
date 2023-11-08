import React from 'react';

function CustomSelect({
    onChange,
    elementsPerPage
}) {

  return (
    <div className="custom-select">
      <label htmlFor="elementsPerPageSelect">Elementos por página:</label>
      <select
        id="elementsPerPageSelect"
        onChange={onChange}
        value={elementsPerPage}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomSelect;
