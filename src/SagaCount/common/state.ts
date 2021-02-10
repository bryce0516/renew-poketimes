import { delay, put } from "redux-saga/effects"
import { RootState } from "../../Common/store"

export const INCRESE = 'saga/INCRESE'
export const DECRESE = 'saga/DECRESE'

export const increse = () => ({type: INCRESE})
export const decrese = () => ({type: DECRESE})

export type CounterActionType = 
| ReturnType<typeof increse>
| ReturnType<typeof decrese>


export function* increseSaga() {
  console.log('saga here')
  yield delay(1000);
  yield put(increse());
}

export function* decreseSaga() {
  yield put(decrese());
}
export const selectCountState = (rootState: RootState) => rootState.counter;

const initialState = {
  value:0
}

const counter = (
  state = initialState,
  action: CounterActionType
):any => {
  switch (action.type) {
    case INCRESE:
      return {
        ...state,
        value: state.value + 1
      }
    case DECRESE:
      return {
        ...state,
        value: state.value - 1
      }
    default: 
      return state;
  }
}


export default counter
