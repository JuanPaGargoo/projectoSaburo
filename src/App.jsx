import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarSaburo from "./components/layout/NavbarSaburo";
import Footer from "./components/layout/Footer";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import FloatingButton from "./components/shared/FloatingButton";
import IAChatModal from "./components/shared/IAChatModal"; // Importar el nuevo modal

function App() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal de búsqueda
  const [isIAChatOpen, setIsIAChatOpen] = useState(false); // Estado para el modal de IA Chat
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setIsModalOpen(query.length > 0);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSearchQuery("");
  };

  const handleIAChatToggle = () => {
    setIsIAChatOpen(!isIAChatOpen); // Alternar el estado del modal de IA Chat
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSearchQuery("");
        setIsModalOpen(false);
        setIsIAChatOpen(false); // Cerrar el modal de IA Chat con Escape
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isModalOpen || isIAChatOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.classList.add("overflow-hidden");
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
    };
  }, [isModalOpen, isIAChatOpen]);

  const handleButtonClick = () => {
    alert("¡Botón IA presionado!");
  };

  return (
    <AuthProvider>
      <CartProvider>
        <NavbarSaburo />
        <AppRouter />
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          !location.pathname.startsWith("/edit-profile") && <Footer />}
        <FloatingButton onClick={handleIAChatToggle} />
        <IAChatModal isOpen={isIAChatOpen} onClose={handleIAChatToggle} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
