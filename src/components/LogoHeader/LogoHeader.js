import { Link } from "react-router-dom";
import { Logo } from "../../assets/svg/Logo";
import { GrayButton } from "../Buttons/GrayButton";
import "./LogoHeader.scss";

export const LogoHeader = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
        <div className="login-btn-container">
          <Link to="/login">
            <GrayButton text="Zaloguj się" />
          </Link>
        </div>
      </div>
    </header>
  );
};
