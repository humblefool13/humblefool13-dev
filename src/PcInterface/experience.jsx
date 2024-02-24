import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Easy from "../assets/easy.png";

const ExperiencePage = () => {
  const tlStarter = useRef();
  const tlMain = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    tlMain.current = gsap.timeline({
      scrollTrigger: {
        scrub: true,
      },
    });
    tlMain.current.to("#container2", { opacity: 1 }, 0.5);
    tlMain.current.to("#container1", { opacity: 0 }, 0.4);
    tlMain.current.to("#container3", { opacity: 1 }, 1.7);
    tlMain.current.to("#container2", { opacity: 0 }, 1.5);
    tlMain.current.to("#container4", { opacity: 1 }, 2.85);
    tlMain.current.to("#container3", { opacity: 0 }, 2.7);
    tlMain.current.to("lol", {}, 3);
  }, []);

  return (
    <div className="min-h-[340vh]">
      <div className="backdrop-blur-[200px]">
        <div className="m-auto max-w-[1536px] w-4/5">
          <div className="container flex flex-row min-h-[83vh]" id="container1">
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-4 py-[10px] text-[40px] font-bold underline">
                Easy Bot
              </h1>
              <div className="py-[20px]">
                <progress max={100} value={25} />
              </div>
              <div className="font-Rubik text-[18px]">
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
                  className="w-[90%] m-auto rounded-2xl"
                />
                <figcaption className="font-Space pt-[15px] text-center">
                  The bot stats from 2021!
                </figcaption>
              </div>
            </div>
          </div>
          <div
            className="container flex flex-row min-h-[83vh] opacity-0"
            id="container2"
          >
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-4 py-[10px] text-[40px] text-gradient-green font-bold underline decoration-[#ffeb3b]">
                <a href="https://1337.group/" target="_blank" rel="noreferrer">
                  Group 1337
                </a>
              </h1>
              <div className="py-[20px]">
                <progress max={100} value={50} />
              </div>
              <div className="font-Rubik text-[18px]">
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
                  src={Easy}
                  alt="Easy Bot Peak"
                  className="w-[90%] m-auto rounded-2xl"
                />
                <figcaption className="font-Space pt-[15px] text-center">
                  The bot stats from 2021!
                </figcaption>
              </div>
            </div>
          </div>
          <div
            className="container flex flex-row min-h-[83vh] opacity-0"
            id="container3"
          >
            <div className="w-3/5 flex flex-col mt-[10vh] p-[20px]">
              <h1 className="font-Oswald underline-offset-4 py-[10px] text-[40px] font-bold underline">
                BoBotLabs
              </h1>
              <div className="py-[20px]">
                <progress max={100} value={75} />
              </div>
              <div className="font-Rubik text-[18px]">
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
            <div className="w-2/5 flex flex-row justify-center items-center">
              <div>
                <img
                  src={Easy}
                  alt="Easy Bot Peak"
                  className="w-[90%] m-auto rounded-2xl"
                />
                <figcaption className="font-Space pt-[15px] text-center">
                  The bot stats from 2021!
                </figcaption>
              </div>
            </div>
          </div>
          <div
            className="container flex flex-row min-h-[83vh] opacity-0"
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
                <progress max={100} value={100} />
              </div>
              <div className="font-Rubik text-[18px]">
                Collaborating with a highly skilled team, I spearheaded the
                creation of a sophisticated giveaway bot. This advanced tool
                seamlessly integrates with platforms like Discord and X
                (Twitter), incorporating multiple blockchain functionalities to
                customize requirements and fulfill user needs. On the backend,
                it empowers the team with efficient tools to manage raffle
                winners effectively.
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
                  src={Easy}
                  alt="Easy Bot Peak"
                  className="w-[90%] m-auto rounded-2xl"
                />
                <figcaption className="font-Space pt-[15px] text-center">
                  The bot stats from 2021!
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
