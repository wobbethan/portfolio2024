import { Project } from "../../types/project";
import { AFFILIATION_OPTIONS } from "./affilation";
import { STACK_OPTIONS } from "./stack";

const InvestBrighter: Project = {
  image: "/InvestBrighter.png",
  name: "Invest Brighter",
  affiliation: AFFILIATION_OPTIONS.uf,
  description:
    "InvestBrighter is a multi-vendor e-commerce platform where students can create and invest in companies within the Engineering Entrepreneurship class at the University of Florida. InvestBrighter utilizes MongoDB, Express.js, React.js, and Node.js to allow students to seek and manage investments for their proposed start-up ideas.",
  stack: [
    STACK_OPTIONS.react,
    STACK_OPTIONS.mongo,
    STACK_OPTIONS.express,
    STACK_OPTIONS.node,
    STACK_OPTIONS.tw,
    STACK_OPTIONS.js,
  ],
  link: "invest-brighter",
  projects: ["case-cobra", "ga1ors", "portfolio"],
  deploy: "https://investbrighter-81a8e5a796c9.herokuapp.com/",
  repo: "https://github.com/wobbethan/InvestBrighter",
};

const CobraCase: Project = {
  image: "/casecobra.png",
  name: "Case Cobra",
  affiliation: AFFILIATION_OPTIONS.clone,
  description:
    "CobraCase is an e-commerce platform where users can upload their photos to create custom phone cases. This website supports account creation, an admin dashboard, and stripe api integration.",
  stack: [
    STACK_OPTIONS.next,
    STACK_OPTIONS.react,
    STACK_OPTIONS.node,
    STACK_OPTIONS.prisma,
    STACK_OPTIONS.tw,
    STACK_OPTIONS.ts,
  ],
  link: "case-cobra",
  projects: ["invest-brighter", "ga1ors", "threads"],
  repo: "https://github.com/wobbethan/cobracase",
  deploy: "https://wobb-ethan-cobracase.vercel.app/",
};

const Threads: Project = {
  image: "/threads.png",
  name: "Threads",
  affiliation: AFFILIATION_OPTIONS.clone,
  description:
    "Threads is an online social media and social networking service operated by Meta Platforms. This project was created to clone some of the core functionality of threads for educational purposes",
  stack: [
    STACK_OPTIONS.next,
    STACK_OPTIONS.react,
    STACK_OPTIONS.node,
    STACK_OPTIONS.prisma,
    STACK_OPTIONS.tw,
    STACK_OPTIONS.ts,
  ],
  link: "threads",
  projects: ["case-cobra", "zoom", "portfolio"],
  deploy: "https://wobb-ethan-threads-clone.vercel.app/",
  repo: "https://github.com/wobbethan/threads",
};

const TwoDudes: Project = {
  image: "/twodudes.png",
  name: "Umbrella Boyz",
  affiliation: AFFILIATION_OPTIONS.ind,
  description:
    "Umbrella Boys is a local Gainesville podcast hosted by students at the University of Florida. This website showcases their social media presence in a fun animated way.",
  stack: [STACK_OPTIONS.react, STACK_OPTIONS.node, STACK_OPTIONS.js],
  link: "umbrella-boyz",
  projects: ["netflix", "ga1ors", "portfolio"],
  repo: "https://github.com/wobbethan/two_dudes",
  deploy: "https://umbrellaboyz.com/",
};

const Ga1ors: Project = {
  image: "/uf.png",
  name: "Ga1ors",
  affiliation: AFFILIATION_OPTIONS.uf,
  description:
    "Ga1or's is a UF exclusive forum where only 10% of the campus population can post every day. At the end of each day the forum is wiped cleaned and the next lucky 10% can race to be on the board for the day.",
  stack: [
    STACK_OPTIONS.angular,
    STACK_OPTIONS.node,
    STACK_OPTIONS.tw,
    STACK_OPTIONS.go,
  ],
  link: "ga1ors",
  projects: ["netflix", "ga1ors", "invest-brighter"],
  repo: "https://github.com/Reece-McDonald/Software-Engineering",
};

const Airaide: Project = {
  image: "/airaide.jpg",
  name: "Airaide",
  affiliation: AFFILIATION_OPTIONS.uf,
  description:
    "Airaide is a analysis tool which takes real world data on delayed flights and allows the user to filter flights based on various parameters. Results are then graphed and displayed. ",
  stack: [
    STACK_OPTIONS.react,
    STACK_OPTIONS.oracle,
    STACK_OPTIONS.node,
    STACK_OPTIONS.tw,
    STACK_OPTIONS.js,
  ],
  projects: ["invest-brighter", "ga1ors", "netflix"],
  link: "airaide",
  repo: "https://github.com/wobbethan/airaide-old",
};

