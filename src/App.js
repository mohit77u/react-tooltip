import React from "react";
import Tooltip from "./Tooltip";
import "./App.css";

export default function App()
{
  return (
    <div className="App">
      <div className="main">
        {/* right tooltip */}
        <div className="main-tooltip">
          <Tooltip content="Right Tooltip Content!" direction="right">
            <span className="tooltip-text">
              Right Tooltip
            </span>
          </Tooltip>
        </div>

        {/* top tooltip */}
        <div className="main-tooltip">
          <Tooltip content="Top Tooltip Content!" direction="top">
            <span className="tooltip-text">
              Top Tooltip
            </span>
          </Tooltip>
        </div>


        {/* bottom tooltip */}
        <div className="main-tooltip">
          <Tooltip content="Bottom Tooltip Content!" direction="bottom">
            <span className="tooltip-text">
            Bottom Tooltip
            </span>
          </Tooltip>
        </div>

        {/* left tooltip */}
        <div className="main-tooltip">
          <Tooltip content="Left Tooltip Content" direction="left" delay="0">
            <span className="tooltip-text">
            Left Tooltip
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
