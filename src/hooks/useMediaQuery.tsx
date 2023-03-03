import { useEffect, useState } from 'react';

type MediaQuery =
  | '(min-width: 480px)'
  | '(min-width: 640px)'
  | '(min-width: 768px)'
  | '(min-width: 1024px)'
  | '(min-width: 1280px)'
  | '(min-width: 1536px)'
  | '(max-width: 480px)'
  | '(max-width: 640px)'
  | '(max-width: 768px)'
  | '(max-width: 1024px)'
  | '(max-width: 1280px)'
  | '(max-width: 1536px)';

export function useMediaQuery(query: MediaQuery) {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => {
      setMatch(media.matches);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [query]);

  return match;
}

export function useCustomMediaQuery(query: string) {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => {
      setMatch(media.matches);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [query]);

  return match;
}
