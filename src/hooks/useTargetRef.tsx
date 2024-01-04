import { useEffect } from "react";

interface TTarget {
  targetRef?: any;
  footTargetRef?: any;
  setScrollAddUrl: any;
}

export const useTargetRef = ({ targetRef, setScrollAddUrl }: TTarget) => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 교차할 때의 동작을 추가할 수 있습니다.
          setScrollAddUrl(true);
        } else {
          // 교차하지 않을 때의 동작을 추가할 수 있습니다.
          setScrollAddUrl(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);
};

export const useFootRef = ({ footTargetRef, setScrollAddUrl }: TTarget) => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 교차할 때의 동작을 추가할 수 있습니다.
          setScrollAddUrl(true);
        } else {
          // 교차하지 않을 때의 동작을 추가할 수 있습니다.
          setScrollAddUrl(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (footTargetRef.current) {
      observer.observe(footTargetRef.current);
    }

    return () => observer.disconnect();
  }, []);
};
