import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { OrderPage } from "./pages/OrderPage/OrderPage";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2457c6",
      },
      secondary: {
        main: "#00ebc7",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/order" element={<OrderPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
