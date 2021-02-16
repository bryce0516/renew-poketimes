import { buffers, EventChannel } from "redux-saga";
import { put, take, takeEvery,fork, cancel, all, call, race, delay, select, flush } from "redux-saga/effects";
import { createAction, ActionType, createReducer } from "typesafe-actions";
import { closeChannel, subscribe } from "./channel";
import {RootState} from '../../Common/store'
export type Status = "stop" | "pause" | "play";
export interface ISetStatus {
  status: Status;
}

// Actions
export const START = "timer/START";
export const PAUSE = "timer/PAUSE";
export const STOP = "timer/STOP";
export const WATCH = "timer/WATHC";
export const RESTART = "timer/RESTART";
export const SET_STATUS = "timer/SET_STATUS";
export const SET_COUNT = "timer/SET_COUNT";

export const start = createAction(START)();
export const watch = createAction(WATCH)();
export const pause = createAction(PAUSE)();
export const stop = createAction(STOP)();
export const restart = createAction(RESTART)();
export const setStatus = createAction(SET_STATUS)<ISetStatus>();
export const setCount = createAction(SET_COUNT)<number>();

export const actions = {
  start,
  watch,
  pause,
  stop,
  restart,
  setStatus,
  setCount
};

type TimerAction = ActionType<typeof actions>
type TimerState = {
  status: Status;
  count: number
}
export type TimerKey = keyof TimerState;


export function* startSaga(){
  console.log("start is working")
  yield put(watch());
}

export function* watcher(){
  while (yield take(WATCH)) {
    try{
      yield put(setStatus({ status: "play"}))
      const worker = yield fork(connectChannel)
      console.log("i am watching")
      yield take(STOP)
      yield cancel(worker)
    }catch(error) {
      console.error(error);
    }finally{
      yield all([
        put(setStatus({ status: "stop"})),
        put(setCount(0))
      ])
    }
  }
}

const getTimerFromStore = (state:RootState) => state.status;

function* connectChannel() {
  let channel: EventChannel<any>;
  try {
    const timer = 1000;
    const buffer = buffers.sliding(1)
    console.log("this is buffer",buffer)
    const param = {buffer, timer};
    channel = yield call(subscribe, param)

    while (true) {
      const message = yield flush(channel);
      const store = yield select(getTimerFromStore);
      const count = store.count;
      yield put(setCount(count + 1));
      const { timeout, pause } = yield race({
        timeout: delay(timer),
        pause: take(PAUSE)
      })
      if(pause) {
        yield put(setStatus({ status: "pause" }))
        yield take(RESTART)
        yield put(setStatus({ status: "play" }))
      }
    }
  } catch (error) {
    console.error(error)
  } finally {
    closeChannel(channel!);
  }
}

export function* handleTimer() {
  yield takeEvery(START, startSaga)
  yield fork(watcher);
}

const initialState: TimerState = {
  status: "stop",
  count: 0
}

const status = createReducer<TimerState, TimerAction>(initialState, {
  [SET_STATUS]: (state, action) => {
    console.log('createReducer set_status : ',state, action)
    const { status } = action.payload;
    const _state = { ...state, status };
    return _state;
  },
  [SET_COUNT]: (state, action) => {
    console.log('createReducer count : ',state, action)
    const { payload: count } = action;
    const _state = { ...state, count };
    return _state;
  }
});

export default status;