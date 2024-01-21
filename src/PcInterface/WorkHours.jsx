import Dev from "../assets/dev.png";

const WorkOnDemand = () => {
  return (
    <div className="py-[40px] bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#e554a6] w-4/5 mt-[2%] hover:mt-[1.8%] shadow-[0_25px_60px_-15px_#940b92] m-auto">
      <div className="content w-4/5 flex flex-row justify-center items-center m-auto">
        <div className="image w-2/5 flex flex-row justify-center items-center">
          <img src={Dev} alt="Me usually" />
        </div>
        <div className="text w-3/5 pl-[8%] font-Rubik text-[18px] leading-6">
          I take pride in my resilient and adaptable work ethic, showcasing a
          capacity to invest extended hours and maintain peak performance. I've
          successfully completed overtime projects, demonstrating my commitment
          to going above and beyond when the situation demands. My ability to
          work diligently and stay focused has been exemplified in instances
          where I remained engaged in my projects for continuous periods of up
          to 3 days. These experiences not only reflect my dedication but also
          highlight my capability to navigate challenges with unwavering
          determination.
          <br />
          <br />I possess the resilience to thrive in high-pressure, fast-paced
          startup environments, demonstrating a readiness to invest extended
          hours leading up to launches and critical deadlines. Additionally, I
          am committed to being available for unforeseen emergency situations
          that may arise outside of standard working hours.
        </div>
      </div>
    </div>
  );
};

export default WorkOnDemand;
