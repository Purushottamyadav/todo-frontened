import { useState } from 'react';
import './App.css';

import Register from './components/register';
import Login from './components/login';
function App() {
  const [currentForm,setCurrentForm]=useState("login")
  const toggleForm=(forName)=>{
    setCurrentForm(forName);
  }
  return (
    <div className="App">
      {currentForm==="login"?<Login onFormswitch={toggleForm}/>:<Register onFormswitch={toggleForm}/>}
      
      
    </div>
  );
}

export default App;
