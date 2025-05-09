import { useLocation } from "react-router-dom";
import NavbarSaburo from "./components/layout/NavbarSaburo";
import Footer from "./components/layout/Footer";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from './context/CartContext';

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <CartProvider>
      <NavbarSaburo />
      <AppRouter />
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        !location.pathname.startsWith("/edit-profile") && <Footer />}
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
