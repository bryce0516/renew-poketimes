import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';

import countReducer, { counterSaga } from '../Count/common/state';
import recoderReducer, { recoderSaga } from '../Recoder/common/state'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  countReducer,
  recoderReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
function* rootSaga() {
  yield all([counterSaga(), recoderSaga()])
}

sagaMiddleware.run(rootSaga)

console.log(store.getState())

export default store;
