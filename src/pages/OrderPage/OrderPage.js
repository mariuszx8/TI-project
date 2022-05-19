import { useLocation } from "react-router-dom";

export const OrderPage = () => {
  const { state } = useLocation();
  const { rooms } = state;

  console.log(rooms);
  return <div>OrderPage</div>;
};
