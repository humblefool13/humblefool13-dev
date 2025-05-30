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

import MSTeams from "../assets/msteams.png";
import Notion from "../assets/notion.png";
import Linear from "../assets/linear.png";
import Slack from "../assets/slack.png";

import Duolingo from "../assets/duolingo.png";
import Certificate from "../assets/akshat_humblefool13_duolingo.pdf";
import CommunityImg from "../assets/community.png";
import Ai from "../assets/ai.jpeg";
import Dev from "../assets/dev.png";

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
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray] mb-[1vh] mt-[2vh]">
            Programming Languages
          </div>
          <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#6af50d] shadow-[0_25px_60px_-15px_#ffeb3b] flex flex-row flex-wrap justify-evenly items-center mb-[6vh]">
            {languages.map((language) => {
              return (
                <div className="w-[33.33%] p-[10px] hover:drop-shadow-[0_0_2em_rgba(106,245,13,1)]">
                  <img
                    src={language.icon}
                    alt={language.name}
                    className="w-[13vw] m-auto"
                  />
                  <div className="text-center text-[4vw] font-Rubik">
                    {language.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray] mb-[1vh] mt-[2vh]">
            Technologies
          </div>
          <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#6af50d] shadow-[0_25px_60px_-15px_#ffeb3b] flex flex-row flex-wrap justify-evenly items-center mb-[6vh]">
            {technologies.map((technology) => {
              return (
                <div className="w-[33.33%] p-[10px] hover:drop-shadow-[0_0_2em_rgba(106,245,13,1)]">
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
                  <div className="text-center text-[4vw] font-Rubik">
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
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray] mb-[1vh] mt-[2vh]">
            Collaborative Proficiency
          </div>
          <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#b7eafc] shadow-[0_25px_60px_-15px_#d7bef5] flex flex-row flex-wrap justify-evenly items-center mb-[6vh] p-[10px]">
            <div className="font-Rubik text-[4vw]">
              With a proven track record in team collaboration, I have
              accumulated valuable experience working within diverse teams,
              ranging from compact units of 5 members to larger-scale
              collaborations involving up to 30 individuals.
              <br />
              <br />
              Furthermore, I am adept at seamlessly integrating into remote work
              environments, demonstrating a high level of time flexibility to
              accommodate teams dispersed across different parts of the world.
              <br />
              <br />
              In collaborative development environments, I bring proficiency
              with essential tools such as Slack, Notion, MSTeams and Linear.
              This ensures streamlined communication and project management.
            </div>
            <div className="w-full flex flex-row flex-wrap mt-[10px]">
              <div className="w-[50%] m-auto my-[0.5vh]">
                <img
                  src={MSTeams}
                  alt="MS Teams"
                  className="w-[13vw] m-auto hover:drop-shadow-[0_0_1.5em_rgba(97,218,251,0.67)]"
                />
              </div>
              <div className="w-[50%] m-auto my-[0.5vh]">
                <img
                  src={Notion}
                  alt="Notion"
                  className="w-[13vw] m-auto bg-white rounded-xl hover:drop-shadow-[0_0_1.5em_rgba(97,218,251,0.67)]"
                />
              </div>
              <div className="w-[50%] m-auto my-[0.5vh]">
                <img
                  src={Linear}
                  alt="Linear"
                  className="w-[13vw] m-auto hover:drop-shadow-[0_0_1.5em_rgba(97,218,251,0.67)]"
                />
              </div>
              <div className="w-[50%] m-auto my-[0.5vh]">
                <img
                  src={Slack}
                  alt="Slack"
                  className="w-[13vw] m-auto bg-white rounded-xl hover:drop-shadow-[0_0_1.5em_rgba(97,218,251,0.67)]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray] mb-[1vh] mt-[2vh]">
            Community Relations and Leadership
          </div>
          <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#b7eafc] shadow-[0_25px_60px_-15px_#d7bef5] flex flex-row flex-wrap justify-evenly items-center mb-[6vh] p-[10px]">
            <div className="font-Rubik text-[4vw]">
              I demonstrate extensive experience in cultivating and maintaining
              relationships within communities, including a notable track record
              of managing a{" "}
              <span className="text-gradient-green font-bold">
                200k member community
              </span>{" "}
              and various other communities exceeding 50k members.
              <br />
              <br />I also hold experience in serving as a vital communication
              link between teams and communities, I bring a unique skill set in
              supervising teams of community moderators. I effectively provide
              support in planning and executing events, as well as overseeing
              various community activities to ensure a thriving and engaged
              community environment.
            </div>
            <div className="image mt-[10px]">
              <img className="my-[0.5vh]" src={CommunityImg} alt="Community" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray] mb-[1vh] mt-[2vh]">
            Language Proficiency
          </div>
          <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#b7eafc] shadow-[0_25px_60px_-15px_#d7bef5] flex flex-row flex-wrap justify-evenly items-center mb-[6vh] p-[10px]">
            <div className="font-Rubik text-[4vw]">
              Proficient in both written and spoken English, I hold
              certification from the Duolingo English Test, validating my
              language proficiency.
            </div>
            <div className="image mt-[10px] flex justify-center items-center">
              <img
                className="my-[0.5vh] w-[95%]"
                src={Duolingo}
                alt="Duolingo Result"
              />
            </div>
            <div className="link mt-[15px] uppercase font-Space text-[10px] leading-tight">
              The full result can be{" "}
              <a
                href={Certificate}
                target="_blank"
                rel="noreferrer"
                className="text-gradient-green font-semibold underline"
              >
                seen here!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="heading-offbeat-talents w-full text-center text-[10vw] text-gradient-red font-bold underline decoration-[#940B92] decoration-double decoration-4">
          Offbeat Talents
        </div>
        <div className="container">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray] mb-[1vh] mt-[2vh]">
            Adaptable Work Ethic
          </div>
          <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#e554a6] shadow-[0_25px_60px_-15px_#940b92] flex flex-row flex-wrap justify-evenly items-center mb-[6vh] p-[10px]">
            <div className="font-Rubik text-[4vw]">
              I take pride in my resilient and adaptable work ethic, investing
              extended hours to maintain peak performance. I've successfully
              completed overtime projects, demonstrating a commitment to going
              above and beyond. I can work diligently and stay focused for
              continuous periods, including instances of up to 3 days.
              <br />
              <br />I thrive in high-pressure, fast-paced startup environments
              and am ready to invest extended hours for launches and critical
              deadlines. Additionally, I'm committed to being available for
              unforeseen emergencies outside of standard working hours.
            </div>
            <div className="image mt-[10px] flex justify-center items-center">
              <img className="my-[0.5vh] w-[70%]" src={Dev} alt="Work Hours" />
            </div>
          </div>
        </div>
        <div className="container mb-[12vh]">
          <div className="w-full text-center font-Oswald uppercase text-[5vw] text-[gray] mb-[1vh] mt-[2vh]">
            Leveraging AI tools
          </div>
          <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#e554a6] shadow-[0_25px_60px_-15px_#940b92] flex flex-row flex-wrap justify-evenly items-center mb-[6vh] p-[10px]">
            <div className="font-Rubik text-[4vw]">
              I leverage advanced AI tools to optimize and elevate my
              professional performance. By seamlessly integrating artificial
              intelligence into my workflow, I not only enhance productivity but
              also efficiently accomplish tasks within shorter timeframes. This
              strategic use of AI allows me to stay ahead in a rapidly evolving
              work landscape, enabling precision, speed, and the ability to
              tackle complex challenges with streamlined efficiency. Through
              continuous exploration of emerging AI technologies, I strive to
              consistently refine and augment my skill set, ensuring a
              competitive edge in delivering high-quality results.
            </div>
            <div className="image mt-[10px] flex justify-center items-center">
              <img className="my-[0.5vh] w-[70%]" src={Ai} alt="AI" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
