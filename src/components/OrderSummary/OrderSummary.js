import "./OrderSummary.scss";

export const OrderSummary = ({ orderData }) => {
  const rooms = orderData.roomsCount > 1 ? "pokoje" : "pokój";
  const bathrooms = orderData.bathroomsCount > 1 ? "łazienki" : "łazienka";
  const address1 = `${orderData.address} ${orderData.houseNumber}${
    orderData.apartment !== "" ? `/${orderData.apartment}` : ""
  }`;
  const address2 = `${orderData.zipCode} ${orderData.city}`;

  const summaryRows = [
    {
      label: "Lokal",
      value: `${orderData.type}, ${orderData.roomsCount} ${rooms}, ${orderData.bathroomsCount} ${bathrooms}, ${orderData.kitchen}`,
    },
    {
      label: "Termin sprzątania",
      value: orderData.date,
    },
    {
      label: "Godzina",
      value: orderData.time,
    },
    {
      label: "Adres",
      value: [address1, address2],
    },
    {
      label: "Kontakt",
      value: [orderData.name, orderData.phone, orderData.email],
    },
  ];

  return (
    <div className="summary-container">
      {summaryRows.map((row, key) => (
        <div className="summary-row" key={key}>
          <div className="summary-label">{row.label}:</div>
          {Array.isArray(row.value) ? (
            <div className="summary-value">
              {row.value.map((val, id) => (
                <div key={id}>{val}</div>
              ))}
            </div>
          ) : (
            <div className="summary-value">{row.value}</div>
          )}
        </div>
      ))}

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
