import { Action } from "redux"

import { RootState } from "../../Common/store"

interface CountState {
  value: number
}

export const INCRESEMENT = 'count/incresement'
export const DECRESEMENT = 'count/decresement'

type IncresementAction = Action<typeof INCRESEMENT>
type DecresementAction = Action<typeof DECRESEMENT>

export const incresement = ():IncresementAction => ({
  type: INCRESEMENT
})

export const decresement = ():DecresementAction => ({
  type: DECRESEMENT
}) 


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