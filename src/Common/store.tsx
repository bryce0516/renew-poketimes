import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects';

import countReducer, { counterSaga } from '../Count/common/state';
import recoderReducer, { recoderSaga } from '../Recoder/common/state';
import status, { handleTimer } from '../Timer/common/state'
import loadUEventsReducer from '../Recoder/Calendar/common/state'
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  countReducer,
  recoderReducer,
  status,
  loadUEventsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
function* rootSaga() {
  yield all([counterSaga(), recoderSaga(), fork(handleTimer)])
}

sagaMiddleware.run(rootSaga)

console.log(store.getState())

export default store;
