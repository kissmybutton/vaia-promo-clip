import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const optionsCombo = (selector) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              flexGrow: 10,
              fontSize: "40px",
            },
          },
          props: {
            duration: 200,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              flexGrow: 7,
              fontSize: "35px",
            },
          },
          props: {
            duration: 200,
          },
          position: 1000,
        },
      ],
    },
    {
      selector,
      delay: "@expression(index*1000)",
    }
  );
