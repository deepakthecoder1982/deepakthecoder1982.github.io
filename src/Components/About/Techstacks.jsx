import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiPython,
  SiElectron,
  SiDataversioncontrol,
  SiPostman
} from "react-icons/si";
import { DiAngularSimple, DiCss3, DiDjango, DiMongodb, DiMysql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" style={{margin:'10em 0'}} data-aos="fade-right">
        <h2 className="section__title different" >Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>

          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <DiDjango />
            <h5>Python</h5>
          </div>
          <div>
            <DiAngularSimple />
            <h5>Angular</h5>
          </div>
          <div>
            <DiMysql/>
            <h5>Mysql</h5>
          </div>
          <div>
            <SiElectron/>
            <h5>Electron Js</h5>
          </div>
          <div>
            <SiPostman/>
            <h5>Electron Js</h5>
          </div>
        </div>
      </div>
    </>
  );
};
