import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ProgrammingLanguages from "./ProgrammingLanguages";
import Technologies from "./Technologies";
import TeamPlayer from "./TeamPlayer";
import Community from "./Community";
import Language from "./Language";
import WorkOnDemand from "./WorkHours";
import Ai from "./AI";
import UpArrow from "../assets/up-arrow.png";

const SkillsPage = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let pagesHardSkills = gsap.utils.toArray(".page-hard");
    gsap.to(pagesHardSkills, {
      xPercent: -100 * (pagesHardSkills.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".pages-container-hard",
        pin: true,
        scrub: 1,
        snap: 1 / pagesHardSkills.length - 1,
        end: () =>
          "+=" + document.querySelector(".pages-container-hard").offsetWidth,
      },
    });

    let pagesSoftSkills = gsap.utils.toArray(".page-soft");
    gsap.to(pagesSoftSkills, {
      xPercent: -100 * (pagesSoftSkills.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".pages-container-soft",
        pin: true,
        scrub: 1,
        snap: 1 / pagesSoftSkills.length - 1,
        end: () =>
          "+=" + document.querySelector(".pages-container-soft").offsetWidth,
      },
    });

    let pagesExtraSkills = gsap.utils.toArray(".page-extra");
    gsap.to(pagesExtraSkills, {
      xPercent: -100 * (pagesExtraSkills.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".pages-container-extra",
        pin: true,
        scrub: 1,
        snap: 1 / pagesExtraSkills.length - 1,
        end: () =>
          "+=" + document.querySelector(".pages-container-extra").offsetWidth,
      },
    });
  }, []);

  return (
    <div className="skills-page overflow-hidden">
      <img
        className="fixed w-[4rem] top-[83vh] right-[4vw] z-[5000] animate-bounce hover:animate-none"
        src={UpArrow}
        style={{ display: visible ? "inline" : "none" }}
        alt="Scroll to Top"
        onClick={scrollToTop}
      />
      <div className="pages-container-hard min-h-[100vh] min-w-[100vw] flex items-center">
        <section className="page-hard min-h-[100%] min-w-[100%] background-programming-languages">
          <div className="heading-hard-skill w-full text-center text-[30px] md:text-[35px] lg:text-[40px] xl:text-[55px] 2xl:text-[80px] text-gradient-green font-bold underline decoration-[#ffeb3b] decoration-double decoration-2 md:decoration-4 lg:decoration-8">
            Hard Skills
          </div>
          <div className="container max-w-[1536px] m-auto">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[15px] md:text-[17px] lg:text-[20px] xl:text-[28px] 2xl:text-[40px] lg:pt-[10px] text-[gray]">
              Programming Languages
            </div>
            <ProgrammingLanguages />
          </div>
        </section>
        <section className="page-hard min-h-[100%] min-w-[100%] background-technologies">
          <div className="container max-w-[1536px] m-auto pt-[1%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[15px] md:text-[17px] lg:text-[20px] xl:text-[28px] 2xl:text-[40px] lg:pt-[10px] text-[gray]">
              Technologies
            </div>
            <Technologies />
          </div>
        </section>
      </div>
      <div className="pages-container-soft min-h-[100vh] min-w-[100vw] flex">
        <section className="background-collaborative page-soft min-h-[100%] min-w-[100%]">
          <div className="heading-hard-skill w-full text-center text-[30px] md:text-[35px] lg:text-[40px] xl:text-[55px] 2xl:text-[80px] text-gradient-blue font-bold underline decoration-[#d7bef5] decoration-double decoration-2 md:decoration-4 lg:decoration-8">
            Soft Skills
          </div>
          <div className="container max-w-[1536px] m-auto">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[15px] md:text-[17px] lg:text-[20px] xl:text-[28px] 2xl:text-[40px] lg:pt-[10px] text-[gray]">
              Collaborative Proficiency
            </div>
            <TeamPlayer />
          </div>
        </section>
        <section className="background-community page-soft min-h-[100%] min-w-[100%]">
          <div className="container max-w-[1536px] m-auto pt-[3%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[15px] md:text-[17px] lg:text-[20px] xl:text-[28px] 2xl:text-[40px] lg:pt-[10px] text-[gray]">
              Community Relations and Leadership
            </div>
            <Community />
          </div>
        </section>
        <section className="background-language page-soft min-h-[100%] min-w-[100%]">
          <div className="container max-w-[1536px] m-auto pt-[3%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[15px] md:text-[17px] lg:text-[20px] xl:text-[28px] 2xl:text-[40px] lg:pt-[10px] text-[gray]">
              Language Proficiency
            </div>
            <Language />
          </div>
        </section>
      </div>
      <div className="pages-container-extra min-h-[100vh] min-w-[100vw] flex">
        <section className="background-ethic page-extra min-h-[100%] min-w-[100%]">
          <div className="heading-hard-skill w-full text-center text-[30px] md:text-[35px] lg:text-[40px] xl:text-[55px] 2xl:text-[80px] text-gradient-red font-bold underline decoration-[#940B92] decoration-double decoration-2 md:decoration-4 lg:decoration-8">
            Offbeat Talents
          </div>
          <div className="container max-w-[1536px] m-auto">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[15px] md:text-[17px] lg:text-[20px] xl:text-[28px] 2xl:text-[40px] lg:pt-[10px] text-[gray]">
              Adaptable Work Ethic
            </div>
            <WorkOnDemand />
          </div>
        </section>
        <section className="background-ai page-extra min-h-[100%] min-w-[100%]">
          <div className="container max-w-[1536px] m-auto pt-[1%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[15px] md:text-[17px] lg:text-[20px] xl:text-[28px] 2xl:text-[40px] lg:pt-[10px] text-[gray]">
              Leveraging AI tools
            </div>
            <Ai />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;
