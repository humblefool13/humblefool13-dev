import Ai from "../assets/ai.jpeg";

const AI = () => {
  return (
    <div className="py-[20px] lg:py-[40px] bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#e554a6] w-4/5 mt-[2%] hover:mt-[1.8%] shadow-[0_25px_60px_-15px_#940b92] m-auto">
      <div className="content w-4/5 flex flex-row justify-center items-center m-auto">
        <div className="text w-3/5 pr-[8%] font-Rubik text-[10px] leading-tight md:text-[12px] lg:text-[15px] xl:text-[18px] lg:leading-5 xl:leading-6">
          I leverage advanced AI tools to optimize and elevate my professional
          performance. By seamlessly integrating artificial intelligence into my
          workflow, I not only enhance productivity but also efficiently
          accomplish tasks within shorter timeframes. This strategic use of AI
          allows me to stay ahead in a rapidly evolving work landscape, enabling
          precision, speed, and the ability to tackle complex challenges with
          streamlined efficiency. Through continuous exploration of emerging AI
          technologies, I strive to consistently refine and augment my skill
          set, ensuring a competitive edge in delivering high-quality results.
        </div>
        <div className="image w-2/5 flex flex-row justify-center items-center">
          <img src={Ai} alt="Me usually" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default AI;
