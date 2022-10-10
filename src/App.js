import { useEffect, useState } from 'react';
import './Watch.css'

function App() {
  const date = new Date()
  const [dataTime, setDataTime] = useState({
    hours:date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  })

  useEffect(() => {
        
    const timer = setInterval(() => {
        
        const date = new Date();
        setDataTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
        });
        
    }, 1000);
    

    return () => clearInterval(timer);

}, []);

  return (
    <div className="App">
      <div className="Watch">
        <div className='circles  animate__animated animate__fadeInUp'>
          <div id="hours">
            <h1>{dataTime.hours < 10 ? ` 0${dataTime.hours}` : dataTime.hours} </h1>
            <h1>hours</h1>
          <input type="range" id="vol" name="vol" min="0" max="24" value={dataTime.hours}/>
          </div>
        </div>
        <div className='circles  animate__animated animate__fadeInUp'>
          <div id="minutes">
            <h1>{dataTime.minutes < 10 ? ` 0${dataTime.minutes}` : dataTime.minutes} </h1>
            <h1>minutes</h1>
          <input type="range" id="vol" name="vol" min="0" max="60" value={dataTime.minutes}/>
          </div>
        </div>
        <div className='circles animate__animated animate__fadeInUp'>
          <div id="seconds">
            <h1>{dataTime.seconds < 10 ? ` 0${dataTime.seconds}` : dataTime.seconds} </h1>
            <h1>seconds</h1>
          <input type="range" id="vol" name="vol" min="0" max="60" value={dataTime.seconds}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*<form action="/action_page.php" method="get">
  <label for="vol">Volume (between 0 and 50):</label>
  <input type="range" id="vol" name="vol" min="0" max="50" value="5">
  <input type="submit" value="Submit">
</form> */