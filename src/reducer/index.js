import {
  LOGIN_START,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions/index'

const initialState = {
  friends: [],
  error: '',
  errorStatusCode: null,
  fetchingData: false,
  isLoggingIn: false
}

const Reducer = (state = initialState, action) => {
  switch(action.type) {
       case LOGIN_START: {
            return {
              ...state,
              isLoggingIn: true
          } 
      }
      case FETCH_DATA_START: {
          return {
              ...state, 
              fetchingData: true,
          }
      }
      case FETCH_DATA_SUCCESS: {
          return {
              ...state, 
              fetchingData: false,
              friends: action.payload
          }
      }
      case FETCH_DATA_FAILURE: {
          return {
              ...state, 
              errorStatusCode: action.payload.status
          }
      }
      default: 
          return state
  }
}

export default Reducer