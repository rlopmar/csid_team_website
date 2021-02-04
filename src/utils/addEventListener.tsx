import React from 'react';

export default function AddEventListener(
  on: keyof WindowEventMap,
  callback: () => void
) {
  React.useEffect(() => {
    // Adding try/catch in case SSR crashes on build stage
    window.addEventListener(on, callback);

    return () => {
      window.removeEventListener(on, callback);
    };
  }, []);
}
