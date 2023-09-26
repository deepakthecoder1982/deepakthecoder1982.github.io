import React from 'react';
import Githubcalendar from 'react-github-calendar';
import { ThemeContext } from '../../Context/theme';
import './Github.css';

export const Github = () => {
  const colourTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: '#8400b8',
    grade3: '#b22ff4',
    grade2: '#b265f6',
    grade1: '#c084f5',
    grade0: '#ecd9fc',
  };
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div
        className={'section ' + themename + 'react-activity-calendar'}
        data-aos="fade-right"
      >
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <div className="github-calender">
          <Githubcalendar
            username="deepakthecoder1982"
            blockSize={30}
            blockMargin={5}
            theme={'dark'}
            fontSize={16}
            // id="githubcalendar"
          />
        </div>
      </div>
      <div>
        <div
          style={{
            margin: '2rem auto',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around',
          }}
          className="main-git-status-streak"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=deepakthecoder1982&border_radius=3.9&card_width=497&theme=${
              themename === 'dark' ? 'nord' : 'default'
            }&hide_border=true`}
            alt="github-streak-stats"
            id="github-streak-stats"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api?username=deepakthecoder1982&theme=${
              themename === 'dark' ? 'nord' : 'default'
            }&hide_border=true&show_icons=true`}
            alt="github-readme-stats"
            id="github-stats-card"
          />
        </div>
        <div style={{ textAlign: 'center', margin: '2rem auto 0' }}>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=deepakthecoder1982&layout=compact&theme=${
              themename === 'dark' ? 'nord' : 'default'
            }&hide_border=true`}
            alt="github-top-langs"
            id="github-top-langs"
          />
        </div>
      </div>
    </>
  );
};
