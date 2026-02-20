import React from "react";

type MotionProps = React.HTMLAttributes<HTMLElement> & {
  initial?: unknown;
  whileInView?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  viewport?: unknown;
  transition?: unknown;
};

function createMotionComponent(tag: keyof JSX.IntrinsicElements) {
  return React.forwardRef<HTMLElement, MotionProps>(function MotionComponent({ children, ...rest }, ref) {
    return React.createElement(tag, { ...rest, ref }, children);
  });
}

export const motion = new Proxy(
  {},
  {
    get: (_, prop: string) => createMotionComponent(prop as keyof JSX.IntrinsicElements)
  }
) as Record<string, ReturnType<typeof createMotionComponent>>;
