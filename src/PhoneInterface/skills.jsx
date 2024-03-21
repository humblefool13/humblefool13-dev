import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col w-[80%] m-auto">
      <div className="section">
        <div className="heading-hard-skill w-full text-center text-[50px] text-gradient-green font-bold underline decoration-[#ffeb3b] decoration-double decoration-8">
          Hard Skills
        </div>
        <div className="container"></div>
        <div className="container"></div>
      </div>
      <div className="section">
        <div className="heading-soft-skill w-full text-center text-[50px] text-gradient-blue font-bold underline decoration-[#d7bef5] decoration-double decoration-8">
          Soft Skills
        </div>
        <div className="container"></div>
        <div className="container"></div>
        <div className="container"></div>
      </div>
      <div className="section">
        <div className="heading-offbeat-talents w-full text-center text-[50px] text-gradient-red font-bold underline decoration-[#940B92] decoration-double decoration-8">
          Offbeat Talents
        </div>
        <div className="container"></div>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default Skills;
