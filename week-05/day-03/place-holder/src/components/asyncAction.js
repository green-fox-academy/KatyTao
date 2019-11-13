export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
const url = `https://jsonplaceholder.typicode.com/posts`;

export function fetchRequest() {
  return {
    type: FETCH_REQUEST,
  }
}

export function fetchSuccess(posts) {
  return {
    type: FETCH_SUCCESS,
    payload:posts
  }
} 

export function fetchFailed(error) {
  return {
    type: FETCH_FAILED,    
    payload:error.message,
  }
}

export const fetchData = () => {
  return function(dispatch){
    dispatch(fetchRequest());
    fetch(url)
      .then(response => {
        response.json().then(response=>{
          dispatch(fetchSuccess(response));
        })        
      })
      .catch((response)=>{dispatch(fetchFailed(response))})
  }
}
