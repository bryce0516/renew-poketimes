import './common/Recoder.css'
import cx from 'classnames' 
import { useDispatch, useSelector } from 'react-redux'
import { midstop, selectRecoderState, start, stop } from './common/state'

import React, { useEffect, useRef, useState } from 'react'
import Calendar from './Calendar/index'

export interface RecoderProps {
  
}


const addZero = (num: number) => (num < 10 ? `0${num}`: `${num}`);

const Recoder: React.SFC<RecoderProps> = () => {
  const dispatch = useDispatch()
  let recoderState = useSelector(selectRecoderState).timeStart
  let interval = useRef<number>(0)
  const [second , setSecond] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, sethours] = useState<number>(0);

  const timeHandle = () => { 
    if(recoderState === 0 ) {
      recoderState = recoderState + 1
      if(recoderState === 1) {
        dispatch(start())
        interval.current = window.setInterval(() => {
          setSecond(second => second + 1)
        }, 1000)
        return 
      }
    }
    if(recoderState === 1) {
      recoderState = recoderState + 1 
      if(recoderState === 2) {
        window.clearInterval(interval.current)
        dispatch(midstop())
        return 
      }
    }
  }  

  const dbClickHandle = () => {
    window.clearInterval(interval.current)
    dispatch(stop())
      setSecond(0)
      setMinutes(0)
      sethours(0)
      window.clearInterval(interval.current)
  } 

  if(second === 60) {
    setSecond(0)
    setMinutes(minutes => minutes + 1)
  }

  if(minutes === 60) {
    setMinutes(0)
    sethours(hours => hours + 1)
  }

  if(hours === 1) {
    alert('Time is done')
    setSecond(0)
    setMinutes(0)
    sethours(0)
    window.clearInterval(interval.current)
  }

  useEffect(() => {
    return () => {
      window.clearInterval(interval.current)
    }
  },[])

  return ( 
    <>
      <div className={cx('recorder',{'recorder-started': recoderState})}>
        <button className="recorder-record" onClick={timeHandle} onDoubleClick={dbClickHandle}>
          <span></span>
        </button>
          <div className="recorder-counter">{addZero(hours)}:{addZero(minutes)}:{addZero(second)}</div>
      </div>
      <div>
        <Calendar />
      </div>
    </>

  );
}
 
export default Recoder;