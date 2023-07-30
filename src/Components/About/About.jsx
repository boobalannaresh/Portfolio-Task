import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import { Player } from '@lottiefiles/react-lottie-player';


export const About = () => {
  return (
    <>
      <div className="about-animate">
        <div className="about center">

          <div className="home">

            <h2 data-aos="fade-right" className="mobileHead">
              Hello,  I'm <span className="about__name">Naresh babu</span>
            </h2>
            <Type />
            <p className="about__desc" data-aos="fade-right">
            I craft websites that are as unique as you and transform your ideas into seamless digital experiences
            </p>

          </div>

          <div className="about__contact center" >
            <a
              href="https://github.com/boobalannaresh"
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              className="link link--icon"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:nareshbabuk21@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="mail"
              className="link link--icon"
            >
              <EmailIcon />
            </a>
            <a
              href="tel:+919159553177"
              target="_blank"
              rel="noreferrer"
              aria-label="phone"
              className="link link--icon"
            >
              <PhoneIcon />
            </a>
            
            <a
              href="https://www.linkedin.com/in/nareshbabu-k-57a361271/"
              aria-label="linkedin"
              className="link link--icon"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            
          </div>

          <button
            className="btnResume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1_3wSbSijwL-Qwn0nElY5a4YDkc5B2JP6/view?usp=sharing"
              );
            }}
          >
            Resume
          </button>
        </div>

        <div data-aos="fade-right" className="lottiefiles">

          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/private_files/lf30_FQVNNa.json"
          >
          </Player>

        </div>
        
      </div>

      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};