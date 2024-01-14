import GmailIcon from "../assets/gmail.png";
import DiscordIcon from "../assets/discord.png";
import TwitterIcon from "../assets/twitter.png";
import TelegramIcon from "../assets/telegram.png";
import GithubIcon from "../assets/github.png";
import Kong from "../assets/kong.png";

const icons = {
  discord: DiscordIcon,
  mail: GmailIcon,
  twitter: TwitterIcon,
  telegram: TelegramIcon,
  github: GithubIcon,
};

const ContactPage = () => {
  return (
    <div className="contact flex flex-row">
      <div className="left left-2/5 flex items-center w-2/5">
        <img
          src={Kong}
          alt="Me"
          className="rounded-3xl w-3/4 ml-[30%] shadow-[-10px_-10px_50px_10px_rgba(181,255,132,0.5),_10px_10px_30px_10px_rgba(86,50,114,1)]"
        />
      </div>
      <div className="right w-3/5">
        <div className="heading w-full text-center py-[10px] text-[40px] font-semibold tracking-tighter">
          Get in touch with me via social media or email!
        </div>
        <div className="content m-auto px-[2%] min-h-[75vh] w-3/5 bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] border-solid border-[#ffffff4d] flex flex-col justify-around mt-[20px] mb-[50px]">
          <a
            href="https://mail.google.com/mail/?view=cm&to=contact@humblefool13.dev"
            target="_blank"
            rel="noreferrer"
          >
            <div className="email-container flex flex-row">
              <div className="app-icon py-[10px] w-2/5">
                <img
                  src={icons.mail}
                  alt="Gmail Icon"
                  className="w-[100px] h-[100px] m-auto rounded-3xl"
                />
              </div>
              <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                <div className="title text-[40px] font-medium tracking-tighter">
                  Email
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/humblefool13"
            target="_blank"
            rel="noreferrer"
          >
            <div className="email-container flex flex-row">
              <div className="app-icon py-[10px] w-2/5">
                <img
                  src={icons.github}
                  alt="Github Icon"
                  className="w-[100px] h-[100px] m-auto rounded-3xl"
                />
              </div>
              <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                <div className="title text-[40px] font-medium tracking-tighter">
                  Github
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://twitter.com/0xBo_xd"
            target="_blank"
            rel="noreferrer"
          >
            <div className="email-container flex flex-row">
              <div className="app-icon py-[10px] w-2/5">
                <img
                  src={icons.twitter}
                  alt="Twitter Icon"
                  className="w-[100px] h-[100px] m-auto  rounded-3xl"
                />
              </div>
              <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                <div className="title text-[40px] font-medium tracking-tighter">
                  Twitter
                </div>
              </div>
            </div>
          </a>
          <a href="https://t.me/humblefool13" target="_blank" rel="noreferrer">
            <div className="email-container flex flex-row">
              <div className="app-icon py-[10px] w-2/5">
                <img
                  src={icons.telegram}
                  alt="Telegram Icon"
                  className="w-[100px] h-[100px] m-auto"
                />
              </div>
              <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                <div className="title text-[40px] font-medium tracking-tighter">
                  Telegram
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://discord.com/users/727498137232736306"
            target="_blank"
            rel="noreferrer"
          >
            <div className="email-container flex flex-row">
              <div className="app-icon py-[10px] w-2/5">
                <img
                  src={icons.discord}
                  alt="Discord Icon"
                  className="w-[100px] h-[100px] m-auto bg-white rounded-3xl"
                />
              </div>
              <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                <div className="title text-[40px] font-medium tracking-tighter">
                  Discord
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
