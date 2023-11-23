import { CSSEffect } from "@donkeyclip/motorcortex";
export const flex = (selector, value, duration, delay = 0) =>
  new CSSEffect(
    {
      animatedAttrs: {
        flexGrow: value,
      },
    },
    {
      selector,
      duration,
      delay,
    }
  );
