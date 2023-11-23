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

//500 milliseconds between every slide

clip.addIncident(comboIn(".text0 .text-letter"), 0);
clip.addIncident(comboOut(".text0"), 3500);

clip.addIncident(comboIn(".text1 .text-letter"), 4000);
clip.addIncident(comboOut(".text1"), 6500);

clip.addIncident(comboIn(".text2 .text-letter"), 7000);
clip.addIncident(comboOut(".text2"), 9500);

clip.addIncident(opacity(".text3", 0, 1, 600), 10000);
clip.addIncident(opacity(".card", 0, 1, 600, "@stagger(0, 400)"), 10000);
clip.addIncident(optionsCombo(".card.op"), 11000);
clip.addIncident(comboOut(".text3,.card"), 15500);

clip.addIncident(comboIn(".text4 .text-letter"), 16000);
clip.addIncident(comboOut(".text4"), 17500);

clip.addIncident(comboIn(".text5 .text-letter"), 18000);
clip.addIncident(comboOut(".text5"), 23000);

clip.addIncident(comboIn(".text6 .text-letter"), 23500);
clip.addIncident(comboOut(".text6"), 25000);

clip.addIncident(opacity(".text7", 0, 1, 600), 25500);
clip.addIncident(scaleCombo(".scale-container1"), 25800);
clip.addIncident(top(".images-list1", "390px", 200), 25350);
clip.addIncident(top(".images-list1", "170px", 50), 26850);
clip.addIncident(top(".images-list1", "-50px", 50), 28050);
clip.addIncident(top(".images-list1", "-270px", 50), 29250);
clip.addIncident(top(".images-list1", "-1080px", 200), 30550);
// clip.addIncident(top(".images-list1", "-50px", 100), 25900 + 1600 + 100);
// clip.addIncident(top(".images-list1", "-270px", 100), 25900 + 150 + 2400);
// clip.addIncident(top(".images-list1", "-1080px", 200), 25900 + 200 + 3200);
clip.addIncident(comboOut(".text7"), 30000);

clip.addIncident(comboIn(".text8 .text-letter"), 30500);
clip.addIncident(comboOut(".text8"), 33500);

clip.addIncident(comboIn(".text9 .text-letter"), 34000);

export { clip };
