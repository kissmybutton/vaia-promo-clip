import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const comboIn = (selector) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "0%",
            },
            initialValues: {
              top: "300%",
            },
          },
          props: {
            duration: 600,
            delay: "@stagger(0, 300)",
            easing: "easeInOutExpo",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
            initialValues: {
              opacity: 0,
            },
          },
          props: {
            duration: 700,
            easing: "easeInOutExpo",
            delay: "@stagger(0, 350)",
          },
          position: 0,
        },
      ],
    },
    {
      selector,
    }
  );
