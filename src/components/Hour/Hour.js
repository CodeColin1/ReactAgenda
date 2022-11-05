// import AddCalendarItem from "../AddCalendarItem/AddCalendarItem";
import { openPopUp, selectcalendarItems } from "../../features/calendarSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Hour.css";
import CalendarItem from "../CalendarItem/CalendarItem";

function Hour({ time, date, dateMonth }) {
  const dispatch = useDispatch();
  const calendarItems = useSelector(selectcalendarItems);

  const createCalendarItem = (e) => {
    const data = {
      popup: true,
      xCoord: e.clientX,
      yCoord: e.clientY,
      startingTime: time,

      endTime:
        parseInt(time) + 1 < 10
          ? `0${parseInt(time) + 1}:00`
          : parseInt(time) + 1 + ":00",
      currentDate: date + dateMonth,
    };

    dispatch(openPopUp(data));
  };

  return (
    <div onClick={createCalendarItem} className="day__hour">
      {calendarItems.map((item) => {
        if (item.date === date + dateMonth && item.startingTime === time) {
          return (
            <CalendarItem
              id={item.key}
              title={item.title}
              startTime={item.startingTime}
              endTime={item.endTime}
              parent="day"
            />
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

export default Hour;
