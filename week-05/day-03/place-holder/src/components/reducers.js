import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED} from './asyncAction';

const initialState= {
  loading:false,
  posts:[],
  error:'',
}

export const fetchReducer = (state = initialState, action) =>{
  switch(action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        posts:action.payload,
        loading: false,
      }
    case FETCH_FAILED:
      return {
        loading: false,
        posts:[{title:''}],
        error:action.payload,
        error_msg:'error happened'
      }
    default:
      return state;
  }
}
