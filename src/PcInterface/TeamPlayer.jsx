import Team from "../assets/team.png";
import MSTeams from "../assets/msteams.png";
import Notion from "../assets/notion.png";
import Linear from "../assets/linear.png";
import Slack from "../assets/slack.png";

const TeamPlayer = () => {
  return (
    <div className=" bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#b7eafc] w-4/5 mt-[2%] hover:mt-[1.8%] shadow-[0_25px_60px_-15px_#d7bef5] m-auto flex flex-col justify-center items-center py-[15px]">
      <div className="upperhalf flex flex-row w-4/5 m-auto justify-center items-center">
        <div className="image w-1/2">
          <img src={Team} alt="Remote Team" className="w-3/5 m-auto" />
        </div>
        <div className="para w-1/2 font-Rubik text-[10px] leading-tight md:text-[12px] lg:text-[15px] xl:text-[18px] lg:leading-5 xl:leading-6">
          With a proven track record in team collaboration, I have accumulated
          valuable experience working within diverse teams, ranging from compact
          units of 5 members to larger-scale collaborations involving up to 30
          individuals.
          <br />
          <br />
          Furthermore, I am adept at seamlessly integrating into remote work
          environments, demonstrating a high level of time flexibility to
          accommodate teams dispersed across different parts of the world.
        </div>
      </div>
      <div className="lowerhalf flex-row flex mt-[25px] w-4/5 m-auto">
        <div className="para w-1/2 font-Rubik text-[10px] leading-tight md:text-[12px] lg:text-[15px] xl:text-[18px] lg:leading-5 xl:leading-6">
          In collaborative development environments, I bring proficiency with
          essential tools such as Slack, Notion, MSTeams and Linear. This
          ensures streamlined communication and project management.
        </div>
        <div className="image w-1/2 flex flex-row justify-around items-center">
          <img
            src={MSTeams}
            alt="Microsoft Teams"
            className="w-[11%] hover:drop-shadow-[0_0_1.5em_rgba(97,218,251,0.67)]"
          />
          <img
            src={Linear}
            alt="Linear"
            className="w-[10%] hover:drop-shadow-[0_0_1.5em_rgba(97,218,251,0.67)]"
          />
          <img
            src={Slack}
            alt="Slack"
            className="w-[10%] rounded-xl hover:drop-shadow-[0_0_1.5em_rgba(97,218,251,0.67)]"
          />
          <img
            src={Notion}
            alt="Notion"
            className="w-[10%] bg-white rounded-xl hover:drop-shadow-[0_0_1.5em_rgba(97,218,251,0.67)]"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamPlayer;
