import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreseasync, decresement, increseasync, incresement, selectCountState } from './common/state'


export interface CountProps {
  
}
 
const Count: React.SFC<CountProps> = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCountState)
  const [btnChange, setBtnChange] = useState(false)
  const handleIncrease = () => {
    dispatch(incresement())
  }
  const handleDecrease = () => {
    dispatch(decresement())
  }
  const handleIncreseAsync = () => {
    dispatch(increseasync())
  }
  const handleDecreseAsync = () => {
    dispatch(decreseasync())
  }
  return (
    <div>
      <h1>This is redux basic formatting</h1>
      <p>{count.value}</p>
      <button onClick={() => {
          handleIncrease()
      }}>
      incresement
      </button>

      <button onClick={() => {
          handleDecrease()
      }}>
      decresement
      </button>

      <button onClick={handleIncreseAsync}>incresementAsync</button>
      <button onClick={handleDecreseAsync}>decresementAsync</button>
    </div>
  );
}
 
export default Count;