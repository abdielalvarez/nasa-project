import React from 'react';

function Wrapper({ children }) {
  return (
    <div data-testid="wrapper" className="wrapper">
      {children}
    </div>
  );
}

export default Wrapper;