const EqualizerVST: Project = {
  image: "/fl.png",
  name: "Equalizer VST",
  affiliation: AFFILIATION_OPTIONS.hackathon,
  description:
    "The 3 Band equalizer VST plugin is a simple EQ which allows the user to filter the low, mid, and high frequencies of an audio source. This plugin is able to integrate with professional DAWs via the .VST format",
  stack: [STACK_OPTIONS.cpp, STACK_OPTIONS.juce],
  link: "equalizer-vst",
  projects: ["airaide", "dungeon-speed-runner", "tiny-avalanche"],
  repo: "https://github.com/wobbethan/3BandEQ",
};

const TinyAvalanche: Project = {
  image: "/avalanche.jpg",
  name: "Tiny Avalanche",
  affiliation: AFFILIATION_OPTIONS.hackathon,
  description:
    "Tiny avalanche is a randomly generated 3D mountain range where, at the press of a button, becomes engulfed in snow.",
  stack: [STACK_OPTIONS.js],
  link: "tiny-avalanche",
  projects: ["airaide", "dungeon-speed-runner", "equalizer-vst"],
  repo: "https://github.com/wobbethan/TinyAvalanche",
};

const Dungeon: Project = {
  image: "/dungeon.jpg",
  name: "Dungeon Speed-runner",
  affiliation: AFFILIATION_OPTIONS.hackathon,
  description:
    "Created for a hackathon based on the theme of time, Dungeon Speed-runner challenges the user to race through an underground dungeon to find 5 hidden scrolls as fast as possible.",
  stack: [STACK_OPTIONS.unity],
  link: "dungeon-speed-runner",
  projects: ["airaide", "tiny-avalanche", "equalizer-vst"],
  repo: "https://github.com/wobbethan/dungeon-speedrunner",
};

const Zoom: Project = {
  image: "/zoom.jpg",
  name: "Zoom",
  affiliation: AFFILIATION_OPTIONS.hackathon,
  description:
    "In recent years, Zoom has skyrocketed as the number 1 video conferencing solution for businesses. This project is a clone of this platform allowing Users to video call, schedule calls, record meetings, and much more.",
  stack: [
    STACK_OPTIONS.next,
    STACK_OPTIONS.react,
    STACK_OPTIONS.node,
    STACK_OPTIONS.tw,
    STACK_OPTIONS.ts,
  ],
  link: "zoom",
  projects: ["invest-brighter", "case-cobra", "threads"],
  repo: "https://github.com/wobbethan/zoom-clone",
  deploy: "https://wobb-ethan-zoom-clone.vercel.app/",
};

const Netflix: Project = {
  image: "/netflix.jpg",
  name: "Netflix",
  affiliation: AFFILIATION_OPTIONS.clone,
  description:
    "Netflix is arguably the most popular video streaming platform. This project is clone of the frontend interface of the main navigation menu.",
  stack: [
    STACK_OPTIONS.react,
    STACK_OPTIONS.node,
    STACK_OPTIONS.tw,
    STACK_OPTIONS.js,
  ],
  projects: ["airaide", "ga1ors", "threads"],
  link: "netflix",
  repo: "https://github.com/wobbethan/netflix-clone",
};

const Portfolio: Project = {
  image: "/face.png",
  name: "Portfolio",
  affiliation: AFFILIATION_OPTIONS.ind,
  description:
    "Ethan's 2024 portfolio serves as a showcase to the world of his programming abilities and resume. This website contains an AI Chat bot, custom UI/UX, and all of the major projects Ethan has worked on.",
  stack: [
    STACK_OPTIONS.next,
    STACK_OPTIONS.react,
    STACK_OPTIONS.node,
    STACK_OPTIONS.openai,
    STACK_OPTIONS.tw,
    STACK_OPTIONS.ts,
  ],
  link: "portfolio",
  projects: ["zoom", "case-cobra", "threads"],
  deploy: "https://ethanwobb.com",
};

const ProjectList = [
  InvestBrighter,
  CobraCase,
  Threads,
  Zoom,
  Portfolio,
  TwoDudes,
  Ga1ors,
  Netflix,
  Airaide,
  EqualizerVST,
  TinyAvalanche,
  Dungeon,
];

export default ProjectList;
