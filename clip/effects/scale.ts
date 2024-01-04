//This incident is export as function so you can use it more than one times

import { CSSEffect } from "@donkeyclip/motorcortex";
export const scale = (
  selector,
  initValue,
  value,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scale: value,
        },
      },
      initialValues: {
        transform: {
          scale: initValue,
        },
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
