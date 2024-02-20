import CommunityImg from "../assets/community.png";

const Community = () => {
  return (
    <div className="min-h-[50vh] bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#b7eafc] w-4/5 mt-[2%] hover:mt-[1.8%] shadow-[0_25px_60px_-15px_#d7bef5] m-auto py-[15px]">
      <div className="content w-4/5 flex flex-row justify-center items-center m-auto">
        <div className="image w-2/5 flex flex-row justify-center items-center">
          <img src={CommunityImg} alt="Community" />
        </div>
        <div className="text w-3/5 pl-[8%] font-Rubik text-[18px] leading-6">
          I demonstrate extensive experience in cultivating and maintaining
          relationships within communities, including a notable track record of
          managing a{" "}
          <span className="text-gradient-green font-bold">
            200k member community
          </span>{" "}
          and various other communities exceeding 50k members.
          <br />
          <br />I also hold experience in serving as a vital communication link
          between teams and communities, I bring a unique skill set in
          supervising teams of community moderators. I effectively provide
          support in planning and executing events, as well as overseeing
          various community activities to ensure a thriving and engaged
          community environment.
        </div>
      </div>
    </div>
  );
};

export default Community;
