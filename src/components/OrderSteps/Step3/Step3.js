import { AddressForm } from "../../Forms/AddressForm/AddressForm";
import "./Step3.scss";

export const Step3 = () => {
  return (
    <section className="step3-container">
      <div className="step3-description">
        <p>Podaj swój adres.</p>
      </div>
      <div className="step3-content">
        <AddressForm />
      </div>
    </section>
  );
};
