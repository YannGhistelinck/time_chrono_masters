export const autoScroll = () => {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }