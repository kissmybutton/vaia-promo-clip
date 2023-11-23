import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const scaleCombo = (selector, top) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: {
                scale: 2.8,
              },
              left: "-200%",
              top,
            },
          },
          props: {
            duration: 150,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: {
                scale: 1,
              },
              left: "0px",
              top: "0px",
            },
          },
          props: {
            duration: 150,
          },
          position: 850,
        },
      ],
    },
    {
      selector,
    }
  );
