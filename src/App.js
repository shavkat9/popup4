import Popup from "./Components/Popup";
import { useState, useEffect } from "react";


function App() {
  const [ buttonPopup, setButtonPopup] = useState(false)
  const [ timePopup, setTimePopup] = useState(false)

 

  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true);
   }, 3000);
  }, [])
  return (
    <div className="App">
      <main>
        <h1>React popup</h1>
        <br /><br />
        <button className="open-popup" onClick={() => setButtonPopup(true)}>Open Popup</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>My Popup</h3>
          <p>This is my real popup</p>
        </Popup>
        <Popup trigger={timePopup} setTrigger={setTimePopup}>
          <h3>My Timed Popup</h3>
          <p>This is my time trigger popup</p>
        </Popup>
      </main>
    </div>
  );
}

export default App;
