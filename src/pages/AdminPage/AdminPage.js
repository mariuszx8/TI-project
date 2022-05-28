import { LogoBar } from "../../components/LogoBar/LogoBar";
import "./AdminPage.scss";
import Paper from "@mui/material/Paper";
import { OrderTable } from "../../components/OrderTable/OrderTable";

export const AdminPage = () => {
  return (
    <section className="adminpage-container">
      <LogoBar title="Zamówienia" />
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
