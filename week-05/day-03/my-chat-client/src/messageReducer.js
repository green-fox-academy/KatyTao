import {
  FETCH_REQUEST, 
  FETCH_SUCCESS, 
  FETCH_FAILED, 
  POST_MESSAGE,
  POST_MESSAGE_SUCCESS,
} from './asyncAction';
const initialState= {
  messages: [
    {
      id: 0,
      user: "Adam",
      text: "Hello World",
      createdAt: "2019-10-21T15:45:02.088Z"
    }
  ],
  count: 1
}

export const messageReducer = (state = initialState, action) =>{
  switch(action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        messages:action.payload.messages,
        loading: false,
      }
    case FETCH_FAILED:
      return {
        loading: false,
        messages:[],
        error:action.payload,
        error_msg:'error happened'
      }
    case POST_MESSAGE:
      return {
        user:"Katy",
        text:action.payload,
      }
    case POST_MESSAGE_SUCCESS:
      return {
        ...state,
        messages:action.payload.messages,
        loading: false,
      }
    default:
      return state;
  }
}