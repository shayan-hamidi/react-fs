import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  type AccordionDetailsProps,
  type AccordionProps,
  AccordionSummary,
  type AccordionSummaryProps,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

type FsAccordionProps = Omit<AccordionProps, 'title'> & {
  titleKey: string;
  summaryProps?: AccordionSummaryProps;
  detailsProps?: AccordionDetailsProps;
};

const FsAccordion = ({
  titleKey,
  children,
  detailsProps,
  summaryProps,
  ...rest
}: FsAccordionProps) => {
  const { t } = useTranslation();

  return (
    <Accordion {...rest}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} {...summaryProps}>
        {t(titleKey)}
      </AccordionSummary>
      <AccordionDetails {...detailsProps}>{children}</AccordionDetails>
    </Accordion>
  );
};

export default FsAccordion;
