
import { useState } from 'react';
import './App.css';

function App() {
  const [active,setActive] = useState(false);
  let backgroundClassname = "background";
  let pictureClassname = "picture";
  if(active){
    pictureClassname += " picture--active";
  }
  else{
    backgroundClassname += " background--active"
  }
  return (
    <div className="App">
      <div onClick={(e)=>{e.stopPropagation();setActive(false)}} id="hello" className={backgroundClassname}>
      <img  onClick={()=>setActive(true)}
        className={pictureClassname}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
    </div>
  );
}

export default App;
