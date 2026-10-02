import { useRef, useState, useEffect } from "react";

/**
 * useScrollReveal Hook
 * Attaches an IntersectionObserver to an element ref.
 * Triggers visibility once and disconnects observer to conserve browser resources.
 *
 * @param {number} threshold - Intersection ratio threshold (default 0.15)
 * @returns {[React.RefObject, boolean]} - Element ref and visibility state
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, visible];
}
