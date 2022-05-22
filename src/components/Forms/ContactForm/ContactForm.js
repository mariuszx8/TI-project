import { useFormik } from "formik";
import { TextArea } from "../../Inputs/TextArea/TextArea";
import { TextInput } from "../../Inputs/TextInput/TextInput";
import "./ContactForm.scss";
import { ContactValidationSchema } from "./ContactValidationSchema";

export const ContactForm = () => {
  const formikContact = useFormik({
    initialValues: {
      name: "", // imię
      phone: "", // telefon
      email: "", // email
      extra: "", // dodatkowe informacje
    },

    validationSchema: ContactValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form id="address-form" onSubmit={formikContact.handleSubmit}>
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

        <div className="email-field">
          <TextInput
            name="phone"
            value={formikContact.values.email}
            label="E-mail:"
            handleChange={formikContact.handleChange}
            touched={formikContact.touched.email}
            errors={formikContact.errors.email}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="extra-field">
          <TextArea
            name="extra"
            value={formikContact.values.extra}
            label="Dodatkowe informacje do zamówienia"
            handleChange={formikContact.handleChange}
            touched={formikContact.touched.extra}
            errors={formikContact.errors.extra}
          />
        </div>
      </div>
    </form>
  );
};
