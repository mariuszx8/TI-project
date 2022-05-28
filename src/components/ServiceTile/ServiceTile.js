import "./ServiceTile.scss";

export const ServiceTile = ({ service, handleClick, checkIsSelected }) => {
  return (
    <div
      className={`service-tile ${checkIsSelected(service) ? "selected" : ""}`}
      onClick={() => {
        handleClick(service);
      }}
    >
      <div className="service-name">{service.name}</div>
      <div className="service-price">{service.price} zł</div>
    </div>
  );
};
