
import pex from "../../assets/pex.jpg";
import portf from "../../assets/portf.png";
import weath from "../../assets/weather.png";
import ARA from "../../assets/ARA.png";
import wip from "../../assets/wip.jpg";
import crow from "../../assets/CROW.png";
import royal from "../../assets/rbb.jpg";
const PortData = [
  {
    id: 0,
    image: wip,
    title: "W.I.P.",
    github: "",
    demo: "",
  },
  {
    id: 1,
    image: weath,
    title: "Weather app (React)",
    github: "https://github.com/MarsGotBars/react-weather",
    demo: "https://weather-app-m.netlify.app/",
  },
  {
    id: 2,
    image: portf,
    title: "First portfolio (React)",
    github: "https://github.com/MarsGotBars/first-portfolio",
    demo: "https://portfo-marcin.netlify.app/",
  },
  {
    id: 3,
    image: pex,
    title: "Villas4U",
    github: "https://github.com/MarsGotBars/Villas4U",
    demo: "https://villas4u.netlify.app",
  },
  {
    id: 4,
    image: crow,
    title: "CRUD app (PHP)",
    github: "https://github.com/MarsGotBars/CRUD",
    demo: "",
  },
];
const GenData = [
  {
    id: 5,
    image: ARA,
    title: "ARA Creative Agency website",
    github: "",
    demo: "https://ara.nl/",
  },
  {
    id: 6,
    image: royal,
    title: "Royal Buisman",
    github: "",
    demo: "https://www.royalbuisman.com/",
  }
]
export{
  PortData,
  GenData
}