
import './App.css';
import React, { useState } from 'react';
import Main from './componenets/Main';

function App() {

  let [age , setAge] = useState(30)
  let[name] = useState('Alen')

  const getOld = () => setAge(age + 1)

  return (
    <div className="App">
      
      <h3> This is App.js with nothing special being rendered </h3>
      <hr/>
     <Main name={name} age={age} getOld= {getOld} />

     </div>
  );
}

export default App;
