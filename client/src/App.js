import './App.css';

import React, { useState } from 'react';
import MainWeather from './components/MainWeather';
import CrossShape from './components/CrossShape';



function App() {

  const [firstEntry, setFirstEntry] = useState(true)
  const [animationDone, setAnimationDone] = useState(false)


  const handleScroll = (e) => {
    if (!firstEntry || e.target.scrollTop >= window.innerHeight * 1 / 3) {
      if (firstEntry) {
        setFirstEntry(false)
      }
      e.target.scroll({ left: 0, top: e.target.scrollTop + Math.ceil((window.innerHeight - e.target.scrollTop) * 0.03) })
    }
  }
  return (
    <div className="App" onScroll={e => handleScroll(e)}>
      <CrossShape loadPage={setAnimationDone} />

      <div id="welcomePage" style={!animationDone ? { backgroundColor: "white", backgroundImage: "none" } : {}}>
        <div className="centerItems">
          <div className="translucentBg" hidden={!animationDone}>
            <h1>AnyWeather</h1>
            <h3>Any city, anywhere, animated.</h3>
          </div>
        </div>
      </div>
      <div id="weatherContainer">
        <MainWeather showWeather={!firstEntry} />
      </div>
    </div>
  );
}

export default App;
