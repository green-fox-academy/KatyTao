import React,{useState} from 'react';
import './App.css';
import RegistrationFrom from './components/form';
import InfoDisplay from './components/info-display';
import { personalInfo } from "./data";

const initial = personalInfo;
function App() {
  const [currentInfo, setCurrentInfo] = useState(initial);
  console.log(currentInfo);
  function changeInfo(value){
    setCurrentInfo(value);
  }

  return (
    <>
    <div className="App">
      <section>
      <h1>Event Registration</h1>
        <RegistrationFrom submitInfo={changeInfo}/>
      </section>
      <section>
        <InfoDisplay info={currentInfo}/>
      </section>
    </div>
    </>
  );
}

export default App;
