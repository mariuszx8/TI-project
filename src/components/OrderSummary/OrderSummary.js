import "./OrderSummary.scss";

export const OrderSummary = ({ orderData }) => {
  const rooms = orderData.roomsCount > 1 ? "pokoje" : "pokój";
  const bathrooms = orderData.bathroomsCount > 1 ? "łazienki" : "łazienka";
  const address1 = `${orderData.address} ${orderData.houseNumber}${
    orderData.apartment != "" ? `/${orderData.apartment}` : ""
  }`;
  const address2 = `${orderData.zipCode} ${orderData.city}`;

  return (
    <div className="summary-container">
      <div className="summary-row">
        <div className="summary-label">Lokal:</div>
        <div className="summary-value">
          {`${orderData.type}, ${orderData.roomsCount} ${rooms}, ${orderData.bathroomsCount} ${bathrooms}, ${orderData.kitchen}`}
        </div>
      </div>

      <div className="summary-row">
        <div className="summary-label">Termin sprzątania:</div>
        <div className="summary-value">{orderData.date}</div>
      </div>
      <div className="summary-row">
        <div className="summary-label">Godzina:</div>
        <div className="summary-value">{orderData.time}</div>
      </div>

      <div className="summary-row">
        <div className="summary-label">Adres:</div>
        <div className="summary-value">
          <div>{address1}</div>
          <div>{address2}</div>
        </div>
      </div>

      <div className="summary-row">
        <div className="summary-label">Kontakt:</div>
        <div className="summary-value">
          <div>{orderData.name}</div>
          <div>{orderData.phone}</div>
          <div>{orderData.email}</div>
        </div>
      </div>
      {(orderData.extra || orderData.contactExtra) && (
        <div className="summary-row">
          <div className="summary-label">Dodatkowe informacje:</div>
          <div className="summary-value">
            <div>{orderData.extra}</div>
            <div>{orderData.contactExtra}</div>
          </div>
        </div>
      )}
    </div>
  );
};
