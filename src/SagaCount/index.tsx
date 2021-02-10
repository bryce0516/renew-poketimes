import { useDispatch, useSelector } from "react-redux";
import { increse, selectCountState} from './common/state'
export interface SagaCountProps {
  
}
 
const SagaCount: React.SFC<SagaCountProps> = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCountState)
  const handleClick = () => {
    dispatch(increse())
  }
  return (  
    <div>
      <h1>This is reduxSaga basic formatting</h1>
      <p>{count.value}</p>
      <button onClick={handleClick}>
        incresement
      </button>
    </div>
  );
}
 
export default SagaCount;