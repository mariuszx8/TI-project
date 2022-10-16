import "./AdminPage.scss";
import Paper from "@mui/material/Paper";
import { OrderTable } from "../../components/OrderTable/OrderTable";
import { LogoHeader } from "../../components/LogoHeader/LogoHeader";

export const AdminPage = () => {
  return (
    <section className="adminpage-container">
      <LogoHeader title="Zamówienia" showButton />
      <section className="content-container">
        <Paper
          sx={{
            padding: "2rem",
            backgroundColor: "#fffffe",
            borderRadius: "8px",
          }}
          elevation={0}
        >
          <OrderTable />
        </Paper>
      </section>
    </section>
  );
};
