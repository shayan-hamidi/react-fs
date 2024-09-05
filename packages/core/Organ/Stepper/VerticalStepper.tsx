import {
    Box,
    Paper,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    type StepperProps,
} from '@mui/material';
import { useState } from 'react';
import { FsButton, FsTypography } from '../../Atom';

type FsVerticalLinearStepperProps = StepperProps & {
  steps: { label: string; description: string }[];
};
const FsVerticalLinearStepper = ({ steps }: FsVerticalLinearStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <FsTypography i18nKey={step.description} />
              <Box mb={2}>
                <FsButton
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  i18nKey={index === steps.length - 1 ? 'اتمام' : 'ادامه'}
                />
                <FsButton
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                  i18nKey={'قبلی'}
                />
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <FsTypography i18nKey="مراحل تکمیل شدند" />
          <FsButton
            i18nKey="تنظیم مجدد"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          />
        </Paper>
      )}
    </Box>
  );
};

export default FsVerticalLinearStepper;
