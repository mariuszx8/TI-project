import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { selectOrderData } from "../../store/orderSlice";
import { Step1 } from "../OrderSteps/Step1/Step1";
import { Step2 } from "../OrderSteps/Step2/Step2";
import { Step3 } from "../OrderSteps/Step3/Step3";
import { Step4 } from "../OrderSteps/Step4/Step4";
import { Step5 } from "../OrderSteps/Step5/Step5";
import { Step6 } from "../OrderSteps/Step6/Step6";

export const OrderProcess = () => {
  const { state } = useLocation();
  const { rooms } = state;

  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const [submittedStep3, setSubmittedStep3] = useState(false);
  const [submittedStep5, setSubmittedStep5] = useState(false);

  const formData = useSelector(selectOrderData);

  const steps = [
    "Twoje mieszkanie",
    "Termin",
    "Adres",
    "Usługi",
    "Dane kontaktowe",
    "Płatność",
  ];

  const orderProcessSteps = [
    <Step1 initialRooms={rooms} />,
    <Step2 />,
    <Step3 setSubmitted={setSubmittedStep3} />,
    <Step4 />,
    <Step5 setSubmitted={setSubmittedStep5} />,
    <Step6 />,
  ];

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log(formData);
    }
    setActiveStep(activeStep + 1);
  };

  const handleNextStep3 = () => {
    if (submittedStep3) {
      handleNext();
      setSubmittedStep3(false);
    }
  };

  const handleNextStep5 = () => {
    if (submittedStep5) {
      handleNext();
      setSubmittedStep5(false);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      navigate("/");
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  useEffect(() => {
    handleNextStep3();
  }, [submittedStep3]);

  useEffect(() => {
    handleNextStep5();
  }, [submittedStep5]);

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
                      {activeStep === 0 ? "Wróć do strony głównej" : "Cofnij"}
                    </Button>
                    {activeStep === 2 ? (
                      <Button
                        variant="contained"
                        onClick={handleNextStep3}
                        form="address-form"
                        type="submit"
                      >
                        Dalej
                      </Button>
                    ) : activeStep === 4 ? (
                      <Button
                        variant="contained"
                        onClick={handleNextStep5}
                        form="contact-form"
                        type="submit"
                      >
                        Dalej
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        type="button"
                      >
                        {activeStep === steps.length - 1
                          ? "Złóż zamówienie"
                          : "Dalej"}
                      </Button>
                    )}
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
              <div className="mobile-step-content">
                {orderProcessSteps[activeStep]}
              </div>
            </div>

            <MobileStepper
              variant="text"
              steps={steps.length}
              position="static"
              activeStep={activeStep}
              backButton={
                <Button color="inherit" size="medium" onClick={handleBack}>
                  {activeStep === 0 ? "Anuluj" : "Cofnij"}
                </Button>
              }
              nextButton={
                activeStep === 2 ? (
                  <Button
                    size="medium"
                    onClick={handleNextStep3}
                    form="address-form"
                    type="submit"
                  >
                    Dalej
                  </Button>
                ) : activeStep === 4 ? (
                  <Button
                    size="medium"
                    onClick={handleNextStep5}
                    form="contact-form"
                    type="submit"
                  >
                    Dalej
                  </Button>
                ) : (
                  <Button size="medium" onClick={handleNext} type="button">
                    {activeStep === steps.length - 1
                      ? "Złóż zamówienie"
                      : "Dalej"}
                  </Button>
                )
              }
            />
          </Stack>
        )}
      </Paper>
    </section>
  );
};
