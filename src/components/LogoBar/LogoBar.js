import { Link } from "react-router-dom";
import { Logo } from "../../assets/svg/Logo";
import "./LogoBar.scss";

export const LogoBar = () => {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <h2>Nowe zamówienie</h2>
    </header>
  );
};
