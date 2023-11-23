//This incident is export as function so you can use it more than one times

import { CSSEffect } from "@donkeyclip/motorcortex";
export const opacityScale = (
  selector,
  initValueOp,
  valueOp,
  initValueScale,
  valueScale,
  duration,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: valueOp,
        transform: {
          scale: valueScale,
        },
      },
      initialValues: {
        opacity: initValueOp,
        transform: {
          scale: initValueScale,
        },
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
