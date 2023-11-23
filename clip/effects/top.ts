//This incident is export as function so you can use it more than one times

import { CSSEffect } from "@donkeyclip/motorcortex";
export const top = (selector, value, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: value,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
