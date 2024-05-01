import Work1 from "../../assets/project-section/fnd.gif";
import Work2 from "../../assets/project-section/reactPortfolio.gif";
import Work3 from "../../assets/project-section/covid.gif";
import Work4 from "../../assets/project-section/orion.gif";
import Work5 from "../../assets/project-section/virtualAssistant.png";
import Work6 from "../../assets/project-section/portfolioLatest.gif";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Fake News Detection",
    category: "ml",
    ref: "https://github.com/R-o-n-a-k/FakeNewsDetection",
    desc: [
      "An ML model that predicts that if the news is real or fake using ",
      <span className="highlight">
        Passive Aggressive, Naïve Bayes & Random Forest
      </span>,
      " using datasets available on ",
      <span className="highlight">Kaggle.</span>,
    ],
  },
  {
    id: 2,
    image: Work2,
    title: "React Portfolio",
    category: "web",
    ref: "https://github.com/R-o-n-a-k/React-Personal-Portfolio",
    desc: [
      "Crafted a responsive portfolio website using ",
      <span className="highlight">React-Js</span>,
      " leveraging ",
      <span className="highlight">npm libraries</span>,
      " and hooks such as ",
      <span className="highlight">useState & useEffect</span>,
      " . ",
      <br />,
      <br />,
      "Integrated ",
      <span className="highlight">EmailJS </span>,
      " for seamless contact form handling, all wrapped in a clean & minimal UI.",
    ],
  },
  {
    id: 3,
    image: Work3,
    title: "Covid",
    category: "ml",
    ref: "https://github.com/R-o-n-a-k/COVID-Probabitlity-Detector",
    desc: [
      "An ML model which predicts the probability of a person having the infection using a self-made dataset implemented by ",
      <span className="highlight">Logistic Regression</span>,
      " algorithm.",
    ],
  },
  {
    id: 4,
    image: Work4,
    title: "Orion",
    category: "web",
    ref: "https://orion-pi.vercel.app/",
    desc: [
      "A fully-fledged responsive website for Interior Design using ",
      <span className="highlight">HTML, CSS & JS</span>,
      " . Payment Gateway integration using ",
      <span className="highlight">RazorPay.</span>,
    ],
  },
  {
    id: 5,
    image: Work5,
    title: "Virtual Assistant",
    category: "python",
    ref: "https://github.com/R-o-n-a-k/Virtual-Assistance",
    desc: [
      "Created a ",
      <span className="highlight">Python</span>,
      " based virtual assistant to execute basic commands and manage email communication using the ",
      <span className="highlight">Speech Recognition module.</span>,
    ],
  },
  {
    id: 6,
    image: Work6,
    title: "Personal Portfolio",
    category: "web",
    ref: "https://github.com/R-o-n-a-k/Portfolio",
    desc: [
      "My Personal Portfolio Website made using only",
      <span className="highlight"> HTML, CSS</span>,
      " and ",
      <span className="highlight">JS</span>,
      " with a clean and minimal UI.",
    ],
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "ml",
  },
  {
    name: "python",
  },
];
