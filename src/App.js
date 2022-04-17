import React, { useState, useEffect } from "react";
import axios from "axios";
import MiniCard from "./components/common/MiniCard";
function App() {
  const [state, setState] = useState();

  useEffect(() => {
    const res = async () => {
      const data = await axios.get(
        "https://api.aladhan.com/v1/timingsByAddress/17-04-2022?address=Hama,SY&method=8"
      );
      setState(data);
      console.log("data", data);
      console.log("state", state);
    };
    res();
  }, []);
  if (!state) return <h1>loading</h1>;
  return (
    <div className="App">
      <h1>{state.data.data.meta.timezone}</h1>
      <div className="roznama">
        <div className="date-container">
          <div className="date">
            <div className="my-text-container ">
              <div className="my-text">ميلادي</div>
              <div className="my-text">
                {state.data.data.date.gregorian.date}
              </div>
            </div>
            <div className="line"></div>
            <div className="my-text-container ">
              <div className="my-text">هجري</div>
              <div className="my-text">{state.data.data.date.hijri.date}</div>
            </div>
          </div>

          <div className="center">
            <h1>{state.data.data.date.hijri.weekday.ar}</h1>
          </div>

          <div className="date">
            <div className="my-text-container ">
              <div className="my-text">
                {state.data.data.date.gregorian.month.en}
              </div>
              <div className="my-text">
                {state.data.data.date.gregorian.month.number}
              </div>
            </div>
            <div className="line"></div>
            <div className="my-text-container ">
              <div className="my-text">
                {state.data.data.date.hijri.month.ar}
              </div>
              <div className="my-text">
                {state.data.data.date.hijri.month.number}
              </div>
            </div>
          </div>
        </div>
        <div className="timing">
          <MiniCard name={"الظهر"} time={state.data.data.timings.Dhuhr} />
          <MiniCard name={"الشمس"} time={state.data.data.timings.Sunrise} />
          <MiniCard name={"الفجر"} time={state.data.data.timings.Fajr} />
          <MiniCard name={"العشاء"} time={state.data.data.timings.Isha} />
          <MiniCard name={"المغرب"} time={state.data.data.timings.Maghrib} />
          <MiniCard name={"العصر"} time={state.data.data.timings.Asr} />
        </div>
      </div>
    </div>
  );
}

export default App;
