import * as Yup from "yup";

export const ContactValidationSchema = Yup.object({
  name: Yup.string().required("Pole wymagane"),
  phone: Yup.string()
    .required("Pole wymagane")
    .min(9, "Numer telefonu jest za krótki")
    .matches(/^[0-9]+$/, "Numer telefonu może zawierać tylko cyfry"),
  email: Yup.string()
    .email("Niepooprawny adres email")
    .required("Pole wymagane"),
  extra: Yup.string(),
});
