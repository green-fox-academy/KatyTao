import React, {useState, useEffect} from 'react';
import './App.css';
import UserRegistration from './components/form';

function App() {
  const initial = {
    username:"",
    emailAddress:"",
    password:""
  }
  const [currentInfo, setCurrent] = useState(initial);
  const [valid, setValid] = useState(1);

  function handleChange(key,value) {   
    const newObj = {...currentInfo};
    newObj[key] = value;
    setCurrent(newObj);    
  }

  function handleSubmit(value) {
    setCurrent(value);
  }
  
  useEffect(() => {
    if(currentInfo.username!==""&&currentInfo.emailAddress.includes('@')&&currentInfo.password.length>=8) {
      setValid(0);
    }
  })

  return (
    <div className="App">
      <UserRegistration changeInfo={handleChange} submitInfo={handleSubmit} valid={valid}/>
    </div>
  );
}

export default App;
