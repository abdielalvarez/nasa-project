import React, { useEffect } from 'react';

function Toast({ message, show, onClose, theme }) {
  
  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [show, onClose]);

  const toastClass = 'toast-container';
  const toastTheme = `toast-${theme}`

  return show ? (
    <div className={`${toastClass} ${toastTheme}`}>
      {message}
    </div>
  ) : null;
}

export default Toast;
