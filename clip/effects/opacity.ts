//This incident is export as function so you can use it more than one times

import { CSSEffect } from "@donkeyclip/motorcortex";
export const opacity = (
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
        opacity: value,
      },
      initialValues: {
        opacity: initValue,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
