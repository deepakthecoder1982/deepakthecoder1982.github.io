import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div id='#about' className="about center section">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name" id="user-detail-name">Deepak Yadav</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right" id="user-detail-intro" style={{textAlign:'center'}}>
        As an aspiring web developer with a strong interest in Generative AI, I am dedicated to learning and staying updated with the latest trends in the field. I bring a fresh perspective and a passion for innovation, eager to explore opportunities to apply my skills and contribute to exciting projects.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/deepakthecoder1982"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
            id="contact-github"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:deepakyad18@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
            id="contact-email"
          >
            <EmailIcon />
          </a>
          <a
            // href="tel:+917001347896"
            href="tel:-+919137270148"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
            id="contact-phone"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-archana-mahesh-yadav"
            aria-label="linkdin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            id="contact-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1lrwNui5KZRUUIYUnxf7eeVsecZhBVXLr"
            aria-label="resume"
            className="link link--icon"
            onClick={(e)=>{
              window.open("https://drive.google.com/file/d/1lrwNui5KZRUUIYUnxf7eeVsecZhBVXLr/view","_blank")
            }}
            rel="noreferrer"
            id="resume-link-2"
          >
            <DescriptionIcon />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100024072726919"
            aria-label="facebook"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://goo.gl/maps/yrRcAsiA9nxeiLr66"
            aria-label="location"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
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
