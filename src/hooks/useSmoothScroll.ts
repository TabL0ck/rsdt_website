import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSmoothScroll = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Даём время на рендер компонентов
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 64 + 16;
          const top = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash, pathname]);
};

export default useSmoothScroll;