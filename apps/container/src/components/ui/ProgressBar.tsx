import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTheme, alpha } from "@/theme";

const ProgressBar = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: alpha(palette.common.white, 0.5),
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default ProgressBar;
