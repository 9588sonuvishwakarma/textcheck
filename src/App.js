

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

import Textfrom from './components/Textfrom';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import { type } from '@testing-library/user-event/dist/type';






function App() {
  const [mode, setMode]=useState('light'); // whether dark mode is enables or not 

  //alert name se one state bnauga and alert one object hai
  const [alert , setAlert] = useState(null);

  //set alert se method banauga
  // show alert is function to display message
  // here type is message types
  const showAlert = ( message, type) =>{
    setAlert({ 
      msg: message,
      type: type
    })
   
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');    // function
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light'); // function
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  
  return (
  
    <>
 
{/* <Navbar title="Relax" about="about textutile" mode={mode}/> */}
<Navbar title="Relax"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-5">
  

<Textfrom showAlert={showAlert} heading="Enter the text analyze below"  mode={mode}/>
{/* <About/> */}
</div>


   
</>
  );
}

export default App;
