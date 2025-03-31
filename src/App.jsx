import { useLocation } from "react-router-dom";
import NavbarSaburo from "./components/NavbarSaburo";
import Footer from "./components/footer";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./components/AuthContext"; // Importa el AuthProvider

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <NavbarSaburo />
      <AppRouter />
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Footer />}
    </AuthProvider>
  );
}

export default App;
