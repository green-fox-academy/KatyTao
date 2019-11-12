import React from 'react';

export default function RegistrationFrom(props) {
  let firstNameInput = React.createRef();
  let lastNameInput = React.createRef();
  let emailInput = React.createRef();

  function handleChange() {
    return {
      firstName:firstNameInput.current.value,
      lastName:lastNameInput.current.value,
      email:emailInput.current.value
    }
  }

  return(
    <form onSubmit={(event) => {props.submitInfo(handleChange); event.preventDefault()}}>
      <h2>First Name</h2>
      <input ref={firstNameInput} type="text" placeholder="Please input your first name"/>
      <h2>Last Name</h2>
      <input ref={lastNameInput} type="text" placeholder="Please input your last name"/>
      <h2>Email</h2>
      <input ref={emailInput} type="email" placeholder="Please input your email"/>
      <input type="submit"/>
    </form>
  )
}