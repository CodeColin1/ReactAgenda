import { React, useEffect } from "react";
import Day from "../Days/Day";

function DayView() {
  const hourCount = 24;
  
  useEffect(() => {
    const scroller = document.querySelector(".calendar");
    scroller.scrollTop = 668;
  }, []);

  return (
    <div className="calendar day-view">
      <div className="calendar__legenda">
        {[...Array(hourCount + 1)].map((elementInArray, index) => (
          <div className="calendar__legenda__item">
            <p> {("0" + index).slice(-2) + ":00"}</p>
          </div>
        ))}
      </div>
      <Day parent="day" />
    </div>
  );
}

export default DayView;
