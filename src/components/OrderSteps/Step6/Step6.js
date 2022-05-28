import { OrderSummary } from "../../OrderSummary/OrderSummary";
import "./Step6.scss";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaidIcon from "@mui/icons-material/Paid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveData, selectOrderData } from "../../../store/orderSlice";

export const Step6 = () => {
  const [payment, setPayment] = useState("karta");

  const handleSetPayment = (event, value) => {
    if (value !== null) setPayment(value);
  };

  const formData = useSelector(selectOrderData);
  const dispatch = useDispatch();

  useEffect(() => {
    const paymentMethod = {
      payment: payment,
    };
    dispatch(saveData(paymentMethod));
  }, [payment, dispatch]);

  return (
    <section className="step6-container">
      <div className="step6-description">
        Sprawdź czy wszystkie szczegóły się zgadzają i wybierz metodę płatności.
      </div>
      <div className="step6-content">
        <OrderSummary orderData={formData} />

        <div className="payment-select">
          <div>
            <ToggleButtonGroup
              color="secondary"
              value={payment}
              exclusive
              size="large"
              fullWidth={true}
              onChange={handleSetPayment}
              sx={{ height: "100%" }}
            >
              <ToggleButton value="karta">
                <div className="type-select-btn">
                  <CreditCardIcon
                    sx={{ fontSize: "28px", marginRight: "10px" }}
                  />
                  <div>Karta</div>
                </div>
              </ToggleButton>
              <ToggleButton value="gotówka">
                <div className="type-select-btn">
                  <PaidIcon sx={{ fontSize: "28px", marginRight: "8px" }} />
                  <div>Gotówka</div>
                </div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
    </section>
  );
};
