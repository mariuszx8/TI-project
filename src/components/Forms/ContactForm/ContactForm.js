import { useFormik } from "formik";
import { TextArea } from "../../Inputs/TextArea/TextArea";
import { TextInput } from "../../Inputs/TextInput/TextInput";
import "./ContactForm.scss";
import { ContactValidationSchema } from "./ContactValidationSchema";
import { useDispatch } from "react-redux";
import { saveData } from "../../../store/orderSlice";

export const ContactForm = ({ setSubmitted }) => {
  const dispatch = useDispatch();

  const formikContact = useFormik({
    initialValues: {
      name: "", // imię
      phone: "", // telefon
      email: "", // email
      contactExtra: "", // dodatkowe informacje
    },

    validationSchema: ContactValidationSchema,
    onSubmit: (values) => {
      dispatch(saveData(values));
      setSubmitted(true);
    },
  });

  return (
    <form id="contact-form" onSubmit={formikContact.handleSubmit}>
      <div className="form-row">
        <div className="name-field">
          <TextInput
            name="name"
            value={formikContact.values.name}
            label="Imię"
            handleChange={formikContact.handleChange}
            touched={formikContact.touched.name}
            errors={formikContact.errors.name}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="email-field">
          <TextInput
            name="email"
            value={formikContact.values.email}
            label="E-mail:"
            handleChange={formikContact.handleChange}
            touched={formikContact.touched.email}
            errors={formikContact.errors.email}
          />
        </div>

        <div className="phone-field">
          <TextInput
            name="phone"
            value={formikContact.values.phone}
            label="Numer telefonu"
            handleChange={formikContact.handleChange}
            touched={formikContact.touched.phone}
            errors={formikContact.errors.phone}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="extra-field">
          <TextArea
            name="contactExtra"
            value={formikContact.values.contactExtra}
            label="Dodatkowe informacje do zamówienia"
            handleChange={formikContact.handleChange}
            touched={formikContact.touched.contactExtra}
            errors={formikContact.errors.contactExtra}
          />
        </div>
      </div>
    </form>
  );
};
