import Dev from "../assets/dev.png";

const WorkOnDemand = () => {
  return (
    <div className="py-[20px] lg:py-[40px] bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#e554a6] w-4/5 mt-[2%] hover:mt-[1.8%] shadow-[0_25px_60px_-15px_#940b92] m-auto">
      <div className="content w-4/5 flex flex-row justify-center items-center m-auto">
        <div className="image w-2/5 flex flex-row justify-center items-center">
          <img src={Dev} alt="Me usually" />
        </div>
        <div className="text w-3/5 pl-[8%] font-Rubik text-[10px] leading-tight md:text-[12px] lg:text-[15px] xl:text-[18px] lg:leading-5 xl:leading-6">
          I take pride in my resilient and adaptable work ethic, investing
          extended hours to maintain peak performance. I've successfully
          completed overtime projects, demonstrating a commitment to going above
          and beyond. I can work diligently and stay focused for continuous
          periods, including instances of up to 3 days.
          <br />
          <br />I thrive in high-pressure, fast-paced startup environments and
          am ready to invest extended hours for launches and critical deadlines.
          Additionally, I'm committed to being available for unforeseen
          emergencies outside of standard working hours.
        </div>
      </div>
    </div>
  );
};

export default WorkOnDemand;
