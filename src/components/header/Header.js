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

  const addToCounter = () => {
    if (window.location.pathname === "/") {
      localWeekVariable += 1;
      dispatch(weekNumberCounter(localWeekVariable));
    } else if (window.location.pathname === "/month") {
      localMonthVariable += 1;
      dispatch(monthNumberCounter(localMonthVariable));
    } else if (window.location.pathname === "/day") {
      localDayVariable += 1;
      dispatch(dayNumberCounter(localDayVariable));
    }
  };

  const substractFromCounter = () => {
    if (window.location.pathname === "/") {
      localWeekVariable -= 1;
      dispatch(weekNumberCounter(localWeekVariable));
    } else if (window.location.pathname === "/month") {
      localMonthVariable -= 1;
      dispatch(monthNumberCounter(localMonthVariable));
    } else if (window.location.pathname === "/day") {
      localDayVariable -= 1;
      dispatch(dayNumberCounter(localDayVariable));
    }
  };

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
          <div className="header__button" onClick={substractFromCounter}>
            Vorige
          </div>

          <div className="header__button" onClick={addToCounter}>
            Volgende
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
