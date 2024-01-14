import React, { useState } from "react";

import GmailIcon from "../assets/gmail.png";
import DiscordIcon from "../assets/discord.png";
import TwitterIcon from "../assets/twitter.png";
import TelegramIcon from "../assets/telegram.png";
import GithubIcon from "../assets/github.png";
import AnimatedCanvas from "./animatedCanvas";

import background from "../assets/bg.png";

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
    <div className="contact flex flex-row">
      <div className="left left-2/5 flex items-center w-2/5">
        <AnimatedCanvas />
      </div>
      <div className="right w-3/5">
        <div className="heading w-full text-center py-[10px] text-[40px] tracking-tighter font-Rubik">
          <span className="text-gradient font-bold">Get in touch</span> with me!
        </div>
        <div className="content m-auto px-[2%] min-h-[75vh] w-3/5 bg-[#ffffff0d] rounded-2xl backdrop-blur-[5px] border-[1px] border-solid border-[#ffffff4d] flex flex-col justify-around mt-[20px] mb-[50px]">
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
              <div className="app-icon py-[10px] w-2/5">
                <img
                  src={icons.mail}
                  alt="Gmail Icon"
                  className="w-[100px] h-[100px] m-auto rounded-3xl"
                />
              </div>
              <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                <div
                  className={`title text-[40px] font-medium${
                    current === "email" ? " text-gradient" : ""
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
              <div className="app-icon py-[10px] w-2/5">
                <img
                  src={icons.github}
                  alt="Github Icon"
                  className="w-[100px] h-[100px] m-auto rounded-3xl"
                />
              </div>
              <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                <div
                  className={`title text-[40px] font-medium${
                    current === "github" ? " text-gradient" : ""
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
              <div className="app-icon py-[10px] w-2/5">
                <img
                  src={icons.twitter}
                  alt="Twitter Icon"
                  className="w-[100px] h-[100px] m-auto  rounded-3xl"
                />
              </div>
              <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                <div
                  className={`title text-[40px] font-medium${
                    current === "twitter" ? " text-gradient" : ""
                  }`}
                >
                  Twitter
                </div>
              </div>
            </div>
          </a>
          <a href="https://t.me/humblefool13" target="_blank" rel="noreferrer">
            <div
              className="telegram-container flex flex-row bg-no-repeat bg-contain bg-center"
              onMouseEnter={() => handleMouseEnter("telegram")}
              onMouseLeave={() => handleMouseLeave("telegram")}
            >
              <div className="app-icon py-[10px] w-2/5">
                <img
                  src={icons.telegram}
                  alt="Telegram Icon"
                  className="w-[100px] h-[100px] m-auto"
                />
              </div>
              <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                <div
                  className={`title text-[40px] font-medium${
                    current === "telegram" ? " text-gradient" : ""
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
              <div className="app-icon py-[10px] w-2/5">
                <img
                  src={icons.discord}
                  alt="Discord Icon"
                  className="w-[100px] h-[100px] m-auto bg-white rounded-3xl"
                />
              </div>
              <div className="app-text flex flex-row py-[10px] w-3/5 items-center">
                <div
                  className={`title text-[40px] font-medium${
                    current === "discord" ? " text-gradient" : ""
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
  );
};

export default ContactPage;
