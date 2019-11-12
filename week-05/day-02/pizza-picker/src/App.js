import React,{useState} from 'react';
import './App.css';
import PizzaForm from './components/form';
import Display from './components/display';

function App() {
  let initialPizza = {

  }
  const[pizza,setPizza] = useState(initialPizza);
  function generatePizza(value){
    const newPizza = {...value};
    setPizza(newPizza);    
  }

  console.log(pizza);
  
  return (
    <div className="App">
      <PizzaForm onSubmit={generatePizza}/>
      <Display props={pizza}/>
    </div>
  );
}

export default App;
