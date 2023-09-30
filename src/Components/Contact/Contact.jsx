import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";
import PhoneIcon from "@material-ui/icons/Phone";
import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);
// <a href="tel:+917001347896" target="_blank" rel="noreferrer">
//             <BsFillTelephoneFill className="phone" />
//           </a>
  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/deepak-archana-mahesh-yadav-ab4438216/"
            target="_blank"
            rel="noreferrer"
            style={{textAlign:'center'}}
            className="link link--icon"
          >
            <FaLinkedin className="linkedin" />
            <p style={{fontSize:"18px"}}>Deepak Archana Mahesh Yadav</p>
          </a>
          <a
            href="https://github.com/deepakthecoder1982"
            target="_blank"
            rel="noreferrer"
            style={{textAlign:'center'}}
            className="link link--icon"
          >
            <VscGithub className="github" />
            <p style={{fontSize:"18px"}}>deepakthecoder1982.github.io</p>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=deepakyad18@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{textAlign:'center'}}
            className="link link--icon"
          >
            <CgMail className="email" />
            <p style={{fontSize:"18px"}}>deepakyad18@gmail.com</p>

          </a>
          <a
            // href="tel:+917001347896"
            href="tel:-+919137270148"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
            id="contact-phone"
            style={{textAlign:'center'}}
          >
            <PhoneIcon />
            <p style={{fontSize:"18px"}}>+91 9137270148</p>
          </a>
          {/* <a
            href="https://instagram.com/deepakyad"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="twitter" />
          </a> */}
        </div>
      </div>
    </>
  );
};
