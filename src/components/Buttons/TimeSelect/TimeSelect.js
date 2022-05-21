export const TimeSelect = ({ label, handleClick }) => {
  return (
    <div className="time-select-btn" onClick={handleClick}>
      {label}
    </div>
  );
};
