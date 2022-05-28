import { Paper } from "@mui/material";
import { LoginForm } from "../Forms/LoginForm/LoginForm";
import "./LoginContainer.scss";

export const LoginContainer = () => {
  return (
    <section className="login-container">
      <Paper
        sx={{ height: "100%", backgroundColor: "#fffffe", borderRadius: "8px" }}
        elevation={0}
      >
        <div className="paper-content">
          <div className="title">Logowanie</div>
          <LoginForm />
        </div>
      </Paper>
    </section>
  );
};
