import { ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box m={2}>
        <Button variant="contained">Primary</Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
