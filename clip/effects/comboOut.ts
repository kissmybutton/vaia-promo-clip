import { CSSEffect } from "@donkeyclip/motorcortex";

export const comboOut = (selector) =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 0,
        transform: {
          scale: 0,
        },
      },
      initialValues: {
        opacity: 1,
        transform: {
          scale: 1,
        },
      },
    },
    {
      selector,
      duration: 600,
      easing: "easeInOutExpo",
    }
  );
