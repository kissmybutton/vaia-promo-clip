import { HTMLClip, AudioPlayback, AudioEffect } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { comboIn } from "./effects/comboIn";
import { comboOut } from "./effects/comboOut";
import { opacity } from "./effects/opacity";
import { top } from "./effects/top";
import { optionsCombo } from "./effects/optionsCombo";
import { scaleCombo } from "./effects/scaleCombo";

import { loadPlugin } from "@donkeyclip/motorcortex";
import AbstractsDefinition from "@donkeyclip/motorcortex-abstracts";
import { scale } from "./effects/scale";
const Abstracts = loadPlugin(AbstractsDefinition);
const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1080px",
    height: "1080px",
  },
  audioSources: [
    {
      src: "assets/a0.mp3",
      id: "a0",
      classes: ["songs"],
      base64: false,
    },
    {
      src: "assets/a1.mp3",
      id: "a1",
      classes: ["songs"],
      base64: false,
    },
    {
      src: "assets/a2.mp3",
      id: "a2",
      classes: ["songs"],
      base64: false,
    },
    {
      src: "assets/a3.mp3",
      id: "a3",
      classes: ["songs"],
      base64: false,
    },
    {
      src: "assets/a4.mp3",
      id: "a4",
      classes: ["songs"],
      base64: false,
    },
    {
      src: "assets/a5.mp3",
      id: "a5",
      classes: ["songs"],
      base64: false,
    },
    {
      src: "assets/a6.mp3",
      id: "a6",
      classes: ["songs"],
      base64: false,
    },
    {
      src: "assets/a7.mp3",
      id: "a7",
      classes: ["songs"],
      base64: false,
    },
    {
      src: "assets/a8.mp3",
      id: "a8",
      classes: ["songs"],
      base64: false,
    },
  ],
});

const songPlayback0 = new AudioPlayback({
  selector: "~#a0",
  startFrom: 0,
  duration: 4000,
});
const songPlayback1 = new AudioPlayback({
  selector: "~#a1",
  startFrom: 0,
  duration: 2000,
});
const songPlayback2 = new AudioPlayback({
  selector: "~#a2",
  startFrom: 0,
  duration: 3000,
});
const songPlayback3 = new AudioPlayback({
  selector: "~#a3",
  startFrom: 0,
  duration: 4500,
});
const songPlayback3b = new AudioPlayback({
  selector: "~#a3",
  startFrom: 4501,
  duration: 6000,
});
const songPlayback4 = new AudioPlayback({
  selector: "~#a4",
  startFrom: 0,
  duration: 2000,
});

const songPlayback5 = new AudioPlayback({
  selector: "~#a5",
  startFrom: 0,
  duration: 4000,
});
const songPlayback6 = new AudioPlayback({
  selector: "~#a6",
  startFrom: 0,
  duration: 4000,
});
const songPlayback7 = new AudioPlayback({
  selector: "~#a7",
  startFrom: 0,
  duration: 4700,
});
const songPlayback8 = new AudioPlayback({
  selector: "~#a8",
  startFrom: 0,
  duration: 2000,
});

clip.addIncident(songPlayback0, 0);
clip.addIncident(songPlayback1, 4100);
clip.addIncident(songPlayback2, 6600);

clip.addIncident(songPlayback3, 9600);
clip.addIncident(songPlayback3b, 14800);

// clip.addIncident(songPlayback4, 15900);

clip.addIncident(songPlayback5, 18000);

// clip.addIncident(songPlayback6, 22500);

clip.addIncident(songPlayback7, 22500);
clip.addIncident(songPlayback8, 28000);

/*abstracts for text5*/

const VerticalLinesMove = new Abstracts.VerticalLinesMove(
  {
    width: 300,
    height: 300,
    maxLineWidth: 250,
    color: "#5cabff",
  },
  {
    selector: ".cont1",
  }
);

const HorizontalLinesMove = new Abstracts.HorizontalLinesMove(
  {
    width: 300,
    height: 300,
    maxLineHeight: 100,
    color: "#5cabff",
  },
  {
    selector: ".cont2",
  }
);

const Dots = new Abstracts.Dots(
  {
    width: 300,
    dotSize: 10,
    items: 64,
    color: "#5cabff",
    rowGap: 50,
    columnGap: 50,
    rows: 8,
    timing: 2,
    repeats: 5,
  },
  {
    selector: ".cont4",
  }
);

const CrossRowReveal = new Abstracts.CrossRowReveal(
  {
    width: 425,
    crossSize: 30,
    crossThickness: 5,
    items: 8,
    color: "#5cabff",
    reverse: true,
    timing: 1,
  },
  {
    selector: ".cont3",
  }
);

//500 milliseconds between every slide

clip.addIncident(comboIn("#text0 .text-letter"), 0);
clip.addIncident(comboOut("#text0"), 3500);

clip.addIncident(comboIn("#text1 .text-letter"), 4000);
clip.addIncident(comboOut("#text1"), 6000);

clip.addIncident(comboIn("#text2 .text-letter"), 6500);
clip.addIncident(comboOut("#text2"), 9000);

clip.addIncident(opacity("#text3", 0, 1, 600), 9500);
clip.addIncident(opacity(".card", 0, 1, 600, "@stagger(0, 400)"), 9500);
clip.addIncident(optionsCombo(".card.op"), 11000);
clip.addIncident(comboOut("#text3,.card"), 14300);

clip.addIncident(comboIn("#text4 .text-letter"), 14600);
clip.addIncident(
  opacity(".prop-data-icons .row", 0, 1, 300),
  15000
);
clip.addIncident(
  opacity("#prop-data-line", 0, 1, 300),
  15000
);


clip.addIncident(
  comboOut("#text4"),
  17500
);
clip.addIncident(opacity(".prop-data-icons .row,#prop-data-line",1,0,300), 17500);

clip.addIncident(comboIn("#text5 .text-letter"), 18000);
clip.addIncident(opacity(".bg", 0, 1, 200), 18200);
/*abstracts*/
clip.addIncident(VerticalLinesMove, 18500);
clip.addIncident(HorizontalLinesMove, 18800);
clip.addIncident(Dots, 19400);
clip.addIncident(CrossRowReveal, 19300);
/**/
clip.addIncident(comboOut("#text5"), 22000);
clip.addIncident(opacity(".bg", 1, 0, 200), 22000);
clip.addIncident(opacity(".abstract-cont", 0.7, 0, 200), 22000);

// clip.addIncident(comboIn("#text6 .text-letter"), 22500);
// clip.addIncident(comboOut("#text6"), 26000);

clip.addIncident(opacity("#text7", 0, 1, 600), 22500);
clip.addIncident(top(".images-list", "100px", 200), 22350);
clip.addIncident(scaleCombo("#scale-container-0 ", "250px"), 22800 );
clip.addIncident(scaleCombo("#scale-container-1 ", "25px"), 22800 + 1200  );
clip.addIncident(
  scaleCombo("#scale-container-2 ", "-200px"),
  22800 + 2400 
);
clip.addIncident(
  scaleCombo("#scale-container-3 ", "-425px"),
  22800 + 3600  
);
clip.addIncident(top(".images-list", "-1080px", 200), 28050);

clip.addIncident(comboOut("#text7"), 27500);

clip.addIncident(comboIn("#text8 .text-letter"), 28000);
clip.addIncident(comboOut("#text8"), 30000);

// clip.addIncident(comboIn("#text9 .text-letter"), 34000);
clip.addIncident(scale(".button", 0, 1, 200, 0, "easeInOutExpo"), 30700);

export { clip };
