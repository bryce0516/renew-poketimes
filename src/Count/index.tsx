import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decresement, incresement, selectCountState } from './common/state'


export interface CountProps {
  
}
 
const Count: React.SFC<CountProps> = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCountState)
  const [btnChange, setBtnChange] = useState(false)
  const handleClick = () => {
    btnChange ? dispatch(incresement()) : dispatch(decresement())
  }
  const handleAsync = () => {
    // dispatch(incrementAsync())
  }
  return (
    <div>
      <h1>This is redux basic formatting</h1>
      <p>{count.value}</p>
      <button onClick={() => {
        if(!btnChange) {
          setBtnChange(true)
        } else {
          handleClick()
        }

      }}>
      incresement
      </button>
      <button onClick={() => {
        if(btnChange){
          setBtnChange(false)
        } else {
          handleClick()
        }
      }}>
      decresement
      </button>
      <button onClick={handleAsync}>incresementAsync
      </button>
    </div>
  );
}
 
export default Count;