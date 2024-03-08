import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Easy from "../assets/experience/easy.png";
import ST61 from "../assets/experience/st61.png";
import ST62 from "../assets/experience/st62.png";
import ST63 from "../assets/experience/st63.png";
import I13371 from "../assets/experience/1337-1.png";
import I13372 from "../assets/experience/1337-2.png";
import I13373 from "../assets/experience/1337-3.png";
import BoBot1 from "../assets/experience/bobot1.png";
import BoBot2 from "../assets/experience/bobot2.png";
import BoBot3 from "../assets/experience/bobot3.png";
import BoBot4 from "../assets/experience/bobot4.png";

import ProgressBar from "./ProgressBar";

const ExperiencePage = () => {
  const tlStarter = useRef();
  const tlMain = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    tlMain.current = gsap.timeline({
      scrollTrigger: {
        scrub: true,
      },
    });
    tlMain.current.to("#container2", { opacity: 1 }, 0.5);
    tlMain.current.to("#container1", { opacity: 0.001 }, 0.4);
    tlMain.current.to("#container3", { opacity: 1 }, 1.7);
    tlMain.current.to("#container2", { opacity: 0.001 }, 1.5);
    tlMain.current.to("#container4", { opacity: 1 }, 2.85);
    tlMain.current.to("#container3", { opacity: 0.001 }, 2.7);
    tlMain.current.to("lol", {}, 3);

    tlStarter.current = gsap.timeline();
    tlStarter.current.fromTo(
      "#container1",
      {
        x: "200vw",
      },
      {
        x: "-4vw",
        duration: 0.4,
        ease: "power4",
      }
    );
    tlStarter.current.to("#container1", {
      x: "0vw",
      duration: 0.1,
      ease: "power4",
    });

    gsap.from("#pull", {
      scrollTrigger: {
        trigger: ".st6-info",
        start: "45% 10%",
        end: "94.3% 80%",
        scrub: 1,
      },
      x: "150vw",
      y: "-350vh",
      opacity: 0,
      width: "10px",
      duration: 5,
      ease: "none",
    });

    gsap.from("#bobot-imgs", {
      scrollTrigger: {
        trigger: ".bobot-para",
        start: "25% 80%",
        end: "100% 90%",
        scrub: 1,
      },
      transform: "rotate(45deg)",
      width: "10px",
      opacity: 0,
      duration: 5,
      ease: "none",
    });

    gsap.from("#group-1337-imgs", {
      scrollTrigger: {
        trigger: ".para-1337",
        start: "25% 80%",
        end: "100% 90%",
        scrub: 1,
      },
      filter: "invert(1)",
      duration: 5,
      ease: "none",
    });
  }, []);

  return (
    <div className="min-h-[340vh]">
      <div className="fixed top-[5.5%] left-[0] min-h-[90vh] min-w-[95vw] bg-experience-page"></div>
      <div className="backdrop-blur-[80px]">
        <div className="m-auto max-w-[1536px] w-4/5">
          <div className="container flex flex-row min-h-[83vh]" id="container1">
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-4 py-[10px] text-[40px] font-bold underline">
                Easy Bot
              </h1>
              <div className="py-[20px]">
                <ProgressBar width={"20"} height={"2"} progress={0.25} />
              </div>
              <div className="font-Rubik text-[18px] w-4/5">
                This marked the inception of my inaugural public project — a
                Discord bot designed to provide an array of games, community
                management tools, and utility functions. At its zenith, the bot
                garnered an impressive user base, with over 100k monthly active
                users. My strategic partnerships with various communities
                significantly contributed to its growth.
                <br />
                <br />
                The development of this project served as my introduction to
                several crucial concepts, including asynchronous programming,
                APIs, and Git version control, among others. Unfortunately, I
                had to halt its development and maintenance to redirect my focus
                toward larger life endeavors.
              </div>
            </div>
            <div className="w-2/5 flex flex-row justify-center items-center">
              <div>
                <img
                  src={Easy}
                  alt="Easy Bot Peak"
                  className="bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] w-[90%] m-auto rounded-3xl"
                />
                <figcaption className="font-Space pt-[15px] text-center">
                  The bot stats from 2021!
                </figcaption>
              </div>
            </div>
          </div>
          <div
            className="container flex flex-row min-h-[83vh] opacity-[0.001]"
            id="container2"
          >
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-4 py-[10px] text-[40px] text-gradient-green font-bold underline decoration-[#ffeb3b]">
                <a href="https://1337.group/" target="_blank" rel="noreferrer">
                  Group 1337
                </a>
              </h1>
              <div className="py-[20px]">
                <ProgressBar width={"20"} height={"2"} progress={0.5} />
              </div>
              <div className="para-1337 font-Rubik text-[18px] w-4/5">
                Collaborating with this group stands out as one of the most
                impactful experiences in my life. Initially involved in
                marketing strategies and execution, my role later evolved to
                primarily focus on managing community relations, overseeing a
                peak web3 community of 200k members. Moreover, I seized the
                opportunity to contribute by building applications tailored for
                this dynamic community.
                <br />
                <br />
                This experience was instrumental in honing my skills in
                developing scalable applications. I successfully integrated
                multiple platforms into unified programs, showcasing my
                proficiency in creating cohesive and efficient solutions for
                complex community needs.
              </div>
            </div>
            <div className="w-2/5 flex flex-row justify-center items-center">
              <div>
                <img
                  id="group-1337-imgs"
                  src={I13373}
                  alt={"Auto Impersonator Ban"}
                  className="w-[400px] absolute top-[26%] right-[23%] bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] rounded-3xl"
                />
                <img
                  id="group-1337-imgs"
                  src={I13372}
                  alt={"Keyword Bans"}
                  className="w-[400px] top-[33%] right-[2%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] rounded-3xl"
                />
                <img
                  id="group-1337-imgs"
                  src={I13371}
                  alt={"Community Engagement"}
                  className="w-[400px] absolute right-[18%] top-[37%] bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div
            className="container flex flex-row min-h-[83vh] opacity-[0.001]"
            id="container3"
          >
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-4 py-[10px] text-[40px] font-bold underline">
                BoBotLabs
              </h1>
              <div className="py-[20px]">
                <ProgressBar width={"20"} height={"2"} progress={0.75} />
              </div>
              <div className="bobot-para font-Rubik text-[18px] w-4/5">
                I founded this organization with a vision to address common
                challenges encountered by web3 users. The initiative encompassed
                a range of applications tailored to the diverse needs of web3
                communities, including a market notification bot, a web3-focused
                raffles bot, and a token farming bot, among others.
                <br />
                <br />
                For individual users, I developed a real-time cross-platform
                portfolio tracker application. This innovative tool consolidated
                all assets across the ethereum blockchain, offering a one-click
                solution for streamlined portfolio management and analysis.
                <br />
                <br />
                Unfortunately, I had to discontinue this endeavor to allocate
                more time and attention to pressing priorities and my subsequent
                organization.
              </div>
            </div>
            <div className="w-2/5 flex flex-col mt-[10vh] justify-center items-center">
              <img
                id="bobot-imgs"
                src={BoBot2}
                alt="Live collection data"
                className="relative w-[400px] bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] rounded-3xl z-[6] right-[20%]"
              />
              <img
                id="bobot-imgs"
                src={BoBot4}
                alt="Rhino Sales bot"
                className="relative w-[350px] bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] rounded-3xl z-[6] bottom-[25%] left-[35%]"
              />
              <img
                id="bobot-imgs"
                src={BoBot3}
                alt="Testimonial-1"
                className="relative w-[450px] bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] rounded-3xl z-[6] left-[40%] bottom-[75%] rotate-[-20deg]"
              />
              <img
                id="bobot-imgs"
                src={BoBot1}
                alt="Testimonial-2"
                className="relative w-[450px] bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] rounded-3xl z-[6] right-[30%] bottom-[55%] rotate-[20deg]"
              />
            </div>
          </div>
          <div
            className="container flex flex-row min-h-[83vh] opacity-[0.001]"
            id="container4"
          >
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-4 py-[10px] text-[40px] text-gradient-green font-bold underline decoration-[#ffeb3b]">
                <a
                  href="https://www.st6.ventures/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ST6
                </a>
              </h1>
              <div className="py-[20px]">
                <ProgressBar width={"20"} height={"2"} progress={1} />
              </div>
              <div className="font-Rubik text-[18px] w-4/5" id="st6-info">
                Collaborating with a highly skilled team, I spearheaded the
                creation of a sophisticated giveaway bot. This advanced tool
                seamlessly integrates with platforms like Discord and X
                (Twitter), incorporating multiple blockchain functionalities to
                customize requirements and fulfill user needs. Behind the
                scenes, it empowers the team with efficient tools to manage
                raffle winners effectively.
                <br />
                <br />
                In addition to this, I developed several other applications,
                including an AI support bot, an advanced server join screening
                bot, and a web application for monitoring security and
                activities across community Discord servers in real-time. This
                multifaceted experience not only enhanced my problem-solving
                skills but also afforded me the opportunity to build products
                for esteemed clients such as Adidas and Prada. Working in such a
                collaborative environment further refined my ability to deliver
                innovative solutions.
              </div>
            </div>
            <div className="w-2/5 flex flex-row justify-center items-center">
              <div>
                <img
                  id="pull"
                  src={ST63}
                  alt={"ST6 AI Assistant ( XFini )"}
                  className="w-[500px] absolute top-[80%] right-[17%] rotate-[-20deg] bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] rounded-3xl"
                />
                <img
                  id="pull"
                  src={ST62}
                  alt={"ST6 Community Gate ( DraupFly )"}
                  className="w-[400px] rotate-[30deg] top-[80%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] rounded-3xl"
                />
                <img
                  id="pull"
                  src={ST61}
                  alt={"ST6 Giveaways ( SnapBot )"}
                  className="w-[400px] absolute right-[15%] bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[3px] rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
