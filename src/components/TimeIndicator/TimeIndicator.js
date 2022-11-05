import React from "react";
import { DateTime } from "luxon";

export function TimeIndicator(parent) {
  if (parent === "month")
    return null;

  var timeIndicatorTop = (DateTime.now().hour * 60 + DateTime.now().minute) * 1.33 + 28;

  return <div
    className="current__time__indicator"
    style={{ "--indicator-top": `${timeIndicatorTop}px` }}
  ></div>;
}
