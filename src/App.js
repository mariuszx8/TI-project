import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00ebc7",
      },
      secondary: {
        main: "#00ebc7",
      },
    },
    typography: {
      fontFamily: `"Jost", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
    },
    stepper: {
      iconColor: "#00ebc7",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/order" element={<OrderPage />} />
          <Route
            exact
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
