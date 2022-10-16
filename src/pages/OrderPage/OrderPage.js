import { LogoHeader } from "../../components/LogoHeader/LogoHeader";
import { OrderProcess } from "../../components/OrderProcess/OrderProcess";
import "./OrderPage.scss";

export const OrderPage = () => {
  return (
    <section className="orderpage-container">
      <LogoHeader title="Nowe zamówienie" />
      <section className="content-container">
        <OrderProcess />
      </section>
    </section>
  );
};
