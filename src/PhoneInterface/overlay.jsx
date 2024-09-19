import { Scroll } from "@react-three/drei";

const OverlayComponent = () => {
  return (
    <Scroll html className="w-full">
      <div className="absolute w-[90%] right-[5%] font-Rubik top-[150vh] p-[10px] bg-[#ffffff0d] rounded-2xl backdrop-blur-[25px] border-[1px] border-solid border-[#ffffff4d] text-[13px]">
        <h1 className="text-[40px]">Meet Bo!</h1>
        "Bo" serves as my online identity :)
        <br />
        <br />
        I am a creative and curious individual with a passion for
        problem-solving. Driven by goals, I approach challenges with enthusiasm
        and an analytical mindset. My ambition fuels innovation, and I thrive in
        collaborative environments. Open-minded and always seeking new horizons,
        I bring a blend of creativity and strategic thinking to every project.
        <br />
        <br />
        As a technology enthusiast, I find endless fascination in the
        transformative potential of technology across diverse fields. With a
        programming journey that began in high school, I've honed my skills and
        developed a particular focus on Blockchain Technology and Artificial
        Intelligence/Machine Learning. My dedication to staying at the forefront
        of technological advancements drives my passion for creating innovative
        solutions.
      </div>
      <div className="absolute w-[90%] right-[5%] font-Rubik top-[260vh] p-[10px] bg-[#ffffff0d] rounded-2xl backdrop-blur-[25px] border-[1px] border-solid border-[#ffffff4d] text-[13px] m-auto">
        <h1 className="text-[40px]">Current</h1>
        I am currently pursuing a Bachelor's in Computer Science and Engineering
        at a leading university in my country, immersing myself in a
        comprehensive exploration of technology. Beyond academia, I actively
        engage in self-directed learning, experimenting with new tech, and
        staying updated on industry trends.
        <br />
        <br />
        Simultaneously, I channel my passion into side projects and startup
        endeavors, where I apply and expand my technical skills. This
        multifaceted approach allows me to bridge theoretical knowledge with
        hands-on experience, fostering both innovation and entrepreneurial
        spirit.
      </div>
      <div className="absolute w-[90%] right-[5%] font-Rubik top-[355vh] p-[10px] bg-[#ffffff0d] rounded-2xl backdrop-blur-[25px] border-[1px] border-solid border-[#ffffff4d] text-[13px] m-auto">
        <h1 className="text-[40px]">Future</h1>
        Looking ahead, I aspire to be an engineer shaping digital innovation in
        emerging tech companies. Passionate about pioneering revolutions in our
        digital lives, my focus is on contributing to transformative projects at
        the forefront of technology.
        <br />
        <br />
        Beyond that, I envision running companies that leverage technology to
        address crucial challenges faced by humanity. Committed to creating
        meaningful solutions, I aim to blend technical expertise with a broader
        vision for the positive impact technology can have on our global
        community.
      </div>
    </Scroll>
  );
};

export default OverlayComponent;
