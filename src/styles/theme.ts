import { createTheme } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0288d1",
    },
    secondary: lightBlue,
    background: {
      default: "#EDF2F6",
    },
    // text: { primary: "#ff9800" },
  },
});

export default theme;
