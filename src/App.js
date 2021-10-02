import './App.css';
import './NavBar.js'
import NavBar from './NavBar.js';
import ValidTriangle from './ValidTriangle';
import Hypotenuse from './FindHypotenuse';
import FindArea from './FindArea';
import ThirdAngle from './ThirdAngle';
import Quiz from './Quiz';
import {useState} from 'react';
function App() {
  const [chosenOption,setChoseOption] = useState('');
  const userMenu = {
    'Is Triangle?':<ValidTriangle/>,
    'Calculate Hypotenuse':<Hypotenuse/>,
    'Guess Third Angle':<ThirdAngle/>,
    'Area':<FindArea/>,
    'Quiz':<Quiz/>
  }
  let menuArray = Object.keys(userMenu);
  function clickHandler(choice){
    setChoseOption(choice);
  }
  return (
    <div className="App">
      <NavBar/>
      {
        menuArray.map((choice)=>{
          return(
            <button key={choice} onClick={()=>clickHandler(userMenu[choice])}>{choice}</button>
          )
        })
      }
      <main>{chosenOption}</main>
    </div>
  );
}

export default App;
