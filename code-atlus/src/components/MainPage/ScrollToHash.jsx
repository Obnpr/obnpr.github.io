import { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();
  const hash = useMemo(() => location.hash.replace('#', ''), [location.hash]);

  useEffect(() => {
    if (!hash) return;

    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);
  return null;
};

export default ScrollToHashElement;