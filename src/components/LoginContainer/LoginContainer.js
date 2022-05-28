import { Paper } from "@mui/material";
import { LoginForm } from "../Forms/LoginForm/LoginForm";

export const LoginContainer = () => {
  return (
    <section className="login-container">
      <Paper
        sx={{ height: "100%", backgroundColor: "#fffffe", borderRadius: "8px" }}
        elevation={0}
      >
        <div className="paper-content">
          <LoginForm />
        </div>
      </Paper>
    </section>
  );
};
