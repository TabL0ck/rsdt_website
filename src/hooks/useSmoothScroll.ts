import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSmoothScroll = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');

      const scrollToHash = () => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 64 + 32;
          const top = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      };

      const timeout = window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(scrollToHash);
        });
      }, 180);

      return () => window.clearTimeout(timeout);
    }
  }, [hash, pathname]);
};

export default useSmoothScroll;
