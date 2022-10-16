import { LoginContainer } from "../../components/LoginContainer/LoginContainer";
import { LogoHeader } from "../../components/LogoHeader/LogoHeader";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <section className="login-section">
      <LogoHeader />
      <section className="content-container">
        <LoginContainer />
      </section>
    </section>
  );
};
