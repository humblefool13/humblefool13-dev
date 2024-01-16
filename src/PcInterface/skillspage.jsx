import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SkillsPage = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let pagesHardSkills = gsap.utils.toArray(".page-hard");
    gsap.to(pagesHardSkills, {
      xPercent: -100 * (pagesHardSkills.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".pahes-container-hard",
        pin: true,
        scrub: 1,
        snap: 1 / (pagesHardSkills.length - 1),
        end: () =>
          "+=" + document.querySelector(".pahes-container-hard").offsetWidth,
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
        snap: 1 / (pagesSoftSkills.length - 1),
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
        snap: 1 / (pagesExtraSkills.length - 1),
        end: () =>
          "+=" + document.querySelector(".pages-container-extra").offsetWidth,
      },
    });
  }, []);

  return (
    <div className="skills-page overflow-hidden">
      <div className="pahes-container-hard min-h-[100vh] min-w-[100vw] flex">
        <section className="page-hard min-h-[100%] min-w-[100%]">
          <div className="heading-hard-skill w-full text-center">
            Hard Skills
          </div>
          <div className="container">
            <div className="programming-header">Programming Languages</div>
            <div className="container flex flex-row items-center justify-around"></div>
          </div>
        </section>
        <section className="page-hard min-h-[100%] min-w-[100%] bg-slate-800">
          Technologies
        </section>
      </div>
      <div className="pages-container-soft min-h-[100vh] min-w-[100vw] flex">
        <section className="page-soft min-h-[100%] min-w-[100%] bg-green-700">
          Team Player
        </section>
        <section className="page-soft min-h-[100%] min-w-[100%] bg-green-800">
          Community
        </section>
        <section className="page-soft min-h-[100%] min-w-[100%] bg-green-900">
          English
        </section>
      </div>
      <div className="pages-container-extra min-h-[100vh] min-w-[100vw] flex">
        <section className="page-extra min-h-[100%] min-w-[100%] bg-yellow-800">
          Work on Demand
        </section>
        <section className="page-extra min-h-[100%] min-w-[100%] bg-yellow-900">
          Bad at Valorant
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;
