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

export const OrderProcess = () => {
  const steps = [
    "Twoje mieszkanie",
    "Termin",
    "Adres",
    "Usługi",
    "Dane kontaktowe",
    "Płatność",
  ];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <div className="process-container">
      <Paper
        sx={{ height: "100%", backgroundColor: "#fffffe", borderRadius: "8px" }}
        elevation={0}
      >
        {isDesktop ? (
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
                  Content
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      pt: 2,
                    }}
                  >
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button variant="contained" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </Stack>
              )}
            </div>
          </div>
        ) : (
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
                <Button size="small" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
              }
            />
          </Stack>
        )}
      </Paper>
    </div>
  );
};
