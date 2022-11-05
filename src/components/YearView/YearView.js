import React from "react";
import Month from "../Month/Month";
import { DateTime } from "luxon";
import "./YearView.css";

function YearView() {
  const monthCount = 12;
  const dt = DateTime.now();
  return (
    <div className="yearview">
      {[...Array(monthCount)].map((elementInArray, index) => (
        <Month
          monthNameLong={dt.startOf("year").plus({ months: index }).monthLong}
          monthIndex={index}
          parent="year"
        />
      ))}
    </div>
  );
}

export default YearView;
