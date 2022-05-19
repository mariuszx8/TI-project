import "./SelectNumber.scss";

export const SelectNumber = ({ label, value, setValue }) => {
  const decreaseValue = () => {
    if (value > 1) setValue(value - 1);
  };

  const increaseValue = () => {
    if (value < 20) setValue(value + 1);
  };

  return (
    <div className="select-number-container">
      <div className="control" onClick={decreaseValue}>
        -
      </div>
      <div className="value-container">
        {label} {value}
      </div>
      <div className="control" onClick={increaseValue}>
        +
      </div>
    </div>
  );
};
