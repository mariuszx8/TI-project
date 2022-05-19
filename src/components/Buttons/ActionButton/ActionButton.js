import "./ActionButton.scss";

export const ActionButton = ({ text, action }) => {
  return (
    <button className="action-button" onClick={action}>
      {text}
    </button>
  );
};
