import logo from './logo.svg';
import sound from "./assets/sound.wav"
import './App.css';


function App(){



  function play(){
      new Audio(sound).play()
  }
 
  
  return (
    
      <div className="App">
          <button className='button'
          onClick={play}
          >
              SRM NOTICE 
          </button>
      </div>

  )
}



export default App;
