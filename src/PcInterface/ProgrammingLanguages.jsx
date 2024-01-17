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

const ProgrammingLanguages = () => {
  return (
    <div className="bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#6af50d] w-4/5 mt-[2%] hover:mt-[1.8%] shadow-[0_25px_60px_-15px_#ffeb3b] m-auto">
      <div className="p-[15px] w-[90%] flex flex-row flex-wrap justify-evenly items-center m-auto">
        {languages.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[20%] flex-col justify-center items-center py-[2%]"
            >
              <div className="w-[60px] m-auto">
                <img src={item.icon} alt={item.name} />
              </div>
              <div className="pt-[3px] text-center font-Rubik text-[20px]">
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
