import React, { useState } from 'react'
import "./common/Timer.scss" 

import play from "../Common/Assets/play.png"
import pause from "../Common/Assets/pause.png"
import refresh from "../Common/Assets/refresh.png"
import restart from "../Common/Assets/restart.png"

const buttonComponent = {
  play: {key:"play", title:"Play", img:play},
  pause: {key:"pause", title:"Pause", img:pause},
  refresh: {key:"refresh", title:"Refresh", img:refresh},
  restart: {key:"restart", title:"Restart", img:restart}
}

type Button = keyof typeof buttonComponent

const toHHMMSS = (time:number) => {
  const format = (num: number) => (num<10 ? `0${num}` : String(num));
  const sec = time;
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - hours * 3600) / 60);
  const seconds = sec - hours * 3600 - minutes * 60;
  return `${format(hours)}:${format(minutes)}:${format(seconds)}`
}


export interface TimerProps {
  
}
 
const Timer: React.SFC<TimerProps> = () => {
  const [ buttonList, setButtonList] = useState<Button[]>(["play", "refresh"]);
  


  return ( 
    <div className="wrapper">
      <div className="timer-title">Redux-Saga Timer</div>
      <div className="timer">{toHHMMSS(0)}</div>
      <div className="button-list"> 
        {buttonList.map(btn => {
          const button = buttonComponent[btn];
          return (
            <div className="button-box" key={button.key}>
              <div className="button">
                <img src={button.img} />
              </div>
              <div className="title">{button.title}</div>
            </div>
          )
        })}
      </div>
    </div>
   );
}
 
export default Timer;