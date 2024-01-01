import { useEffect } from "react";

interface TTarget {
  footTargetRef: any;
  setScrollAddUrl: any;
}

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
          setScrollAddUrl((prev: any) => !prev);
        } else {
          // 교차하지 않을 때의 동작을 추가할 수 있습니다.
          setScrollAddUrl((prev: any) => !prev);
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
