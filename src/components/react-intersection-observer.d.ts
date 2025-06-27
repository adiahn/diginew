declare module 'react-intersection-observer' {
  export interface IntersectionOptions {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
    triggerOnce?: boolean;
  }

  export function useInView(options?: IntersectionOptions): [
    (node?: Element | null) => void,
    boolean,
    IntersectionObserverEntry | undefined
  ];
}