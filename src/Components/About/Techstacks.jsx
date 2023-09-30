import React from 'react';
import './Techstacks.css';
import { FaReact, FaNodeJs, FaAngular, FaAws } from 'react-icons/fa';
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiPostman,
  SiUikit,
  SiTypescript,
  SiSublimetext,
  SiCycling74,
  SiRailway,
  SiXampp,
} from 'react-icons/si';
import { DiAws, DiComposer, DiCss3, DiDjango, DiHeroku, DiLinux, DiMongodb, DiMysql, DiPhp, DiPython, DiSass, DiSublime, DiVisualstudio } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { VscCode, VscGithub } from 'react-icons/vsc';
import { BsBootstrap } from 'react-icons/bs';

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <h3 style={{ color: 'whitesmoke',fontSize:'1.8rem' }}>Tech Stacks</h3>
          <div className='skills-card'>
            <SiJavascript className='skills-card-img' />
            <h5 className='skills-card-name'>Javascript</h5>
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
            <DiPython/>
            <h5>Python</h5>
          </div>
          <div>
            <DiDjango/>
            <h5>Django</h5>
          </div>
          <div>
            <DiPhp/>
            <h5>PHP</h5>
          </div>
          <div>
            <DiMysql/>
            <h5>MySQL</h5>
          </div>
        </div>
        <div className="toolsSection" >
          <h3 style={{ color: 'whitesmoke',textAlign:'center',margin:'1.6rem auto',fontSize:'1.8rem'}}> Tools</h3>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <DiVisualstudio />
            <h5>Vs Code</h5>
          </div>
          <div>
            <DiComposer />
            <h5>Composer</h5>
          </div>
          <div>
            <SiXampp />
            <h5>Xampp</h5>
          </div>
          {/* <div>
            <DiHeroku/>
            <h5>Heroku</h5>
          </div>
          <div>
            <FaAws/>
            <h5>Heroku</h5>
          </div> */}
          <div>
            <SiSublimetext/>
            <h5>Sublime</h5>
          </div>
        </div>
      </div>
    </>
  );
};
