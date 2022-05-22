import { isDate, isEqual } from "date-fns";
import "./TimeSelect.scss";

export const TimeSelect = ({ label, value, setTimeHandler, timeValue }) => {
  const compareDates = (date1, date2) => {
    if (!isDate(date1) || !isDate(date2)) return false;
    return isEqual(date1, date2);
  };

  return (
    <div
      className={`time-select-btn ${
        compareDates(timeValue, value) ? "selected" : ""
      }`}
      onClick={() => {
        setTimeHandler(value);
      }}
    >
      {label}
    </div>
  );
};
