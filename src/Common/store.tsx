import {applyMiddleware, combineReducers, createStore} from 'redux'
import countReducer from '../Count/common/state';
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';
import counter, { decreseSaga, increseSaga } from '../SagaCount/common/state'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  countReducer,
  counter
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
function* rootSaga() {
  yield all([increseSaga(), decreseSaga()])
}

sagaMiddleware.run(rootSaga)

console.log(store.getState())

export default store;
