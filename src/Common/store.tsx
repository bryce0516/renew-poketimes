import {applyMiddleware, combineReducers, createStore} from 'redux'
import countReducer, {  incresement } from '../Count/common/state';
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';


const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  countReducer
})


export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  // applyMiddleware(sagaMiddleware)
)
// function* rootSaga() {

// }

// sagaMiddleware.run(rootSaga)

console.log(store.getState())

export default store;
