import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const SkillsPage = () => {
  const [currentPage, setPageNumber] = useState(0);

  const handleResize = () => {
    const containers = document.getElementsByClassName("number-inner");
    const container = containers[0];
    const width = container.offsetWidth;
    for (let i = 0; i < 3; i++) {
      const current = containers[i];
      current.style.height = `${width}px`;
    }
  };

  const changeTo = (number) => {
    setPageNumber(number);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let pages = gsap.utils.toArray(".page");
    gsap.to(pages, {
      xPercent: -100 * (pages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".pages-container",
        pin: true,
        scrub: 1,
        snap: 1 / (pages.length - 1),
        end: () =>
          "+=" + document.querySelector(".pages-container").offsetWidth,
      },
    });
  }, []);

  return (
    <div className="skills-page-container flex flex-row h-[84vh] w-[100vw]">
      <div className="left-navigation flex flex-col h-full w-1/5 justify-around align-center border-r-2 border-gray-400">
        <div
          className="hard-skills-selector flex flex-row w-4/5 m-auto bg-[#6af50d] rounded-3xl text-[40px] text-[#000000] hover:cursor-pointer"
          onClick={() => changeTo(0)}
        >
          <div className="number text-black w-2/5 flex justify-center items-center">
            <div className="number-inner flex justify-center items-center bg-black rounded-full w-4/5">
              <div
                className={
                  "flex justify-center items-center text-[50px] w-4/5 h-4/5" +
                  (currentPage < 2
                    ? " text-black bg-[#6af50d] rounded-full"
                    : "")
                }
              >
                1
              </div>
            </div>
          </div>
          <div className="one text-black pl-[10px] font-Oswald">
            Hard
            <br />
            Skills
          </div>
        </div>
        <div
          className="soft-skills-selector flex flex-row w-4/5 m-auto bg-[#6af50d] rounded-3xl text-[40px] text-[#000000] hover:cursor-pointer"
          onClick={() => changeTo(2)}
        >
          <div className="number text-black w-2/5 flex justify-center items-center">
            <div className="number-inner flex justify-center items-center bg-black rounded-full w-4/5">
              <div
                className={
                  "flex justify-center items-center text-[50px] w-4/5 h-4/5" +
                  (currentPage > 1 && currentPage < 5
                    ? " text-black bg-[#6af50d] rounded-full"
                    : "")
                }
              >
                2
              </div>
            </div>
          </div>
          <div className="two text-black pl-[10px] font-Oswald">
            Soft
            <br />
            Skills
          </div>
        </div>
        <div
          className="extra-skills-selectors flex flex-row w-4/5 m-auto bg-[#6af50d] rounded-3xl text-[40px] text-[#000000] hover:cursor-pointer"
          onClick={() => changeTo(5)}
        >
          <div className="number text-black w-2/5 flex justify-center items-center">
            <div className="number-inner flex justify-center items-center bg-black rounded-full w-4/5">
              <div
                className={
                  "flex justify-center items-center text-[50px] w-4/5 h-4/5" +
                  (currentPage > 4
                    ? " text-black bg-[#6af50d] rounded-full"
                    : "")
                }
              >
                3
              </div>
            </div>
          </div>
          <div className="third text-black pl-[10px] font-Oswald">
            Offbeat
            <br />
            Talents
          </div>
        </div>
      </div>
      <div className="right-content-container h-full w-full flex justify-center items-center">
        <div className="pages-container min-h-[90%] min-w-[90%] flex overflow-x-scroll">
          <section className="page min-h-[100%] min-w-[100%]">lol1</section>
          <section className="page min-h-[100%] min-w-[100%]">lol2</section>
          <section className="page min-h-[100%] min-w-[100%]">lol3</section>
          <section className="page min-h-[100%] min-w-[100%]">lol4</section>
          <section className="page min-h-[100%] min-w-[100%]">lol5</section>
          <section className="page min-h-[100%] min-w-[100%]">lol6</section>
          <section className="page min-h-[100%] min-w-[100%]">lol7</section>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
