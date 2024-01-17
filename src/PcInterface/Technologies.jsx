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
import Pytorch from "../assets/technologies/pytorch.png";
import ScikitLearn from "../assets/technologies/scikitlearn.png";
import Tensorflow from "../assets/technologies/tensorflow.png";
import Git from "../assets/technologies/git.png";
import Github from "../assets/technologies/github.png";
import Netlify from "../assets/technologies/netlify.png";
import OpenAI from "../assets/technologies/openai.png";
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
    name: "Figma",
    icon: Figma,
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
    name: "Pytorch",
    icon: Pytorch,
  },
  {
    name: "Payments",
    icon: Payments,
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
    name: "OpenAI",
    icon: OpenAI,
  },
  {
    name: "Netlify",
    icon: Netlify,
  },
];

const Technologies = () => {
  return (
    <div className="min-h-[50vh] bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#6af50d] w-full mt-[2%] hover:mt-[1.8%] shadow-[0_25px_60px_-15px_#ffeb3b]">
      <div className="p-[15px] w-[90%] flex flex-row flex-wrap justify-evenly items-center m-auto">
        {technologies.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[16.66%] flex-col justify-center items-center py-[1%]"
            >
              <div className="w-[80px] h-[80px] m-auto flex justify-center items-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`${item.name === "Flask" ? "bg-white" : ""}`}
                />
              </div>
              <div className="pt-[8px] text-center font-Rubik text-[20px]">
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
