import React from 'react';

function ProductDetails({ name, description }) {
  const defaultProductionDetails = {
    materials: "Algodón orgánico",
    careInstructions: "Lavar a máquina en frío, no usar blanqueador, secar a baja temperatura.",
    productionDate: "Febrero 2025",
    additionalInfo: "Producido de manera sostenible y ética. Sin uso de pesticidas ni químicos dañinos.",
    origin: "Hecho en Mexico",
    certifications: "Certificado GOTS (Global Organic Textile Standard)",
  };

  return (
    <div className="mt-7 product-details p-6 bg-white rounded-lg shadow-xl max-w-xl mx-auto mb-7">
      <h1 className="text-2xl font-bold mb-4 text-center text-cafeCacao">{name}</h1>
      <p className="text-cafeAvellana mb-4 text-justify">{description}</p>
      <h2 className="text-xl font-semibold mb-4 text-center text-cafeCacao">Detalles de Producción</h2>
      <div className="space-y-2">
        <p className="text-cafeAvellana"><strong>Instrucciones de Cuidado:</strong> {defaultProductionDetails.careInstructions}</p>
        <p className="text-cafeAvellana"><strong>Fecha de Producción:</strong> {defaultProductionDetails.productionDate}</p>
        <p className="text-cafeAvellana"><strong>Información Adicional:</strong> {defaultProductionDetails.additionalInfo}</p>
        <p className="text-cafeAvellana"><strong>Origen:</strong> {defaultProductionDetails.origin}</p>
        <p className="text-cafeAvellana"><strong>Certificaciones:</strong> {defaultProductionDetails.certifications}</p>
      </div>
    </div>
  );
}

export default ProductDetails;