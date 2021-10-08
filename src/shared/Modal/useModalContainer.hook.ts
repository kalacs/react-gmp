import { useEffect, useState } from 'react';

const portalRoot = document.getElementById('portal-root');

export const useModalContainer = () => {
  const [modalContainerRef] = useState(() => document.createElement('div'));
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    portalRoot!.appendChild(modalContainerRef);

    return () => {
      document.body.style.overflow = 'unset';
      portalRoot!.removeChild(modalContainerRef);
    };
  }, []);

  return modalContainerRef;
}
