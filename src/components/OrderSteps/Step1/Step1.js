import { useEffect, useState } from "react";
import { SelectNumber } from "../../Inputs/SelectNumber/SelectNumber";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CottageIcon from "@mui/icons-material/Cottage";
import CountertopsIcon from "@mui/icons-material/Countertops";
import KitchenIcon from "@mui/icons-material/Kitchen";
import "./Step1.scss";
import { useDispatch } from "react-redux";
import { saveData } from "../../../store/step1Slice";

export const Step1 = ({ initialRooms }) => {
  const dispatch = useDispatch();

  const [type, setType] = useState("mieszkanie");
  const [roomsCount, setRoomsCount] = useState(initialRooms);
  const [bathroomsCount, setBathroomsCount] = useState(1);
  const [kitchen, setKitchen] = useState("kuchnia");

  const handleSetType = (event, value) => {
    if (value !== null) setType(value);
  };

  const incrementRooms = () => {
    if (roomsCount < 20) setRoomsCount(roomsCount + 1);
  };

  const decrementRooms = () => {
    if (roomsCount > 1) setRoomsCount(roomsCount - 1);
  };

  const incrementBathrooms = () => {
    if (bathroomsCount < 10) setBathroomsCount(bathroomsCount + 1);
  };

  const decrementBathrooms = () => {
    if (bathroomsCount > 1) setBathroomsCount(bathroomsCount - 1);
  };

  const handleSetKitchen = (event, value) => {
    if (value !== null) setKitchen(value);
  };

  useEffect(() => {
    const step1 = {
      type: type,
      roomsCount: roomsCount,
      bathroomsCount: bathroomsCount,
      kitchen: kitchen,
    };
    dispatch(saveData(step1));
  }, [type, roomsCount, bathroomsCount, kitchen, dispatch]);

  return (
    <section className="step1-container">
      <div className="step1-description">
        <p>Podaj szczegóły dotyczące twojego domu lub mieszkania.</p>
        <p>Pozwoli nam to lepiej przygotować się do realizacji usługi.</p>
      </div>
      <div className="step1-content">
        <div className="type-select">
          <div>
            <ToggleButtonGroup
              color="secondary"
              value={type}
              exclusive
              size="large"
              fullWidth={true}
              onChange={handleSetType}
              sx={{ height: "100%" }}
            >
              <ToggleButton value="mieszkanie">
                <div className="type-select-btn">
                  <ApartmentIcon
                    sx={{ fontSize: "28px", marginRight: "10px" }}
                  />
                  <div>Mieszkanie</div>
                </div>
              </ToggleButton>
              <ToggleButton value="dom">
                <div className="type-select-btn">
                  <CottageIcon sx={{ fontSize: "28px", marginRight: "8px" }} />
                  <div>Dom</div>
                </div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div className="rooms-selects">
          <div>
            <SelectNumber
              label="Liczba pokoi:"
              value={roomsCount}
              incrementValue={incrementRooms}
              decrementValue={decrementRooms}
            />
          </div>
          <div>
            <SelectNumber
              label="Liczba łazienek:"
              value={bathroomsCount}
              incrementValue={incrementBathrooms}
              decrementValue={decrementBathrooms}
            />
          </div>
        </div>
        <div className="kitchen-select">
          <div>
            <ToggleButtonGroup
              value={kitchen}
              exclusive
              size="large"
              fullWidth={true}
              onChange={handleSetKitchen}
              sx={{ height: "100%" }}
            >
              <ToggleButton value="aneks kuchenny">
                <div className="type-select-btn">
                  <CountertopsIcon
                    sx={{ fontSize: "28px", marginRight: "8px" }}
                  />
                  <div>Aneks kuchenny</div>
                </div>
              </ToggleButton>
              <ToggleButton value="kuchnia">
                <div className="type-select-btn">
                  <KitchenIcon sx={{ fontSize: "28px", marginRight: "8px" }} />
                  <div>Kuchnia</div>
                </div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
    </section>
  );
};
