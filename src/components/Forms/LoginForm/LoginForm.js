import { Button } from "@mui/material";
import { useFormik } from "formik";
import { TextInput } from "../../Inputs/TextInput/TextInput";
import "./LoginForm.scss";
import { LoginValidationSchema } from "./LoginValidationSchema";

export const LoginForm = () => {
  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
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
