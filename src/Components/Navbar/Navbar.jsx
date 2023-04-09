import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunny';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <nav className={"center nav" + themename}>
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <ListItemButton
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              Home
            </ListItemButton>
          </li>
          <li className="nav__list-item">
            <ListItemButton
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </ListItemButton>
          </li>
          <li className="nav__list-item">
            <ListItemButton
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </ListItemButton>
          </li>
          <li className="nav__list-item">
            <ListItemButton
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Projects
            </ListItemButton>
          </li>
          <li className="nav__list-item">
            <ListItemButton
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </ListItemButton>
          </li>
          <li className="nav__list-item">
            <ListItemButton
              href="https://drive.google.com/file/d/1_3wSbSijwL-Qwn0nElY5a4YDkc5B2JP6/view?usp=sharing"
              onClick={toggleNavList}
              className="link link--nav"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </ListItemButton>
          </li>
        </ul>
        <IconButton
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon color="info" /> : <Brightness2Icon color="warning" />}
        </IconButton>
        <IconButton
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </nav>
    </>
  );
};
