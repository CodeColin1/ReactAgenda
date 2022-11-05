import React from "react";
import "./Month.css";
import Week from "../Weeks/Week";
import { DateTime } from "luxon";
import { useSelector } from "react-redux";
import { selectMonthVariable } from "../../features/calendarSlice";

function Month({ monthNameLong, monthIndex, parent }) {
  var monthVariable = useSelector(selectMonthVariable);
  const monthName = DateTime.now().set({ month: monthVariable }).monthLong;
  const week = DateTime.now()
    .set({ month: monthVariable })
    .startOf("month").weekNumber;

  const weekYear = DateTime.now()
    .startOf("year")
    .plus({ months: monthIndex })
    .startOf("month").weekNumber;

  return (
    <div className="month">
      {parent !== "year" && <p className="month__title">{monthName}</p>}
      {parent === "year" && <p className="month__title">{monthNameLong}</p>}
      {parent !== "year" && (
        <div className="month__legenda">
          <p className="month__legenda__title">Maandag</p>
          <p className="month__legenda__title">Dinsdag</p>
          <p className="month__legenda__title">Woensdag</p>
          <p className="month__legenda__title">Donderdag</p>
          <p className="month__legenda__title">Vrijdag</p>
          <p className="month__legenda__title">Zaterdag</p>
          <p className="month__legenda__title">Zondag</p>
        </div>
      )}
      {parent === "year" && (
        <div className="month__legenda">
          <p className="month__legenda__title">M</p>
          <p className="month__legenda__title">D</p>
          <p className="month__legenda__title">W</p>
          <p className="month__legenda__title">D</p>
          <p className="month__legenda__title">V</p>
          <p className="month__legenda__title">Z</p>
          <p className="month__legenda__title">Z</p>
        </div>
      )}
      {}
      {parent !== "year" && (
        <div className="month__days__container">
          <Week parent="month" weekNumbers={week} currentMonth={monthName} />
          <Week
            parent="month"
            weekNumbers={week + 1}
            currentMonth={monthName}
          />
          <Week
            parent="month"
            weekNumbers={week + 2}
            currentMonth={monthName}
          />
          <Week
            parent="month"
            weekNumbers={week + 3}
            currentMonth={monthName}
          />
          <Week
            parent="month"
            weekNumbers={week + 4}
            currentMonth={monthName}
          />
          <Week
            parent="month"
            weekNumbers={week + 5}
            currentMonth={monthName}
          />
        </div>
      )}
      {parent === "year" && (
        <div className="month__days__container">
          <Week
            parent="month"
            weekNumbers={weekYear}
            currentMonth={monthNameLong}
          />

          <Week
            parent="month"
            weekNumbers={weekYear + 1}
            currentMonth={monthNameLong}
          />
          <Week
            parent="month"
            weekNumbers={weekYear + 2}
            currentMonth={monthNameLong}
          />
          <Week
            parent="month"
            weekNumbers={weekYear + 3}
            currentMonth={monthNameLong}
          />
          <Week
            parent="month"
            weekNumbers={weekYear + 4}
            currentMonth={monthNameLong}
          />
          <Week
            parent="month"
            weekNumbers={weekYear + 5}
            currentMonth={monthNameLong}
          />
        </div>
      )}
    </div>
  );
}

export default Month;
