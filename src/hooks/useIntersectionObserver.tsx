import { useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
  trackElement: React.RefObject<HTMLElement>;
}

export const useIntersectionObserver = (a: Args) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    if (!a.trackElement.current) return;
    const observerCallback = ([entry]: IntersectionObserverEntry[]) => {
      setEntry(entry);
    };

    const observerParams = {
      root: a.root ?? null,
      rootMargin: a.rootMargin ?? '0%',
      threshold: a.threshold ?? 0,
    };

    const obs = new IntersectionObserver(observerCallback, observerParams);

    obs.observe(a.trackElement.current);

    return () => obs.disconnect();
  }, [a]);

  return entry;
};

interface ClassArgs extends IntersectionObserverInit {
  classlist: string[];
  toggleClass: string;
}

export const useObserverToggleClass = (a: ClassArgs) => {
  useEffect(() => {
    const observerParams = {
      root: a.root ?? null,
      rootMargin: a.rootMargin ?? '0%',
      threshold: a.threshold ?? 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        console.log(entry.target);
        console.log(entry.isIntersecting);
        entry.target.classList.toggle(a.toggleClass, entry.isIntersecting);
      });
    }, observerParams);

    a.classlist.forEach((string) => {
      const items = document.querySelectorAll(string);
      console.log(items);

      items.forEach((item) => {
        observer.observe(item);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, [a]);
};
