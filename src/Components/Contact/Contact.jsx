import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/nareshbabu-k-57a361271/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color=" #0e76a8" />
            </a>
            <a
              href="https://github.com/boobalannaresh"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub color="#333" />
            </a>
            <a
              href="mailto:nareshbabuk21@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail color="FBBC05" />
            </a>
            <a href="tel:+919159553177" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>nareshbabuk21@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+91-9159553177</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
