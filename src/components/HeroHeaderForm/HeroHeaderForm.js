import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../Buttons/ActionButton/ActionButton";
import { SelectNumber } from "../Inputs/SelectNumber/SelectNumber";
import "./HeroHeaderForm.scss";

export const HeroHeaderForm = () => {
  const [roomsCount, setRoomsCount] = useState(1);
  const navigate = useNavigate();

  const redirectToOrderForm = () => {
    navigate("/order", { state: { rooms: roomsCount } });
  };

  return (
    <div className="form-container">
      <div>
        <SelectNumber
          label="Liczba pokoi:"
          value={roomsCount}
          setValue={setRoomsCount}
        />
      </div>
      <div>
        <ActionButton text="Zarezerwuj" action={redirectToOrderForm} />
      </div>
    </div>
  );
};
