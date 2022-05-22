import * as Yup from "yup";

export const AddressValidationSchema = Yup.object({
  address: Yup.string().required("Pole wymagane"),
  houseNumber: Yup.string().required("Pole wymagane"),
  apartment: Yup.string(),
  zipCode: Yup.string()
    .required("Pole wymagane")
    .matches(/[0-9]{2}-[0-9]{3}/, "Kod pocztowy powinien być w postaci 00-000"),
  city: Yup.string().required("Pole wymagane"),
  extra: Yup.string(),
});
