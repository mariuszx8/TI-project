import { ContactForm } from "../../Forms/ContactForm/ContactForm";
import "./Step5.scss";

export const Step5 = ({ setSubmitted }) => {
  return (
    <section className="step5-container">
      <div className="step5-description">
        <p>Podaj swoje dane kontaktowe.</p>
      </div>
      <div className="step5-content">
        <ContactForm setSubmitted={setSubmitted} />
      </div>
    </section>
  );
};
