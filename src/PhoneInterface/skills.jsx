import ASM from "../assets/languages/asm.png";
import BAS from "../assets/languages/bas.png";
import C from "../assets/languages/c.png";
import CPP from "../assets/languages/cpp.png";
import CSS from "../assets/languages/css.png";
import HTML from "../assets/languages/html.png";
import JAVA from "../assets/languages/java.png";
import JS from "../assets/languages/js.png";
import M from "../assets/languages/m.png";
import PY from "../assets/languages/python.png";
import R from "../assets/languages/r.png";
import RS from "../assets/languages/rs.png";
import SOL from "../assets/languages/sol.png";

import React from "../assets/technologies/react.png";
import ExpressJS from "../assets/technologies/expressjs.png";
import RedisDB from "../assets/technologies/redis.png";
import MongoDB from "../assets/technologies/mongodb.png";
import NodejS from "../assets/technologies/nodejs.png";
import ElectronJS from "../assets/technologies/electron.svg";
import Bootstrap from "../assets/technologies/bootstrap.png";
import Tailwind from "../assets/technologies/tailwind.png";
import MUI from "../assets/technologies/mui.png";
import GraphQL from "../assets/technologies/graphql.png";
import ThreeJS from "../assets/technologies/threejs.png";
import GSAP from "../assets/technologies/gsap.png";
import Redux from "../assets/technologies/redux.png";
import Figma from "../assets/technologies/figma.png";
import DiscordJS from "../assets/technologies/discordjs.png";
import ChartJS from "../assets/technologies/chartjs.png";
import EthersJS from "../assets/technologies/ethersjs.png";
import Hardhat from "../assets/technologies/hardhat.png";
import Moralis from "../assets/technologies/moralis.png";
import Alchemy from "../assets/technologies/alchemy.png";
import Flask from "../assets/technologies/flask.png";
import Arduino from "../assets/technologies/arduino.png";
import PMTwo from "../assets/technologies/pm2.png";
import ScikitLearn from "../assets/technologies/scikitlearn.png";
import Tensorflow from "../assets/technologies/tensorflow.png";
import Git from "../assets/technologies/git.png";
import Github from "../assets/technologies/github.png";
import Netlify from "../assets/technologies/netlify.png";
import Next from "../assets/technologies/next.png";
import Payments from "../assets/technologies/payments.png";

const languages = [
  {
    name: "BASIC",
    icon: BAS,
  },
  {
    name: "Java",
    icon: JAVA,
  },
  {
    name: "Javascript",
    icon: JS,
  },
  {
    name: "HTML 5",
    icon: HTML,
  },
  {
    name: "CSS 3",
    icon: CSS,
  },
  {
    name: "Solidity",
    icon: SOL,
  },
  {
    name: "Python",
    icon: PY,
  },
  {
    name: "Matlab",
    icon: M,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: CPP,
  },
  {
    name: "Rust",
    icon: RS,
  },
  {
    name: "Assembly",
    icon: ASM,
  },
  {
    name: "R",
    icon: R,
  },
];

const technologies = [
  {
    name: "NodeJS",
    icon: NodejS,
  },
  {
    name: "MongoDB",
    icon: MongoDB,
  },
  {
    name: "ExpressJS",
    icon: ExpressJS,
  },
  {
    name: "ReactJS ( & Native )",
    icon: React,
  },
  {
    name: "ElectronJS",
    icon: ElectronJS,
  },
  {
    name: "Bootstrap 5",
    icon: Bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: Tailwind,
  },
  {
    name: "Material UI",
    icon: MUI,
  },
  {
    name: "ThreeJS",
    icon: ThreeJS,
  },
  {
    name: "GraphQL",
    icon: GraphQL,
  },
  {
    name: "Redux",
    icon: Redux,
  },
  {
    name: "NextJS",
    icon: Next,
  },
  {
    name: "Discord.js",
    icon: DiscordJS,
  },
  {
    name: "RedisDB",
    icon: RedisDB,
  },
  {
    name: "GSAP",
    icon: GSAP,
  },
  {
    name: "ChartJS",
    icon: ChartJS,
  },
  {
    name: "EthersJS",
    icon: EthersJS,
  },
  {
    name: "Moralis",
    icon: Moralis,
  },
  {
    name: "Hardhat",
    icon: Hardhat,
  },
  {
    name: "Alchemy",
    icon: Alchemy,
  },
  {
    name: "Flask",
    icon: Flask,
  },
  {
    name: "Arduino",
    icon: Arduino,
  },
  {
    name: "Scikit-learn",
    icon: ScikitLearn,
  },
  {
    name: "Tensorflow",
    icon: Tensorflow,
  },
  {
    name: "PM2",
    icon: PMTwo,
  },
  {
    name: "Payments",
    icon: Payments,
  },
  {
    name: "Figma",
    icon: Figma,
  },
  {
    name: "Git",
    icon: Git,
  },
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "Netlify",
    icon: Netlify,
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col w-[80%] m-auto">
      <div className="section">
        <div className="heading-hard-skill w-full text-center text-[10vw] text-gradient-green font-bold underline decoration-[#ffeb3b] decoration-double decoration-4 mt-[5vh]">
          Hard Skills
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray] my-[1vh]">
            Programming Languages
          </div>
          <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#6af50d] shadow-[0_15px_60px_-15px_#ffeb3b] flex flex-row flex-wrap justify-evenly items-center mb-[6vh]">
            {languages.map((language) => {
              return (
                <div className="w-[33.33%] p-[10px]">
                  <img
                    src={language.icon}
                    alt={language.name}
                    className="w-[13vw] m-auto"
                  />
                  <div className="text-center text-[4vw]">{language.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray] my-[1vh]">
            Technologies
          </div>
          <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#6af50d] shadow-[0_15px_60px_-15px_#ffeb3b] flex flex-row flex-wrap justify-evenly items-center mb-[6vh]">
            {technologies.map((technology) => {
              return (
                <div className="w-[33.33%] p-[10px]">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className={`${
                      technology.name === "Flask" ||
                      technology.name === "ExpressJS" ||
                      technology.name === "NextJS" ||
                      technology.name === "EthersJS" ||
                      technology.name === "Scikit-learn"
                        ? "bg-white p-[1px] rounded-full"
                        : ""
                    } w-[13vw] m-auto`}
                  />
                  <div className="text-center text-[4vw]">
                    {technology.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="heading-soft-skill w-full text-center text-[10vw] text-gradient-blue font-bold underline decoration-[#d7bef5] decoration-double decoration-4">
          Soft Skills
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray]">
            Collaborative Proficiency
          </div>
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray]">
            Community Relations and Leadership
          </div>
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray]">
            Language Proficiency
          </div>
        </div>
      </div>
      <div className="section">
        <div className="heading-offbeat-talents w-full text-center text-[10vw] text-gradient-red font-bold underline decoration-[#940B92] decoration-double decoration-4">
          Offbeat Talents
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray]">
            Adaptable Work Ethic
          </div>
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray]">
            Leveraging AI tools
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
