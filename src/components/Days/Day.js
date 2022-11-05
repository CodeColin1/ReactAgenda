import React from "react";
import Hour from "../Hour/Hour";
import "./Day.css";
import {
  selectcalendarItems,
  selectDayVariable,
} from "../../features/calendarSlice";
import { useSelector } from "react-redux";
import CalendarItem from "../CalendarItem/CalendarItem";
import { DateTime } from "luxon";
import { TimeIndicator } from "../TimeIndicator/TimeIndicator";

function Day({ title, date, parent, currentMonth, dateMonth }) {
  const hourCount = 24;
  const calendarItems = useSelector(selectcalendarItems);
  var dayVariable = useSelector(selectDayVariable);

  if (parent === "day") {
    date = DateTime.now().set({ day: dayVariable }).day;
  }

  return (
    <div
      className={
        "day " +
        (currentMonth !== dateMonth && parent === "month"
          ? "day__disabled"
          : "day__enabled")
      }
    >
      <TimeIndicator parent={parent}/>

      <p className="day__title">
        {parent === "week" && <span>{title} </span>}

        <span>{date}</span>

        {parent === "day" && <span> {DateTime.now().monthLong}</span>}

        <span className="day__month"> {dateMonth}</span>
      </p>

      {parent === "month" &&
        calendarItems
          .filter(item => item.date === date + dateMonth)
          .map((item) => 
            <CalendarItem
              id={item.key}
              title={item.title}
              startTime={item.startingTime}
              endTime={item.endTime}
              parent="month"
            />
          )
      }

      {parent !== "month" &&
        [...Array(hourCount)].map((elementInArray, index) => (
          <Hour
            date={date}
            dateMonth={dateMonth}
            key={index}
            time={index < 10 ? `0${index}:00` : index + ":00"}
            parent="week"
          />
        ))}
    </div>
  );
}

export default Day;
