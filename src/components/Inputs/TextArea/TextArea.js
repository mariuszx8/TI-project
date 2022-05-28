import "./TextArea.scss";

export const TextArea = ({
  name,
  value,
  label,
  handleChange,
  touched,
  errors,
}) => {
  return (
    <div className="input-area">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="form-area"
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={handleChange}
        rows="2"
        maxLength="250"
      />
      {touched && errors ? <div className="input-error">{errors}</div> : null}
    </div>
  );
};
