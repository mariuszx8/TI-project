import { LogoBar } from "../../components/LogoBar/LogoBar";
import { LoginContainer } from "../../components/LoginContainer/LoginContainer";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <section className="login-section">
      <LogoBar />
      <section className="content-container">
        <LoginContainer />
      </section>
    </section>
  );
};
