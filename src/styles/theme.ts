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
  },
  typography: {
    fontWeightMedium: 400,
    h1: { fontSize: 55, fontWeight: 700 },
    h2: { fontSize: 48 },
    h3: { fontSize: 42 },
    h4: { fontSize: 36 },
    h5: { fontSize: 20 },
    h6: { fontSize: 18 },
    subtitle1: { fontSize: 18 },
  },
});

export default theme;
