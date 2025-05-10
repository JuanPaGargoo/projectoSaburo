import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Alert } from "@heroui/react";
import MediaSpot from '../shared/MediaSpot';
import ProductDisplaySection from '../shared/ProductDisplaySection';
import GridRopa from '../shared/GridRopa';
import CommentsSection from '../shared/CommentsSection';
import useRandomProducts from '../../hooks/useRandomProducts';

function Main() {
  const location = useLocation();

  const [alert, setAlert] = useState({
    visible: false,
    message: "",
    type: "",
    variant: "faded",
  });

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    if (query.get("success") === "true") {
      setAlert({
        visible: true,
        message: "Pago realizado exitosamente 🎉",
        type: "success",
        variant: "faded",
      });
    } else if (query.get("error") === "true") {
      setAlert({
        visible: true,
        message: "Error al procesar el pago",
        type: "error",
        variant: "faded",
      });
    }

    if (query.get("success") || query.get("error")) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [location.search]);

  useEffect(() => {
    if (alert.visible) {
      const timer = setTimeout(() => {
        setAlert((prev) => ({ ...prev, visible: false }));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alert.visible]);

  return (
    <>
      {alert.visible && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50">
          <Alert
            color={alert.type === "success" ? "success" : "danger"}
            description={alert.message}
            isVisible={alert.visible}
            title={alert.type === "success" ? "¡Éxito!" : "Error"}
            variant={alert.variant}
          />
        </div>
      )}

      <MediaSpot/>
      <ProductDisplaySection title="New Arrivals" products={useRandomProducts()} showButton={true} />
      <ProductDisplaySection title="Top Sellings" products={useRandomProducts()} showButton={true} />
      <GridRopa/>
      <CommentsSection/>
    </>
  );
}

export default Main;
