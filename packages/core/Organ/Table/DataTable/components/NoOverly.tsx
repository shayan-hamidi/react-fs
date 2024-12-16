import { Box } from "@mui/material";

export const NoRowsOverlay = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      داده ای وجود ندارد
    </Box>
  );
};
