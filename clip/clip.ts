import { HTMLClip } from "@donkeyclip/motorcortex";
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
});

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
clip.addIncident(comboOut("#text1"), 6500);

clip.addIncident(comboIn("#text2 .text-letter"), 7000);
clip.addIncident(comboOut("#text2"), 9500);

clip.addIncident(opacity("#text3", 0, 1, 600), 10000);
clip.addIncident(opacity(".card", 0, 1, 600, "@stagger(0, 400)"), 10000);
clip.addIncident(optionsCombo(".card.op"), 11000);
clip.addIncident(comboOut("#text3,.card"), 15500);

clip.addIncident(comboIn("#text4 .text-letter"), 16000);
clip.addIncident(comboOut("#text4"), 17500);

clip.addIncident(opacity(".bg", 0, 1, 200), 18200);
clip.addIncident(comboIn("#text5 .text-letter"), 18000);
/*abstracts*/
clip.addIncident(VerticalLinesMove, 18500);
clip.addIncident(HorizontalLinesMove, 18800);
clip.addIncident(Dots, 19400);
clip.addIncident(CrossRowReveal, 19300);
/**/
clip.addIncident(comboOut("#text5"), 22000);
clip.addIncident(opacity(".bg", 1, 0, 200), 22000);
clip.addIncident(opacity(".abstract-cont", 0.7, 0, 200), 22000);

clip.addIncident(comboIn("#text6 .text-letter"), 22500);
clip.addIncident(comboOut("#text6"), 25000);

clip.addIncident(opacity("#text7", 0, 1, 600), 25500);
clip.addIncident(top(".images-list", "100px", 200), 25350);
clip.addIncident(scaleCombo("#scale-container-0 ", "250px"), 25800);
clip.addIncident(scaleCombo("#scale-container-1 ", "25px"), 25800 + 1200);
clip.addIncident(scaleCombo("#scale-container-2 ", "-200px"), 25800 + 2400);
clip.addIncident(scaleCombo("#scale-container-3 ", "-425px"), 25800 + 3600);
clip.addIncident(top(".images-list", "-1080px", 200), 30550);

clip.addIncident(comboOut("#text7"), 30000);

clip.addIncident(comboIn("#text8 .text-letter"), 30500);
clip.addIncident(comboOut("#text8"), 33500);

clip.addIncident(comboIn("#text9 .text-letter"), 34000);

export { clip };
