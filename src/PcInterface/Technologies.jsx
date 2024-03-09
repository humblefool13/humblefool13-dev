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

const Technologies = () => {
  return (
    <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#6af50d] w-4/5 mt-[2%] hover:mt-[1.8%] shadow-[0_25px_60px_-15px_#ffeb3b] m-auto">
      <div className="p-[15px] w-[90%] flex flex-row flex-wrap justify-evenly items-center m-auto">
        {technologies.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[16.66%] flex-col justify-center items-center py-[1%]"
            >
              <div className="w-[30px] md:w-[40px] lg:w-[50px] h-[30px] md:h-[40px] lg:h-[50px] xl:h-[60px] m-auto flex justify-center items-center hover:drop-shadow-[0_0_2em_rgba(106,245,13,1)]">
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`${
                    item.name === "Flask" ||
                    item.name === "ExpressJS" ||
                    item.name === "NextJS" ||
                    item.name === "EthersJS" ||
                    item.name === "Scikit-learn"
                      ? "bg-white p-[1px] rounded-full"
                      : ""
                  }`}
                />
              </div>
              <div className="pt-[3px] text-center font-Rubik text-[10px] lg:text-[15px] 2xl:text-[20px]">
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
