import { Action } from "redux"
import { ThunkAction } from "redux-thunk"


export interface UserEvent {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
}

const LOAD_REQUEST = 'userEvents/load_request'
const LOAD_SUCCESS = 'userEvents/load_success'
const LOAD_FAILURE = 'userEvents/load_failure'

interface LoadRequestAction extends Action<typeof LOAD_REQUEST>{}
interface LoadSuccessAction extends Action<typeof LOAD_SUCCESS>{}
interface LoadFailureACtion extends Action<typeof LOAD_FAILURE>{}

const initialState: UserEvent = {
  id: 1,
  title: '',
  dateStart: '',
  dateEnd: ''
}

const loadUEventsReducer = (state = initialState, action: any) => {
  switch(action.type){
    case LOAD_REQUEST:
      return {...state}
    default :
      return state
  }
}

export default loadUEventsReducer