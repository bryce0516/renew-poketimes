import { Action } from "redux"
import { delay, put, takeEvery } from "redux-saga/effects"
import {RootState} from "../../Common/store"

interface RecoderState {
  timeStart: number,
  StopOrStart: number
}

const START = 'recoder/start'
const STOP = 'recoder/stop'
const MIDSTART = 'recoder/midstart'
const MIDSTOP = 'recoder/midstop'
const SAGASTART = 'recoder/sagastart'
type startAction = Action<typeof START>
type stopAction = Action<typeof STOP>
type midStartAction = Action<typeof MIDSTART>
type midStopAction = Action<typeof MIDSTOP>
type sagaStartAction = Action<typeof SAGASTART>

export const start = ():startAction => ({
  type:START
})

export const stop = ():stopAction => ({
  type:STOP
})

export const midstart = ():midStartAction => ({
  type:MIDSTART
})

export const midstop = ():midStopAction => ({
  type:MIDSTOP
})

export const sagastart = ():sagaStartAction => ({
  type:SAGASTART
})

function* startSaga() {
  yield delay(5000)
  yield put(start())
}

export function* recoderSaga() {
  yield takeEvery(SAGASTART, startSaga)
}

export const selectRecoderState = (rootState: RootState) => rootState.recoderReducer;
export const selectDateStart = (rootState: RootState) => selectRecoderState(rootState).timeStart

const initialState:RecoderState = {
  timeStart : 0,
  StopOrStart: 0
}

const recoderReducer = (
  state: RecoderState = initialState,
  action: startAction | stopAction | midStartAction | midStopAction
) => {
  switch(action.type){
    case START:
      return {...state, timeStart: 1 }
    case STOP:
      return {...state, timeStart: 0 }
    case MIDSTART: 
      return {...state, timeStart: 0 }
    case MIDSTOP:
      return {...state, timeStart: 0 }
    default :
      return state
  }
}

export default recoderReducer

