import { React } from "react";
import "./Header.css";
import {
  weekNumberCounter,
  selectWeekVariable,
  selectMonthVariable,
  monthNumberCounter,
  dayNumberCounter,
  selectDayVariable,
} from "../../features/calendarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  var localWeekVariable = useSelector(selectWeekVariable);
  var localMonthVariable = useSelector(selectMonthVariable);
  var localDayVariable = useSelector(selectDayVariable);

  const addToCounter = (increment) => {
    if (window.location.pathname === "/") {
      localWeekVariable += increment;
      dispatch(weekNumberCounter(localWeekVariable));
    } else if (window.location.pathname === "/month") {
      localMonthVariable += increment;
      dispatch(monthNumberCounter(localMonthVariable));
    } else if (window.location.pathname === "/day") {
      localDayVariable += increment;
      dispatch(dayNumberCounter(localDayVariable));
    }
  }

  return (
    <div className="header">
      <div className="header__blok">
        <h1>Agenda</h1>
      </div>
      <div className="header__blok">
        <div className="header__button__container">
          <button
            className="header__button header__button--left"
            onClick={() => {
              history.push("/day");
            }}
          >
            Dag
          </button>
          <button
            className="header__button"
            onClick={() => {
              history.push("/");
            }}
          >
            Week
          </button>
          <button
            className="header__button"
            onClick={() => {
              history.push("/month");
            }}
          >
            Maand
          </button>
          <button
            className="header__button header__button--right"
            onClick={() => history.push("/year")}
          >
            Jaar
          </button>
        </div>
        <div className="header__button__navigation">
          <div className="header__button" onClick={() => addToCounter(-1)}>
            Vorige
          </div>

          <div className="header__button" onClick={() => addToCounter(1)}>
            Volgende
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
