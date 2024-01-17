import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ProgrammingLanguages from "./ProgrammingLanguages";
import Technologies from "./Technologies";
import TeamPlayer from "./TeamPlayer";
import Community from "./Community";
import Language from "./Language";
import WorkOnDemand from "./WorkHours";
import Gaming from "./Gaming";

const SkillsPage = () => {
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
      <div className="pages-container-hard min-h-[100vh] min-w-[100vw] flex items-center">
        <section className="page-hard min-h-[100%] min-w-[100%]">
          <div className=" absolute heading-hard-skill w-full text-center text-[60px] text-gradient-green font-bold underline decoration-[#ffeb3b] decoration-double decoration-8">
            Hard Skills
          </div>
          <div className="container max-w-[1536px] m-auto pt-[6%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[30px] text-[gray]">
              Programming Languages
            </div>
            <ProgrammingLanguages />
          </div>
        </section>
        <section className="page-hard min-h-[100%] min-w-[100%]">
          <div className="container max-w-[1536px] m-auto pt-[6%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[30px] text-[gray]">
              Technologies
            </div>
            <Technologies />
          </div>
        </section>
      </div>
      <div className="pages-container-soft min-h-[100vh] min-w-[100vw] flex">
        <section className="page-soft min-h-[100%] min-w-[100%]">
          <div className="absolute heading-hard-skill w-full text-center text-[60px] text-gradient-blue font-bold underline decoration-[#d7bef5] decoration-double decoration-8">
            Soft Skills
          </div>
          <div className="container max-w-[1536px] m-auto pt-[6%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[30px] text-[gray]">
              Team Player
            </div>
            <TeamPlayer />
          </div>
        </section>
        <section className="page-soft min-h-[100%] min-w-[100%]">
          <div className="container max-w-[1536px] m-auto pt-[6%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[30px] text-[gray]">
              Community Relations
            </div>
            <Community />
          </div>
        </section>
        <section className="page-soft min-h-[100%] min-w-[100%]">
          <div className="container max-w-[1536px] m-auto pt-[6%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[30px] text-[gray]">
              Language Proficiency
            </div>
            <Language />
          </div>
        </section>
      </div>
      <div className="pages-container-extra min-h-[100vh] min-w-[100vw] flex">
        <section className="page-extra min-h-[100%] min-w-[100%]">
          <div className=" absolute heading-hard-skill w-full text-center text-[60px] text-gradient-red font-bold underline decoration-[#940B92] decoration-double decoration-8">
            Offbeat Talents
          </div>
          <div className="container max-w-[1536px] m-auto pt-[6%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[30px] text-[gray]">
              Work on Demand
            </div>
            <WorkOnDemand />
          </div>
        </section>
        <section className="page-extra min-h-[100%] min-w-[100%]">
          <div className="container max-w-[1536px] m-auto pt-[6%]">
            <div className="programming-header w-full text-center font-Oswald uppercase text-[30px] text-[gray]">
              Sucks at Gaming
            </div>
            <Gaming />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;
