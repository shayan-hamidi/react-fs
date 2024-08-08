import { useRouteError, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, IconButton, Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';
import { useTranslation } from 'react-i18next';

export default function ErrorPage() {
  const { t } = useTranslation();
  const error = useRouteError();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Container
      sx={{
        textAlign: 'center',
        mt: 8,
        bgcolor: '#D9D9D9',
        minWidth: '100vw',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <IconButton color="error" sx={{ fontSize: 60 }}>
          <ErrorIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('oops')}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {t('unexpected_error')}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          <i>
            {t('error_message', {
              message:
                (error as Error)?.message ||
                (error as { statusText?: string })?.statusText,
            })}
          </i>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          onClick={handleHomeClick}
          sx={{ mt: 2 }}
        >
          {t('home')}
        </Button>
      </Box>
    </Container>
  );
}
