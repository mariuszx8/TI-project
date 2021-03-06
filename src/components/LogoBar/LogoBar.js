import { Link } from "react-router-dom";
import { Logo } from "../../assets/svg/Logo";
import "./LogoBar.scss";

export const LogoBar = ({ title, className }) => {
  return (
    <header className={`${className ? className : ""}`}>
      <Link to="/">
        <Logo />
      </Link>
      {title ? <h2>{title}</h2> : ""}
    </header>
  );
};
