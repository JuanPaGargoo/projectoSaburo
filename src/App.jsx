import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarSaburo from "./components/layout/NavbarSaburo";
import Footer from "./components/layout/Footer";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext"; // Import CartProvider

function App() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setIsModalOpen(query.length > 0); // Open modal if there's input
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
    setSearchQuery(""); // Clear the search query
  };

  // Handle Escape key to clear the search query
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSearchQuery(""); // Clear the search query
        setIsModalOpen(false); // Close the modal
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scrolling and compensate for scrollbar width when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.classList.add("overflow-hidden");
      document.body.style.paddingRight = `${scrollbarWidth}px`; // Add padding to compensate for scrollbar
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = ""; // Reset padding
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = ""; // Reset padding
    };
  }, [isModalOpen]);

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
