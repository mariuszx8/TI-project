import { useState } from "react";
import { ActionButton } from "../Buttons/ActionButton/ActionButton";
import { SelectNumber } from "../Inputs/SelectNumber/SelectNumber";
import "./HeroHeaderForm.scss";

export const HeroHeaderForm = () => {
  const [roomsCount, setRoomsCount] = useState(1);

  return (
    <div className="form-container">
      <div>
        <SelectNumber
          label="Ilość pokoi:"
          value={roomsCount}
          setValue={setRoomsCount}
        />
      </div>
      <div>
        <ActionButton text="Zarezerwuj" />
      </div>
    </div>
  );
};
