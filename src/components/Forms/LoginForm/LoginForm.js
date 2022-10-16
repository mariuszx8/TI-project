import { Button } from "@mui/material";
import { useFormik } from "formik";
import { TextInput } from "../../Inputs/TextInput/TextInput";
import "./LoginForm.scss";
import { LoginValidationSchema } from "./LoginValidationSchema";
import { auth, logInWithEmailAndPassword } from "../../../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) navigate("/admin");
  }, [user, loading, navigate]);

  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      logInWithEmailAndPassword(values.email, values.password);
    },
  });

  return (
    <form id="login-form" onSubmit={formikLogin.handleSubmit}>
      <div className="form-row">
        <TextInput
          name="email"
          value={formikLogin.values.email}
          label="E-mail:"
          handleChange={formikLogin.handleChange}
          touched={formikLogin.touched.email}
          errors={formikLogin.errors.email}
          type="email"
        />
      </div>

      <div className="form-row">
        <TextInput
          name="password"
          value={formikLogin.values.password}
          label="Hasło:"
          handleChange={formikLogin.handleChange}
          touched={formikLogin.touched.password}
          errors={formikLogin.errors.password}
          type="password"
        />
      </div>

      <Button variant="contained" form="login-form" type="submit">
        Zaloguj się
      </Button>
    </form>
  );
};
