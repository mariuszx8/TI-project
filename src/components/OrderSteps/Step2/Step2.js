import "./Step2.scss";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { pl } from "date-fns/locale";
import { eachMinuteOfInterval, endOfDay, format, startOfDay } from "date-fns";

export const Step2 = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();

  const now = new Date();
  const maxDate = new Date(
    now.getFullYear(),
    now.getMonth() + 2,
    now.getDate()
  );

  const selectTime = [
    ...eachMinuteOfInterval(
      { start: startOfDay(new Date()), end: endOfDay(new Date()) },
      { step: 60 }
    )
      .slice(7, 21)
      .map((dateEl) => {
        return {
          value: dateEl,
          label: format(dateEl, "HH:mm"),
        };
      }),
    { value: startOfDay(new Date()), label: "Dowolna godzina" },
  ];

  const handleSetTime = (value) => {
    setTime(value);
    console.log(value);
  };

  return (
    <section className="step2-container">
      <div className="step2-description">
        <p>Wybierz dogodny termin i odpowiadającą godzinę.</p>
      </div>
      <div className="step2-content">
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={date}
            closeOnSelect={false}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            minDate={new Date()}
            maxDate={maxDate}
            showToolbar={false}
            renderInput={(params) => <TextField {...params} />}
            views={["day"]}
            shouldDisableDate={(date) => date.getDay() === 0}
          />
        </LocalizationProvider>
        <div className="time-select">
          {selectTime.map((select, index) => (
            <div
              className="time-select-btn"
              key={index}
              onClick={() => {
                handleSetTime(select.value);
              }}
            >
              {select.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
