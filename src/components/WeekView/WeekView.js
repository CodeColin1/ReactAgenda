import { React, useEffect } from "react";
import Week from "../Weeks/Week";
import { v4 as uuidv4 } from "uuid";

function WeekView() {
  const hourCount = 24;

  useEffect(() => {
    const scroller = document.querySelector(".calendar");
    scroller.scrollTop = 668;
  }, []);
  
  return (
    <div className="calendar">
      <div className="calendar__legenda">
        {[...Array(hourCount + 1)].map((elementInArray, index) => (
          <div className="calendar__legenda__item">
            <p>{index < 10 ? `0${index}:00` : index + ":00"}</p>
          </div>
        ))}
      </div>
      <Week key={uuidv4()} parent="week"/>
    </div>
  );
}

export default WeekView;
