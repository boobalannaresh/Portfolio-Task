import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import BookMyShow from "../../assets/BookMyShow.png";
import pizza from "../../assets/pizza.png";
import ChatApp from "../../assets/ChatApp.png";
import SocialMedia from "../../assets/SocialMedia.png";


export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">

        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={ChatApp} alt="Chat _ App" />
                </div>
              </div>
              <div className="project_information">
                <h2>Chat App</h2>
                <p>
                  Create Chat app project using React functional components with React Hooks and Redux. 
                  Using Socket.io instant, private chat sending a private message. If you will send a message, 
                  you will get a notification
                </p>
                <div>
                  <FaReact color="#5bc0de" />
                  <BsBootstrap color="#59287a" />
                  <SiMongodb color="4DB33D" />
                  <SiNodedotjs color="#3c873a" />
                  <SiExpress color="68A063" />
                  <SiSocketdotio color="black"/>
                </div>
                <div>
                  <a style={{textDecoration:"none"}}
                    href="https://github.com/boobalannaresh/Chat_app_frontend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      FrontEnd
                    </span>
                  </a>
                  <a style={{textDecoration:"none"}}
                    href="https://github.com/boobalannaresh/Chat_app_backend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      BackEnd
                    </span>
                  </a>
                  <a style={{textDecoration:"none"}}
                    href="https://chat-app-frontend-lilac.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      
                      type="button"
                      className="btns onbt"
                    >
                      Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
        </div>

        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                 
                    src={pizza}
                    alt="Pizza delivery app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Pizza delivery app</h2>
                <p>
                  Pizza delivery apps service allows customers to pick from
                  different flavours of pizza & they can customize
                  their pizza by adding toppings, spices, ingredients etc.
                </p>
                <div>
                <FaReact color="#5bc0de" />
                  <BsBootstrap color="#59287a" />
                  <SiMongodb color="4DB33D" />
                  <SiNodedotjs color="#3c873a" />
                  <SiExpress color="68A063"/>
                </div>
                <div>
                  <a style={{textDecoration:"none"}}
                    href="https://github.com/boobalannaresh/Pizza-Delivery-Frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      FrontEnd
                    </span>
                  </a>
                  <a style={{textDecoration:"none"}}
                    href="https://github.com/boobalannaresh/Pizza-Delivery-Backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      BackEnd
                    </span>
                  </a>
                  <a style={{textDecoration:"none"}}
                    href="https://ornate-dolphin-0aa41e.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span  type="button" className="btns onbt">
                      Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={SocialMedia} alt="Social_media_clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Social_media</h2>
                <p>
                  Create social media project using React functional components with Context API and React Hooks. 
                  Using Socket.io instant, private chat sending a private message and saving data in MongoDB
                  Build a REST API with login, register, and all CRUD operations.
                </p>
                <div>
                  <FaReact color="#5bc0de" />
                  <SiMaterialui color="#03A9F4" />
                  <SiMongodb color="4DB33D" />
                  <SiNodedotjs color="#3c873a" />
                  <SiExpress color="68A063" />
                  <SiSocketdotio color="black"/>
                </div>
                <div>
                  <a style={{textDecoration:"none"}}
                    href="https://github.com/boobalannaresh/Social_media_clone_f.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      FrontEnd
                    </span>
                  </a>
                  <a style={{textDecoration:"none"}}
                    href="https://github.com/boobalannaresh/Social_media_clone_b.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      BackEnd
                    </span>
                  </a>
                  <a style={{textDecoration:"none"}}
                    href="https://social-media-clone-frontend-navy.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      
                      type="button"
                      className="btns onbt"
                    >
                      Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={BookMyShow} alt="Book MyShow Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Book MyShow Clone</h2>
                <p>
                  Ticket booking is a process of selecting and making
                  reservations for the cinema in online source.
                </p>
                <div>
                  <FaReact color="#5bc0de" />
                  <BsBootstrap color="#59287a" />
                  <SiMongodb color="4DB33D" />
                  <SiNodedotjs color="#3c873a" />
                  <SiExpress color="68A063"/>
                </div>
                <div>
                  <a style={{textDecoration:"none"}}
                    href="https://github.com/boobalannaresh/guvi-hackathon2-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      FrontEnd
                    </span>
                  </a>
                  <a style={{textDecoration:"none"}}
                    href="https://github.com/boobalannaresh/guvi-hackathon2-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      BackEnd
                    </span>
                  </a>
                  <a style={{textDecoration:"none"}}
                    href="https://guvi-hackathon2-frontend-ten.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      
                      type="button"
                      className="btns onbt"
                    >
                      Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </>
  );
};
