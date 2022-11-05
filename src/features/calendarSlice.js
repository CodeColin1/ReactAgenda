import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

const initialState = {
  calendarItems: [],
  popup: false,
  xCoord: 0,
  yCoord: 0,
  startingTime: "",
  endTime: "",
  currentDate: "",
  weekVariable: DateTime.now().weekNumber,
  monthVariable: DateTime.now().month,
  dayVariable: DateTime.now().day,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addItemToCalendar: (state, action) => {
      state.calendarItems = [...state.calendarItems, action.payload];
    },
    openPopUp: (state, action) => {
      state.popup = action.payload.popup;
      state.xCoord = action.payload.xCoord;
      state.yCoord = action.payload.yCoord;
      state.startingTime = action.payload.startingTime;
      state.endTime = action.payload.endTime;
      state.currentDate = action.payload.currentDate;
    },
    closePopUp: (state, action) => {
      state.popup = action.payload;
    },
    weekNumberCounter: (state, action) => {
      state.weekVariable = action.payload;
    },
    monthNumberCounter: (state, action) => {
      state.monthVariable = action.payload;
    },
    dayNumberCounter: (state, action) => {
      state.dayVariable = action.payload;
    },
    changeCurrentMonth: (state, action) => {
      state.currentMonth = action.payload;
    },
  },
});

export const {
  addItemToCalendar,
  openPopUp,
  weekNumberCounter,
  closePopUp,
  monthNumberCounter,
  dayNumberCounter,
} = calendarSlice.actions;

export const selectPopUpState = (state) => state.calendar.popup;
export const selectPopUpXCoord = (state) => state.calendar.xCoord;
export const selectPopUpYCoord = (state) => state.calendar.yCoord;
export const selectStartingTime = (state) => state.calendar.startingTime;
export const selectEndtime = (state) => state.calendar.endTime;
export const selectCurrentDate = (state) => state.calendar.currentDate;
export const selectcalendarItems = (state) => state.calendar.calendarItems;
export const selectWeekVariable = (state) => state.calendar.weekVariable;
export const selectMonthVariable = (state) => state.calendar.monthVariable;
export const selectDayVariable = (state) => state.calendar.dayVariable;

export default calendarSlice.reducer;
