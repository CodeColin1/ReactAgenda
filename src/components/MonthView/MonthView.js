import React from "react";
import Month from "../Month/Month";
import { DateTime } from "luxon";
import "./MonthView.css";

function MonthView() {
  const dt = DateTime.now();
  return (
    <div className="monthview">
      <Month monthName={dt.startOf("year").monthLong} />
    </div>
  );
}

export default MonthView;
