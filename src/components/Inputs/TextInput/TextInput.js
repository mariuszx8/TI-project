import "./TextInput.scss";

export const TextInput = ({
  name,
  value,
  label,
  handleChange,
  touched,
  errors,
  type,
}) => {
  return (
    <div className="input-text">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-input"
        id={name}
        name={name}
        type={type ? type : "text"}
        value={value}
        onChange={handleChange}
      />
      {touched && errors ? <div className="input-error">{errors}</div> : null}
    </div>
  );
};
