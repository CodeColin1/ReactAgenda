import React from "react";
import "./CalendarItem.css";

function CalendarItem({ id, title, startTime, endTime, parent }) {
  return (
    <div key={id} className={`calendaritem ${parent}`}>
      {parent === "day" && (
        <p className="calendaritem__time">
          {startTime} - {endTime}
        </p>
      )}
      <p className="calendaritem__title">{title}</p>
      {parent === "month" && <p className="calendaritem__time">{startTime}</p>}
    </div>
  );
}

export default CalendarItem;
