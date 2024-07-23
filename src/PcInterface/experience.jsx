import { useRef, useState } from "react";
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
  const [imageSelected, setImageSelected] = useState(false);

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
    tlMain.current.to("ignore", {}, 3);

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
  }, []);

  return (
    <div>
      <div className="fixed top-[5.5%] left-[0] min-h-[90vh] min-w-[100vw] bg-experience-page"></div>
      {imageSelected ? (
        <>
          <div
            className="fixed top-[0] z-[500] min-h-[100vh] min-w-[100vw] backdrop-blur-[30px] backdrop-grayscale-[50%] "
            onClick={() => setImageSelected(false)}
          >
            <div className="w-[90%] h-screen m-auto flex flex-col justify-center items-center">
              <img
                className="max-w-[500px] max-h-[70vh]"
                src={imageSelected.src}
                alt={imageSelected.src}
              />
              <p className="font-Space text-[6px] md:text-[8px] lg:text-[10px] xl:text-[14px] pt-[2%] text-center w-[70%]">
                {imageSelected.desc}
              </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="backdrop-blur-[40px]">
        <div className="m-auto max-w-[1536px] w-4/5">
          <div className="container flex flex-row min-h-[83vh]" id="container1">
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-2 py-[3px] text-[20px] md:text-[25px] lg:text-[30px] xl:text-[40px] md:underline-offset-4 lg:underline-offset-8 font-bold underline">
                Easy Bot
              </h1>
              <div className="py-[5px] md:py-[10px] lg:py-[15px] xl:py-[20px]">
                <ProgressBar width={"20"} height={"2"} progress={0.25} />
              </div>
              <div className="font-Rubik text-[8px] md:text-[10px] lg:text-[12px] xl:text-[17px] w-4/5">
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
              <div className="w-full">
                <img
                  onClick={() =>
                    setImageSelected({
                      src: Easy,
                      desc: "The bot stats from 2021!",
                    })
                  }
                  src={Easy}
                  alt="Easy Bot Peak"
                  className="bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] w-full rounded-md cursor-zoom-in"
                />
              </div>
            </div>
          </div>
          <div
            className="container flex flex-row min-h-[83vh] opacity-[0.001]"
            id="container2"
          >
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-2 py-[3px] text-[20px] md:text-[25px] lg:text-[30px] xl:text-[40px] md:underline-offset-4 lg:underline-offset-8 font-bold underline decoration-[#ffeb3b] text-gradient-green">
                <a href="https://1337.group/" target="_blank" rel="noreferrer">
                  Group 1337
                </a>
              </h1>
              <div className="py-[5px] md:py-[10px] lg:py-[15px] xl:py-[20px]">
                <ProgressBar width={"20"} height={"2"} progress={0.5} />
              </div>
              <div className="font-Rubik text-[8px] md:text-[10px] lg:text-[12px] xl:text-[17px] w-4/5">
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
                  onClick={() =>
                    setImageSelected({
                      src: I13373,
                      desc: "Team Member Impersonator Ban System!",
                    })
                  }
                  id="group-1337-imgs"
                  src={I13373}
                  alt={"Auto Impersonator Ban"}
                  className="w-[20%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] rounded-md top-[100vh] right-[25vw] max-w-[380px] cursor-zoom-in"
                />
                <img
                  onClick={() =>
                    setImageSelected({
                      src: I13372,
                      desc: "Keyword Ban - Bot/Spam Protection!",
                    })
                  }
                  id="group-1337-imgs"
                  src={I13372}
                  alt={"Keyword Bans"}
                  className="w-[25%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] rounded-md top-[125vh]  cursor-zoom-in"
                />
                <img
                  onClick={() =>
                    setImageSelected({
                      src: I13371,
                      desc: "Other minor community engagment functions!",
                    })
                  }
                  id="group-1337-imgs"
                  src={I13371}
                  alt={"Community Engagement"}
                  relative
                  className="w-[20%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] rounded-md top-[135vh] right-[23vw] max-w-[380px] cursor-zoom-in"
                />
              </div>
            </div>
          </div>
          <div
            className="container flex flex-row min-h-[83vh] opacity-[0.001]"
            id="container3"
          >
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-2 py-[3px] text-[20px] md:text-[25px] lg:text-[30px] xl:text-[40px] md:underline-offset-4 lg:underline-offset-8 font-bold underline">
                BoBotLabs
              </h1>
              <div className="py-[5px] md:py-[10px] lg:py-[15px] xl:py-[20px]">
                <ProgressBar width={"20"} height={"2"} progress={0.75} />
              </div>
              <div className="bobot-para font-Rubik text-[8px] md:text-[10px] lg:text-[12px] xl:text-[17px] w-4/5">
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
                onClick={() =>
                  setImageSelected({
                    src: BoBot2,
                    desc: "Live collection data obtained from chain!",
                  })
                }
                id="bobot-imgs"
                src={BoBot2}
                alt="Live collection data"
                className="w-[20%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] rounded-md top-[200vh] right-[10vw] max-w-[380px] cursor-zoom-in"
              />
              <img
                onClick={() =>
                  setImageSelected({
                    src: BoBot4,
                    desc: "Market events notification for communities!",
                  })
                }
                id="bobot-imgs"
                src={BoBot4}
                alt="Rhino Sales bot"
                className="w-[20%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] rounded-md top-[180vh] right-[30vw] max-w-[380px] cursor-zoom-in"
              />
              <img
                onClick={() =>
                  setImageSelected({
                    src: BoBot3,
                    desc: "Review by Hydraze - Founder of OCB!",
                  })
                }
                id="bobot-imgs"
                src={BoBot3}
                alt="Testimonial-1"
                className="w-[25%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] rounded-md top-[188vh] right-[10vw] max-w-[380px] cursor-zoom-in"
              />
              <img
                onClick={() =>
                  setImageSelected({
                    src: BoBot1,
                    desc: "Testimonial by Zelx - Founder of ETHXAI!",
                  })
                }
                id="bobot-imgs"
                src={BoBot1}
                alt="Testimonial-2"
                className="w-[25%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] rounded-md top-[225vh] right-[25vw] max-w-[380px] cursor-zoom-in"
              />
            </div>
          </div>
          <div
            className="container flex flex-row min-h-[90vh] opacity-[0.001] pb-[10px]"
            id="container4"
          >
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-2 py-[3px] text-[20px] md:text-[25px] lg:text-[30px] xl:text-[40px] md:underline-offset-4 lg:underline-offset-8 font-bold underline decoration-[#ffeb3b] text-gradient-green">
                <a
                  href="https://www.st6.ventures/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ST6
                </a>
              </h1>
              <div className="py-[5px] md:py-[10px] lg:py-[15px] xl:py-[20px]">
                <ProgressBar width={"20"} height={"2"} progress={1} />
              </div>
              <div
                className="font-Rubik text-[8px] md:text-[10px] lg:text-[12px] xl:text-[17px] w-4/5"
                id="st6-info"
              >
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
                  onClick={() =>
                    setImageSelected({
                      src: ST62,
                      desc: "An advanced server gating mechanism which leverages activity!",
                    })
                  }
                  id="pull"
                  src={ST62}
                  alt={"ST6 Community Gate ( DraupFly )"}
                  className="w-[25%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] rounded-md right-[25vw] bottom-[20vh] max-w-[380px] cursor-zoom-in"
                />
                <img
                  onClick={() =>
                    setImageSelected({
                      src: ST63,
                      desc: "AI assistant that guides communities based on docs provided!",
                    })
                  }
                  id="pull"
                  src={ST63}
                  alt={"ST6 AI Assistant ( XFini )"}
                  className="w-[25%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] rounded-md bottom-[45vh] right-[8vw] max-w-[380px] cursor-zoom-in"
                />
                <img
                  onClick={() =>
                    setImageSelected({
                      src: ST61,
                      desc: "Snapbot is a very advanced web3 giveaway bot which integrated multiple blockchains, discord and twitter accounts. What makes it the most advanced is the ability to perform the requirements on users' behalf!",
                    })
                  }
                  id="pull"
                  src={ST61}
                  alt={"ST6 Giveaways ( SnapBot )"}
                  className="w-[25%] absolute bg-[linear-gradient(_#6af50d_10%,#0f0e13_30%,#0f0e13_70%,#ffeb3b_90%_)] p-[1px] rounded-md bottom-[13vh] right-[6vw] max-w-[380px] cursor-zoom-in"
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
