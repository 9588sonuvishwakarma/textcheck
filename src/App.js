
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

import Textfrom from './components/Textfrom';






function App() {
  return (
  
    <>
 
<Navbar title="Relax" about="about textutile"/>
<div className="container my-5">

<Textfrom  heading="Enter the text analyze below"/>
<About/>
</div>


   
</>
  );
}

export default App;
