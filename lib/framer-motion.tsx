import React, { useEffect, useState } from "react";

type MotionProps = React.HTMLAttributes<HTMLElement> & {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  viewport?: unknown;
  transition?: unknown;
  variants?: unknown;
  drag?: unknown;
  dragConstraints?: unknown;
  dragElastic?: unknown;
  onDragEnd?: unknown;
};

function createMotionComponent(tag: keyof JSX.IntrinsicElements) {
  return React.forwardRef<HTMLElement, MotionProps>(function MotionComponent(
    {
      children,
      initial,
      animate,
      whileInView,
      whileHover,
      whileTap,
      viewport,
      transition,
      variants,
      drag,
      dragConstraints,
      dragElastic,
      onDragEnd,
      ...rest
    },
    ref
  ) {
    void initial;
    void animate;
    void whileInView;
    void whileHover;
    void whileTap;
    void viewport;
    void transition;
    void variants;
    void drag;
    void dragConstraints;
    void dragElastic;
    void onDragEnd;
    return React.createElement(tag, { ...rest, ref }, children);
  });
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  return reduced;
}

export const motion = new Proxy(
  {},
  {
    get: (_, prop: string) => createMotionComponent(prop as keyof JSX.IntrinsicElements)
  }
) as Record<string, ReturnType<typeof createMotionComponent>>;
