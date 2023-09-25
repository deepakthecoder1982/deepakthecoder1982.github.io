import React from 'react';
import './Projects.css';
import { FaReact, FaHardHat } from 'react-icons/fa';
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
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiChakraui,
  SiCss3,
  SiReact,
  SiCodesandbox,
  SiFigma,
} from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { VscJson } from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io';
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/108220666/256259386-ccdc0a2d-e483-430b-a018-5db8dadca5bf.png"
                  alt="Masai Vaccination Center"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ textAlign: 'center' }}>Masai Vaccination Center</h2>
              <p>
                An online platform to track the Vaccination of patients build
                individually within the span of one week.
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://vaccinationcenter.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/deepakthecoder1982/Masai-Vaccination-Center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  width={'100%'}
                  height={'100%'}
                  src="https://user-images.githubusercontent.com/108220666/256293666-bd964660-90e7-4637-a38b-4266ecad28f6.png"
                  alt="Clothy"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ textAlign: 'center' }}>
                Clothy : Clothes shoping platform
              </h2>
              <p>
                Discover our pocket-friendly e-commerce platform, built in just
                7 days by our talented team of 5. With User and Admin section.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiChakraui />
                <SiCss3 />
                <SiReactrouter />
              </div>
              <div>
                <a
                  href="https://clothy-amazing-shoping-website.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/deepakthecoder1982/Full_Stack_Ecommerse_Website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/108220666/248779041-67ff3759-2fe0-4560-ab56-be58ac890149.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ textAlign: 'center' }}>TODO:Your Task Manager</h2>
              <p>
                Mange your task on time with the help of TODO with a great UI.
                Your can Create Read Update and Delete the Task. Build this to
                learn tailwind CSS.
              </p>
              <div>
                <SiReact />
                <SiJavascript />
                <SiCss3 />
                <SiFigma />
                <SiTailwindcss />
              </div>
              <div>
                <a
                  href="https://todo-your-favourite-task-planner.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    URL for the API
                  </span>
                </a>
                <a
                  href="https://github.com/deepakthecoder1982/FullStackTodoApplication"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src="https://user-images.githubusercontent.com/110231091/223406440-15f59025-923e-4a37-8130-d523fc9a7d49.png" alt="Sports Wear Delight" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 style={{ textAlign: 'center' }}>SWD: Sports Wear Delight</h2>
              <p style={{textAlign:'center'}}>
                Sports Wear Delight is a clone of Eastern Mountain Sports.
                An ecommerse website where users can buy best clothes of their
                desires wth latest fashion on the top in thier budget.It was a
                build by 5 team members within the span of 7 days. Learn a lot during it.
              </p>
              <div>
                <SiJavascript/>
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://amazing-concha-0e1468.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/deepakthecoder1982/Sports-Wear-Delight"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
