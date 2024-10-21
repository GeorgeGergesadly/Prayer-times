import { useState } from "react";

import "./App.css";
import Button from "@mui/material/Button";
import MainContent from "./components/MainContent";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <Container maxWidth="xl">
            <MainContent />
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
