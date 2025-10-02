import Work2 from "../../assets/project-section/reactPortfolio.gif";
import Work3 from "../../assets/project-section/covid.gif";
import Work4 from "../../assets/project-section/orion.gif";
import Work5 from "../../assets/project-section/virtualAssistant.png";
import Work6 from "../../assets/project-section/portfolioLatest.gif";
import Work9 from "../../assets/project-section/nidhiProject.jpg";

export const projectsData = [
  {
    id: 7,
    image:
      "https://raw.githubusercontent.com/R-o-n-a-k/assets/0fa290e5006b25023e4c9429c1d7f5263820cdce/assets/SomebodyFixIt.gif",
    title: "SomebodyFixit",
    category: "web",
    ref: "https://somebodyfixit.netlify.app/",
    desc: [
      "Developed a ",
      <span className="highlight">React-JS</span>,
      " based platform for sharing daily challenges & collaborating on solutions.",
      <br />,
      <br />,
      "Implemented ",
      <span className="highlight">authentication</span>,
      ", ",
      <span className="highlight">posting</span>,
      " with ",
      <span className="highlight">Supabase</span>,
      " integration. Hosted on ",
      <span className="highlight">Netlify</span>,
      ".",
    ],
  },
  {
    id: 8,
    image:
      "https://raw.githubusercontent.com/R-o-n-a-k/assets/0fa290e5006b25023e4c9429c1d7f5263820cdce/assets/ReactProjectCanvas.gif",
    title: "Reactique",
    category: "web",
    ref: "https://reactique.netlify.app/",
    desc: [
      "A responsive, canvas-style gallery of my ",
      <span className="highlight">React</span>,
      " projects from beginner to advanced.",
      <br />,
      <br />,
      " Features tab-based ",
      <span className="highlight">filtering</span>,
      " and a plug & play setup for easy ",
      <span className="highlight">learning</span>,
      ", ",
      <span className="highlight">adding</span>,
      ", and ",
      <span className="highlight">scaling</span>,
      " your own projects too.",
    ],
  },
  {
    id: 9,
    image: Work9,
    title: "Nidhi's Portfolio",
    category: "web",
    ref: "https://patelnidhi.vercel.app/",
    desc: [
      "A modern, fully ",
      <span className="highlight">responsive portfolio</span>,
      " built with ",
      <span className="highlight">Next.js</span>,
      " and ",
      <span className="highlight">Tailwind CSS</span>,
      ", featuring page-wise ",
      <span className="highlight">SEO</span>,
      ", dark/light mode toggle, and smooth animations using ",
      <span className="highlight">Framer Motion</span>,
      ".",
    ],
  },
  {
    id: 10,
    image: "https://parthpala.vercel.app/ParthPalaOG.webp",
    title: "Parth's Portfolio",
    category: "web",
    ref: "https://parthpala.vercel.app/",
    desc: [
      "A clean and minimal ",
      <span className="highlight">personal portfolio</span>,
      " built with ",
      <span className="highlight">Next.js</span>,
      " and ",
      <span className="highlight">Tailwind CSS</span>,
      ", featuring a responsive layout, ",
      <span className="highlight">light/dark mode</span>,
      ", and smooth ",
      <span className="highlight">Framer Motion</span>,
      " animations for enhanced user experience.",
    ],
  },
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/R-o-n-a-k/assets/0fa290e5006b25023e4c9429c1d7f5263820cdce/assets/FND.gif",
    title: "Fake News Detection",
    category: "ml",
    ref: "https://fakenewsdetection-t083.onrender.com/",
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
