import "./FinishedStep.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const FinishedStep = () => {
  const navigate = useNavigate();
  return (
    <div className="finished-container">
      <div className="finished-content">
        <CheckCircleIcon color="primary" sx={{ fontSize: 110 }} />
        <div className="title">Zamówienie zostało złożone</div>
        <div className="subtitle">
          Dziękujemy za skorzystanie z naszych usług
        </div>
        <div className="btn-container">
          <Button variant="text" onClick={() => navigate("/")}>
            Strona główna
          </Button>
        </div>
      </div>
    </div>
  );
};
