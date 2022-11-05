import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPopUpXCoord,
  selectPopUpYCoord,
  addItemToCalendar,
  selectStartingTime,
  selectEndtime,
  selectCurrentDate,
  closePopUp,
} from "../../features/calendarSlice";
import "./AddCalendarItem.css";
import { v4 as uuidv4 } from "uuid";

function AddCalendarItem() {
  const dispatch = useDispatch();
  const xCoord = useSelector(selectPopUpXCoord);
  const yCoord = useSelector(selectPopUpYCoord);
  const startingTime = useSelector(selectStartingTime);
  const endTime = useSelector(selectEndtime);
  const currentDate = useSelector(selectCurrentDate);

  const [input, setInput] = useState("");

  const addItem = () => {
    const calendarItem = {
      title: input.charAt(0).toUpperCase() + input.slice(1),
      startingTime: startingTime,
      endTime: endTime,
      date: currentDate,
      key: uuidv4(),
    };

    setInput("");
    dispatch(addItemToCalendar(calendarItem));
  };

  const closePopUpButton = () => {
    dispatch(closePopUp(false));
  };

  return (
    <div className="calendar-item-form" style={{ left: xCoord, top: yCoord }}>
      <p>Calendar Item</p>
      <button onClick={closePopUpButton}>X</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem} className="product__button">
        Add to Calendar
      </button>
    </div>
  );
}

export default AddCalendarItem;
