import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Easy from "../assets/easy.png";

const ExperiencePage = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <div className="m-auto w-4/5">
      <div className="container relative min-h-[100vh] z-[10]">
        <div className=" ml-[45vw] mt-[12vh] w-2/5 font-Rubik left-[55%] top-[150vh] p-[10px] bg-[#ffffff0d] rounded-2xl backdrop-blur-[20px] border-[1px] border-solid border-[#ffffff4d] text-[17px]">
          <h1 className="py-[10px] text-[35px]">EasyBot</h1>
          This marked the inception of my inaugural public project — a Discord
          bot designed to provide an array of games, community management tools,
          and utility functions. At its zenith, the bot garnered an impressive
          user base, with over 100k monthly active users. My strategic
          partnerships with various communities significantly contributed to its
          growth.
          <br />
          <br />
          The development of this project served as my introduction to several
          crucial concepts, including asynchronous programming, APIs, and Git
          version control, among others. Unfortunately, I had to halt its
          development and maintenance to redirect my focus toward larger life
          endeavors.
        </div>
        <img src={Easy} alt="Easy Bot Peak" className="w-[40%]" />
        <figcaption className="font-Space pt-[5px]">
          The bot stats from 2021
        </figcaption>
      </div>
      <div className="container relative min-h-[100vh] ml-[45vw] z-[10]">
        <div className="mt-[20vh] w-2/5 font-Rubik left-[55%] top-[150vh] p-[10px] bg-[#ffffff0d] rounded-2xl backdrop-blur-[20px] border-[1px] border-solid border-[#ffffff4d] text-[17px] ">
          <h1 className="underline-offset-4 py-[10px] text-[35px] text-gradient-green font-bold underline decoration-[#ffeb3b]">
            <a href="https://1337.group/" target="_blank" rel="noreferrer">
              Group 1337
            </a>
          </h1>
          Collaborating with this group stands out as one of the most impactful
          experiences in my life. Initially involved in marketing strategies and
          execution, my role later evolved to primarily focus on managing
          community relations, overseeing a peak web3 community of 200k members.
          Moreover, I seized the opportunity to contribute by building
          applications tailored for this dynamic community.
          <br />
          <br />
          This experience was instrumental in honing my skills in developing
          scalable applications. I successfully integrated multiple platforms
          into unified programs, showcasing my proficiency in creating cohesive
          and efficient solutions for complex community needs.
        </div>
      </div>
      <div className="container relative min-h-[100vh] z-[10]">
        <div className="mt-[20vh] w-2/5 font-Rubik left-[55%] top-[150vh] p-[10px] bg-[#ffffff0d] rounded-2xl backdrop-blur-[20px] border-[1px] border-solid border-[#ffffff4d] text-[17px] ">
          <h1 className="py-[10px] text-[35px]">BoBotLabs</h1>
          I founded this organization with a vision to address common challenges
          encountered by web3 users. The initiative encompassed a range of
          applications tailored to the diverse needs of web3 communities,
          including a market notification bot, a web3-focused raffles bot, and a
          token farming bot, among others.
          <br />
          <br />
          For individual users, I developed a real-time cross-platform portfolio
          tracker application. This innovative tool consolidated all assets
          across the ethereum blockchain, offering a one-click solution for
          streamlined portfolio management and analysis.
          <br />
          <br />
          Unfortunately, I had to discontinue this endeavor to allocate more
          time and attention to pressing priorities and my subsequent
          organization.
        </div>
      </div>
      <div className="container relative min-h-[87vh] ml-[45vw] z-[10]">
        <div className="mt-[20vh] w-2/5 font-Rubik left-[55%] top-[150vh] p-[10px] bg-[#ffffff0d] rounded-2xl backdrop-blur-[20px] border-[1px] border-solid border-[#ffffff4d] text-[17px] ">
          <h1 className="underline-offset-4 py-[10px] text-[35px] text-gradient-green font-bold underline decoration-[#ffeb3b]">
            <a
              href="https://www.st6.ventures/"
              target="_blank"
              rel="noreferrer"
            >
              ST6
            </a>
          </h1>
          Collaborating with a highly skilled team, I spearheaded the creation
          of a sophisticated giveaway bot. This advanced tool seamlessly
          integrates with platforms like Discord and X (Twitter), incorporating
          multiple blockchain functionalities to customize requirements and
          fulfill user needs. On the backend, it empowers the team with
          efficient tools to manage raffle winners effectively.
          <br />
          <br />
          In addition to this, I developed several other applications, including
          an AI support bot, an advanced server join screening bot, and a web
          application for monitoring security and activities across community
          Discord servers in real-time. This multifaceted experience not only
          enhanced my problem-solving skills but also afforded me the
          opportunity to build products for esteemed clients such as Adidas and
          Prada. Working in such a collaborative environment further refined my
          ability to deliver innovative solutions.
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
