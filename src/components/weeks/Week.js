import React from "react";
import Day from "../Days/Day";
import "./Week.css";
import { DateTime } from "luxon";
import { useSelector } from "react-redux";
import { selectWeekVariable } from "../../features/calendarSlice";
import { v4 as uuidv4 } from "uuid";
import { TimeIndicator } from "../TimeIndicator/TimeIndicator";

function Week({ parent, weekNumbers, currentMonth }) {
  var weekVariable = useSelector(selectWeekVariable);
  var dt = DateTime.now().set({ weekNumber: weekVariable });

  const daysOfWeek = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

  if (parent === "month") {
    dt = DateTime.now().set({ weekNumber: weekNumbers });
  }

  return (
    <div className="week">
      <TimeIndicator paren={parent}/>
      {
        daysOfWeek.map((element, index) => 
          <Day
            key={uuidv4()}
            title={element}
            date={dt.startOf("week").plus({ days: index }).day}
            dateMonth={dt.startOf("week").plus({ days: 1 }).monthLong}
            parent={parent}
            currentMonth={currentMonth}
          />
        )
      }
    </div>
  );
}

export default Week;
