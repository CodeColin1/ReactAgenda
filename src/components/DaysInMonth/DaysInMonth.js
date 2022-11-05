import React from "react";
import "./DaysInMonth.css";
import { DateTime } from "luxon";

function Day({ dayName, date }) {
  const dt = DateTime.now();

  return (
    <div className="day__in__month">
      <p className="day__title">
        {date}
        {/* {dayName} */}
      </p>
    </div>
  );
}

export default Day;
