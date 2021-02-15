import { useEffect, useState } from "react"


const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('')
  useEffect(() => {
    const Time = new Date().toISOString().slice(11,19)
    setCurrentTime(Time)
  },[])
  return currentTime
}

export default useCurrentTime