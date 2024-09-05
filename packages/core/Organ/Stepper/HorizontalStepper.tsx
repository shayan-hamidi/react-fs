import {
  Box,
  Step,
  StepButton,
  Stepper,
  type StepperProps,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { FsButton, FsTypography } from '../../Atom';

type FsHorizontalStepperProps = StepperProps & { steps: string[] };

const FsHorizontalStepper = ({ steps }: FsHorizontalStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = useMemo(() => steps.length, [steps]);
  const isLastStep = useMemo(
    () => activeStep === totalSteps - 1,
    [activeStep, totalSteps]
  );
  const completedSteps = useMemo(
    () => Object.keys(completed).length,
    [steps, completed]
  );
  const allStepsCompleted = useMemo(
    () => completedSteps === totalSteps,
    [completedSteps, totalSteps]
  );

  const handleNext = () => {
    const newActiveStep =
      isLastStep && !allStepsCompleted
        ? steps.findIndex((_step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box width={'100%'}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Box>
        {allStepsCompleted ? (
          <>
            <FsTypography i18nKey="تمام مراحل تکمیل شد" mt={2} mb={1} />
            <Box display={'flex'} pt={2}>
              <Box flex={'1 1 auto'} />
              <FsButton i18nKey="تنظیم مجدد" onClick={handleReset} />
            </Box>
          </>
        ) : (
          <>
            <FsTypography
              i18nKey={`مرحله ${activeStep + 1}`}
              mt={2}
              mb={1}
              py={1}
            />
            <Box display={'flex'} pt={2}>
              <FsButton
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                i18nKey="قبلی"
              />
              <Box flex={'1 1 auto'} />
              <FsButton i18nKey="بعدی" onClick={handleNext} sx={{ mr: 1 }} />
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <FsTypography
                    i18nKey={`مرحله ${activeStep + 1} تکمیل شد`}
                    variant="caption"
                    display={'inline-block'}
                  />
                ) : (
                  <FsButton
                    i18nKey={
                      completedSteps === totalSteps - 1
                        ? 'اتمام'
                        : 'کامل کردن مرحله'
                    }
                    onClick={handleComplete}
                  />
                ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default FsHorizontalStepper;
