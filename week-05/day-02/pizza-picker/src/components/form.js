import React from 'react';
import useForm from 'react-hook-form'
export default function PizzaForm(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  
  return(
    <form onSubmit={handleSubmit((data)=>{props.onSubmit(data)})}>
      <section>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/180px-Domino%27s_pizza_logo.svg.png" alt="domino logo"/>
      <h1>Domino's</h1>
      </section>
      <h4>Base</h4>
      <select name="Base" ref={register}>
        <option value="Thin Crust">Thin Crust</option>
        <option value="Thick Curst">Thick Curst</option>
        <option value="Deep Crust">Deep Curst</option>
        <option value="Cheese Filled Crust">Cheese Filled Crust</option>
      </select>
      <h4>Toppings</h4>
      <input type="checkbox" placeholder="Pepperoni" name="Pepperoni" ref={register} /><span>Pepperoni</span>
      <input type="checkbox" placeholder="Mushrooms" name="Mushrooms" ref={register} /><span>Mushrooms</span>
      <input type="checkbox" placeholder="Onions" name="Onions" ref={register} /><span>Onions</span>
      <input type="checkbox" placeholder="Sausage" name="Sausage" ref={register} /><span>Sausage</span>
      <input type="checkbox" placeholder="Bacon" name="Bacon" ref={register} /><span>Bacon</span>
      <h4>Cut it?</h4>
      <input name="Cut" type="radio" value="Yes" ref={register({ required: true })}/><span>Yes</span>
      <input name="Cut" type="radio" value="No" ref={register({ required: true })}/><span>No</span>
      <h4>Any additional comments?</h4>
      <textarea name="Comments" ref={register} />
      <input type="submit"/>
    </form>
  )
}