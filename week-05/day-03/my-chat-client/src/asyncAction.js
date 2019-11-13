export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const POST_MESSAGE = 'POST_MESSAGE';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';

const url = `https://stream-vanadium.glitch.me/messages`;

export function fetchRequest() {
  return {
    type: FETCH_REQUEST,
  }
}

export function fetchSuccess(messages) {
  return {
    type: FETCH_SUCCESS,
    payload:messages
  }
} 

export function fetchFailed(error) {
  return {
    type: FETCH_FAILED,    
    payload:error.message,
  }
}

export function postMessage(message) {
  return {
    type: POST_MESSAGE,
    payload: message,
  }
}

export function postMessageSuccess(){
  return {
    type: POST_MESSAGE_SUCCESS,
  }
}

export const fetchData = () => {
  return function(dispatch){
    dispatch(fetchRequest());
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then((response)=> call(fetchSuccess(response)))
      .catch((response)=>{call(fetchFailed(response))})
  }
}

export const sendData = (value) => {
  return function(dispatch){
    fetch(url,{
      method:'POST', 
      body:JSON.stringify({user:"Katy", text:value}),
      headers: {
      'Content-Type': 'application/json',
    }})
    .then(response=>{
      console.log(response.json());
      return response.json();
    })
    .catch((response)=> dispatch(fetchFailed(response)))
  }
}