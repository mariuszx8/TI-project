import * as Yup from "yup";

export const LoginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Niepooprawny adres email")
    .required("Pole wymagane"),
  password: Yup.string()
    .required("Pole wymagane")
    .min(6, "Hasło powinno mieć przynajmniej 6 znaków"),
});
