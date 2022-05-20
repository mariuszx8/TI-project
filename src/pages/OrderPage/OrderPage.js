import { useLocation } from "react-router-dom";
import { LogoBar } from "../../components/LogoBar/LogoBar";
import { OrderProcess } from "../../components/OrderProcess/OrderProcess";
import "./OrderPage.scss";

export const OrderPage = () => {
  const { state } = useLocation();
  const { rooms } = state;

  console.log(rooms);
  return (
    <section className="orderpage-container">
      <LogoBar />
      <section className="content-container">
        <OrderProcess />
      </section>
    </section>
  );
};
