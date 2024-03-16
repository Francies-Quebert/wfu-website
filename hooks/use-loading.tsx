import { useEffect } from 'react';
export const useLoading = () => {
  useEffect(() => {
    setTimeout(() => {
      return console.log('LOADING');
    }, 2000);
  }, []);

  return 'Loading';
};
