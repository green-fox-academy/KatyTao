import React from 'react';
import useForm from 'react-hook-form';
import './App.css';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);  
    const firstName = `First name: ${data.firstName}\n`;
    const lastName = `Last name: ${data.lastName}\n`;
    const age = `Age: ${data.age}\n`;
    const gender = `Gender: ${data.gender}\n`;
    const location = `Location: ${data.destination}\n`;
    const restriction = `Dietary restrictions:${Object.keys(data.restrict).join(",")}`;
    alert(
      firstName+lastName+age+gender+location+restriction
    ) 
  };
  console.log(errors);
  
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Travel Form</h1>
        <h3>First Name</h3>
        <input type="text" placeholder="firstName" name="firstName" ref={register({required: true})} />
        <h3>Last Name</h3>
        <input type="text" placeholder="lastName" name="lastName" ref={register({required: true})} />
        <h3>Age</h3>
        <input type="number" placeholder="age" name="age" ref={register({required: true})} />
        <h3>Gender</h3>
        <input name="gender" type="radio" value="male" ref={register({ required: true })}/><span>Male</span>
        <input name="gender" type="radio" value="female" ref={register({ required: true })}/><span>Female</span>
        <input name="gender" type="radio" value="other" ref={register({ required: true })}/><span>Other</span>
        <h3>Destination</h3>
        <select name="location" ref={register({ required: true })}>
          <option value="Beijing">Beijing</option>
          <option value=" Tokyo"> Tokyo</option>
          <option value=" Brisbane"> Brisbane</option>
          <option value=" London"> London</option>
        </select>
        <h3>Dietary Restrictions</h3>
        <input type="checkbox" placeholder="vegetarian" name="restrict.vegetarian" ref={register} /><span>Vegetarian</span>
        <input type="checkbox" placeholder="kosher" name="restrict.kosher" ref={register} /><span>Kosher</span>
        <input type="checkbox" placeholder="lactose free" name="restrict.lactoseFree" ref={register} /><span>Lactose Free</span>
        <input type="submit" />
      </form>
    </section>
  );
}