import "./Step4.scss";
import { useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import { ServiceTile } from "../../ServiceTile/ServiceTile";
import { useDispatch } from "react-redux";
import { saveData } from "../../../store/orderSlice";

export const Step4 = () => {
  const dispatch = useDispatch();

  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleServiceClick = (service) => {
    if (checkIsSelected(service)) {
      const removedArray = selected.filter((item) => item.id !== service.id);
      setSelected(removedArray);
    } else {
      setSelected((array) => [...array, service]);
    }
  };

  const checkIsSelected = (service) => {
    return selected.includes(service);
  };

  useEffect(() => {
    const servicesCollectionRef = collection(db, "services");

    const getData = async () => {
      const data = await getDocs(servicesCollectionRef);
      setServices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getData();
  }, []);

  useEffect(() => {
    const selectedServices = {
      services: [...selected],
    };
    dispatch(saveData(selectedServices));
  }, [selected, dispatch]);

  return (
    <section className="step4-container">
      <div className="step4-description">
        <p>Wybierz dodatkowe usługi związane z sprzątaniem.</p>
      </div>
      <div className="step4-content">
        <div className="services-container">
          {services.length > 0
            ? services.map((service, id) => (
                <ServiceTile
                  key={id}
                  service={service}
                  handleClick={handleServiceClick}
                  checkIsSelected={checkIsSelected}
                />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};
