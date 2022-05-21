import "./Step2.scss";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { pl } from "date-fns/locale";

export const Step2 = () => {
  const [date, setDate] = useState(new Date());

  const now = new Date();
  const maxDate = new Date(
    now.getFullYear(),
    now.getMonth() + 2,
    now.getDate()
  );

  return (
    <section className="step-container">
      <div className="step-description">
        <p>Wybierz dogodny termin i odpowiadającą godzinę.</p>
      </div>
      <div className="step-content">
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
      </div>
    </section>
  );
};
