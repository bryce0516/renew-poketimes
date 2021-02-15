import { Action } from "redux"
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects"

import { RootState } from "../../Common/store"

interface CountState {
  value: number
}

export const INCRESEMENT = 'count/incresement'
export const DECRESEMENT = 'count/decresement'
export const INCREASEASYNC = 'count/increseasync'
export const DECREASEASYNC = 'count/decreseasync'


type IncresementAction = Action<typeof INCRESEMENT>
type DecresementAction = Action<typeof DECRESEMENT>
type IncreseasyncAction = Action<typeof INCREASEASYNC>
type DecreseasyncAction = Action<typeof DECREASEASYNC>


export const incresement = ():IncresementAction => ({
  type: INCRESEMENT
})

export const decresement = ():DecresementAction => ({
  type: DECRESEMENT
}) 

export const increseasync = ():IncreseasyncAction => ({
  type: INCREASEASYNC
})

export const decreseasync = ():DecreseasyncAction => ({
  type: DECREASEASYNC
})

function* increaseSaga() {
  yield delay(1000)
  yield put(incresement())
}

function* decreaseSaga() {
  yield delay(1000)
  yield put(decresement())
}

export function* counterSaga() {
  yield takeEvery(INCREASEASYNC, increaseSaga)
  yield takeLatest(DECREASEASYNC, decreaseSaga)
}

export const selectCountState = (rootState: RootState) => rootState.countReducer;

const initialState: CountState = {
  value: 0
}

const countReducer = (
  state = initialState, 
  action:any
  ) => 
  {
  switch(action.type){
    case INCRESEMENT :
      return {
        ...state,
        value: state.value + 1
      }
    case DECRESEMENT :
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state;
  }
}

export default countReducer