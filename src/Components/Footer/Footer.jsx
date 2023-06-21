import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a
          href="https://github.com/deepakthecoder1982"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className="footer">Developed By deepakthecoder1982</h3>
        </a>
        <a
          href="https://github.com/imbickydutta"
          rel="noreferrer"
          target="_blank"
        >
          <h5 className="footer">Designed With ❤ By imbickydutta</h5>
        </a>
      </div>
    </>
  );
};
