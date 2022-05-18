import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const DatePickerInput = ({ label, value, setValue }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        mask="__.__.____"
        inputFormat="dd.MM.yyyy"
        disablePast
        defaultValue={new Date()}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            variant="outlined"
            placeholder="Wybierz swój termin"
            sx={{
              border: "none",
              backgroundColor: "#fffffe",
              fontWeight: 700,
            }}
            fullWidth
            InputProps={{
              disableUnderline: false,
            }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};
