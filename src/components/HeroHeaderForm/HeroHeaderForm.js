import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../Buttons/ActionButton/ActionButton";
import { SelectNumber } from "../Inputs/SelectNumber/SelectNumber";
import "./HeroHeaderForm.scss";

export const HeroHeaderForm = () => {
  const [roomsCount, setRoomsCount] = useState(1);
  const navigate = useNavigate();

  const incrementRooms = () => {
    if (roomsCount < 20) setRoomsCount(roomsCount + 1);
  };

  const decrementRooms = () => {
    if (roomsCount > 1) setRoomsCount(roomsCount - 1);
  };

  const redirectToOrderForm = () => {
    navigate("/order", { state: { rooms: roomsCount } });
  };

  return (
    <div className="form-container">
      <div>
        <SelectNumber
          label="Liczba pokoi:"
          value={roomsCount}
          incrementValue={incrementRooms}
          decrementValue={decrementRooms}
        />
      </div>
      <div>
        <ActionButton text="Zarezerwuj" action={redirectToOrderForm} />
      </div>
    </div>
  );
};
