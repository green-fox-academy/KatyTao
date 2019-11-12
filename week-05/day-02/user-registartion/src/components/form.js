import React from 'react';
export default function UserRegistration(props) {
  const userNameInput = React.createRef();
  const emailInput = React.createRef();
  const passwordInput = React.createRef();
  function handleSubmit() {
    const result = {
        username:userNameInput.current.value,
        emailAddress:emailInput.current.value,
        password:passwordInput.current.value
    }
    console.log(result);
    return result;
  }

  return(
    <>
    <form onSubmit={(event) => {props.submitInfo(handleSubmit); event.preventDefault()}}>
      <h2>User Name</h2>
      <input ref={userNameInput} onChange={()=>{props.changeInfo('username',userNameInput.current.value)}} type="text" placeholder="Please input your first name"/>
      <h2>Email address</h2>
      <input ref={emailInput} onChange={()=>{props.changeInfo('emailAddress',emailInput.current.value)}} type="email" placeholder="Please input your email"/>
      <h2>Password</h2>
      <input ref={passwordInput} onChange={()=>{props.changeInfo('password',passwordInput.current.value)}} type="password" placeholder="Please input your password"/>
      <input type="submit" className="submit-btn" disabled={props.valid}/>
    </form>
    </>
  )
}