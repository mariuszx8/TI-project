import "./GrayButton.scss";

export const GrayButton = ({ text, onClick }) => {
  return (
    <button className="gray-button" onClick={onClick}>
      {text}
    </button>
  );
};
