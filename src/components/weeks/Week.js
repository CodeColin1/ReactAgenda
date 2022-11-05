import React from "react";
import Day from "../Days/Day";
import "./Week.css";
import { DateTime } from "luxon";
import { useSelector } from "react-redux";
import { selectWeekVariable } from "../../features/calendarSlice";
import { v4 as uuidv4 } from "uuid";

function Week({ parent, weekNumbers, currentMonth }) {
  var weekVariable = useSelector(selectWeekVariable);
  var dt = DateTime.now().set({ weekNumber: weekVariable });

  if (parent === "month") {
    dt = DateTime.now().set({ weekNumber: weekNumbers });
  }

  if (parent !== "month") {
    parent = "week";
  }

  var timeIndicatorTop =
    (DateTime.now().hour * 60 + DateTime.now().minute) * 1.33 + 28;

  return (
    <div className="week">
      <div
        className="current__time__indicator"
        style={{ "--indicator-top": `${timeIndicatorTop}px` }}
      ></div>
      <Day
        key={uuidv4()}
        title="Maandag"
        date={dt.startOf("week").day}
        dateMonth={dt.startOf("week").monthLong}
        parent={parent}
        currentMonth={currentMonth}
      />
      <Day
        key={uuidv4()}
        title="Dinsdag"
        date={dt.startOf("week").plus({ days: 1 }).day}
        dateMonth={dt.startOf("week").plus({ days: 1 }).monthLong}
        parent={parent}
        currentMonth={currentMonth}
      />
      <Day
        key={uuidv4()}
        title="Woensdag"
        date={dt.startOf("week").plus({ days: 2 }).day}
        dateMonth={dt.startOf("week").plus({ days: 2 }).monthLong}
        parent={parent}
        currentMonth={currentMonth}
      />
      <Day
        key={uuidv4()}
        title="Donderdag"
        date={dt.startOf("week").plus({ days: 3 }).day}
        dateMonth={dt.startOf("week").plus({ days: 3 }).monthLong}
        parent={parent}
        currentMonth={currentMonth}
      />
      <Day
        key={uuidv4()}
        title="Vrijdag"
        date={dt.startOf("week").plus({ days: 4 }).day}
        dateMonth={dt.startOf("week").plus({ days: 4 }).monthLong}
        parent={parent}
        currentMonth={currentMonth}
      />
      <Day
        key={uuidv4()}
        title="Zaterdag"
        date={dt.startOf("week").plus({ days: 5 }).day}
        dateMonth={dt.startOf("week").plus({ days: 5 }).monthLong}
        parent={parent}
        currentMonth={currentMonth}
      />
      <Day
        key={uuidv4()}
        title="Zondag"
        date={dt.startOf("week").plus({ days: 6 }).day}
        dateMonth={dt.startOf("week").plus({ days: 6 }).monthLong}
        parent={parent}
        currentMonth={currentMonth}
      />
    </div>
  );
}

export default Week;
