import { useSelector } from 'react-redux'
import { RootState } from '../../Common/store'
import { TimerKey } from '../../Timer/common/state'

export default function useTimer(key: TimerKey) {
  const timer = useSelector((state: RootState) => state.status[key])
  return timer 
}