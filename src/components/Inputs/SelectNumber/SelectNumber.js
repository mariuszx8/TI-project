import "./SelectNumber.scss";

export const SelectNumber = ({
  label,
  value,
  decrementValue,
  incrementValue,
}) => {
  return (
    <div className="select-number-container">
      <div className="control" onClick={decrementValue}>
        -
      </div>
      <div className="value-container">
        {label} {value}
      </div>
      <div className="control" onClick={incrementValue}>
        +
      </div>
    </div>
  );
};
