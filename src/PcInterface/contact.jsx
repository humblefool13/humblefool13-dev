import React, { useState } from "react";

import GmailIcon from "../assets/gmail.png";
import DiscordIcon from "../assets/discord.png";
import TwitterIcon from "../assets/twitter.png";
import TelegramIcon from "../assets/telegram.png";
import GithubIcon from "../assets/github.png";
import AnimatedCanvas from "./animatedCanvas";

import background from "../assets/bg.gif";

const icons = {
  discord: DiscordIcon,
  mail: GmailIcon,
  twitter: TwitterIcon,
  telegram: TelegramIcon,
  github: GithubIcon,
};

const ContactPage = () => {
  const [current, setCurrent] = useState();

  const handleMouseEnter = (icon) => {
    setCurrent(icon);
    const element = document.getElementsByClassName(`${icon}-container`)[0];
    element.style.backgroundImage = `url(${background})`;
  };

  const handleMouseLeave = (icon) => {
    setCurrent(null);
    const element = document.getElementsByClassName(`${icon}-container`)[0];
    element.style.backgroundImage = ``;
  };

  return (
    <div className="contact">
      <div className="flex flex-row h-full max-w-[1536px] m-auto">
        <div className="left left-2/5 flex items-center w-2/5 h-[85vh]">
          <AnimatedCanvas />
        </div>
        <div className="right w-3/5 h-full md:pt-[30px] max-w-">
          <div className="heading w-full text-center py-[5px] text-[20px] lg:text-[25px] xl:text-[35px] 2xl:text-[45px] tracking-tighter font-Rubik">
            <span className="text-gradient-green font-bold">Get in touch</span>{" "}
            with me!
          </div>
          <div className="content m-auto px-[2%] w-3/5 bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] border-solid border-[#ffffff4d] flex flex-col justify-around mt-[4px] lg:mt-[20px] max-w-[300px] xl:max-w-[500px]">
            <a
              href="https://mail.google.com/mail/?view=cm&to=contact@humblefool13.dev"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="email-container flex flex-row bg-no-repeat bg-contain bg-center"
                onMouseEnter={() => handleMouseEnter("email")}
                onMouseLeave={() => handleMouseLeave("email")}
              >
                <div className="app-icon py-[10px] lg:py-[15px] w-2/5">
                  <img
                    src={icons.mail}
                    alt="Gmail Icon"
                    className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] xl:w-[60px] xl:h-[60px] m-auto"
                  />
                </div>
                <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                  <div
                    className={`title text-[17px] lg:text-[20px] xl:text-[30px] font-medium${
                      current === "email" ? " text-gradient-green" : ""
                    }`}
                  >
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
              <div
                className="github-container flex flex-row bg-no-repeat bg-contain bg-center"
                onMouseEnter={() => handleMouseEnter("github")}
                onMouseLeave={() => handleMouseLeave("github")}
              >
                <div className="app-icon py-[10px] lg:py-[15px] w-2/5">
                  <img
                    src={icons.github}
                    alt="Github Icon"
                    className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] xl:w-[60px] xl:h-[60px] m-auto rounded-3xl"
                  />
                </div>
                <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                  <div
                    className={`title text-[17px] lg:text-[20px] xl:text-[30px] font-medium${
                      current === "github" ? " text-gradient-green" : ""
                    }`}
                  >
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
              <div
                className="twitter-container flex flex-row bg-no-repeat bg-contain bg-center"
                onMouseEnter={() => handleMouseEnter("twitter")}
                onMouseLeave={() => handleMouseLeave("twitter")}
              >
                <div className="app-icon py-[10px] lg:py-[15px] w-2/5">
                  <img
                    src={icons.twitter}
                    alt="Twitter Icon"
                    className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] xl:w-[60px] xl:h-[60px] m-auto rounded-3xl"
                  />
                </div>
                <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                  <div
                    className={`title text-[17px] lg:text-[20px] xl:text-[30px] font-medium${
                      current === "twitter" ? " text-gradient-green" : ""
                    }`}
                  >
                    Twitter
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://t.me/humblefool13"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="telegram-container flex flex-row bg-no-repeat bg-contain bg-center"
                onMouseEnter={() => handleMouseEnter("telegram")}
                onMouseLeave={() => handleMouseLeave("telegram")}
              >
                <div className="app-icon py-[10px] lg:py-[15px] w-2/5">
                  <img
                    src={icons.telegram}
                    alt="Telegram Icon"
                    className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] xl:w-[60px] xl:h-[60px] m-auto"
                  />
                </div>
                <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                  <div
                    className={`title text-[17px] lg:text-[20px] xl:text-[30px] font-medium${
                      current === "telegram" ? " text-gradient-green" : ""
                    }`}
                  >
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
              <div
                className="discord-container flex flex-row bg-no-repeat bg-contain bg-center"
                onMouseEnter={() => handleMouseEnter("discord")}
                onMouseLeave={() => handleMouseLeave("discord")}
              >
                <div className="app-icon py-[10px] lg:py-[15px] w-2/5">
                  <img
                    src={icons.discord}
                    alt="Discord Icon"
                    className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] xl:w-[60px] xl:h-[60px] m-auto bg-white rounded-3xl"
                  />
                </div>
                <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                  <div
                    className={`title text-[17px] lg:text-[20px] xl:text-[30px] font-medium${
                      current === "discord" ? " text-gradient-green" : ""
                    }`}
                  >
                    Discord
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
