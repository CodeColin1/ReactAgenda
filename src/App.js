import "./App.css";
import AddCalendarItem from "./components/AddCalendarItem/AddCalendarItem";
import Header from "./components/header/Header";
import { useSelector } from "react-redux";
import { selectPopUpState } from "./features/calendarSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import YearView from "./components/YearView/YearView";
import MonthView from "./components/MonthView/MonthView";
import WeekView from "./components/WeekView/WeekView";
import DayView from "./components/DayView/DayView";

function App() {
  const popup = useSelector(selectPopUpState);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/day">
            <DayView />
          </Route>
          <Route exact path="/">
            <WeekView />
          </Route>
          <Route path="/month">
            <MonthView />
          </Route>
          <Route path="/year">
            <YearView />
          </Route>
        </Switch>
        {popup === true && <AddCalendarItem />}
      </Router>
    </div>
  );
}

export default App;
