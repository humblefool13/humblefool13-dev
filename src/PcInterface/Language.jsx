import Duolingo from "../assets/duolingo.png";
import Certificate from "../assets/akshat_humblefool13_duolingo.pdf";

const Language = () => {
  return (
    <div className="min-h-[50vh] bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] hover:border-[0.3px] border-solid border-[#ffffff4d] hover:border-[#b7eafc] w-4/5 mt-[2%] hover:mt-[1.8%] shadow-[0_25px_60px_-15px_#d7bef5] m-auto p-[20px]">
      <div className="content w-4/5 flex flex-col justify-center items-center m-auto">
        <div className="font-Rubik text-[18px] text-center">
          Proficient in both written and spoken English, I hold certification
          from the Duolingo English Test, validating my language proficiency.
        </div>
        <div className="image mt-[30px]">
          <img src={Duolingo} alt="Duolingo Result" />
        </div>
        <div className="link mt-[15px] uppercase font-Space">
          The full result can be{" "}
          <a
            href={Certificate}
            target="_blank"
            rel="noreferrer"
            className="text-gradient-green font-semibold"
          >
            seen here!
          </a>
        </div>
        <div className="font-Rubik mt-[30px] text-[18px] text-center">
          I am a native Hindi speaker and I also possess a basic proficiency in
          French.
        </div>
      </div>
    </div>
  );
};

export default Language;
