import { useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../../assets/svg/Logo";
import { auth, logout } from "../../firebase-config";
import { GrayButton } from "../Buttons/GrayButton/GrayButton";
import "./LogoHeader.scss";

export const LogoHeader = ({ title, showButton }) => {
  const [user, loading] = useAuthState(auth);

  const isLogged = useMemo(() => Boolean(!loading && user), [loading, user]);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAdminPanel = pathname === "/admin";

  return (
    <header>
      <div className="logo-container">
        <div>
          <Link to="/">
            <Logo />
          </Link>
          {title && <h2>{title}</h2>}
        </div>

        {showButton && (
          <div className="login-btn-container">
            {!isLogged && (
              <Link to="/login">
                <GrayButton text="Zaloguj się" />
              </Link>
            )}
            {isLogged && isAdminPanel && (
              <GrayButton
                text="Wyloguj się"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              />
            )}
            {isLogged && !isAdminPanel && (
              <Link to="/admin">
                <GrayButton text="Panel admina" />
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
