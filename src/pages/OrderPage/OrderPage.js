import { LogoBar } from "../../components/LogoBar/LogoBar";
import { OrderProcess } from "../../components/OrderProcess/OrderProcess";
import "./OrderPage.scss";

export const OrderPage = () => {
  return (
    <section className="orderpage-container">
      <LogoBar />
      <section className="content-container">
        <OrderProcess />
      </section>
    </section>
  );
};
