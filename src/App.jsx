import { useLocation } from "react-router-dom";
import NavbarSaburo from "./components/layout/NavbarSaburo";
import Footer from "./components/layout/Footer";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <NavbarSaburo />
      <AppRouter />
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        !location.pathname.startsWith("/edit-profile") && <Footer />}
    </AuthProvider>
  );
}

export default App;
