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

export const useObserverToggleClass = (args: ClassArgs) => {
  useEffect(() => {
    const observerParams = {
      root: args.root ?? null,
      rootMargsrgin: args.rootMargin ?? '0%',
      threshold: args.threshold ?? 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(args.toggleClass, entry.isIntersecting);
      });
    }, observerParams);

    args.classlist.forEach((string) => {
      const items = document.querySelectorAll(string);

      items.forEach((item) => {
        observer.observe(item);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, [args]);
};

interface ObserverArgs extends IntersectionObserverInit {
  watchList: string[]; // can be id or classes
  callback: IntersectionObserverCallback;
}

export const useObserver = (args: ObserverArgs) => {
  useEffect(() => {
    const observerParams = {
      root: args.root ?? null,
      rootMargin: args.rootMargin ?? '0%',
      threshold: args.threshold ?? 0,
    };
    const observer = new IntersectionObserver(args.callback, observerParams);

    args.watchList.forEach((string) => {
      const items = document.querySelectorAll(string);

      items.forEach((item) => {
        observer.observe(item);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, [args]);
};
