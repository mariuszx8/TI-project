import "./AddressForm.scss";
import { useFormik } from "formik";
import { TextInput } from "../../Inputs/TextInput/TextInput";
import { AddressValidationSchema } from "./AddressValidationSchema";
import { TextArea } from "../../Inputs/TextArea/TextArea";
import { useDispatch } from "react-redux";
import { saveData } from "../../../store/orderSlice";

export const AddressForm = ({ setSubmitted }) => {
  const dispatch = useDispatch();

  const formikAddress = useFormik({
    initialValues: {
      address: "", // ulica
      houseNumber: "", // numer domu
      apartment: "", // numer mieszkania
      zipCode: "", // kod pocztowy
      city: "", // miasto
      extra: "", // dodatkowe informacje
    },
    validationSchema: AddressValidationSchema,
    onSubmit: (values) => {
      dispatch(saveData(values));
      setSubmitted(true);
    },
  });

  return (
    <form id="address-form" onSubmit={formikAddress.handleSubmit}>
      <div className="form-row">
        <div className="address-field">
          <TextInput
            name="address"
            value={formikAddress.values.address}
            label="Ulica"
            handleChange={formikAddress.handleChange}
            touched={formikAddress.touched.address}
            errors={formikAddress.errors.address}
          />
        </div>
        <div className="houseNumber-field">
          <TextInput
            name="houseNumber"
            value={formikAddress.values.houseNumber}
            label="Numer domu"
            handleChange={formikAddress.handleChange}
            touched={formikAddress.touched.houseNumber}
            errors={formikAddress.errors.houseNumber}
          />
        </div>
        <div className="apartment-field">
          <TextInput
            name="apartment"
            value={formikAddress.values.apartment}
            label="Numer mieszkania"
            handleChange={formikAddress.handleChange}
            touched={formikAddress.touched.apartment}
            errors={formikAddress.errors.apartment}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="zipCode-field">
          <TextInput
            name="zipCode"
            value={formikAddress.values.zipCode}
            label="Kod pocztowy"
            handleChange={formikAddress.handleChange}
            touched={formikAddress.touched.zipCode}
            errors={formikAddress.errors.zipCode}
          />
        </div>
        <div className="city-field">
          <TextInput
            name="city"
            value={formikAddress.values.city}
            label="Miasto"
            handleChange={formikAddress.handleChange}
            touched={formikAddress.touched.city}
            errors={formikAddress.errors.city}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="extra-field">
          <TextArea
            name="extra"
            value={formikAddress.values.extra}
            label="Dodatkowe informacje (np. kod do domofonu)"
            handleChange={formikAddress.handleChange}
            touched={formikAddress.touched.extra}
            errors={formikAddress.errors.extra}
          />
        </div>
      </div>
    </form>
  );
};
