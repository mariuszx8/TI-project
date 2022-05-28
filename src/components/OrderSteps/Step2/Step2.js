import "./Step2.scss";
import { useEffect, useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { pl } from "date-fns/locale";
import {
  eachMinuteOfInterval,
  endOfDay,
  format,
  isEqual,
  startOfDay,
  startOfTomorrow,
} from "date-fns";
import { TimeSelect } from "../../Buttons/TimeSelect/TimeSelect";
import { useDispatch } from "react-redux";
import { saveData } from "../../../store/orderSlice";

export const Step2 = () => {
  const dispatch = useDispatch();

  const now = useMemo(() => new Date(), []);

  const maxDate = new Date(
    now.getFullYear(),
    now.getMonth() + 2,
    now.getDate()
  );

  const firstDate = useMemo(
    () => (now.getDate() === 0 ? startOfTomorrow(now) : startOfDay(now)),
    [now]
  );

  const [date, setDate] = useState(now);
  const [time, setTime] = useState(firstDate);

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
    { value: firstDate, label: "Dowolna godzina" },
  ];

  const handleSetTime = (value) => {
    setTime(value);
  };

  useEffect(() => {
    const getTimeValue = () => {
      return isEqual(time, firstDate)
        ? "Dowolna godzina"
        : format(time, "HH:mm");
    };

    const step2 = {
      date: format(date, "dd.MM.yyyy"),
      time: getTimeValue(),
    };
    dispatch(saveData(step2));
  }, [date, time, dispatch, firstDate]);

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
            <TimeSelect
              key={index}
              label={select.label}
              value={select.value}
              setTimeHandler={handleSetTime}
              timeValue={time}
            >
              {select.label}
            </TimeSelect>
          ))}
        </div>
      </div>
    </section>
  );
};
