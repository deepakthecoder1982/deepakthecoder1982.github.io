import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";


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
      <nav className="center nav nav-link" id="nav-menu">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav nav-link home"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav nav-link about"
            >
              About
            </a>
          </li>
          <li className="nav__list-item ">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav nav-link skills"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav nav-link projects"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav nav-link contact"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="https://drive.google.com/uc?export=download&id=1lrwNui5KZRUUIYUnxf7eeVsecZhBVXLr"
              onClick={()=>{
                toggleNavList();
                window.open("https://drive.google.com/file/d/1lrwNui5KZRUUIYUnxf7eeVsecZhBVXLr/view","_blank")
              }}
              className="link link--nav nav-link resume"
              rel="noreferrer"
              id="resume-link-1"
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
