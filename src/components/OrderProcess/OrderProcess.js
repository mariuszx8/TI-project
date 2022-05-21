import Paper from "@mui/material/Paper";
import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import MobileStepper from "@mui/material/MobileStepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import "./OrderProcess.scss";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from "react-router-dom";
import { Step1 } from "../OrderSteps/Step1";

export const OrderProcess = () => {
  const { state } = useLocation();
  const { rooms } = state;

  const steps = [
    "Twoje mieszkanie",
    "Termin",
    "Adres",
    "Usługi",
    "Dane kontaktowe",
    "Płatność",
  ];

  const orderProcessSteps = [<Step1 rooms={rooms} />, "test"];

  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      navigate("/");
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <section className="process-container">
      <Paper
        sx={{ height: "100%", backgroundColor: "#fffffe", borderRadius: "8px" }}
        elevation={0}
      >
        {isDesktop ? (
          // Desktop
          <div className="paper-content">
            <div className="stepper-container">
              <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel sx={{ color: "#00214d", fontWeight: 500 }}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className="steps-container">
              {activeStep === steps.length ? (
                "Order finished"
              ) : (
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  spacing={2}
                  sx={{ height: "100%" }}
                >
                  {orderProcessSteps[activeStep]}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      pt: 2,
                    }}
                  >
                    <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                      {activeStep === 0 ? "Anuluj" : "Cofnij"}
                    </Button>
                    <Button variant="contained" onClick={handleNext}>
                      {activeStep === steps.length - 1
                        ? "Złóż zamówienie"
                        : "Dalej"}
                    </Button>
                  </Box>
                </Stack>
              )}
            </div>
          </div>
        ) : (
          // Mobile
          <Stack
            direction="column"
            justifyContent="space-between"
            spacing={2}
            sx={{ height: "100%" }}
          >
            <div className="mobile-step">
              <div className="mobile-step-header">{steps[activeStep]}</div>
              <div className="mobile-step-content">Content</div>
            </div>

            <MobileStepper
              variant="text"
              steps={steps.length}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button size="medium" onClick={handleNext}>
                  {activeStep === steps.length - 1
                    ? "Złóż zamówienie"
                    : "Dalej"}
                </Button>
              }
              backButton={
                <Button color="inherit" size="medium" onClick={handleBack}>
                  {activeStep === 0 ? "Anuluj" : "Cofnij"}
                </Button>
              }
            />
          </Stack>
        )}
      </Paper>
    </section>
  );
};
